 var scotchApp = angular.module('siema', ['ngRoute', 'ngAnimate']);

// configure our routes
scotchApp.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : '/templates/step1.html',
             controller  : 'main'
        })
        
        .when('/s2', {
            templateUrl : '/templates/step2.html',
             controller  : 'main'
        })
        
        .when('/s3', {
            templateUrl : '/templates/step3.html',
             controller  : 'main'
        })
        
        .when('/s4', {
            templateUrl : '/templates/step4.html',
             controller  : 'main'
        })
        
        .when('/s5', {
            templateUrl : '/templates/step5.html',
             controller  : 'main'
        })
        
        .when('/s6', {
            templateUrl : '/templates/step6.html',
             controller  : 'main'
        })
        
        .when('/s7', {
            templateUrl : '/templates/step7.html',
             controller  : 'main'
        })
        
        .when('/s8', {
            templateUrl : '/templates/step8.html',
             controller  : 'main'
        })
        
        .when('/s9', {
            templateUrl : '/templates/step9.html',
             controller  : 'main'
        })
        
        .otherwise({
            redirectTo: '/'
        });
}]);

// create the controller and inject Angular's $scope
scotchApp.controller('main', function($scope) {
    // create a message to display in our view
    // $scope.titulo_pagina = 'Servicios';
    // jQuery("title").html($scope.titulo_pagina);
    
    var x = Math.floor((Math.random() * 3) + 1);
    var animations = ['page-home','page-contact','page-about'];
    
    $scope.pageClass = animations[x-1];
    
    $('.tooltipped').tooltip({delay: 50});
    
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    
    $('select').material_select();
    
    
    
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });
    
    $('.button-collapse1').sideNav({
          menuWidth: 300, // Default is 240
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );

    $('.button-collapse2').sideNav({
          menuWidth: 300, // Default is 240
          edge: 'right', // Choose the horizontal origin
          closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
      );
      
    $('#btn_login').unbind('click').click(function(){
         $('.loader').fadeIn(1000);
         setTimeout(function(){Materialize.toast('Bienvenido / Welcome',2000,'rounded',function(){
             window.location = "/#/s2";
         })},1000);
    });
    
    $('#btn_search').unbind('click').click(function(){
         $(".h_r").fadeIn('fast');
    });
    
    $('#btn_profile').unbind('click').click(function(e){
        e.preventDefault();
         $('.button-collapse1')[0].click();
    });
    
});
// create the controller and inject Angular's $scope
scotchApp.controller('m2Controller', function($scope) {
    // create a message to display in our view
    // $scope.titulo_pagina = 'Servicios';
    // jQuery("title").html($scope.titulo_pagina);
    $scope.pageClass = 'page-about';
    
});
scotchApp.controller('m3Controller', function($scope) {
    // create a message to display in our view
    // $scope.titulo_pagina = 'Servicios';
    // jQuery("title").html($scope.titulo_pagina);
    $scope.pageClass = 'page-contact';
    
});