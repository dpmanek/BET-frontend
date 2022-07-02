import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routesr from './routes/routes';

function App() {
	return (
		<BrowserRouter basename="/BET-frontend/">
			<Routesr />
		</BrowserRouter>
	);
}

export default App;
