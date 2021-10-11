/**
 * @author Chathurika Senani
 * @create date 2021-10-11 19:34:09
 * @modify date 2021-10-11 21:27:31
 */

import { http } from "../services";
import constants from "../utils/constants";

const getAlgorithms = (payload) => http.request('twitter/handle/bestbullysticks?fromDate=2021-09-10&toDate=2021-10-19', payload, constants.http.GET);
export {
    getAlgorithms
};
