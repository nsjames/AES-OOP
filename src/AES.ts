const sjcl = require('sjcl');

export class AES {
	static encrypt(data:any, key:string):string {
		if(typeof data === 'object') data = JSON.stringify(data);
		const {iv, salt, ct} = JSON.parse(sjcl.encrypt(key, data, {mode:'gcm'}));
		return JSON.stringify({ iv, salt, ct });
	}

	static decrypt(encryptedData:string, key:string):any {
		encryptedData = JSON.stringify(Object.assign(JSON.parse(encryptedData), {mode:'gcm'}));
		let clear = sjcl.decrypt(key, encryptedData);
		try { return JSON.parse(clear) } catch(e){ return clear; }
	}
}

export default AES;