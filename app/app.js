(function () {
    'use strict'
    //module initilization
    angular.module("vehicleApp", ["home","login", "register", "ui.router", "components", "header", "pascalprecht.translate" ,'oc.lazyLoad'])
            .config(["$stateProvider","$locationProvider","$urlRouterProvider","$translateProvider", function ($stateProvider, $locationProvider, $urlRouterProvider, $translateProvider) {
          
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise("register"); 
             
            var basePath = "app/templates/";
            var homeObj = {
                templateUrl: basePath + "home.html",
                 url: "/home"
                
            };
//                <script src="app/vehicles/vehicles.js"></script>
//                <script src="app/vehicles/vehicles-controller.js"></script>
//                <script src="app/vehicles/vehicles-service.js"></script>
            var vehiclesObj = {
                templateUrl: basePath + "vehicles.html",
                controller:"vehicleCtrl",
                url: "/vehicle",
                resolve: {
                loadCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load(['app/vehicles/vehicles-controller.js']);
                }]
            }
            };
            var registerObj = {
                templateUrl: basePath + "register.html",
                controller:"registerCtrl",
                url: "/register"
            };
            var loginObj = {
                templateUrl: basePath + "login.html",
                url: "/login"
            };
             
            
            $stateProvider.state("home", homeObj);
            $stateProvider.state("vehicles", vehiclesObj);
            $stateProvider.state("login", loginObj);
            $stateProvider.state("register", registerObj);
            
            //delcare laguage translataions.
            $translateProvider.translations('en', {
                    HOME: 'Home',
                    LOGIN: 'Login',
                    REGISTER: 'Register',
                    VEHICLES: 'Vehicles',
                    CART: 'Cart',
                    TOTAL: 'Total',
                    SELECT:'Select'
                   
                });
            $translateProvider.translations('de', {
                    HOME: 'Huis',
                    LOGIN: 'Log in',
                    REGISTER: 'Registreren',
                    Vehicles: 'Produckte',
                    CART: 'kar',
                    TOTAL: 'Totaal',
                    SELECT: 'kiezen',
                    SHOW: 'TONEN'
                    
                });
            $translateProvider.translations('mr', {
                    HOME: 'घर',
                    LOGIN: 'लॉग इन करा',
                    REGISTER: 'नोंदणी करा',
                    Vehicles: 'वाहन',
                    CART: 'कार्ट',
                    TOTAL: 'एकूण',
                    SELECT: 'निवडा',
                    SHOW: 'दाखवा'
                    
                });
            $translateProvider.preferredLanguage('en');
                    
           
     }])
})();