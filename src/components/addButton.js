import { React } from 'react';

const AddButton = ({ actions }) =>
	<button
		role="add-button"
		className="add-button"
		onClick={ () => actions.updatePeople() }
	>
		+
	</button>;

export default AddButton;
