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

}
</script>