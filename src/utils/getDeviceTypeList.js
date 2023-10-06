// deviceTypes.js

import { 
  deviceType_iPhone,
  deviceType_iPad,
  deviceType_Mac,
} from '@/constants';

export default function getDeviceTypeList() {
  return [
    deviceType_iPhone,
    deviceType_iPad,
    deviceType_Mac,
  ];
}
