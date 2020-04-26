/* @w replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'drnio13.eu', // the auth0 domain prefix
    audience: 'pets', // the audience set for the auth0 app
    clientId: 'YE2nSEZRU0gtIAU0bG87N8vqRFv1U9s3', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:4200', // the base url of the running ionic application.
  }
};
