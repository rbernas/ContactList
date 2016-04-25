module.exports = {
	entry: [
		'./src/App.js' //look for where our development code is
	],
	output: {
		path: __dirname,
		filename: 'app.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel'
		}]
	}
};