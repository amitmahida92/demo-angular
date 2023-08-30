export const environment = {
  production: false,
  WEBSOCKET_URL: 'wss://devapi.itsallsavvy.com',
  API_URL: 'https://devapi.itsallsavvy.com',
  API_HOST: 'devapi.itsallsavvy.com',
  SAVVY_PAY_CLIENT_ID: 'test_43EOC6HK7ZAIDIUAZVR6RD4FUIGMUP5F',

  VERSION: require('../../package.json').version,
  VERSION_URL: '',
  VERSION_CHECK_FREQUENCY: 1000 * 60 * 5 // 5 minutes
};
