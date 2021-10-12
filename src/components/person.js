import { React } from 'react';

const Person = ({ id, name, age, gender, maritalStatus }) =>
	<div key={ id }role="person" className="person">
		<span> {name} </span>
		<span> {age} </span>
		<span> {gender} </span>
		<span> {maritalStatus} </span>
	</div>;

export default Person;
