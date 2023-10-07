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
      v-model="selectedDeviceModel"
      :disabled="isModelSelectionDisabled"
    ></v-select>
    <v-select
      label="OS"
      :items="filteredOS"
      variant="outlined"
      v-model="selectedOS"
      :disabled="isModelSelectionDisabled"
    ></v-select>
  </div>
</template>

<script>
import getDeviceTypeList from '@/utils/getDeviceTypeList'
import getDeviceOS from '@/utils/getDeviceOS'
import {
  getiPadModels,
  getiPodModels,
  getiPhoneModels,
  getMacModels, 
} from '@/utils/getDeviceModelName';
import * as constants from '@/constants';
export default {
  name: 'SupportPage',
  data() {
    return {
      deviceTypes: getDeviceTypeList(),
      selectedDeviceType: null,
      selectedDeviceModel: null, // Add this property
      selectedOS: null, // Add this property
    }
  },
  computed: {
    filteredModels() {
      // Determine which model list to use based on the selected device type
      switch (this.selectedDeviceType) {
        case constants.deviceType.iPhone:
          return getiPhoneModels();
        case constants.deviceType.iPad:
          return getiPadModels();
        case constants.deviceType.iPod_touch:
          return getiPodModels();
        case constants.deviceType.Mac:
          return getMacModels();
        default:
          return [];
      }
    },
    isModelSelectionDisabled() {
      // Disable the model selection if selectedDeviceType is not set
      return !this.selectedDeviceType;
    },
    filteredOS() {
      return getDeviceOS(this.selectedDeviceType)
    }
  },
  watch: {
    selectedDeviceType() {
      // Reset selectedDeviceModel and selectedOS when device type changes
      this.selectedDeviceModel = null;
      this.selectedOS = null;
    }
  }
}
</script>
