class AppComponentController{
    constructor($mdSidenav,$rootScope,$timeout){
        'ngInject';
        this.$mdSidenav = $mdSidenav;
        this.msgVal = '';

        // Message Inbox
        $rootScope.messages = [];

        // Send Messages
        this.send = function() {
            var message = {
                user: {
                  name: 'Brandon Shaw'
                },

                data: this.msgVal,

                icon: 'img/user.png',

                type: 'sent'
            };

            $rootScope.messages.push(message);

            this.msgVal = '';

            $timeout(function(){
              //Fake reply message
              var fakeMessage = {
                  user: {
                    name: 'Jello'
                  },

                  data: 'Jello There',

                  icon: 'img/jello-clipart-1.jpg',

                  type: 'received'
                };

                $rootScope.messages.push(fakeMessage);
            }, 5000);

            $timeout(function(){
              //Fake reply message
              var fakeMessage = {
                  user: {
                    name: 'Duck'
                  },

                  data: "What's Quackin'",

                  icon: 'img/duck.png',

                  type: 'received'
                };

                $rootScope.messages.push(fakeMessage);
            }, 3000);

        };
    }

    $onInit(){

    }

    openRightMenu() {
      this.$mdSidenav('right').toggle();
    };

}

export const AppHeaderComponent = {
    template: require('./app-header.component.html'),
    controller: AppComponentController,
    controllerAs: 'vm',
    bindings: {
      user:'<user'
    }
}
