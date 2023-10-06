import * as constants from '@/constants';

export function getDeviceModelsByPrefix(prefix) {
  let keys = Object.keys(constants).filter((constantKey) => constantKey.startsWith(prefix));
  return keys.map((key) => constants[key]);
}


export function getiPadModels() {
  return getDeviceModelsByPrefix('iPad');
}

export function getiPodModels() {
  return getDeviceModelsByPrefix('iPod');
}

export function getiPhoneModels() {
  return getDeviceModelsByPrefix('iPhone');
}

export function getMacModels() {
  return getDeviceModelsByPrefix('Mac');
}