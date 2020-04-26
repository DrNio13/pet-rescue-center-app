export const environment = {
  production: true,
  auth0: {
    url: 'drnio13.eu', // the auth0 domain prefix
    audience: 'pets', // the audience set for the auth0 app
    clientId: 'YE2nSEZRU0gtIAU0bG87N8vqRFv1U9s3', // the client id generated for the auth0 app
    callbackURL: 'https://pet-rescue-center-app.herokuapp.com', // the base url of the running ionic application.
  }
};
