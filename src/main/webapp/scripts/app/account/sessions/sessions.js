'use strict';

angular.module('myreservationappApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('sessions', {
                parent: 'account',
                url: '/sessions',
                data: {
                    roles: ['ROLE_CLIENT'],
                    pageTitle: 'global.menu.account.sessions'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/account/sessions/sessions.html',
                        controller: 'SessionsController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('sessions');
                        return $translate.refresh();
                    }]
                }
            });
    });
