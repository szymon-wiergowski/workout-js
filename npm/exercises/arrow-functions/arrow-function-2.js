// ## Scope/this
// Wykorzystując `arrow function` pozbądź się przypisania `this` do zmiennej `self`;

var App = {
  init: function() {
  	var self = this;
    setTimeout(function() {
      self.handle()
    });
  },
  handle: function() {
    console.log('PING!');
  }
};

App.init();