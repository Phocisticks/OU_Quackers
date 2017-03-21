class HomeComponentController{
    constructor($mdDialog){
        'ngInject';
        this.$mdDialog = $mdDialog;
    }

    $onInit(){
       console.log('homecomponent');
    }

    addCard(ev){
        this.$mdDialog.show({
            targetEvent: ev,
            template: '<md-dialog flex="10">' +
            '  <md-dialog-content>' +
            '    <div layout-align="center" layout-padding="10">' +
            '      <md-input-container class="md-block">' +
            '        <input placeholder="Title">' +
            '      </md-input-container>' +
            '    </div>' +
            '    <div layout-align="center" layout-padding="10">' +
            '      <md-input-container class="md-block">' +
            '        <label>Description</label>' +
            '        <textarea rows="5"></textarea>' +
            '      </md-input-container>' +
            '    </div>' +
            '  </md-dialog-content>' +
            '  <md-dialog-actions>' +
            '    <md-button ng-click="closeDialog()" class="md-primary">' +
            '      Cancel' +
            '    </md-button>' +
            '    <md-button ng-click="closeDialog()" class="md-primary">' +
            '      Create' +
            '    </md-button>' +
            '  </md-dialog-actions>' +
            '</md-dialog>',
            controller: function($scope, $mdDialog){
                $scope.closeDialog = function(){$mdDialog.hide();};
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
