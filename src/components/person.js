import { React } from 'react';

const Person = ({ name, age, gender, maritalStatus }) =>
	<div role="person" className="person">
		<span> {name} </span>
		<span> {age} </span>
		<span> {gender} </span>
		<span> {maritalStatus} </span>
	</div>;

export default Person;
