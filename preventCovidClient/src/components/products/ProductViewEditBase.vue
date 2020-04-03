<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as coreTypes from '../../store/ActionsTypes';

@Component
export default class ProductViewEditBase extends Vue {
    public valid: boolean = false;
    public dialogSuccess: boolean = false;
    public loadProductImagesDialog: boolean = false;
    public product: any = { name: '', price: '', description: '', largeDesc: '', region: [], file: null};
    public products: any[] = []; 
    public file: any = null;
    public saveProductState: any = null;
    public loading: number = 0;
    public loadingImage: number = 0;
    public notifySaveProductState: boolean = false;
    public nameRules: any[] = [
        (v: any) => !! v || 'Le nom est obligatoire (name is required)'
    ];
    
    public priceRules: any[] = [
        (v: any) => !! v || 'Laeprix est obligatoire (price is required)'   
    ];
    public descriptionRules: any[] = [
        (v: any) => !! v || 'La description est obligatoire (description is required)', 
        (v: any) => v.length < 400 || 'La description ne doit pas dépasser 400 caractères',
        (v: any) => v.length > 5 || 'La description ne doit pas être en dessous de 200 caractères',
    ];
    public largeDescRules: any[] = [
        (v: any) => !! v || 'La description est obligatoire (description is required)', 
        (v: any) => v.length < 400 || 'La description ne doit pas dépasser 400 caractères',
        (v: any) => v.length > 10 || 'La description ne doit pas être en dessous de 200 caractères',
    ];
    public regionRules: any[] = [
        (v: any) => !! v || 'La région de livraison est obligatoire (location is required)'
    ];
    public filesRules: any = [
        (value: any) => !value || value.size > 2000000 || 'La taille de votre image doit être plus petite que 1MB',
    ];
    public regions: any[] = ['Ouest', 'Centre', 'Sud', 'Littoral', 'Extrême Nord', 'Adamaoua', 'Nord', 'Nord-Ouest', 'Sud-Ouest', 'Est'];
   
    public async created() {
        this.$store.subscribe(
        (mutation, state) => {
            const t = mutation.type;
            if (t === coreTypes.MU_SAVE_PRODUCT_STATE) {
                this.loading = 2; 
                this.loadData();
            }
            if (t === coreTypes.MU_LOAD_PRODUCT_FILE) {
                this.loadingImage = 2;
                this.getLoadProductFileState();
            }
        });
        
    }

    public loadData() {
        const state = this.$store.getters[coreTypes.GET_SAVE_PRODUCT_STATE] as any[];
        this.saveProductState = state;
        this.notifySaveProductState = true;
    }

    public loadProductImage() {
        this.loadingImage = 1;
        this.product.file = this.file;
        this.$store.dispatch(coreTypes.ACTION_LOAD_PRODUCT_FILE, this.product.file);
        this.loadProductImagesDialog = false;
    }
    public clear() {
        this.product.name = '';
        this.product.price = '';
        this.product.description = '';
        this.product.region = [];
        this.product.photoUrl = [];
    }

    public saveProduct() {
        this.loading = 1;
        this.$store.dispatch(coreTypes.ACTION_SAVE_PRODUCT_STATE, this.product);
    }

    public createProduit() {
        this.dialogSuccess = true;
    }

    public getLoadProductFileState() {
        const state = this.$store.getters[coreTypes.GET_LOAD_PRODUCT_FILE] as any[];
        this.file = state;
    }

    public cancelDialog() {
        this.loadProductImagesDialog = false;
    }

    public showLoadProductImageDialog() {
        this.loadProductImagesDialog = true;
    }
    public gotoHome() {
        if (this.$router.currentRoute.name !== 'home') {
            this.$router.push({name: 'home'});
        }
    }
}

</script>