import { React } from 'react';
import './App.scss';
import Age from './components/age';
import Gender from './components/gender';
import Name from './components/name';
import MaritalStatus from './components/marital-status';
import context from './core/context';
import AddButton from './components/addButton';

const App = () =>
	<div className="app" role="app">
		<span> Name {Name(context)}</span>
		<span> Age {Age(context)}</span>
		<span> Gender {Gender(context)}</span>
		<span> Marital status {MaritalStatus(context)}</span>
		<span> {AddButton(context)} </span>
	</div>;

export default App;
