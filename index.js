var method;
var noop = function() {};
var methods = [
  'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
  'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
  'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
  'timeStamp', 'trace', 'warn'
];
var len = methods.length;
var console = (window.console = window.console || {});

while (len--) {
  method = methods[len];
  if (!console[method]) {
    console[method] = noop;
  }
}
