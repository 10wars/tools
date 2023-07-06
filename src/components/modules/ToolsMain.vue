<template>
	<div>
		<b-row v-if="passowrd">
			<b-col sm="12" lg="6">
				<textarea  rows="20" v-model="plainText" @change="encrypt" placeholder="Plain Text here"></textarea>
			</b-col>
			<b-col sm="12" lg="6">
				<textarea rows="20" v-model="encText"  @change="decrypt" placeholder="Encrypted Text here" ></textarea>
			</b-col>
		</b-row>
		<b-row v-else >
			<b-col sm="12" lg="12">
				<br/>
			</b-col>
			<b-col sm="12" lg="12">
				<input type="password" v-model="passowrdTemp" placeholder="Enter Password" />
				<b-button @click="setPass">Submit</b-button>
			</b-col>
		</b-row>	
	</div>
</template>
<script>

	import Jasypt from 'jasypt';

	const jasypt = new Jasypt();

	export default ({
		components: {
		},
		data() {
			return {
				passowrdTemp : "",
				passowrd : "",
				plainText : "",
				encText : ""
			}
		},
		mounted(){
		},
		computed : {
		},
		methods : {
			setPass(){
				this.passowrd	= this.passowrdTemp;
				jasypt.setPassword(this.passowrd);
			},
			encrypt(){
				try{
					this.encText = jasypt.encrypt(this.plainText);
				} catch(e){
					this.encText  = "*****";
				}
			},
			decrypt(){
				try{
					this.plainText = jasypt.decrypt(this.encText);
				} catch(e){
					this.plainText  = "*****";
				}
			}
		}
	})

</script>

<style lang="scss" scoped>
	textarea {
		width: 100%;
	}
</style> >
