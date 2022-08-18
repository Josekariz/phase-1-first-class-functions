function receivesAFunction(callback) {
  callback("its done");
}
receivesAFunction(callback);

function returnsANamedFunction(name) {
  return name;
}

function returnsANamedFunction() {
  const fn = () => {};
  return fn;
}

function returnsAnAnonymousFunction() {
  return (function () {
    
 });
}
