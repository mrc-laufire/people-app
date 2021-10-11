import { React } from 'react';
import './App.scss';
import Age from './components/age';
import Name from './components/name';
import context from './core/context';

const App = () =>
	<div className="app" role="app">
		<span> Name {Name(context)}</span>
		<span> Age {Age(context)}</span>
	</div>;

export default App;
