import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-material/angular-material.css';
import uirouter from 'angular-ui-router';
import {HomeComponent} from './components/homecomponent/home.component.js';
import {AppHeaderComponent} from './components/app-header/app-header.component.js';
import {LoginComponent} from
'./components/LoginComponent/login.component.js'

import '../style/app.css';
import RoutesConfig from './config/routes.config';
import ThemeProvider from './config/theme.config.js'

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {


  }
}



export default app = angular.module('app', [uirouter,'ngMaterial'])
     .directive('app', app)
     .controller('AppCtrl', AppCtrl)
     .component('appHeader',AppHeaderComponent)
     .component('homeComponent',HomeComponent)
     .component('loginComponent', LoginComponent)
     .config(RoutesConfig)
     .config(ThemeProvider);


