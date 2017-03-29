class LoginComponentController {
   constructor($mdDialog, UserService, $state){
      'ngInject'
      this.UserService = UserService;
      this.$state = $state;
      this.$tog = false;
      this.$act = false;
      this.$bodyStyle = {backgroundColor: "#000"};
    }

    $onInit(){
      // var toggle = false;
      console.log('LoginComponent');
    }
    
    myFunc(){
      console.log(this.$tog);
      this.$tog = !this.$tog;
    }
    
    login(){
      console.log(this.$act);
      //log in the user and go to landing
        if(this.UserService.login(this.email,this.password)){
          this.$act = !this.$act;
          console.log(this.UserService.isAuthenticated());
          setTimeout(function(){
            this.$state.go('app.landing', {}, {reload:true, inherit:false, notify:true});
          },2400)
        }else{
          console.log("Hi");
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
}