<template>
  <div>
    <h1>Support</h1>
    <div class="form-section-title">Device Information</div>

    <v-select
      label="Device type"
      :items="deviceTypes"
      v-model="selectedDeviceType"
      variant="outlined"
      :error-messages="deviceTypeErrorMsg"
    />

    <v-select
      label="Model *"
      :items="filteredModels"
      variant="outlined"
      v-model="selectedDeviceModel"
      :disabled="isModelSelectionDisabled"
      :error-messages="deviceModelErrorMsg"
    />

    <v-select
      label="OS *"
      :items="filteredOS"
      variant="outlined"
      v-model="selectedOS"
      :disabled="isModelSelectionDisabled"
      :error-messages="deviceOSErrorMsg"
    />
    
    <div class="form-section-title">Issue</div>
    <div v-for="(issueType, index) in issueTypes" :key="index">
      <v-checkbox
        :label="issueType"
        v-model="selectedIssues"
        :value="issueType"
      />
    </div>
    <v-textarea 
      :label="'Can you describe the issue? (' + describedIssues.length + '/'+ describeIssueTextLimit +')'"
      v-model="describedIssues"
      :error-messages="describeIssueErrorMsg"
    />

    <div class="form-section-title">Contacts</div>
    <p>You may leave your email address for following up the issue.</p>
    <v-text-field 
      label="Email"
      v-model="inputEmail"
    />

    <p style="color: red;">{{ formErrorMsg }}</p>
    <v-btn 
      block
      @click="submit"
      style="margin-bottom: 10px;"
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
      // data
      deviceTypes: getDeviceTypeList(),
      issueTypes: constants.issueTypes,
      describeIssueTextLimit: constants.form.describeIssueTextLimit,
      // inputs
      selectedDeviceType: null,
      selectedDeviceModel: null, 
      selectedOS: null,
      selectedIssues: [],
      describedIssues: "",
      inputEmail: "",
      // error messages
      deviceTypeErrorMsg: "",
      deviceModelErrorMsg: "",
      deviceOSErrorMsg: "",
      describeIssueErrorMsg: "",
      formErrorMsg: "",
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
        case constants.deviceType.mac:
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
    },
  },
  watch: {
    selectedDeviceType() {
      // Reset selectedDeviceModel and selectedOS when device type changes
      this.selectedDeviceModel = null;
      this.selectedOS = null;

      // remove error message
      this.deviceTypeErrorMsg = "";
    },
    selectedDeviceModel() {
      // remove error message
      this.deviceModelErrorMsg = "";
    },
    selectedOS() {
      // remove error message
      this.deviceOSErrorMsg = "";
    },
    describedIssues() {
      // remove error message
      this.describeIssueErrorMsg = "";
      this.validateDescribedIssue()
    }
  },
  methods: {
    validateDescribedIssue: function () {
      if (this.describedIssues.length > this.describeIssueTextLimit) {
        this.describeIssueErrorMsg = "Word limit exceeded";
        return false
      }
      return true
    },
    submit: function () {
      console.log("submit")
      // validate input
      var valid = true;
      if (!this.selectedDeviceType) {
        this.deviceTypeErrorMsg = "Please select a device type";
        valid = false
      } 
      if (!this.selectedDeviceModel) {
        this.deviceModelErrorMsg = "Please select a device model";
        valid = false
      }
      if (!this.selectedOS) {
        this.deviceOSErrorMsg = "Please select an OS";
        valid = false
      }
      if (!this.validateDescribedIssue()) {
        valid = false
      } 

      if (valid) {
        this.formErrorMsg = ""
      } else {
        this.formErrorMsg = "Please fill in all required fields or correct the errors"
      }
      
      const body = {
        "selectedDeviceType": this.selectedDeviceType,
        "selectedDeviceModel": this.selectedDeviceModel,
        "selectedOS": this.selectedOS,
        "selectedIssues": this.selectedIssues,
        "describedIssues": this.describedIssues,
        "inputEmail": this.inputEmail,
      }
      console.log(body);
    },
    clear: function () {
      console.log("clear")
      this.selectedDeviceType = null;
      this.selectedDeviceModel = null;
      this.selectedOS = null;
      this.selectedIssues = [];
      this.describedIssues = "";
      this.inputEmail = "";
    }
  }
}
</script>
