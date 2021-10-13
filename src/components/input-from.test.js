import { React } from 'react';
import { render } from '@testing-library/react';
import * as Name from './name';
import * as Age from './age';
import * as Gender from './gender';
import * as MaritalStatus from './marital-status';
import * as AddButton from './addButton';
import InputForm from './input-form';

const data = [
	{ component: Name, role: 'name' },
	{ component: Age, role: 'age' },
	{ component: Gender, role: 'gender' },
	{ component: MaritalStatus, role: 'maritalStatus' },
	{ component: AddButton, role: 'add-button' },
];

describe('inputForm', () => {
	const context = Symbol('context');

	test('Renders the components', () => {
		data.map(({ component, role }) => jest.spyOn(component, 'default')
			.mockImplementation(() => <div role={ role }/>));

		const { getByRole } = render(InputForm(context));
		const rendered = getByRole('input-form');

		expect(rendered).toBeInTheDocument();
		expect(rendered).toHaveClass('input-form');
		['Name', 'Age', 'Gender', 'Marital status'].map((val) =>
			expect(rendered).toHaveTextContent(val));
		data.map(({ component, role }) => {
			expect(component.default).toBeCalledWith(context);
			expect(getByRole(role)).toBeInTheDocument();
		});
	});
});
