<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as coreTypes from '../../store/ActionsTypes';

@Component
export default class DeliveryInfoEditBase extends Vue {
    private nameDest: string = '';
    
    private ville: string = '';
    private emailDon: string = '';
    private emailDest: string = '';
    private phone: string ='';
    private hosto: string = '';
    private rue: string = '';
    private valid: boolean = false;
    private dialogSuccess: boolean = false;
    private setResponsableInformations: boolean = false;

    private nameRules: any[] = [
        (v: any) => !! v || 'Le nom est obligatoire (name is required)'
    ];
    
    private villeRules: any[] = [
        (v: any) => !! v || 'La ville est obligatoire (town is required)'   
    ];
    private phoneRules: any[] = [
        (v: any) => !! v || 'Le numéro de téléphone est obligatoire (phone number is required)'   
    ];
    private emailRules:any[] = [
        (v: any ) => !!v || 'E-mail is required',
        (v: any ) => /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-z]{2,4}$/.test(v) || 'E-mail must be valid'
    ];
    private hostoRules: any[] = [
        (v: any) => !! v || 'La structure sanitaire est obligatoire (the health center is required)'
    ];

    public clear() {
        this.nameDest = '';
        this.rue = '';
        this.phone = '';
        this.ville = '';
        this.emailDest = '';
        this.emailDon = '';
        this.hosto= '';
    }

    public validateCommande() {
        this.dialogSuccess = true;
        this.$router.push('home');
    }
}

</script>