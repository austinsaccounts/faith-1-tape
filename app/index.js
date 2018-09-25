/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

UIkit.icon(element, options);


UIkit.icon(element).svg.then(function(svg) { svg.querySelector('path').style.stroke = 'white'; })

// ================================
// START YOUR APP HERE
// ================================
