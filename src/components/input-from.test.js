import { React } from 'react';
import { render } from '@testing-library/react';
import * as Name from './name';
import * as Age from './age';
import * as Gender from './gender';
import * as MaritalStatus from './marital-status';
import * as AddButton from './addButton';
import InputForm from './input-form';

const data = [
	{ lib: Name, role: 'name' },
	{ lib: Age, role: 'age' },
	{ lib: Gender, role: 'gender' },
	{ lib: MaritalStatus, role: 'marital-status' },
	{ lib: AddButton, role: 'add-button' },
];

describe('inputForm', () => {
	const context = Symbol('context');

	test('Renders the components', () => {
		data.map(({ lib, role }) => jest.spyOn(lib, 'default')
			.mockImplementation(() => <div role={ role }/>));

		const { getByRole } = render(InputForm(context));
		const component = getByRole('input-form');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('input-form');
		expect(component).toHaveTextContent('Name');
		data.map(({ lib, role }) => {
			expect(lib.default).toBeCalledWith(context);
			expect(getByRole(role)).toBeInTheDocument();
		});
	});
});
