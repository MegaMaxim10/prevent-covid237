<style scoped>
    .bottom{
        position: absolute;
        bottom: 0;
        width: 100%;
    }
</style>
<template>
    <v-navigation-drawer v-model="$store.state.navigation_drawer"
      :mini-variant.sync="mini"
      fixed
      app
      :clipped="$vuetify.breakpoint.mdAndUp"
      hide-overlay
      :width="260"
    >
        <v-list>    
            <v-list-item>
                <v-list-item-avatar v-if="mini">
                    <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                </v-list-item-avatar>
                <v-list-item-title v-if="!mini">
                    <v-text-field placeholder="Search..." single-line outlined class="mt-6" ></v-text-field>
                </v-list-item-title>
            </v-list-item>
        </v-list>
        
        <v-divider></v-divider>

        <v-list>
            <v-list-group>
                <v-list-item slot="activator">
                    <v-list-item-icon>
                        <v-icon>mdi-domain</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            First item
                        </v-list-item-title>
                    </v-list-item-content>  
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                        <v-icon class="pl-4">mdi-cloud-upload</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>item 1</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon class="pl-4">mdi-cloud-upload</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>item 2</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>
        </v-list>

        <v-divider></v-divider>

        <v-divider></v-divider>

        <v-list class="bottom">
            <v-list-item v-if="mini" @click="goToSettings()">
                <v-list-item-action>
                    <v-btn  icon @click.stop="mini = !mini"> <v-icon>mdi-chevron-right</v-icon></v-btn>
                </v-list-item-action>
            </v-list-item>
            <v-list-item v-if="!mini" @click="goToSettings()">
                <v-list-item-action>
                    <v-icon>settings</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title> 
                        Settings
                    </v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn  icon @click.stop="mini = !mini"> <v-icon>mdi-chevron-left</v-icon></v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBarBase from './NavBarBase.vue';

export default Vue.extend({
  extends: NavBarBase
});
</script>