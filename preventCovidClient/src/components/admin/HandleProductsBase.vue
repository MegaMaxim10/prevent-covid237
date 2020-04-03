<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as coreTypes from '../../store/ActionsTypes';

@Component
export default class HandleProductsBase extends Vue {
    public headers: any[] = [
      { text: 'ID',  align: 'left', sortable: true, value: 'product_id'},
      { text: 'Name',  align: 'left', sortable: false, value: 'product_name'},
      { text: 'Price (€)', value: 'Product_price' },
      { text: 'Description', value: 'product_desc' },
      { text: 'Confirmed validation email has been sent', value: 'action1', sortable: false},
      { text: 'valid products', value: 'action2', sortable: false},
      { text: 'Deleted products', value: 'action3', sortable: false }
    ];
    public productList: any[] = [];
    public selectedProducts: any[] = [];
    public dialog: boolean = false;
     public singleSelect: boolean = false;
    public errorMessageState: number = -1;
    public click = -1;
    public search = '';
    public data: any = {product_id: 0, validator_id: 0};
    public loading: number = 0;
    
    public async created() {
        this.$store.subscribe(
        (mutation, state) => {
            const t = mutation.type;
            if (t === coreTypes.MU_ALL_PRODUCTS) {
                this.loading = 2;
                this.loadData();
            }
            if (t === coreTypes.MU_SEND_EMAIL_TO_HP) {
                this.getSendEmailState();
            }
        });
        this.getProducts();
    }

    
    public loadData() {
        const state = this.$store.getters[coreTypes.GET_ALL_PRODUCTS] as any[];
        this.productList = state;
    }
    public getProducts() {
        this.loading = 1;
        this.$store.dispatch(coreTypes.ACTION_ALL_PRODUCTS);
    }
    public getSendEmailState() {
        const state = this.$store.getters[coreTypes.GET_SEND_EMAIL_TO_HP] as any[];
        console.log(state);
    }
    public async sendEmailToHealthPersonnel() {
        let i = 0;
        if (this.selectedProducts.length) {
            for (i = 0; i < this.selectedProducts.length; i++) {
                if (this.selectedProducts[i] !== undefined) {
                    await this.$store.dispatch(coreTypes.ACTION_SEND_EMAIL_TO_HP, this.data);
                } 
            }
        } else {
            this.click = 0;
            this.errorMessageState = 0;
        }
    }
    public showProductInfoDialog() {
        if (this.selectedProducts.length === 1) {
            this.click = 1;
            this.dialog = true;
        } else {
            this.errorMessageState = 1;
            this.click = 0;
        }
    }
    public showValidationEmailDialog() {
        if (this.selectedProducts.length > 0) {
            this.click = 2;
            this.dialog = true;
        } else {
            this.errorMessageState = 2;
            this.click = 0;
        }
    }
    public closeProductInfoDialog() {
      this.click = -1;
      this.dialog = false;
    }
}

</script>