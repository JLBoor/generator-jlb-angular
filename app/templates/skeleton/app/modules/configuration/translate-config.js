angular.module('configuration.translate', ['pascalprecht.translate'])

    .config(function($translateProvider) {

        $translateProvider.useStaticFilesLoader(
            {
            prefix: 'i18n/locale-',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en');
    })

    .run(function($rootScope, $translate) {

        $rootScope.$on('auth.login', function(event, user) {
            if(user && user.lang) { $translate.use(user.lang); }
        });

        $rootScope.$on('auth.logout', function() {
            $rootScope.changeLang($translate.preferredLanguage());
        });


        $rootScope.changeLang = function (langKey) {
            $translate.use(langKey);
        };

        $rootScope.isLang = function (langKey) {
            return langKey === $translate.use();
        };

    });




