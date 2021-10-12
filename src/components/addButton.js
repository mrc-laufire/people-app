import { React } from 'react';
import seed from '../core/seed';

const AddButton = ({
	state: { name, age, gender, maritalStatus, people },
	actions,
}) =>
	<button
		role="add-button"
		className="add-button"
		onClick={ () => actions.patchState({
			...seed,
			people: people.concat({ name, age, gender, maritalStatus }),
		}) }
	>
		+
	</button>;

export default AddButton;
