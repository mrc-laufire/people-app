import { React } from 'react';
import './App.scss';
import Name from './components/name';
import context from './core/context';

const App = () =>
	<div className="app" role="app">
		Name {Name(context)}
	</div>
	;

export default App;
