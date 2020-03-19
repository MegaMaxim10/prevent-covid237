<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as coreTypes from '../../store/ActionsTypes';

@Component
export default class RegisterBase extends Vue {
    
    public showpassword = false;
    public registerForm = {
        name: '',
        email: '',
        password: '',
        cpassword: '',
    };

    public async created() {
      this.$store.subscribe(
        (mutation, state) => {
          const t = mutation.type;
          if ((t === coreTypes.MU_REGISTER_STATUS) ||
              (t === coreTypes.MU_SET_AUTH_ACCESS_TOKEN) ) {
            this.loadOrders();
          }
        }
      );
    }

    public loadOrders() {
      const status = this.$store.getters[coreTypes.GET_REGISTER_STATUS];
      if ((status === true) && (this.$router.currentRoute.name !== 'signin')) {
        this.$router.push({name: 'signin'});
      } 
    }

    public register() {
      if ((this.registerForm.name !== '') && (this.registerForm.email !== '') && 
      (this.registerForm.password !== '') && (this.registerForm.cpassword !== '')) {
        this.$store.dispatch(coreTypes.ACTION_REGISTER, this.registerForm);
      }
    }

    public login() {
      this.$router.push({name: 'signin'});
    }

    public cancel() {
      // 
    }
}
</script>