<template>
  <div>
    <v-app-bar color="deep-purple accent-4"   dark  app fixed :clipped-left="$vuetify.breakpoint.mdAndUp">
      <v-app-bar-nav-icon v-if="showNavbar===true" @click="navigationDrawer()"></v-app-bar-nav-icon>
      <v-toolbar-title @click="gotoHome()">Prevent-covid237</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn icon style="margin-right:75px" @click="gotoMyProducts()">
        <span>Ajouter un produit</span>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MainToolbarBase from './MainToolbarBase.vue';

export default Vue.extend({
  extends: MainToolbarBase
});
</script>