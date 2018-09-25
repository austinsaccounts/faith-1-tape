/**
 * Application entry point
 */

// Load application styles
import "materialize-loader";
import "materialize-css";
import 'styles/index.scss';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import $ from 'jquery';

// // loads the Icon plugin
// UIkit.use(Icons);
//
// UIkit.icon(element, options);
//
//
// UIkit.icon(element).svg.then(function(svg) { svg.querySelector('path').style.stroke = 'white'; })
//
// // Show an off-canvas matching the passed CSS selector
// UIkit.offcanvas.show('#my-id');
//
// // Hide any active offcanvas. Set force to true, if you don't want any animation.
// UIkit.offcanvas.hide([force = false])


// ================================
// START YOUR APP HERE
// ================================

$(document).ready(function() {
  $("#mobileMenu").click(function() {
    event.preventDefault();
    $("#mobileDropDownContainer").toggle();
  })
});
