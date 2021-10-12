import { React } from 'react';
import { render } from '@testing-library/react';
import context from './core/context';
import * as InputForm from './components/input-form';
import * as People from './components/people';
import App from './App';

describe('App', () => {
	test('renders the app component', () => {
		const data = [
			{ component: InputForm, role: 'input-form' },
			{ component: People, role: 'people' },
		];

		data.map(({ component, role }) => jest.spyOn(component, 'default')
			.mockImplementation(() => <div role={ role }/>));

		const { getByRole } = render(App(context));
		const appComponent = getByRole('app');

		expect(appComponent).toBeInTheDocument();
		expect(appComponent).toHaveClass('app');
		data.map(({ component, role }) => {
			expect(component.default).toBeCalledWith(context);
			expect(getByRole(role)).toBeInTheDocument();
		});
	});
});
