export default function RoutesConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            abstract: true,
            views: {
                'toolbar@' :{
                    component: "appHeader",
                    bindings:{}
                }
            },
            resolve:{}
        })
        .state('app.landing', {
            url: '/',
            views: {
                'toolbar@':{
                    component: "appHeader",
                    bindings:{}
                },
                'main@' : {
                    component: "homeComponent",
                    bindings: {}
                }
            },
            resolve: {}
        })
        .state('app.login', {
            url: '/login',
            views: {
              'toolbar@':{},
                'main@': {
                    component: "loginComponent"
                }
            }
        })
        // .state('app.register', {
        //     url: '/register',
        //     data: {auth:false},
        //     views: {
        //         'main@': {
        //             component: "registerComponent"
        //         }
        //     }
        // })
        // .state('app.forgot_password', {
        //     url: '/forgot-password',
        //     data: {auth:false},
        //     views: {
        //         'main@': {
        //             component:"forgotPasswordComponent"
        //         }
        //     }
        // })
        // .state('app.reset_password', {
        //     url: '/reset-password/:email/:token',
        //     data: {auth:false},
        //     views: {
        //         'main@': {
        //             component:"resetPasswordComponent"
        //         }
        //     }
        // })


}
