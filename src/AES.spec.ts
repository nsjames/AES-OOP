import AES from './AES';
import { expect, assert } from 'chai';
import 'mocha';


describe('AES', () => {
	const key = "qwerty";

	const clearText = 'AES Test';
	let encryptedText = '';

	const clearObject = { hi:'bye' };
	let encryptedObject = '';

	const isEncrypted = (x) => x.slice(0,2) === 'U2';

	it('should be able to encrypt a string', () => {
		encryptedText = AES.encrypt(clearText, key);
		assert(clearText !== encryptedText, "Could not encrypt string");
	});

	it('should be able to decrypt a string', () => {
		console.log('AES.decrypt(encryptedText, key)', AES.decrypt(encryptedText, key));
		assert(AES.decrypt(encryptedText, key) === clearText, "Could not decrypt string");
	});

	it('should be able to encrypt an object', () => {
		encryptedObject = AES.encrypt(clearObject, key);
		assert(clearObject !== encryptedObject, "Could not encrypt object");
	});

	it('should be able to decrypt an object', () => {
		assert(JSON.stringify(AES.decrypt(encryptedObject, key)) === JSON.stringify(clearObject));
	});

	it('should be able to decrypt an object and return an object', () => {
		assert(typeof AES.decrypt(encryptedObject, key) === 'object', "Could not decrypt object");
	});
});