// vue.config.js
module.exports = {
	runtimeCompiler: true,
    productionSourceMap: false,
    filenameHashing: false,
  	configureWebpack: {
  		output: {
  	   		filename: 'app.js'
  		}
  	},
  // options...
 	devServer: {
  		proxy: {
			'^/exchange': {
				target: 'https://api.coindcx.com',
				ws: false,
				changeOrigin: true,
			},
  		},
  		clientLogLevel: 'debug', // 'silent' | 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'none' | 'warning'	
	},
	
	pages : {
	  'tools' : {
	    entry: './src/main.js',
	    template: 'public/app-tools.html',
	    filename: 'app-tools.html',
	    title: 'Tools Dashboard',
	    chunks: ['chunk-vendors', 'chunk-common', 'tools']
	  }
	}

}

