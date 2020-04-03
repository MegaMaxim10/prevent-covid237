<style scoped>
    .bg {
        background-image: url('https://images.pexels.com/photos/1227513/pexels-photo-1227513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
        background-repeat: no-repeat;
        background-size: cover;
    }
    h2 {
        text-align: center;
        text-transform: capitalize;
        color:lavender;
    }
    h4 {
        text-align: center;
        text-transform: capitalize;
    }
    #formTitle {
        background-color: rgb(77, 147, 226);
    }
    .card-center {
        margin-top: 1%;
        margin-bottom: 1%;
        padding: 3%;
    }
    .donateur {
        border-style: inset;
    }
    .productImage {
        height: 100px; 
        width:160px; 
        float:left;
    }
</style>
<template>
    <v-content class="bg">
        <v-card class="mx-auto card-center" max-width="700" outlined>
            <v-card tile id="formTitle"> 
                <v-card-title>
                    <v-card-text>
                        <h2> Ajouter un produit</h2>
                    </v-card-text>
                </v-card-title>
            </v-card>
            <v-form v-model="valid">
                <v-text-field prepend-icon="name"  name="name" label="Nom du produit *" type="text" :rules="nameRules" v-model="product.name" required></v-text-field>
                <v-text-field prepend-icon="cash" name="price" label="Prix du produit *" type="text" id="price" :rules="priceRules" v-model="product.price" required></v-text-field>
                <v-text-field prepend-icon="cash" name="price" label="Description courte *" type="text" id="description" :rules="descriptionRules" v-model="product.description" required></v-text-field>
                <v-textarea solo prepend-icon="pen" name="descrition" label="Description large du produit*"
                    placeholder="Description  détaillée de votre produit: sa composition, ses avantages ..."
                    hint="La description ne doit pas dépasser 400 caractères"  type="text"  id="description" :rules="largeDescRules" v-model="product.largeDesc" counter required>
                </v-textarea>
                <v-select v-model="product.region" :items="regions" :chips= true :multiple= true :rules="regionRules" prepend-icon="place" label="Régions de livraison"></v-select>
                <v-layout row  class="mt-4">
                    <v-btn @click="showLoadProductImageDialog()" color="blue lighten-5"><v-icon class="mr-1" dark>mdi-cloud-upload</v-icon>Add products images</v-btn>
                    <span class="ml-5">Ajouter les images des produits</span>
                </v-layout>
                <v-layout row style="height: 100px" class="mt-4 mb-7" >
                    <v-card v-if="loadingImage === 1">
                        <span>Veuillez patienter le chargement de l'image ... </span>
                    </v-card>
                    <v-card v-else>
                        <v-img :src="file" v-if="file !== null" class="ma-5 productImage"></v-img>
                        <v-img src="../../assets/image1.jpg" v-if="file === null" class="ma-5 productImage"></v-img>
                        <v-img :src="file" v-if="file != null" class="ma-5 productImage"></v-img>
                        <v-img src="../../assets/image1.jpg" v-if="file === null" class="ma-5 productImage"></v-img>
                        <v-img :src="file" v-if="file != null" class="ma-5 productImage"></v-img>
                        <v-img src="../../assets/image1.jpg" v-if="file === null" class="ma-5 productImage"></v-img>
                    </v-card>
                </v-layout>
            </v-form>
            <v-card-actions class="bouton mt-7" card-end>
                <v-spacer></v-spacer>
                <v-btn  class="my-2"  color="error" @click="clear()" large>Annuler</v-btn>
                <v-btn  :disabled="!valid" class="my-2" color="primary" @click="saveProduct()" large>Envoyer</v-btn>
            </v-card-actions>
        </v-card>
        <v-overlay :value="overlay" v-if=" loading === 1 ">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
        <v-dialog v-model="loadProductImagesDialog" width="300">
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title style="font-size:12px">Add product image</v-card-title>
                <v-divider></v-divider>
                <v-file-input accept='.jpg' maxFileSize="10" label="" placeholder="Click here" v-model="file" hide-details height="100%" width="100%"></v-file-input>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="cancelDialog()">Cancel </v-btn>
                    <v-btn color="primary" text @click="loadProductImage()">Load </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="notifySaveProductState" width="500">
            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>Opération terminée</v-card-title>
                <v-alert prominent type="success" border="top">Le produit a été enregistré avec succès !</v-alert>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="notifySaveProductState = false">Cancel </v-btn>
                    <v-btn color="primary" text @click="gotoHome()">Home </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-content>
</template>
<script lang="ts">
import Vue from 'vue';
import ProductViewEditBase from './ProductViewEditBase.vue';

export default Vue.extend({
  extends: ProductViewEditBase
});
</script>