import packageJson from '../../package.json';
export const environment = {
  appVersion: packageJson.version,

  production: false,
  baseUrl: 'https://stage-gamificationapi.theproindia.com',
  blobEndpoint: 'https://stagegamificationui.blob.core.windows.net',
  containerName: 'sandbox-assets',
  clientId: '08ce0068-2906-44d4-b840-b268e5511624',
  clientSecret: '2BG8Q~Vsd33.QQ93jcejZkrr5aVyXvxbl_FrubYg',
  //Paste your code in gamification object
  gamification: {
    userId: 'RedeemPlayer-2',
    gameId: '6527d7ec644011d69b2f7e18',
    applicationId: '6527d7c664401183eb2f7df7',
  },
};
