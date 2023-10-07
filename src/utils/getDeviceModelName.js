import * as constants from '@/constants';
import jsonToArray from '@/utils/jsonToArray';

export function getiPadModels() {
  return jsonToArray(constants.iPad)
}

export function getiPodModels() {
  return jsonToArray(constants.iPodTouch)
}

export function getiPhoneModels() {
  return jsonToArray(constants.iPhone)
}

export function getMacModels() {
  return jsonToArray(constants.mac)
}