export default function RoutesRun($state, $transitions, UserService) {
    'ngInject';
    
    let requiresAuthCriteria = {
        to: ($state) => $state.data && $state.data.auth
    };

    let redirectToLogin = () => {
        'ngInject';
        if (!UserService.isAuthenticated()) {
            return $state.target('app.login', undefined, {location: false});
        }
    };

    $transitions.onBefore(requiresAuthCriteria, redirectToLogin, {priority:10});

}
