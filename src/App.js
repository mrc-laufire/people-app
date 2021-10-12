import { React } from 'react';
import InputForm from './components/input-form';
import People from './components/people';
import './App.scss';

const App = (context) =>
	<div className="app" role="app">
		{InputForm(context)}
		{People(context)}
	</div>;

export default App;
