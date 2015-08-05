var $ = require('jquery');
var React = require('react');
var Fact = require('./components/fact.jsx');

function rand(max, min){
  return Math.floor(Math.random() * (11 - 3 + 1)) + 3;
}

$.ajax({

  type: 'GET',
  url: '/fact/api/' + rand(13,11) +'/.json',
  success: function(data) {
    console.log(data["subject"]); //returns all of johnbob's friends
  
    var props = { fact: {
					subject: data["subject"],
					content: data["content"],
          image: data["image"]
}};

React.render(React.createElement(Fact, props), document.getElementById('bouncer1'));
  }
});

$.ajax({

  type: 'GET',
  url: '/fact/api/' + rand(10,9) +'/.json',
  success: function(data) {
    console.log(data["subject"]); //returns all of johnbob's friends
  
    var props = { fact: {
          subject: data["subject"],
          content: data["content"],
          image: data["image"]
}};

React.render(React.createElement(Fact, props), document.getElementById('bouncer2'));
  }
});

$.ajax({

  type: 'GET',
  url: '/fact/api/' + rand(8,5) +'/.json',
  success: function(data) {
    console.log(data["subject"]); //returns all of johnbob's friends
  
    var props = { fact: {
          subject: data["subject"],
          content: data["content"],
          image: data["image"]
}};

React.render(React.createElement(Fact, props), document.getElementById('bouncer3'));
  }
});

$.ajax({

  type: 'GET',
  url: '/fact/api/' + rand(6,3) +'/.json',
  success: function(data) {
    console.log(data["subject"]); //returns all of johnbob's friends
  
    var props = { fact: {
          subject: data["subject"],
          content: data["content"],
          image: data["image"]
}};

React.render(React.createElement(Fact, props), document.getElementById('bouncer4'));
  }
});

