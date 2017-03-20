class HomeComponentController{

    constructor($mdDialog){
        'ngInject';
        this.$mdDialog = $mdDialog;
        this.lists = [];
        this.cards = [];
    }

    $onInit(){
       console.log('homecomponent');
    }

    createCard(ev){
        var vm = this;
        this.$mdDialog.show({
            targetEvent: ev,
            template: require('./createCard.html'),
            controller: function($scope, $mdDialog){
                $scope.closeDialog = function(){ $mdDialog.hide(); };
                $scope.addCard = function(result){
                    console.log(result);
                    vm.cards.push(result);
                    $mdDialog.hide();
                };
            }
        })
    }

    createList(ev){
        var vm = this;
        this.$mdDialog.show({
            targetEvent: ev,
            template: require('./createList.html'),
            controller: function($scope, $mdDialog){
                $scope.closeDialog = function(){ $mdDialog.hide(); };
                $scope.addList = function(){
                    vm.lists.push(Math.random());
                    $mdDialog.hide();
                };
            }
        })
    }
}

export const HomeComponent = {
    template: require('./home.component.html'),
    controller: HomeComponentController,
    controllerAs: 'vm',
    bindings: {}
};
