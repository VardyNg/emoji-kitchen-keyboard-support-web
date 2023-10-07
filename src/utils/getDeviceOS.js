import * as constants from '@/constants';
import jsonToArray from '@/utils/jsonToArray';

export default function getDeviceOS(deviceType) {
  switch (deviceType) {
      case constants.deviceType.mac:
        return jsonToArray(constants.macOS)
      case constants.deviceType.iPad:
      case constants.deviceType.iPhone:
      case constants.deviceType.iPod_touch:
        return jsonToArray(constants.iOS)
      default:
        return [];
  } 

}