// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  WEBSOCKET_URL: 'wss://devapi.itsallsavvy.com',
  API_URL: 'https://devapi.itsallsavvy.com',
  API_HOST: 'devapi.itsallsavvy.com',
  SAVVY_PAY_CLIENT_ID: 'live_HLZITHD3SJD6DKZW2ACQED7I3ILRPJJ4',

  VERSION: require('../../package.json').version,
  VERSION_URL: '',
  VERSION_CHECK_FREQUENCY: 1000 * 60 * 5 // 5 minutes
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
