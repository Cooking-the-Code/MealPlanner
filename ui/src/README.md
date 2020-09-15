Here's a quick overview of what are in these folders. Folders will contain the .js file & the corresponding .test.js file.  All styling files will be in the /sass folder.

# /assets
Contains images, logos

# /components 
Components that are shared between multiple pages

# /contexts 
Keeps all of the context components in a separate folder, to not confuse them with plain old react components. A common context to implement is UserAuthContext.js

# /lib 
When using a 3rd party library, i.e Firebase, I like to put all of the initialization in a folder called lib. I'll then export the instance of that initialized library

- example
import firebase from "firebase/app";
firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});
export default firebase;

# /pages 
Pages are also react components, but they represent a page or screen of an app. These map 1:1 with a route in the AppRoutes.tsx file.

# /sass 
Generated & custom SCSS stylesheet go here.

# /services 
All of my api methods are put in a folder called services. this is favorable so that we don't put the business logic of an API call directly into a component, and so that any component can easily reference a service that it needs.

# AppRoutes
This file contains all the routes of my application so that we can see it all at a glance.