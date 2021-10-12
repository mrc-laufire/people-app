import { React } from 'react';
import context from './core/context';
import InputForm from './components/input-form';
import People from './components/people';
import './App.scss';

const App = () =>
	<div className="app" role="app">
		{InputForm(context)}
		{People(context)}
	</div>;

export default App;
