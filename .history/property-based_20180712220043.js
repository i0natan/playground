var jsc = require("jsverify");

// forall (f : bool -> bool) (b : bool), f (f (f b)) = f(b).
var boolFnAppliedThrice =
  jsc.check("Example", "bool", function (param) {
    return true;
  });
jsc.assert(boolFnAppliedThrice);