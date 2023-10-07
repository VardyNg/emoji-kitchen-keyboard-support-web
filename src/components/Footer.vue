<template>
  <div style="background-color: lightgray;">
    <p class="footer-font">
      Developed by <a :href=authorWebsite target="_blank">{{ author }}</a> for <a :href=appURL target="_blank">{{ appNames  }}</a>
    </p>
    <p class="footer-font">
      Developed using Vue.js and Vuetify. Hosted on Azure Static Web Apps. Data stored and handled via Azure Functions, CosmosDB, ... etc.
    </p>
    <p class="footer-font">
      Open-sourced on Web: <a :href="webGithubURL" target="_blank">GitHub</a>, Backend: <a :href="backendGithubURL" target="_blank">GitHub</a>
    </p>
    <br/>
    <CopyRight />
  </div>
</template>

<script>
import CopyRight from './CopyRight.vue';
import * as constants from '@/constants';
export default {
  name: 'FooterItem',
  components: {
    CopyRight,
  },
  data() {
    return {
      author: constants.general.author,
      authorWebsite: constants.general.authorWebsite,
      appNames: constants.general.appName,
      appURL: constants.general.appURL,
      webGithubURL: constants.general.webGithubURL,
      backendGithubURL: constants.general.backendGithubURL,
    }
  }
}
</script> 
