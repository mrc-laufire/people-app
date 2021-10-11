import { React } from 'react';
import './App.scss';
import Age from './components/age';
import Gender from './components/gender';
import Married from './components/married';
import Name from './components/name';
import context from './core/context';

const App = () => {
// eslint-disable-next-line no-console
	console.log(context.state);

	return (
		<div className="app" role="app">
			<span> Name {Name(context)}</span>
			<span> Age {Age(context)}</span>
			<span> Gender {Gender(context)}</span>
			<span> Married {Married(context)}</span>
		</div>
	);
};

export default App;
