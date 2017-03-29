export default function RoutesConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            abstract: true,
            data:{auth:false},
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
            data:{auth:true},
            views: {
                'toolbar@':{
                    component: "appHeader",
                    bindings:{user: 'user'}
                },
                'main@' : {
                    component: "homeComponent",
                    bindings: {}
                }
            },
            resolve: {
              user:function(UserService){
                return UserService.currentUser;
              }
            }
        })
        .state('app.login', {
            url: '/login',
            data:{auth:false},
            views: {
                'toolbar@':{
                   
                },
                'main@': {
                    component: "loginComponent",
                    bindings: {}
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
