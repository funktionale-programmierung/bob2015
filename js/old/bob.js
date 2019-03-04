function make () {
  var c = '@';
  var r = '';
  for (var i=0; i < arguments.length; i++) {
    r = r + arguments[i];
    var c;
    switch (i) {
    case 0: c = 'erenz@b'; break;
    case 1: c = 'k'; break;
    default: c = '.';
    }
    if (i != arguments.length - 1) {
      r = r + c;
    }
  }
  return r + '.de';
}

var e = make ('konf', 'ob', 'onf');                       
