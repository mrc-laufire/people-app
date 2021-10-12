import TestHelpers from '../../test/helpers';
import { render, fireEvent } from '@testing-library/react';
import MaritalStatus from './marital-status';

describe('MaritalStatus', () => {
	const MaritalState = TestHelpers.rndMaritalState();
	const context = {
		state: {
			maritalStatus: MaritalState,
		},
		actions: {
			patchState: jest.fn(),
		},
	};

	test('Renders the component', () => {
		const { getByRole, getAllByRole } = render(MaritalStatus(context));
		const component = getByRole('marital-status');
		const options = getAllByRole('option');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('marital-status');
		expect(component.value).toEqual(MaritalState);
		options.map((option) => expect(option).toBeInTheDocument());
	});

	test('triggers action which patches the state', () => {
		const [value] = ['Single', 'Married'].filter((val) =>
			val !== MaritalState);

		const component = render(MaritalStatus(context))
			.getByRole('marital-status');

		fireEvent.change(component, { target: { value }});

		expect(context.actions.patchState)
			.toHaveBeenCalledWith({ maritalStatus: value });
	});
});
