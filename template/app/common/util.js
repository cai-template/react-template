/**
 * cookie封装
 */

export let Cookies = {
	set(key,value,day){
		const str = `${key}=${escape(value)}`;
		let ms,
		    date,
		    expires;
		if(!day){
			day = 7
		}
		ms = day * 3600 *24*1000;
		date = new Date();
		date.setTime(date.getTime + ms);
		document.cookie = `${str}; expires=${date.toGMTString()}; path=/`
	},
	get(key){
		let arr = document.cookie.split('; ');
		for(let i =0,len = arr.length;i<len;i++){
			let temp = arr[i].split('=');
			if(temp[0] == key){
				return unescape(temp[1])
			} 
		}
	},
	del(key){
		var date = new Date;
		date.setTime(date.getTime() - 1000);
		document.cookie = `${key}=11; expires=${date.toGMTString()}; path=/`
	}
}


export let obj2param = obj => {
	let str='';
	for(let key in obj){
		str += `&${key}=${encodeURIComponent(obj[key])}`
	}
	return str?str.slice(1):str
}


