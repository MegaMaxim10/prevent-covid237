<template>
  <v-app>
    <MainToolbar/>
    <NavBar/>
    <v-content>
      <v-layout align-center justify-center>
        <router-view/>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue';

  import Signin from '@/components/authentication/Signin.vue';
  import MainToolbar from '@/components/MainToolbar.vue';
  import NavBar from '@/components/NavBar.vue';
  import {mapGetters, mapActions} from 'vuex';
  import * as types from './store/ActionsTypes';

  export default Vue.extend({
    name: 'App',

    props: {
        source: String
    },

    components: {
      MainToolbar,
      NavBar,
      Signin
    },

    watch: {
      // Everytime the route changes, check for auth status
      // $route: 'isAuthenticated',
    },

    created() {
      this.isAuthenticated();
    },
    
    mounted() {
      this.$nextTick(() => {
        this.loadData();
      });
    },

    methods: {
      async loadData() {
        this.$store.dispatch('UserProfileModule/' + types.ACTION_LOAD_USER_PROFILE);
      },
      
      async isAuthenticated() {
        const hours = 0.05;
        const saved = localStorage.getItem('savedTokenDate');
        if (saved && (new Date().getTime() -  parseInt(saved, 0) > hours * 60 * 60 * 1000)) {
          localStorage.clear();
        }
        const token =  localStorage.getItem('token');
        if ( (token === null) || (token === 'undefined')) {
          const createAccountState =  this.$store.getters[types.GET_CREATE_ACCOUNT];
          if (createAccountState === true) {
            this.$router.push({name: 'register'}).then( () => {
              this.$store.dispatch(types.ACTION_CREATE_ACCOUNT, false);
            });
            
          } else {
            if (this.$router.currentRoute.name !== 'signin') {
              this.$router.push({name: 'signin'});
            }
          }
        } else {
          if (this.$router.currentRoute.name !== 'home') {
            await this.$router.push({name: 'home'}).then(() => {
            //  this.authenticated = true;
            });
          }
        }
      },

      async logout() {
        if (this.$store.getters[types.GET_USE_AUTHENTICATION] === true) {
          const auth = (this as any).$auth;
          await auth.logout();
        }
        await this.isAuthenticated();
        // Navigate back to home
        this.$router.push({ path: '/' });
      }
    },

    computed : {
    },

    data() {
      return {
        authenticated: false,
        dialog: false
      };
    }
  });
</script>
