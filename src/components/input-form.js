import { React } from 'react';
import Age from './age';
import Gender from './gender';
import Name from './name';
import MaritalStatus from './marital-status';
import AddButton from './addButton';

const InputForm = (context) =>
	<div role="input-form" className="input-form">
		<span> Name {Name(context)}</span>
		<span> Age {Age(context)}</span>
		<span> Gender {Gender(context)}</span>
		<span> Marital status {MaritalStatus(context)}</span>
		<span> {AddButton(context)} </span>
	</div>;

export default InputForm;
