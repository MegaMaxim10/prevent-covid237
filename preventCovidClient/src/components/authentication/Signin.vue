<template>
    <div>
        <v-container  style="max-width:350px; margin: 30% auto auto auto">
            <v-card>
                <v-card-title class="ml-1">
                    <span style="margin-left: 10px;"> Login </span>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="justify-center">
                    <v-row>
                        <v-col cols="12" class="height-field-confirm">
                            <v-text-field v-model="loginForm.email" 
                                prepend-icon="mdi-account"
                                label="Email"
                                required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" class=" pb-0">
                            <v-text-field v-model="loginForm.password" 
                                prepend-icon="mdi-lock" 
                                :append-icon="showpassword ? 'mdi-eye' : 'mdi-eye-off'" 
                                :type="showpassword ? 'text' : 'password'"
                                
                                label="Password"
                                hint="At least 8 characters"
                                @click:append="showpassword = !showpassword"
                                required
                                >
                            </v-text-field>                            
                        </v-col>
                        <v-col v-if="errorMessage !== ''" cols="12" class="pt-0 pb-0 ml-9" >
                            <span style="color:red" >{{ errorMessage }}</span>                        
                        </v-col>
                        <v-col cols="12" class=" pb-0" style="text-align:center">
                            <v-btn style ="border:none!important" text small color="" @click="createAccount()">Create your account</v-btn>                         
                        </v-col>   
                   </v-row>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="login()">Send </v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
        <v-overlay :value="overlay" v-if=" loading === 1 ">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SigninBase from './SigninBase.vue';

export default Vue.extend({
  extends: SigninBase
});
</script>