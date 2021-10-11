/**
 * @author Chathurika Senani
 * @create date 2021-10-11 19:29:38
 * @modify date 2021-10-11 19:58:07
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

const gap = 15;
const buttonRadius = 10;
const DEFAULT_LANG = 'en';
const APP_STORAGE_PREFIX = 'msc@';
const DEFAULT_TIMEOUT = 20;
const FAP_COUNT = 2;

const actionTypes = {
	AUTH: 'AUTH',
	APP_START: 'APP_START',
	DASHBOARD: 'DASHBOARD',
	LOGOUT: 'LOGOUT',
	LOADING: 'LOADING',
	LANGUAGE_CHANGE: 'LANGUAGE_CHANGE',
	GET_URLS: 'GET_URLS',
	SWITCH_NUMBER: 'SWITCH_NUMBER',
	UNREADCOUNT: 'UNREADCOUNT',
	PAYMENT: 'PAYMENT',
	HIDE_UPDATE: 'HIDE_UPDATE',
	EXIT_WARNING: 'EXIT_WARNING'
};

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

const packageType = {
	PREPAID: 'pre',
	POSTPAID: 'post'
};

const routeMap = {
	'billinformation': 'billInformation',
	'packages': 'Packages',
	'callerManagement': 'callermanagement',
	'roaming': 'roamingIdd',
	'vas': 'Vas',
	'promotion': 'promotions',
	'myOffers': 'myOffers',
	'creditManagement': 'creditManagement'
};

export default {
	urls,
	http,
	gap,
	DEFAULT_LANG,
	APP_STORAGE_PREFIX,
	actionTypes,
	storageKey,
	packageType,
	routeMap,
	DEFAULT_TIMEOUT,
	buttonRadius,
	FAP_COUNT
};
