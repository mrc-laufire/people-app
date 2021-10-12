import { React } from 'react';

const genderOptions = (gender) =>
	<option key={ gender } role="option" value={ gender }>{ gender }</option>;

const Gender = ({ state: { gender }, actions }) =>
	<select
		role="gender"
		className="gender"
		value={ gender }
		onChange={ (evt) => actions
			.patchState({ gender: evt.target.value }) }
	>
		{ ['Male', 'Female'].map(genderOptions) }
	</select>;

export default Gender;
