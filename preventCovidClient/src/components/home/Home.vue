<style scoped>
  .bottom-gradient {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }
  .repeating-gradient {
    background-image: repeating-linear-gradient(-45deg,
                        rgba(255,0,0,.25),
                        rgba(255,0,0,.25) 5px,
                        rgba(0,0,255,.25) 5px,
                        rgba(0,0,255,.25) 10px
                      );
  }
  .repeating-gradient-info {
    background-image: repeating-linear-gradient(-45deg,
                        rgba(0, 0, 255, 0.158) 5px,
                        rgba(0, 0, 255, 0.212) 10px
                        rgba(255, 0, 0, 0.185),
                        rgba(255, 0, 0, 0.158) 5px,
                      );
  }
  .space-between {
    justify-content: space-between;
  }
</style>
<template>
  <div>
	<div v-if="loading===2">  
		<div  class="caroussel" fill-width width="100%!important">
			<v-carousel cycle height="600" width="100%!important" hide-delimiter-background dark>
				<v-carousel-item v-for="(item,i) in slideItems" :key="i" :src="item.src" width="100%!important">
				<v-row class="fill-height" align="center" justify="center" light>
					<div class="white--text  display-3 font-weight-black text-center">{{ item.title }}</div>
				</v-row>
				</v-carousel-item>
			</v-carousel>
		</div>
		
		<div class="product-list">
		<v-parallax src="https://cdn.pixabay.com/photo/2020/01/26/11/46/paper-flower-background-4794429_960_720.jpg"  height= auto  dark>
			<v-row>
			<v-col v-for="product in productList" :key="product.product_id"> 
				<v-card class="mx-auto" max-width="390" min-height="511">
					<v-hover>
						<template v-slot:default="{ hover }">
							<v-card class="pa-2" outlined tile>
								<v-img contain max-height="300" min-height="300" :src="product.product_link">
									<v-checkbox color="primary" v-model="product.checked" hide-details></v-checkbox>
								</v-img>
								<v-fade-transition>
									<v-overlay v-if="hover"  absolute color="#036358">
										<div align="center">
											<v-btn color="primary" v-if="!product.checked" @click="addOrRemoveProductOnChoosedList(product)" large class="mt-5" dark>
												<v-icon medium left dark>mdi-check</v-icon> Sélectionner le produit
											</v-btn>
											<v-btn color="error" v-if="product.checked" @click="addOrRemoveProductOnChoosedList(product)" large class="mt-5" dark>
												<v-icon medium left dark>mdi-alert-circle</v-icon>Enlever ce produit du paquet
											</v-btn>
										</div>
									</v-overlay>
								</v-fade-transition>
							</v-card>
						</template>
					</v-hover>  
					<v-card class="pa-2" outlined tile>
						<span><h2 class="title primary--text ml-3">{{ product.product_name }}</h2></span>
						<v-card-text>{{ product.product_desc }}</v-card-text>
					<v-card-title>
					<v-btn  color="primary" class="mt-3" @click="showProductDetailsDialog(product)"  bottom text large dark>
						Voir les détails <v-icon medium right dark>mdi-chevron-right</v-icon>
					</v-btn>
					</v-card-title>
				</v-card>
				</v-card>
			</v-col>
			</v-row>
			<v-fab-transition class="floating">
				<v-btn color="warning" class="floating-button" @click="displayProductsChoosedList()" light right bottom fixed x-large>
					<v-icon left large>mdi-plus</v-icon> Faire le don
				</v-btn>
			</v-fab-transition>
		</v-parallax>
		</div>
		<Footer/>
		<div class="text-center">
		<v-dialog v-model="firstAlert" width="800" persistent>
			<v-card>
				<v-card-title class="headline grey lighten-2 p-9" primary-title>
					Bienvenue sur PREVENT-COVID 237 !
				</v-card-title>
				<v-alert dense type="warning" prominent border="left">A lire attentivement avant de commencer</v-alert>
				<v-img src="https://content.thriveglobal.com/wp-content/uploads/2018/01/intro.jpg?w=1180" max-height="130" class="grey darken-4 white--text">
					<h2 class="fill-height repeating-gradient text-center  white--text font-weight-bold">Un geste pour améliorer des vies et aider à prévenir le Covid au Cameroun !</h2>
				</v-img>
				<v-card-text>{{ welcomeText }}</v-card-text>
				<v-divider></v-divider>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" text @click="firstAlert = false">J'ai Compris !</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		</div>
		<div>
		<v-dialog v-model="alertIfproductChoosed" width="750" persistent>
			<v-card>
			<v-card-title class="headline grey lighten-2 p-9">
				Votre paquet est prêt !
			</v-card-title>
			<v-alert dense type="success" prominent border="left">
				{{ currentUser.name }} {{ currentUser.surname }} : nous vous remercions infiniment de votre contribution. Voici la liste des produits que vous avez sélectionné ({{ productsChoosedList.length }}): 
				
				<li v-for="product in productsChoosedList" :key="product.product_id"  class="secondary--text ml-5">
					{{ product.name }}
				</li>
			</v-alert>
			<v-img 
				src="https://c.wallhere.com/photos/79/6b/1920x1080_px_balls_Green_happy_smiles_yellow-1747791.jpg!d"
				max-height="130"
				class="grey darken-4 white--text"
			>
				<h2 class="fill-height repeating-gradient text-center  white--text font-weight-bold">Le paquet a bien été constituer</h2>
			</v-img>

			<v-card-text>
				<h2 class="primary--text title text-center">Souhaitez-vous finaliser la commande?</h2>
			</v-card-text>
			<v-divider></v-divider>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="warning" text @click="alertIfproductChoosed = false" ><v-icon medium left dark>mdi-alert-circle</v-icon>Annuler</v-btn>
				<v-btn color="primary" text @click="showDeliveryInfoDialog()">Continuer<v-icon medium right dark>mdi-chevron-right</v-icon></v-btn>
			</v-card-actions>
			</v-card>
		</v-dialog>
		</div>
		<v-overlay :value="overlay" v-if=" loadingDonation === 1 ">
            		<v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
		<div class="text-center">
		<v-dialog v-model="alertIfProductNotChoosed" width="750" persistent>
			<v-card>
				<v-card-title class="headline grey lighten-2 p-9" primary-title>
					Oups aucun produit n'a été sélectionné !!
				</v-card-title>
				<v-alert dense type="info" prominent border="left">
					Si vous souhaitez faire un don, sélectionner d'abord des produits à l'acceuil et ensuite cliquer sur le boutton <strong>faire un don</strong> qui est au coin inférieur droit de votre écran
				</v-alert>
				<v-img  src="https://content.thriveglobal.com/wp-content/uploads/2018/01/intro.jpg?w=1180" class="grey darken-4 white--text" max-height="120">
					<h2 class="fill-height repeating-gradient text-center  white--text font-weight-bold">Aider les populations du Cameroun</h2>
				</v-img>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" text @click="alertIfProductNotChoosed = false">J'ai Compris !</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>

		<v-dialog v-model="showDeliveryInfo" width="750" persistent>
			<v-card class="mx-auto card-center pa-5" max-width="700" outlined>
				<v-card-title><h2> Reference de livraison</h2></v-card-title>
				<v-form v-model="valid">
					<h4 class="mt-4"> Informations du Donateur </h4>
					<v-text-field prepend-icon="email" name="email" label="E-mail *" type="email" :rules="emailRules" v-model="donation.donateurEmail" required></v-text-field>
					<v-checkbox color="warning" v-model="setReceiverInfos" label="Cochez si vous souhaitez entrer les informations d'un responsable qui s'assurera de la livraison de votre paquet!!! "></v-checkbox>
					<div v-if="setReceiverInfos">
						<h4> Informations du Responsable </h4>
						<v-text-field prepend-icon="person" name="name" label="Nom *" type="text" id="name" :rules="nameRules" v-model="donation.receiverName" required></v-text-field>
						<v-text-field prepend-icon="email" name="email" label="E-mail Responsable *" type="email" id="email" :rules="emailRules" v-model="donation.receiverEmail"></v-text-field>
					</div>
					<h4> Informations sur la Structure Sanitaire </h4>
					<v-text-field prepend-icon="place" name="pays" label="Pays *" type="text" id="pays" :rules="countryRules" v-model="donation.country" required value="Cameroun"></v-text-field>
					<v-text-field prepend-icon="place" name="town" label="Ville *" type="text" id="town" :rules="townRules" v-model="donation.town" required></v-text-field>
					<v-text-field prepend-icon="home" name="locality" label="Structure Sanitaire *" type="text" id="locality" :rules="localityRules" v-model="donation.locality" required></v-text-field>
					<v-text-field prepend-icon="place" name="rue" label="Rue" type="text" id="rue" v-model="donation.rue" required></v-text-field>
				</v-form>
				<v-card-actions class="bouton" card-end>
					<v-spacer></v-spacer>
					<v-btn   class="my-2"   color="error"  @click="showDeliveryInfo = false" large>Annuler</v-btn>
					<v-btn  :disabled="!valid"  class="my-2"  color="primary" @click="makeDonation()" large>Envoyer</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>

		<v-dialog v-model="detailProduit" width="750">
            <v-card>
				<v-card-title class="headline grey lighten-2" primary-title>Détails du produit</v-card-title>
				<v-row class="detailBg">
					<v-col justify="center" align="center">
						<v-card class="carrousel-box">
							<v-carousel  hide-delimiter-background dark  style="height:250px; width:300px">
								<v-carousel-item v-for="(item,i) in [productDetailsDialog.product_link]" :key="i" :src="item" content reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
							</v-carousel>
						</v-card>
					</v-col>
					<v-col>
						<v-alert dense  type="info" border="top">Informations sur le produit</v-alert>
						<v-row class="space-between">
							<v-col class="primary--text text-left pl-5">
								<li> Nom du produit: {{ productDetailsDialog.product_name }}</li>
								<li> Prix de l'unité: {{ productDetailsDialog.product_price }}</li>
							</v-col>
						</v-row>
						<v-alert dense type="info" border="top">
							Informations sur le fournisseur
						</v-alert>
						<v-row class="space-between">
							<v-col class="primary--text text-left pl-5">
								<li>Nom du fournisseur : </li>
								<li>Adresse Email : </li>
								<li>Numéros de téléphone : </li>
								<li>Adresse du fournisseur :</li>
								<li>Zone : <b>{{ productDetailsDialog.product_delivery_locality }}</b></li>
							</v-col>
						</v-row>
					</v-col>
              </v-row>
              <v-row>
                <div class="description">
                    <v-card-title class="warning--text">
                      <h4><u> Description du produit</u> :</h4>
                    </v-card-title>
                    <v-card-text class="gray--text text-justify">
                      {{ productDetailsDialog.product_large_desc }}
                    </v-card-text>
                </div>
              </v-row> 
            </v-card>
          </v-dialog>
		</div>
	</div>
	<v-card v-else>
		<v-dialog v-model="lazyLoading" persistent fullscreen content-class="loading-dialog">
		<v-container fill-height>
			<v-layout row justify-center align-center>
			<v-progress-circular indeterminate :size="80" :width="8" color="purple">Loading</v-progress-circular>
			</v-layout>
		</v-container>
		</v-dialog>
	</v-card>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import HomeBase from './HomeBase.vue';

export default Vue.extend({
  extends: HomeBase
});
</script>