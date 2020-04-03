<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as coreTypes from '../../store/ActionsTypes';

@Component
export default class HomeBase extends Vue {

  public firstAlert: boolean = true;
    public alertIfproductChoosed: boolean = false;
    public alertIfProductNotChoosed: boolean = false;
    public welcomeText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    public checked: boolean = true;
    public currentUser: any = {
        name: 'Zemtsop',
        surname: 'Ndadji'
    };

    public slideItems: any[] = [
        {
            src: 'https://www.infochretienne.com/wp-content/uploads/2020/03/Sans-titre-1-62-1200x600.jpg',
            title: 'Prevent Covid 237',
        },
        {
            src: 'https://cdnuploads.aa.com.tr/uploads/Contents/2020/03/17/thumbs_b_c_bba5147314821b3db9bbca4b00e5234f.jpg?v=153659',
            title: 'Un geste pour sauver des vies',
        },
        {
            src: 'https://img.aws.la-croix.com/2020/03/21/1201085331/femme-porte-masquese-proteger-Coronavirus-marche-Lagos-Nigeria-19_0_1400_892.jpg',
            title: 'Faites un don dans les hopitaux du Cameroun',
        },
        {
            src: 'https://images.theconversation.com/files/321040/original/file-20200317-60910-1fbas4o.jpg?ixlib=rb-1.1.0&rect=0%2C169%2C997%2C498&q=45&auto=format&w=1356&h=668&fit=crop',
            title: 'Faites des dons d\'équipements dans nos hopitaux',
        },
        {
            src: 'http://www.fides.org/app/webroot/files/appendeds/95/primopiano_9548.jpg',
            title: 'Faites un don dans les hopitaux du Cameroun',
        },
        {
            src: 'https://cdnuploads.aa.com.tr/uploads/Contents/2020/03/18/thumbs_b_c_e76ae077d2bc4946ce85721acf20058c.jpg?v=114906',
            title: 'Aider les populations du Cameroun à survivre face à l\'épidémie de Covid 19',
        },
    ];

    public productList: any[] = [
        {
            product_id: 1,
            name: 'Cache Nez',
            checked: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
            photoUrl: 'https://www.textiles-essuyages.com/cache/image_cec2ee41e1e5a405166a0e3f8bf25d61.jpeg'
        },
        {
            product_id: 2,
            name: 'Désinfectant',
            checked: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
            photoUrl: 'https://nightlife.ca/wp-content/uploads/2020/03/DE%CC%81SINFECTE-1536x950.jpg'
        },
        {
            product_id: 23,
            name: 'Déinfectant avec Alcool 90°',
            checked: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
            photoUrl: 'https://www.sciencesetavenir.fr/assets/img/2018/02/16/cover-r4x3w1000-5a86e7f962634-064-is09b2n86.jpg'
        },
        {
            product_id: 3,
            name: 'Désinfectant',
            checked: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
            photoUrl: 'https://www.sciencesetavenir.fr/assets/img/2018/02/16/cover-r4x3w1000-5a86e7f962634-064-is09b2n86.jpg'
        },
        {
            product_id: 4,
            name: 'Déinfectant avec Alcool 90°',
            checked: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
            photoUrl: 'https://supermarche.mg/wp-content/uploads/2018/03/gel-50-ml-1.png'
        },
        {
            product_id: 5,
            name: 'Désinfectant',
            checked: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
            photoUrl: 'https://nightlife.ca/wp-content/uploads/2020/03/DE%CC%81SINFECTE-1536x950.jpg'
        },
        {
            product_id: 6,
            name: 'Déinfectant avec Alcool 90°',
            checked: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
            photoUrl: 'https://supermarche.mg/wp-content/uploads/2018/03/gel-50-ml-1.png'
        },
        {
            product_id: 7,
            name: 'Désinfectant',
            checked: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
            photoUrl: 'https://www.sciencesetavenir.fr/assets/img/2018/02/16/cover-r4x3w1000-5a86e7f962634-064-is09b2n86.jpg'
        },
        {
            product_id: 8,
            name: 'Déinfectant avec Alcool 90°',
            checked: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
            photoUrl: 'https://supermarche.mg/wp-content/uploads/2018/03/gel-50-ml-1.png'
        },
    ];
  
