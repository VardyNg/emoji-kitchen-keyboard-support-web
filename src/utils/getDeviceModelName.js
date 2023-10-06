import * as constants from '@/constants';

export function getDeviceModelsByPrefix(prefix) {
  return Object.values(constants).filter((constant) => constant.startsWith(prefix));
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