<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as coreTypes from '../store/ActionsTypes';

@Component
export default class MainToolbarBase extends Vue {

  public showNavbar = false;

  public async created() {
    this.$store.subscribe(
      (mutation, state) => {
        const t = mutation.type;
        if ((t === coreTypes.MU_SET_AUTH_ACCESS_TOKEN) || 
            (t === coreTypes.MU_SET_AUTH_STATUS)
           ) {
          this.loadData();
        }
      }
    );
  }

  public loadData() {
    const token = localStorage.getItem('token');
    // console.log(token);
    // console.log(localStorage.getItem('user'));
    const user = JSON.parse('' + localStorage.getItem('user'));
    if (user !== null) {
      console.log(user.email);
    }
    
    if ((token !== null) && (token !== 'undefined')) {
      this.showNavbar = true;
      this.$store.commit(coreTypes.MU_TOOGLE_NAV_DRAWER);  
    }
    // console.log(this.showNavbar);
  }

  public navigationDrawer() {
    this.$store.commit(coreTypes.MU_TOOGLE_NAV_DRAWER);
  }
  public gotoMyProducts() {
    if (this.$router.currentRoute.name !== 'productEdit') {
      this.$router.push({name: 'productEdit'});
    }
  }
  public gotoHome() {
    if (this.$router.currentRoute.name !== 'home') {
      this.$router.push({name: 'home'});
    }
  }
}
</script>