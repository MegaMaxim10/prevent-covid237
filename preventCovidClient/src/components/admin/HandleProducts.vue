<template>
    <v-data-table v-model="selectedProducts" :headers="headers" :items="productList"  :search="search"  :items-per-page="5"  :single-select="singleSelect"
        item-key="product_id" show-select class="elevation-1">
        <template v-slot:item.action1="{ item }">
            <template v-if="(item.state  === 0)">
                <v-icon color="green">check</v-icon>
            </template>
            <template v-else>
                <v-icon color="red">clear</v-icon>
            </template>
        </template>


        <template v-slot:top>
        <v-toolbar flat color="white">
            <v-toolbar-title>Handle products to prevent Coronavirus</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" persistent max-width="350px">
            <template v-slot:activator="{ on: dialog }">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on: tooltip }">
                        <v-icon color="primary" @click="showProductInfoDialog()" class="ml-3" v-on="{ ...tooltip, ...dialog }" size="25">mdi-eye</v-icon>
                    </template>
                <span>See more about a product</span>
                </v-tooltip>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on: tooltip }">
                        <v-icon color="#24FF73" @click="showValidationEmailDialog()" class="ml-3" v-on="{ ...tooltip, ...dialog }" size="25">check_circle</v-icon>
                    </template>
                <span>Sent validation email to Health personnel </span>
                </v-tooltip>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on: tooltip }">
                        <v-icon color="red lighten-2" @click="showProductCancelDialog()" class="ml-3" v-on="{ ...tooltip, ...dialog }" size="25">cancel</v-icon>
                    </template>
                <span>Delete products</span>
                </v-tooltip>
            </template>

            <template v-if="click === 2">
                <v-card  justify="center">
                <v-card-title class="ml-1"> 
                    <v-icon color="green">mdi-arrow-right-bold-circle</v-icon>
                    <span style="margin-left: 10px;"> Send email </span>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text style="height: 50px; margin-top:10px" class="pb-5">
                    <span style="margin-top: 20px">Do you really want to send validation product to Heal Personnel ? </span><br/>
                    <span style="padding-left:5px; color:red;" v-if="selectedProducts.length >= 0 ">Selected orders: {{selectedProducts.length}} </span>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
                    <v-btn color="green darken-1" text @click="sendEmailToHealthPersonnel()">Send</v-btn>
                </v-card-actions>
                </v-card>
            </template>

            

            <template v-if="click === 0">
                <v-card  justify="center">
                <v-card-title class="ml-1"> 
                    <v-icon color="red accent-3">error</v-icon>
                    <span style="margin-left: 10px;"> ERROR </span>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text v-if="errorMessageState === 0" style="height: 100px; margin-top:10px" class="pb-5">
                    <span style="margin-top: 20px"> 1- Please select  orders before sent confirmation request</span><br>
                    <span style="margin-top: 20px"> 2- You can select many orders</span><br/>
                    <span style="padding-left:5px; color:red;" v-if="selectedProducts.length >= 0 ">Selected orders: {{selectedProducts.length}} </span>
                </v-card-text>
                <v-card-text v-if="errorMessageState === 1" style="height: 100px; margin-top:10px" class="pb-5">
                    <span style="margin-bottom: 20px"> 1- Please select one order before sent confirmation request</span><br>
                    <span style="padding-left:5px;"> 2- Ensure that you have selected only one order</span><br/>
                    <span style="padding-left:5px; color:red;" v-if="selectedProducts.length >= 0 ">Selected orders: {{selectedProducts.length}} </span>
                </v-card-text>
                <v-card-text v-if="errorMessageState === 2" style="height: 100px; margin-top:10px" class="pb-5">
                    <span style="margin-bottom: 20px"> 1- Please select order before sent cancellation request</span><br>
                    <span style="padding-left:5px;"> 2- Ensure that you have selected only one order</span><br/>
                    <span style="padding-left:5px; color:red;" v-if="selectedProducts.length >= 0 ">Selected orders: {{selectedProducts.length}} </span>
                </v-card-text>
                    <v-card-text v-if="errorMessageState === 4" style="height: 100px; margin-top:10px" class="pb-5">
                    <span style="margin-bottom: 10px"> Please select only one order before see the order informations</span><br>
                    <span style="padding-left:5px; color:red;" v-if="selectedProducts.length >= 0 ">Selected orders: {{selectedProducts.length}} </span>
                </v-card-text>
                <v-card-text v-if="errorMessageState === 5" style="height: 100px; margin-top:10px" class="pb-5">
                    <span style="margin-bottom: 20px"> 1- Please select the orders before sending them to Afterbuy</span><br>
                    <span style="padding-left:5px;"> 2- you must select a minimum of one order</span><br/>
                    <span style="padding-left:5px; color:red;" v-if="selectedProducts.length >= 0 ">Selected orders: {{selectedProducts.length}} </span>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn text style="margin-left:75%;" background-color="grey lighten-5" text @click="closeErrorMessageDialog()">Close</v-btn>
                </v-card-actions>
                </v-card>
            </template>

            <template v-if="click === 2">
                <v-card>
                <v-card-title class="ml-1"> 
                    <v-icon color="green">mdi-eye</v-icon>
                    <span style="margin-left: 10px;"> Product informations </span>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-row>
                    <v-col cols="12" class=" height-field-confirm">
                        <v-text-field readonly v-model="selectedProducts[0].product_name" label="Title"></v-text-field>
                    </v-col>
                    
                    <v-col cols="12" class=" height-field-confirm">
                        <v-text-field readonly v-model="selectedProducts[0].product_id" label="Idealo ID"></v-text-field>
                    </v-col>
                        <v-col cols="12" class=" height-field-confirm">
                        <v-text-field readonly v-model="selectedProducts[0].Product_price" label="Customer email"></v-text-field>
                    </v-col>
                    </v-row>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text style="margin-left:75%;" background-color="grey lighten-5" text  @click="closeProductInfoDialog()">Close</v-btn>
                </v-card-actions>
                </v-card>
            </template>
            </v-dialog>
        </v-toolbar>
        </template>
    </v-data-table>
</template>
<script lang="ts">
import Vue from 'vue';
import HandleProductsBase from './HandleProductsBase.vue';

export default Vue.extend({
  extends: HandleProductsBase,
});
</script>