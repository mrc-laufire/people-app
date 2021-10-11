import { React } from 'react';

const Name = ({ state: { name }, actions }) =>
	<input
		role="name"
		className="name"
		type="text"
		value={ name }
		onChange={ (evt) => actions
			.patchState({ name: evt.target.value }) }
	/>;

export default Name;
