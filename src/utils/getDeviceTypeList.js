import * as constants from '@/constants';

/**
 * Returns a list of device types.
 * @returns {Array} An array of device types.
 */
export default function getDeviceTypeList() {
  return [
    constants.deviceType.iPhone, 
    constants.deviceType.iPod_touch,
    constants.deviceType.iPad,
    constants.deviceType.mac,
  ];
}
