<template>
    <v-content class="bg">
        <v-card class="mx-auto card-center"
            max-width="700"
            outlined
        >
            <v-card tile id="formTitle"> 
                <v-card-title >
                    <v-card-text>
                        <h2> Reference de livraison</h2>
                    </v-card-text>
                </v-card-title>
            </v-card>
            
            <v-form v-model="valid">
                
                <h4 class="mt-4"> Informations du Donateur </h4>
                <v-text-field
                    prepend-icon="email"
                    name="email"
                    label="E-mail *"
                    type="email"
                    :rules="emailRules"
                    v-model="emailDon"
                    required
                >
                </v-text-field>
                <v-checkbox
                    color="warning"
                    v-model="setResponsableInformations"
                    label="Cochez si vous souhaitez entrer les informations d'un responsable qui s'assurera de la livraison de votre paquet!!! "
                >
                </v-checkbox>
                <div v-if="setResponsableInformations">
                    <h4> Informations du Responsable </h4>
                    <v-text-field
                        prepend-icon="person"
                        name="name"
                        label="Nom *"
                        type="text"
                        id="name"
                        :rules="nameRules"
                        v-model="nameDest"
                        required
                    >
                    </v-text-field>
                    <v-text-field
                        prepend-icon="phone"
                        name="phone"
                        label="Téléphone *"
                        type="text"
                        id="name"
                        :rules="phoneRules"
                        v-model="phone"
                        required
                    >
                    </v-text-field>
                    <v-text-field
                        prepend-icon="email"
                        name="email"
                        label="E-mail Responsable *"
                        type="email"
                        id="email"
                        :rules="emailRules"
                        v-model="emailDest"
                        required
                    >
                    </v-text-field>
                </div>
                <h4> Informations sur la Structure Sanitaire </h4>
                    <v-text-field
                    prepend-icon="place"
                    name="ville"
                    label="Ville *"
                    type="text"
                    id="ville"
                    :rules="villeRules"
                    v-model="ville"
                    required
                >
                </v-text-field>
                <v-text-field
                    prepend-icon="home"
                    name="hosto"
                    label="Structure Sanitaire *"
                    type="text"
                    id="hosto"
                    :rules="nameRules"
                    v-model="hosto"
                    required
                ></v-text-field>
                <v-text-field
                    prepend-icon="place"
                    name="rue"
                    label="Rue"
                    type="text"
                    id="rue"
                    v-model="rue"
                    required
                >
                </v-text-field>
            
            </v-form>
            <v-card-actions class="bouton" card-end>
                <v-spacer></v-spacer>
                <v-btn  
                    class="my-2" 
                    color="error" 
                    @click="clear" 
                    large
                >
                    Annuler
                </v-btn>

                <v-btn  
                    :disabled="!valid" 
                    class="my-2" 
                    color="primary"
                    @click="validateCommande()"
                    large
                >
                    Envoyer
                </v-btn>
            </v-card-actions>
        </v-card>

        <v-dialog
            v-model="dialogSuccess"
            width="500"
        >
            <v-card>
                <v-card-title
                    class="headline grey lighten-2"
                    primary-title
                >
                    Opération terminée
                </v-card-title>

                <v-alert
                    prominent
                    type="success"
                    border="top"
                >
                    Les différentes informations ont été envoyées au fournisseur avec success, Celui vous contactera sûrement par email ou vous appellera pour la suite des opération. Merci d'avoir fait confiance à covid 237!
                </v-alert>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="dialogSuccess = false"
                    >
                        Ok
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-content>
</template>
<script lang="ts">
import Vue from 'vue';
import DeliveryInfoEditBase from './DeliveryInfoEditBase.vue';

export default Vue.extend({
  extends: DeliveryInfoEditBase,
});
</script>