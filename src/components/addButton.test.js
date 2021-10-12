import { render, fireEvent } from '@testing-library/react';
import TestHelpers from '../../test/helpers';
import seed from '../core/seed';
import AddButton from './addButton';

describe('AddButton', () => {
	const { rndString, rndNumber, rndGender, rndMaritalState } = TestHelpers;
	const context = {
		state: {
			name: rndString(),
			age: rndNumber(),
			gender: rndGender(),
			maritalStatus: rndMaritalState(),
			people: [],
		},
		actions: {
			patchState: jest.fn(),
		},
	};

	test('Renders the component', () => {
		const component = render(AddButton(context)).getByRole('add-button');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('add-button');
		expect(component).toHaveTextContent('+');
	});

	test('triggers action which patches the state', () => {
		const { name, age, gender, maritalStatus, people } = context.state;

		const component = render(AddButton(context))
			.getByRole('add-button');

		fireEvent.click(component);

		expect(context.actions.patchState).toHaveBeenCalledWith({ ...seed,
			people: people.concat({ name, age, gender, maritalStatus }) });
	});
});
