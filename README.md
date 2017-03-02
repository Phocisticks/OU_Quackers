QuackJello
We are using angular 1.x and Angular material for this project.
  https://angularjs.org/
  https://material.angularjs.org/latest/
Please check the documentation if you are new to this or you can direct your questions to anyone on the team who is more familiar with this. 
 
After you clone the repo.
* run npm install in the project directory. 
* npm start 
* go to localhost:8080/ 


Project Structure
This project has wepack and all cool features like hotreloading included so you dont have to reload your page everytime you change something in your code. You can find more info on webpack here https://webpack.github.io/docs/

All our components will be in the OU_Quackers/src/app/components/

Adding a component

* Create a directory eg. LoginComponent in OU_Quackers/src/app/components/
* Create the html template and js file for the component in your components directory. 
* Now in app.js you will need to add your component to the module.
* First import your component
     
    ```javascript
        import {LoginComponent} from './components/logincomponent/login.component.js';
     ```
 * Then add your component to the module
     
        ```javascript
            export default app = angular.module('app', [uirouter,'ngMaterial'])
               .directive('app', app)
               .controller('AppCtrl', AppCtrl)
               .component('appHeader',AppHeaderComponent)
               .component('homeComponent',HomeComponent)
               .component('LoginComponent', LoginComponent)
        ```
Routes
We are using angular ui-router for our routes. You can find more info on that here https://ui-router.github.io/ng1/tutorial/helloworld
 
 All our views/states are registered in our routes.config file in OU_Quackers/src/app/config/
 
 In routes.config.js. We already have some states added for the homecomponent and toolbar and others  like the login state, forgot password state, commented out. 
 
 Adding a state
* Add your new state to the $stateProvider 
   ```javascript
     .state('app.login', {
                 url: '/login',
                 data: {auth:false},
                 views: {
                     'main@': {
                         component: "loginComponent"
                    }
                }
            })
     ```
    * Once your state has been added you can view it at the url you specified. eg. localhost:8080/login
  
  There is more information on how to navigate to a state and do other cool stuff like loading data before the view       appears(bindings) in the ui-router documentation. 
  
  Also please look at the js file for home.component.js if you are confused on how to write the js code for your component 
  more information on angular components here https://docs.angularjs.org/guide/component

