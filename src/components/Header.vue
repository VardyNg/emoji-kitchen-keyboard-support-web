<template>
  <div>
    <h1>Emoji Kitchen Keybaord</h1>

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
  name: 'HeaderItem',
  data() {
    return {
      deviceTypes: getDeviceTypeList()
    }
  }
}
</script> 