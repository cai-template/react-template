import 'whatwg-fetch'

import { obj2param } from './util'

let timeout = (promise,time) => {
	let timeoutPromise = new Promise((resolve,reject) => {
		setTimeout(() => {
			reject('超时')
		},time)
	})

	return Promise.race([promise,timeoutPromise])
}

let checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}




export let post = (url,param,time = 4e3) => {
	return timeout(fetch(url,{
		method: 'POST',
		credentials: 'include',//不管是否跨域 都携带cookie
		headers: {
			'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: obj2param(param)
	}),time).then(checkStatus).then(res => res.json())
}


export get = (url,time = 4e3) => {
	return timeout(fetch(url,{
		method: 'GET',
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*',
		},
	}),time).then(checkStatus).then(res => res.json())
}