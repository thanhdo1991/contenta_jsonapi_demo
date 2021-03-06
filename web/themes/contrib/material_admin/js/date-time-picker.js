/**
 * @file
 * Date And Time Picker
 *
 */

(function ($, Drupal) {

  Drupal.behaviors.material_pickadate = {
    attach: function (context) {
      $(context).find('.form-date').once('material_pickadate').each(function () {
        $(this).pickadate({
        selectMonths: true, // Creates a dropdown to control month
        formatSubmit: 'yyyy-mm-dd',
        format:'yyyy-mm-dd',
        hiddenName: true,
        autoclose:true
      });
    });
  }
  };

  Drupal.behaviors.material_pickatime = {
    attach: function (context) {
     $(context).find('.form-time').once('material_pickatime').each(function () {
      $(this).pickatime({
        autoclose: true,
        twelvehour: false,
        closeOnSelect: true,
        formatSubmit:'h:i A' 
      });
    });
    }
  };

}(jQuery, Drupal));
