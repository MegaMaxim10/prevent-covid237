<template>
    <v-container>
        <v-card class="container">
            <v-row>
                <v-col>
                    <v-card
                    class="carrousel-box"
                    >
                        <v-carousel
                            hide-delimiter-background
                            dark
                        >
                            <v-carousel-item
                            v-for="(item,i) in product.photoUrl"
                            :key="i"
                            :src="item"
                            content
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                            >
                            </v-carousel-item>
                        </v-carousel>
                    </v-card>
                </v-col>
                <v-col class="detailBg">
                    <div>
                        <v-alert
                            dense
                            type="info"
                            border="top"
                        >
                            Informations sur le produit
                        </v-alert>
                        <v-row class="space-between">
                            <v-col class="primary--text text-left pl-12">
                                <h4>
                                    <li>
                                        <u> Nom du produit</u> :
                                    </li>
                                </h4>
                            </v-col>
                            <v-col class="warning--text text-left pl-12">
                                <h5>{{ product.name }}</h5>
                            </v-col>
                        </v-row>
                        <v-row class="space-between">
                            <v-col class="primary--text text-left pl-12">
                                <h4>
                                    <li>
                                        <u> Prix de l'unité</u> :
                                    </li>
                                </h4>
                            </v-col>
                            <v-col class="warning--text text-left pl-12">
                                <h5>{{ product.price }} <span>FCFA</span></h5>
                            </v-col>
                        </v-row>
                    </div>
                    <div>
                        <v-alert
                            dense
                            type="info"
                            border="top"
                        >
                            Informations sur le fournisseur
                        </v-alert>
                        <v-row class="space-between">
                            <v-col class="primary--text text-left pl-12">
                                <h4>
                                    <li>
                                        <u> Nom du fournisseur</u> :
                                    </li>
                                </h4>
                            </v-col>
                            <v-col class="warning--text text-left pl-12">
                                <h5>{{ fournisseur.name }} {{ fournisseur.surname }}</h5>
                            </v-col>
                        </v-row>
                        <v-row class="space-between">
                            <v-col class="primary--text text-left pl-12">
                                <h4>
                                    <li>
                                        <u> Adresse Email</u> :
                                    </li>
                                </h4>
                            </v-col>
                            <v-col class="warning--text text-left pl-12">
                                <h5>{{ fournisseur.email }}</h5>
                            </v-col>
                        </v-row>
                        <v-row class="space-between">
                            <v-col class="primary--text text-left pl-12">
                                <h4>
                                    <li>
                                        <u>Numéros de téléphone</u> :
                                    </li>
                                </h4>
                            </v-col>
                            <v-col class="warning--text text-left pl-12">
                                <h5>{{ fournisseur.phoneNumber }}</h5>
                            </v-col>
                        </v-row>
                        <v-row class="space-between">
                            <v-col class="primary--text text-left pl-12">
                                <h4>
                                    <li>
                                        <u>Adresse du fournisseur</u> :
                                    </li>
                                </h4>
                            </v-col>
                            <v-col class="warning--text text-left pl-12">
                                <h5>{{ fournisseur.adresse }}</h5>
                            </v-col>
                        </v-row>
                        <v-row class="space-between">
                            <v-col class="primary--text text-left pl-12">
                                <h4>
                                    <li>
                                        <u>Zone de livraison du produit</u> :
                                    </li>
                                </h4>
                            </v-col>
                            <v-col class="warning--text text-left pl-12">
                                <h5>{{ fournisseur.livraisonZone }}</h5>
                            </v-col>
                        </v-row>
                        <v-row justify="center" class="mb-2">
                            <v-btn 
                                color="primary"
                                @click="notifyProductChoosed()"
                                large
                                class="mt-5"
                                dark
                            >
                                <v-icon medium left dark>mdi-check</v-icon>
                                Ajouter au paquet
                            </v-btn>
                        </v-row>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <div class="description">
                    <v-card-title class="warning--text">
                       <h4><u> Description du produit</u> :</h4>
                    </v-card-title>
                    <v-card-text class="gray--text text-justify">
                        {{ product.description }}
                    </v-card-text>
                </div>
            </v-row>
        </v-card>
    </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import ProductViewDetailsBase from './ProductViewDetailsBase.vue';

export default Vue.extend({
  extends: ProductViewDetailsBase
});
</script>
