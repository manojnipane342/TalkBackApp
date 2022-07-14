// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseApiUsersUrl: 'https://localhost:44370',
  usersUrl:'/api/Users',
  register: '/api/Register/signUp',
  login: '/api/Login/login'
};


export const contactsEnvironment = {
  baseApiContactsUrl: 'https://localhost:44309',
   contactsUrl:'/api/Contacts'
}


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
