class LoginComponentController{

    constructor($mdDialog){
        'ngInject';

    }

    $onInit(){
       console.log('logincomponent');
    }
}

export const LoginComponent = {
    template: require('./login.component.html'),
    controller: LoginComponentController,
    controllerAs: 'vm',
    bindings: {}
};
