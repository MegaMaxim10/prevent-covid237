export default {
  oidc: {
    clientId: '0oagznvrvKl4SXsVG356',
    issuer: 'https://dev-714241.okta.com/oauth2/default',
    redirectUri: 'http://localhost:8080/implicit/callback',
    scope: 'openid profile email',
  },
  resourceServer: {
    messagesUrl: 'http://localhost:6780/api/messages',
  },
};
