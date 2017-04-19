class AppComponentController{
    constructor($mdSidenav,$rootScope,$timeout){
        'ngInject';
        this.$mdSidenav = $mdSidenav;
        this.msgVal = '';
        this.chatTitle = 'General Chat';
        this.timeSent = '';

        // Message Inbox
        $rootScope.messages = [];

        // Send Messages
        this.send = function() {
            var d = new Date(); // for now

            var hours = d.getHours();
            var minutes = d.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            this.timeSent = hours + ':' + minutes + ' ' + ampm;

            var message = {
                user: {
                  name: 'Samuel Setsoafia'
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
