//     dt-script-loader.js
//     (c) 2013 Kent C. Dodds
//     dt-script-loader.js may be freely distributed under the MIT license.
//     http://www.github.com/kentcdodds/dt-script-loader.git
//     See README.md

var DoubleTakeScriptLoader = function(scripts) {
  if (scripts) {
    if (Object.prototype.toString.call(scripts) !== '[object Array]' ) {
      scripts = [scripts];
    }
  } else {
    scripts = document.getElementsByTagName('script');
  }
  var scriptsToRemove = [];
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    var propName = script.propName || script.getAttribute('data-prop-name');
    var localSource = script.localSource || script.getAttribute('data-local-src');
    if (propName !== null && localSource !== null) {
      if (!window[propName]) {
        document.write('<script src="' + localSource + '" type="text/javascript"><' + '/script>');
        if (script.originalId) {
          script = document.getElementById(script.originalId);
        }
        if (script.parentNode) {
          scriptsToRemove.push(script);
        }
      }
    }
  }
  for (var i = 0; i < scriptsToRemove.length; i++) {
    script.parentNode.removeChild(script);
  }
};
DoubleTakeScriptLoader();