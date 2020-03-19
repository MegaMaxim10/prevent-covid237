<template>
  <div>
    <v-form>
      <v-select v-model="selectedIdealoId" :items="orders" label="Select idealo order id" required></v-select>
      <v-btn color="success"  class="mr-4" @click="sendOrderToAfterbuy()">
        Send order to Afterbuy
      </v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SettingsBase from './SettingsBase.vue';

export default Vue.extend({
  extends: SettingsBase
});
</script>