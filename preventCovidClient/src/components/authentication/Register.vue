<style>
.height-field-confirm {
    height: 70px;
}
</style>
<template>
    <div>
            <v-container  style="max-width:350px; margin: 15% auto auto auto">
                <v-card>
                    <v-card-title class="ml-1">
                        <span style="margin-left: 10px;"> Register </span>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text class="justify-center">
                        <v-row>
                            <v-col cols="12" class="height-field-confirm mt-0 pt-0" >
                                <v-text-field v-model="registerForm.name" 
                                  label="Name">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" class="height-field-confirm mt-0 pt-0">
                                <v-text-field v-model="registerForm.email" 
                      
                                    label="Email">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" class=" mt-0 pt-0 height-field-confirm">
                                <v-text-field v-model="registerForm.password" 
                                   
                                    :append-icon="showpassword ? 'mdi-eye' : 'mdi-eye-off'" 
                                    :type="showpassword ? 'text' : 'password'"
                                    
                                    label="Password"
                                    hint="At least 8 characters"
                                    @click:append="showpassword = !showpassword"
                                   >
                                </v-text-field>                            
                            </v-col>
                            <v-col cols="12" class=" mt-0 pt-0 height-field-confirm">
                                <v-text-field v-model="registerForm.cpassword" 
                                    :append-icon="showpassword ? 'mdi-eye' : 'mdi-eye-off'" 
                                    :type="showpassword ? 'text' : 'password'"
                                    label="Confirm password"
                                    hint="At least 8 characters"
                                    @click:append="showpassword = !showpassword"
                                   >
                                </v-text-field>                            
                            </v-col>
                            <v-col cols="12" class=" pb-0" style="text-align:center">
                                <v-btn style ="border:none!important" text small color="" @click="login()">Connexion here</v-btn>                         
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="cancel()"> Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="register()"> Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import RegisterBase from './RegisterBase.vue';

export default Vue.extend({
  extends: RegisterBase
});
</script>