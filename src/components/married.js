import { React } from 'react';

const Married = ({ state: { married }, actions }) =>
	<input
		role="married"
		className="married"
		type="checkbox"
		checked={ married }
		onClick={ (evt) => actions
			.patchState({ married: evt.target.checked }) }
		onChange={ () => {} }
	/>;

export default Married;
