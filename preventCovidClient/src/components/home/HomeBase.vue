<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as coreTypes from '../../store/ActionsTypes';

@Component
export default class HomeBase extends Vue {

  public async created() {
    this.$store.subscribe(
      (mutation, state) => {
        const t = mutation.type;
        if (true) {
          this.loadData();
        }
      }
    );
  }

  public loadData() {
    //
  }

}
</script>