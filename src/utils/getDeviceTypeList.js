import * as DeviceTypes from '@/constants';

/**
 * Returns a list of device types.
 * @returns {Array} An array of device types.
 */
export default function getDeviceTypeList() {
  const {
    iPhone: deviceType_iPhone,
    iPod_touch: deviceType_iPod_touch,
    iPad: deviceType_iPad,
    Mac: deviceType_Mac,
  } = DeviceTypes;

  return [deviceType_iPhone, deviceType_iPod_touch, deviceType_iPad, deviceType_Mac];
}
