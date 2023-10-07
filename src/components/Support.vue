<template>
  <div>
    <h1>Support</h1>
    <div class="form-section-title">Device Information</div>

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
    
    <div class="form-section-title">Issue</div>
    <div v-for="(issueType, index) in issueTypes" :key="index">
      <v-checkbox
        :label="issueType"
        v-model="selectedIssues"
        :value="issueType"
      />
    </div>
    <v-textarea label="Can you describe the issue?"></v-textarea>

    <div class="form-section-title">Contacts</div>
    <v-text-field label="Email"></v-text-field>
    <v-btn 
      block
      @click="submit"
    >
      Submit
    </v-btn>
    <v-btn 
      block
      @click="clear"
    >
      Clear
    </v-btn>
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
      selectedDeviceModel: null, 
      selectedOS: null,
      selectedIssues: [],
      issueTypes: constants.issueTypes
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
  },
  methods: {
    submit: function () {
      console.log("submit")
    },
    clear: function () {
      console.log("clear")
      this.selectedDeviceType = null;
      this.selectedDeviceModel = null;
      this.selectedOS = null;
    }
  }
}
</script>
