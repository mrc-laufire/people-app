import { React } from 'react';
import { render } from '@testing-library/react';
import context from './core/context';
import * as InputForm from './components/input-form';
import * as People from './components/people';
import App from './App';

describe('App', () => {
	test('renders the app component', () => {
		const data = [
			{ lib: InputForm, role: 'input-form' },
			{ lib: People, role: 'people' },
		];

		data.map(({ lib, role }) => jest.spyOn(lib, 'default')
			.mockImplementation(() => <div role={ role }/>));

		const { getByRole } = render(App(context));
		const appComponent = getByRole('app');

		expect(appComponent).toBeInTheDocument();
		expect(appComponent).toHaveClass('app');
		data.map(({ lib, role }) => {
			expect(lib.default).toBeCalledWith(context);
			expect(getByRole(role)).toBeInTheDocument();
		});
	});
});
