$(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
    
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    
    $('select').material_select();
    
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });
    
    //$(".button-collapse").sideNav();
    
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
      
    $('#btn_search').unbind('click').click(function(){
         $(".h_r").fadeIn('fast');
    });
    $('#btn_save').unbind('click').click(function(){
         Materialize.toast('Sus Cambios Se Guardaron',2000);
    });
    $('#btn_profile').unbind('click').click(function(){
         $('.button-collapse1')[0].click();
    });
});