<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as coreTypes from '../../store/ActionsTypes';

@Component
export default class SettingsBase extends Vue {
  public loading = 0;
  public async created() {
    this.$store.subscribe((mutation, state) => {
      const t = mutation.type;
    });
  }  
}
</script>