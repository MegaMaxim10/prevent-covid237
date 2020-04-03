<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as coreTypes from '../store/ActionsTypes';

@Component
export default class NavBarBase extends Vue {
    public mini: boolean = true;
    
    public goToSettings() {
        if (this.$router.currentRoute.name !== 'settings') {
            this.$router.push({name: 'settings'});
        }
    }

    public gotoHandleProducts() {
    if (this.$router.currentRoute.name !== 'handleProducts') {
      this.$router.push({name: 'handleProducts'});
    }
  }
  public gotoHandleUsers() {
    if (this.$router.currentRoute.name !== 'handleUsers') {
      this.$router.push({name: 'handleUsers'});
    }
  }
  public gotoRegister() {
    if (this.$router.currentRoute.name !== 'register') {
      this.$router.push({name: 'register'});
    }
  }

}
</script>