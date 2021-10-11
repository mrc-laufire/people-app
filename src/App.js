import { React } from 'react';
import './App.scss';
import Age from './components/age';
import Gender from './components/gender';
import Name from './components/name';
import context from './core/context';

const App = () =>
	<div className="app" role="app">
		<span> Name {Name(context)}</span>
		<span> Age {Age(context)}</span>
		<span> Gender {Gender(context)}</span>
	</div>;

export default App;
