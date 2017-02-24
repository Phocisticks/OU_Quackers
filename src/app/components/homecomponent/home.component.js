class HomeComponentController{
    constructor(){
        'ngInject';

       
    }

    $onInit(){
       console.log('homecomponent');
    }


  


}



export const HomeComponent = {
    template: require('./home.component.html'),
    controller: HomeComponentController,
    controllerAs: 'vm',
    bindings: {}
}
