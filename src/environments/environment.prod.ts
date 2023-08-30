export const environment = {
  production: true,
  WEBSOCKET_URL: 'wss://api.itsallsavvy.com',
  API_URL: 'https://api.itsallsavvy.com',
  API_HOST: 'api.itsallsavvy.com',
  SAVVY_PAY_CLIENT_ID: 'live_HLZITHD3SJD6DKZW2ACQED7I3ILRPJJ4',

  VERSION: require('../../package.json').version,
  VERSION_URL: '/version.json',
  VERSION_CHECK_FREQUENCY: 1000 * 60 * 5 // 5 minutes
};
