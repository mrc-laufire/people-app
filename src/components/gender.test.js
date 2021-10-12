import { render, fireEvent } from '@testing-library/react';
import TestHelpers from '../../test/helpers';
import Gender from './gender';

describe('Gender', () => {
	const gender = TestHelpers.rndGender();
	const context = {
		state: {
			gender,
		},
		actions: {
			patchState: jest.fn(),
		},
	};

	test('Renders the component', () => {
		const { getByRole, getAllByRole } = render(Gender(context));
		const component = getByRole('gender');
		const options = getAllByRole('option');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('gender');
		expect(component.value).toEqual(context.state.gender);
		options.map((option) => expect(option).toBeInTheDocument());
	});

	test('triggers action which patches the state', () => {
		const [value] = ['Male', 'Female'].filter((val) => val !== gender);

		const component = render(Gender(context)).getByRole('gender');

		fireEvent.change(component, { target: { value }});

		expect(context.actions.patchState)
			.toHaveBeenCalledWith({ gender: value });
	});
});
