import { React } from 'react';

const maritalOptions = (maritalOption) =>
	<option key={ maritalOption }role="option" value={ maritalOption }>
		{ maritalOption }
	</option>;

const MaritalStatus = ({ state: { maritalStatus }, actions }) =>
	<select
		role="maritalStatus"
		className="maritalStatus"
		value={ maritalStatus }
		onChange={ (evt) => actions
			.patchState({ maritalStatus: evt.target.value }) }
	>
		{['Single', 'Married'].map(maritalOptions)}
	</select>;

export default MaritalStatus;