  public productDetailsDialog  = {
      product_id: 1,
      name: '',
      product_price: '',
      product_delivery_locality: '',
      checked: false,
      product_link : '',
      product_desc: '',
      product_large_desc: '',
      product_state: ''
  };
  
  public nameRules: any[] = [(v: any) => !! v || 'Le nom est obligatoire (name is required)'];
  public townRules: any[] = [(v: any) => !! v || 'La ville est obligatoire (town is required)'];
  public localityRules: any[] = [(v: any) => !! v || 'La localite est obligatoire'];
  public countryRules: any[] = [(v: any) => !! v || 'Par defaut le pays est le Cameroun'];
  public rueRules: any[] = [(v: any) => !! v || 'Par defaut le pays est le Cameroun'];
  public phoneRules: any[] = [(v: any) => !! v || 'Le numéro de téléphone est obligatoire (phone number is required)'];
  public emailRules: any[] = [
    (v: any ) => !!v || 'E-mail is required',
    (v: any ) => /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-z]{2,4}$/.test(v) || 'E-mail must be valid'
  ];

  public hostoRules: any[] = [(v: any) => !! v || 'La structure sanitaire est obligatoire (the health center is required)'];
  public donation: any = {productList: '', locality: '', rue: '', town: '', country: '', receiverName: '', 
                          receiverEmail: '', desc: '', donateurEmail: 'admin@gmail.com'};
  public productsChoosedList: any[] = [];
  public  loading: number = 0;
  public lazyLoading: boolean = true;
  public loadingDonation: number = 0;
  public detailProduit: boolean = false;
  public showDeliveryInfo: boolean = false;
  public setReceiverInfos: boolean = false;
  public valid: boolean = false;

  public async created() {
    this.$store.subscribe(
      (mutation, state) => {
        const t = mutation.type;
        if (t === coreTypes.MU_ALL_PRODUCTS) {
          this.loading = 2;
          this.loadData();
        }
        if (t === coreTypes.MU_DONATION) {
          this.loadingDonation = 2;
          this.getDonationState();
        }
      }
    );
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
  public makeDonation() {
    this.loadingDonation = 1;
    this.alertIfproductChoosed = false;
    this.donation.productList = this.productsChoosedList;
    this.$store.dispatch(coreTypes.ACTION_DONATION, this.donation);
    this.showDeliveryInfo = false;
  }
  public getDonationState() {
    const state = this.$store.getters[coreTypes.GET_DONATION] as any[];
    this.alertIfproductChoosed = false;
  }
  public displayProductsChoosedList(): void {
    if (this.productsChoosedList.length > 0) {
      this.alertIfproductChoosed = true;
    } else {
      this.alertIfProductNotChoosed = true;
    }
  }
  public addOrRemoveProductOnChoosedList(product: any): void {
    product.checked = !product.checked;
    if (product.checked) {
      this.productsChoosedList.push(product);
    } else {
      this.productsChoosedList = this.productsChoosedList.filter((member) => member.id !== product.id);
    }      
  }

  public navigateToLivraisonForm() {
    this.alertIfproductChoosed = false;
    if (this.$router.currentRoute.name !== 'deliveryInfoEdit') {
      this.$router.push({name: 'deliveryInfoEdit'});
    }
  }

  public goToDetailPage() {
    if (this.$router.currentRoute.name !== 'productDetails') {
      this.$router.push({name: 'productDetails'});
    }
  } 

  public showProductDetailsDialog(product: any) {
    console.log(product);
    this.productDetailsDialog = product;
    this.detailProduit = true;
  }

   public showDeliveryInfoDialog() {
    this.alertIfproductChoosed = false;
    this.showDeliveryInfo = true;
  }
}
</script>