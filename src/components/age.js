import { React } from 'react';

const Age = ({ state: { age }, actions }) =>
	<input
		role="age"
		className="age"
		type="number"
		value={ age }
		onChange={ (evt) => actions
			.patchState({ age: evt.target.value }) }
	/>;

export default Age;
