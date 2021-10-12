import { React } from 'react';
import { render } from '@testing-library/react';
import context from './core/context';
import * as Name from './components/name';
import * as Age from './components/age';
import * as Gender from './components/gender';
import App from './App';
import * as MaritalStatus from './components/marital-status';

describe('App', () => {
	test('renders the app component', () => {
		const data = [
			{ lib: Name, role: 'name' },
			{ lib: Age, role: 'age' },
			{ lib: Gender, role: 'gender' },
			{ lib: MaritalStatus, role: 'marital-status' },
		];

		data.map(({ lib, role }) => jest.spyOn(lib, 'default')
			.mockImplementation(() => <div role={ role }/>));

		const { getByRole } = render(App(context));
		const appComponent = getByRole('app');

		expect(appComponent).toBeInTheDocument();
		expect(appComponent).toHaveClass('app');
		expect(appComponent).toHaveTextContent('Name');
		data.map(({ lib, role }) => {
			expect(lib.default).toBeCalledWith(context);
			expect(getByRole(role)).toBeInTheDocument();
		});
	});
});
