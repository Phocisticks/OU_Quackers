class HomeComponentController{

    constructor($mdDialog){
        'ngInject';
        this.$mdDialog = $mdDialog;
        this.titles = [];
        this.descriptions = [];
        this.cards = this.titles.map(function (description, index) {
            return {
                title: description,
                description: this.descriptions[index]
            }
        });
        this.lists = [];
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
                $scope.addCard = function(){
                    var card = new Array();
                    card['title'] = document.getElementById('title').value;
                    card['description'] = document.getElementById('description').value;

                    vm.cards.push(card);
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
                    var title = document.getElementById('listTitle').value;

                    vm.lists.push(title);
                    $mdDialog.hide();
                };
            }
        })
    }

    editCard(ev, cardIndex){
        var vm = this;
        this.$mdDialog.show({
            targetEvent: ev,
            template: require('./editCard.html'),
            controller: function($scope, $mdDialog){
                //var currentTitle = document.getElementById('cardTitle'+cardIndex).innerText;

                //this.title.value(oldTitle);
                //sam - how to change text of mddialog??
                // angular.getElementById('editTitle').val(title);

                $scope.closeDialog = function(){ $mdDialog.hide(); };
                $scope.editCard = function(){
                    var card = [];
                    card['title'] = document.getElementById('title').value;
                    card['description'] = document.getElementById('description').value;

                    vm.cards[cardIndex] = card;
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
