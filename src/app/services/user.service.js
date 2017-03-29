
export default function UserService(){
  'ngInject'

  var vm = this;

  //users
  vm.users = [
    {
      firstname: "Samuel",
      lastname: "Setsoafia",
      email: 'sam@ou.edu',
      password: '123456',
    }
  ]

  vm.isAuthenticated = function(){
    return vm.currentUser?true:false;
  }

  //login in user
  vm.login = function(email,password){
    for(var i in vm.users){
      var user = vm.users[i];
      if(user.email === email && user.password === password){
          vm.currentUser = user;
          return true;
      }else{
          return false;
      }
    }
  }

  //signup
  vm.signup = function(firstname,lastname, email, password){
    var newUser = {
      'firstname': firstname,
      'lastname': lastname,
      'email':email,
      'password':password
    }
    vm.users.push(newUser);
    return true;
  }

}
