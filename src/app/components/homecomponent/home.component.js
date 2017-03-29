class HomeComponentController{

    constructor($mdDialog){
        'ngInject';
        this.$mdDialog = $mdDialog;

        this.titles = [];
        this.descriptions = [];
        this.labels = [];
        this.cards = this.titles.map(function (description, index) {
            return {
                title: description,
                description: this.descriptions[index],
                labels: this.labels[index]
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

    editCard(ev, card){
        var vm = this;
        this.$mdDialog.show({
            targetEvent: ev,
            template: require('./editCard.html'),
            controller: EditCardDiaglogController,
            controllerAs: 'vm',
            locals:{
                card: card,
                defaultLabels: ['Dev Complete', 'Testing Complete']
            }
        })
    }
}

/**
EditCardDiaglogController controls mdDialog for editing a card
**/
class EditCardDiaglogController{
    constructor($scope,$mdDialog,card,defaultLabels){
        'ngInject';
        this.$mdDialog = $mdDialog;
        this.card = card;
        this.defaultLabels = defaultLabels;
    }

    hide() {
      this.$mdDialog.hide();
    }

    createLabel() {
        console.log("Test");
    }

    cancel() {
      this.$mdDialog.cancel();
    }

    //save changes
    save(){
        //do stuff to save changes
        // this.card['label'] = "blank";
        this.$mdDialog.hide();
    }
}

export const HomeComponent = {
    template: require('./home.component.html'),
    controller: HomeComponentController,
    controllerAs: 'vm',
    bindings: {}
};
