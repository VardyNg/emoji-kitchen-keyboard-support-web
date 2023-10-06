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
export default {
  name: 'SupportPage',
  data() {
    return {
      deviceTypes: getDeviceTypeList()
    }
  }
}
</script>