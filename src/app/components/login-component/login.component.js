class LoginComponentController{

    constructor($mdDialog, UserService, $state){
        'ngInject';
        this.UserService = UserService;
        this.$state = $state;
    }

    $onInit(){
       console.log('logincomponent');
    }

    login(){

        //log in the user and go to landing
        if(this.UserService.login(this.email,this.password)){
          console.log(this.UserService.isAuthenticated());
          this.$state.go('app.landing', {}, {reload:true, inherit:false, notify:true});
        }else{
          console.log(this.UserService.isAuthenticated());
          this.loginError = true;
        };
    }
}

export const LoginComponent = {
    template: require('./login.component.html'),
    controller: LoginComponentController,
    controllerAs: 'vm',
    bindings: {}
};
