import { React } from 'react';
import Person from './person';

const People = (context) => {
	const { state: { people }} = context;

	return (
		<div role="people" className="people">
			{people.map((person) => Person({ ...context, data: person }))}
		</div>
	);
};

export default People;
