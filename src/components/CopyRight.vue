<template>
  <div>©2023 {{ author }}. All right reserved.</div>
  
</template>
<script>
import * as constants from '@/constants';
export default {
  name: 'CopyRight',
  data() {
    return {
      author: constants.general.author
    }
  }
}

</script>