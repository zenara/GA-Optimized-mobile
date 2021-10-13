/**
 * @author Chathurika Senani
 * @create date 2021-10-11 19:29:38
 * @modify date 2021-10-13 09:46:04
 */

const urls = {
	help: 'http://omobio.net',
	terms: 'https://www.google.com'
};

const http = {
	POST: 'POST',
	GET: 'GET',
	PUT: 'PUT',
	DELETE: 'DELETE',
	MULTIPART: 'MULTIPART'
};

const APP_STORAGE_PREFIX = 'msc@';
const DEFAULT_TIMEOUT = 20;

const storageKey = {
	USER: 'USER',
	LOGGED_IN: 'LOGGED_IN',
	LANGUAGE: 'LANGUAGE',
	DASHBOARD: 'DASHBOARD',
	PUSHID: 'PUSHID',
	MESSAGES: 'MESSAGES',
	FREQUENTLY_ACCESSED_PACKS: 'FREQUENTLY_ACCESSED_PACKS',
	PRIMARY_NAME: 'PRIMARY_NAME'
};

export default {
	urls,
	http,
	APP_STORAGE_PREFIX,
	storageKey,
	DEFAULT_TIMEOUT,
};
