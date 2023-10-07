import * as constants from '@/constants';
import getDeviceModelsByPrefix from '@/utils/getConstantByPrefix';

export default function getDeviceOS(deviceType) {
  switch (deviceType) {
      case constants.deviceType_Mac:
        return getDeviceModelsByPrefix('macOS', constants);
      case constants.deviceType_iPad:
      case constants.deviceType_iPhone:
      case constants.deviceType_iPod_touch:
        return getDeviceModelsByPrefix('iOS', constants);
      default:
        return [];
  } 

}