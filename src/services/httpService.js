/**
 * @author Chathurika Senani
 * @create date 2021-10-11 19:20:25
 * @modify date 2021-10-11 21:25:44
 */

// import DeviceInfo from 'react-native-device-info';
import { Platform } from 'react-native';
import { EnvStaging, constants } from '../utils';
import Http from './Http';
// import { storage } from './index';

const { BASE_URL } = EnvStaging;

const { http: { POST, GET, MULTIPART, DELETE }
// , storageKey 
} = constants;


class HttpService {
	http = new Http(BASE_URL, {});

	request = async (action, payload, reqType) => {
		const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6dHJ1ZSwiaWF0IjoxNjMzOTY3MzMwLCJqdGkiOiIwNjJiMDkzNi1mY2RmLTQ0NjAtOTk0YS1mYjZlNTc3MzVjMWEiLCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoiNjE1ZDdhYWFkNjdlMDA2YTkyMzRjOTYzIiwibmJmIjoxNjMzOTY3MzMwLCJleHAiOjE2MzM5NzA5MzAsInJvbGUiOiJhZG1pbiJ9.Qb-ae0e3vaMspTV7yJoNO83OIoz_uaw5k0ROugD87Og';
		const _t0 = (new Date()).getTime();
		console.log(_t0, `Base URL: ${BASE_URL}`);
		// const userData = await storage.getData(storageKey.USER);
		// const language = await storage.getData(storageKey.LANGUAGE);
		// const pushid = await storage.getData(storageKey.PUSHID);
		const data = {
			appType: Platform.OS,
			// appVersion: DeviceInfo.getVersion(),
			// deviceModel: DeviceInfo.getModel(),
			// deviceRef: DeviceInfo.getUniqueId(),
			// deviceVersion: DeviceInfo.getSystemVersion(),
			platformName: Platform.OS,
			// platformVersion: DeviceInfo.getSystemVersion(),
			// deviceToken: userData ? userData.deviceToken : '',
			// operator: userData ? userData.operator : '',
			// lob: userData ? userData.lob : '',
			// conn: userData ? userData.conn : '',
			// primaryConn: userData ? userData.primaryConn : '',
			// prePostType: userData ? userData.prePostType : '',
			// language: language,
			// pushId: pushid,
			...payload
		};

		let _t1 = 0;
		const type = reqType ? reqType : POST;
		let r = null;

		switch (type) {
			case POST:
				console.log(_t0, -1, `POST request (${BASE_URL}${action})`, data);

				// r = await this.http.jsonPost(action, data, timeout ? timeout : constants.DEFAULT_TIMEOUT);
				r = await this.http.jsonPost(action, data, token);

				_t1 = (new Date()).getTime();
				console.log(_t0, _t1 - _t0, `POST response (${BASE_URL}${action})`, r);
				return r;

			case GET:
				console.log(_t0, -1, `GET request (${BASE_URL}${action})`);

				// r = await this.http.jsonGet(action, data, timeout ? timeout : constants.DEFAULT_TIMEOUT);
				r = await this.http.jsonGet(action, token);

				_t1 = (new Date()).getTime();
				console.log(_t0, _t1 - _t0, `GET response (${BASE_URL}${action})`, r);
				return r;

			case MULTIPART:
				console.log(_t0, -1, `MULTIPART request (${BASE_URL}${action})`, payload);

				// r = await this.http.jsonGet(action, data, timeout ? timeout : constants.DEFAULT_TIMEOUT);
				r = await this.http.formMultiPartPost(action, payload, token);

				_t1 = (new Date()).getTime();
				console.log(_t0, _t1 - _t0, `MULTIPART response (${BASE_URL}${action})`, r);
				return r;

			case DELETE:
				console.log(_t0, -1, `DELETE request (${BASE_URL}${action})`, payload);

				// r = await this.http.jsonGet(action, data, timeout ? timeout : constants.DEFAULT_TIMEOUT);
				r = await this.http.jsonDelete(action, token);

				_t1 = (new Date()).getTime();
				console.log(_t0, _t1 - _t0, `DELETE response (${BASE_URL}${action})`, r);
				return r;

			default:
				break;
		}
		throw ({ code: -1, error: 'Invalid request' });
	}
}

const httpService = new HttpService();

export default httpService;
