<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as coreTypes from '../../store/ActionsTypes';

@Component
export default class ProductViewDetailsBase extends Vue {
    public product: any = 
    {
        id: 1,
        name: 'Cache Nez',
        checked: false,
        price: '100',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedLorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor s',
        photoUrl: [
            'https://www.textiles-essuyages.com/cache/image_cec2ee41e1e5a405166a0e3f8bf25d61.jpeg',
            'https://nightlife.ca/wp-content/uploads/2020/03/DE%CC%81SINFECTE-1536x950.jpg',
            'https://www.sciencesetavenir.fr/assets/img/2018/02/16/cover-r4x3w1000-5a86e7f962634-064-is09b2n86.jpg'
        ]
    };

    public fournisseur: any = 
    {
        id: 1,
        name: 'Zemtsop Ndadji',
        surname: 'Brice Arleon',
        email: 'arleonzemtsop@gmail.com',
        adresse: 'bp 47 Dschang Carrefour Jean commerçant',
        phoneNumber: '+237 676 221 676',
        livraisonZone: 'Dschang Ouest Cameroun',
    };

    public notifyProductChoosed() {
        this.product.checked = true;
        this.$router.push('home');
    }
}

</script>