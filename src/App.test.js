import { React } from 'react';
import { render } from '@testing-library/react';
import context from './core/context';
import * as Name from './components/name';
import App from './App';

describe('App', () => {
	test('renders the app component', () => {
		jest.spyOn(Name, 'default')
			.mockImplementation(() => <div role="name"/>);

		const { getByRole } = render(App(context));
		const appComponent = getByRole('app');
		const nameComponent = getByRole('name');

		expect(appComponent).toBeInTheDocument();
		expect(appComponent).toHaveClass('app');
		expect(appComponent).toHaveTextContent('Name');
		expect(Name.default).toBeCalledWith(context);
		expect(nameComponent).toBeInTheDocument();
	});
});
