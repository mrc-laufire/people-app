import { render, fireEvent } from '@testing-library/react';
import TestHelpers from '../../test/helpers';
import Name from './name';

describe('Name', () => {
	const { rndString } = TestHelpers;
	const name = rndString();
	const context = {
		state: {
			name,
		},
		actions: {
			patchState: jest.fn(),
		},
	};

	test('Renders the component', () => {
		const component = render(Name(context)).getByRole('name');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('name');
		expect(component.value).toEqual(name);
		expect(component.type).toEqual('text');
	});

	test('triggers action which patches the state', () => {
		const value = rndString();
		const component = render(Name(context)).getByRole('name');

		fireEvent.change(component, { target: { value }});

		expect(context.actions.patchState).toBeCalledWith({ name: value });
	});
});
