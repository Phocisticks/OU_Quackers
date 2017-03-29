class LoginComponentController {
    constructor(){
      'ngInject'
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
    myFunc2(){
      console.log(this.$act);
      this.$act = !this.$act;
    }

//     $(document).ready(function(){
// 	$(".info-item .btn").click(function(){
//   	$(".container").toggleClass("log-in");
// 	});
// 	$(".container-form .btn").click(function(){
//   	$(".container").addClass("active");
// 	});
// });
}

export const LoginComponent = {
  template: require('./login.component.html'),
  controller: LoginComponentController,
  controllerAs: 'vm',
  bindings: {}
}