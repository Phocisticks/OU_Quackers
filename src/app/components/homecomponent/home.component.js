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
                    card['labels'] = [];

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
                card: card
            }
        })
    }
}

/***
EditCardDiaglogController controls mdDialog for editing a card
**/
class EditCardDiaglogController{
    constructor($scope, $mdDialog, card){
        'ngInject';
        this.$mdDialog = $mdDialog;
        this.card = card;
        this.labels = this.loadLabels();
    }

    /**
     * Search for contacts; use a random delay to simulate a remote call
     */
    querySearch (criteria) {
        return criteria ? this.labels.filter(this.createFilterFor(criteria)) : [];
    }

    /***
     * Create filter function for a query string
     */
    createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(label) {
            return (label._lowername.indexOf(lowercaseQuery) != -1);
        };

    }

    loadLabels() {
        var labels = [
            'Dev Complete',
            'Bug Fix Pending',
            'Design Complete',
            'Blocked',
            'Requirements Complete',
            'Testing Complete',
            'Finished',
            'Verification Bug Not Fixed'
        ];

        return labels.map(function (c, index) {
            var label = {
                name: c,
                image: '//www.gravatar.com/avatar/' + index + '?s=50&d=retro'
            };

            label._lowername = label.name.toLowerCase();
            return label;
        });
    }

    hide() {
      this.$mdDialog.hide();
    }

    //save changes
    save(){
        //do stuff to save changes
        this.$mdDialog.hide();
    }
}

export const HomeComponent = {
    template: require('./home.component.html'),
    controller: HomeComponentController,
    controllerAs: 'vm',
    bindings: {}
};
