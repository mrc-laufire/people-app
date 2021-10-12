import { React } from 'react';
import context from './core/context';
import InputForm from './components/input-form';
import './App.scss';

const App = () =>
	<div className="app" role="app">
		{InputForm(context)}
	</div>;

export default App;
