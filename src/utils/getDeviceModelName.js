import * as constants from '@/constants';
import getConstantByPrefix from '@/utils/getConstantByPrefix';

export function getiPadModels() {
  return getConstantByPrefix('iPad', constants);
}

export function getiPodModels() {
  return getConstantByPrefix('iPod', constants);
}

export function getiPhoneModels() {
  return getConstantByPrefix('iPhone', constants);
}

export function getMacModels() {
  return getConstantByPrefix('Mac', constants);
}