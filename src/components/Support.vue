<template>
  <div>
    <h1>Support</h1>

    <v-select
      label="Device type"
      :items="deviceTypes"
      variant="outlined"
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
export default {
  name: 'SupportPage',
  data() {
    return {
      deviceTypes: getDeviceTypeList()
    }
  }
}
</script>