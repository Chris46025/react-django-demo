var React = require('react');

 var Fact = React.createClass({
   render: function(){
       return (
       	<div>
       		<div>
       			<img src={this.props.fact.image} height="85%" width="100px"/>
       		</div>
       		<div>
       			<h2>{ this.props.fact.content }</h2>
       		</div>
		</div>
       	)
   }
});

module.exports = Fact;