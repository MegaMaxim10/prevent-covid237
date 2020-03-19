<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as coreTypes from '../store/ActionsTypes';

@Component
export default class MainToolbarBase extends Vue {

  public showNavbar = false;

  public async created() {
    /*this.$store.subscribe(
      (mutation, state) => {
        const t = mutation.type;
        if ((t === coreTypes.MU_SET_AUTH_ACCESS_TOKEN) || 
            (t === coreTypes.MU_SET_AUTH_STATUS) || 
           ) {
          this.loadData();
        }
      }
    );*/
  }

  public loadData() {
    /*const token = localStorage.getItem('token');
    if ((token !== null) && (token !== 'undefined')) {
      this.showNavbar = true;
      this.$store.commit(coreTypes.MU_TOOGLE_NAV_DRAWER);  
    }*/
  }

  public navigationDrawer() {
    this.$store.commit(coreTypes.MU_TOOGLE_NAV_DRAWER);
  }
  public gotoLogin() {
    if (this.$router.currentRoute.name !== 'signin') {
      this.$router.push({name: 'signin'});
    }
  }
  public gotoRegister() {
    if (this.$router.currentRoute.name !== 'register') {
      this.$router.push({name: 'register'});
    }
  }
}
</script>