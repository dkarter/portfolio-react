var React = require('react');
var ReactPortfolio = require('react-portfolio');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactPortfolio />
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
