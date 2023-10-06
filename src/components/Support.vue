<template>
  <div>
    <h1>Support</h1>

    <v-select
      label="Device type"
      :items="deviceTypes"
      v-model="selectedDeviceType"
      variant="outlined"
    ></v-select>
    <v-select
      label="Model"
      :items="filteredModels"
      variant="outlined"
      disabled="!selectedDeviceType"
    ></v-select>
  </div>
</template>

<script>
import getDeviceTypeList from '@/utils/getDeviceTypeList'
import {
  getiPadModels,
  getiPodModels,
  getiPhoneModels,
  getMacModels, 
} from '@/utils/getDeviceModelName'
import * as constants from '@/constants';
export default {
  name: 'SupportPage',
  data() {
    return {
      deviceTypes: getDeviceTypeList(),
      selectedDeviceType: null,
    }
  },
  computed: {
    filteredModels() {
      // Determine which model list to use based on the selected device type
      switch (this.selectedDeviceType) {
        case constants.deviceType_iPhone:
          return getiPhoneModels();
        case constants.deviceType_iPad:
          return getiPadModels();
        case constants.deviceType_iPod_touch:
          return getiPodModels();
        case constants.deviceType_Mac:
          return getMacModels();
        default:
          return [];
      }
    },
  }
}
</script>