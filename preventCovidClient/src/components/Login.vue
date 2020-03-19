/*!
* Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
* The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the 'License.')
*
* You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*
* See the License for the specific language governing permissions and limitations under the License.
*/

<template>
  <div class='login'>
    <div id='okta-signin-container'></div>
  </div>
</template>

<script lang="js">
  import OktaSignIn from '@okta/okta-signin-widget';
  import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
  import '@okta/okta-signin-widget/dist/css/okta-theme.css';

  import oktaConfig from '../.okta.config';

  export default {
    name: 'Login',
    mounted: () => {
      this.$nextTick(function() {
        const signInWidgetConfig = {
          // Enable or disable widget functionality with the following options.
          // Some of these features require additional configuration in your Okta admin settings.
          // Detailed information can be found here: https://github.com/okta/okta-signin-widget#okta-sign-in-widget
          // Look and feel changes:
          logo: '//logo.clearbit.com/okta.com', 
          // Try changing 'okta.com' to other domains, like: 'workday.com', 'splunk.com', or 'delmonte.com'
          language: 'it', // Try: [fr, de, es, ja, zh-CN]
          // Full list: https://github.com/okta/okta-signin-widget#language-and-text
          i18n: {
            // Overrides default text when using English. Override other languages by adding additional sections.
            en: {
              'primaryauth.title': 'Sign In', // Changes the sign in text
              'primaryauth.submit': 'Sign In' // Changes the sign in button
              // More e.g. [primaryauth.username.placeholder,  primaryauth.password.placeholder, needhelp, etc.].
              // Full list here:
              // https://github.com/okta/okta-signin-widget/blob/master/packages/@okta/i18n
              // /dist/properties/login.properties
            }
          },
          // Changes to widget functionality
          features: {
            registration: true, // Enable self-service registration flow
            rememberMe: true, // Setting to false will remove the checkbox to save username
            // multiOptionalFactorEnroll: true,  // Allow users to enroll in multiple optional factors before finishing 
            // the authentication flow.
            // selfServiceUnlock: true,          // Will enable unlock in addition to forgotten password
            // smsRecovery: true,                // Enable SMS-based account recovery
            // callRecovery: true,               // Enable voice call-based account recovery
            router: true // Leave this set to true for the API demo
          },

          baseUrl: oktaConfig.oidc.issuer.split('/oauth2')[0],
          clientId: oktaConfig.oidc.clientId,
          redirectUri: oktaConfig.oidc.redirectUri,
          authParams: {
            responseType: ['id_token', 'token'],
            issuer: oktaConfig.oidc.issuer,
            display: 'page',
            scopes: oktaConfig.oidc.scope.split(' ')
          }
        };
        this.widget = new OktaSignIn(signInWidgetConfig);

        this.widget.renderEl(
          { el: '#okta-signin-container' },
          () => {
            /**
             * In this flow, the success handler will not be called because we redirect
             * to the Okta org for the authentication workflow.
             */
          },
          (err) => {
            throw err;
          }
        );
      });
    },
    destroyed() {
      // Remove the widget from the DOM on path change
      this.widget.remove();
    }
  };
</script>
