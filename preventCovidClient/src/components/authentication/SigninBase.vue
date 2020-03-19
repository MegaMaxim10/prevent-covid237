<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as coreTypes from '../../store/ActionsTypes';

@Component
export default class SigninBase extends Vue {

    public errorMessage = '';
    public loginForm = {
        email: '',
        password: ''
    };
    public showpassword = false;
    public loading: number = 0;
    public overlay = false;

    public async created() {
      this.$store.subscribe(
        (mutation, state) => {
          const t = mutation.type;
          if ((t === coreTypes.MU_SET_AUTH_ACCESS_TOKEN) ) {
            this.loading = 2;
            this.overlay = false;
            this.loadOrders();
          }
        }
      );
    }

    public async loadOrders() {
      const status = this.$store.getters[coreTypes.GET_ACCESS_TOKEN]; 
      localStorage.setItem('token', JSON.stringify(status));
      localStorage.setItem('savedTokenDate', JSON.stringify(new Date().getTime()));
      const token = localStorage.getItem('token');
      if ( (token === null) || (token === 'undefined')) {
        this.errorMessage = 'This account does not exist !!!';
      } else {
        if (this.$router.currentRoute.name !== 'home') {
          this.$router.push({name: 'home'});
        }
      }
    }
    
    public async login() {
      if ((this.loginForm.email !== '') && (this.loginForm.password !== '')) {
        this.loading = 1;
        this.overlay = true;
        this.$store.dispatch(coreTypes.ACTION_LOGIN, this.loginForm);
      }
    }

    public async createAccount() {
      await this.$store.dispatch(coreTypes.ACTION_CREATE_ACCOUNT, true);
      if (this.$router.currentRoute.name !== 'register') {
        this.$router.push({name: 'register'});
      }
    }
}
</script> 