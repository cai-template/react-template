import { obj2param } from './util'


let getHttpObject = () => {
	let xmlHttpRequest;
	if(window.XMLHttpRequest){
		xmlHttpRequest = new XMLHttpRequest();
		xmlHttpRequest.overrideMimeType && xmlHttpRequest.overrideMimeType('text/xml')
	}else{
		xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlHttpRequest
}




export let get = uri => {
	let xmlHttpRequest = getHttpObject();
	let promise = new Promise((resolve,reject) => {
		xmlHttpRequest.open('GET',uri,true)
		xmlHttpRequest.setRequestHeader('Content-type','application/x-www-form-urlencoded')
		xmlHttpRequest.onreadystatechange = function(){
					if (this.readyState !== 4) return;
					if (this.status === 200) {
					    resolve(JSON.parse(this.response));
					   } else {
					        reject(new Error(this.statusText));
					   }
		}
		xmlHttpRequest.send()
	})

	return promise
}



export let post = (uri,param) => {
	let xmlHttpRequest = getHttpObject();

	let promise = new Promise((resolve,reject) => {
		xmlHttpRequest.open('POST',uri,true)
		xmlHttpRequest.setRequestHeader('Content-type','application/x-www-form-urlencoded')
		xmlHttpRequest.onreadystatechange = function(){
			        if (this.readyState !== 4) return;
					if (this.status === 200) {
					    resolve(JSON.parse(this.response));
					   } else {
					        reject(new Error(this.statusText));
					   }
		}
		xmlHttpRequest.send(obj2param(param))
	})
	return promise
}