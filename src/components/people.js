import { React } from 'react';
import Person from './person';

const People = ({ state: { people }}) =>
	<div role="people" className="people">
		{people.map(Person)}
	</div>;

export default People;
