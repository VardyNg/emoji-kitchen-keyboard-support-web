import * as DeviceTypes from '@/constants';

/**
 * Returns a list of device types.
 * @returns {Array} An array of device types.
 */
export default function getDeviceTypeList() {
  return [
    DeviceTypes.deviceType_iPhone, 
    DeviceTypes.deviceType_iPod_touch,
    DeviceTypes.deviceType_iPad,
    DeviceTypes.deviceType_Mac,
  ];
}
