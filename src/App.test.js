import { React } from 'react';
import { render } from '@testing-library/react';
import context from './core/context';
import * as InputForm from './components/input-form';
import App from './App';

describe('App', () => {
	test('renders the app component', () => {
		jest.spyOn(InputForm, 'default')
			.mockImplementation(() => <div role="input-form"/>);

		const { getByRole } = render(App(context));
		const appComponent = getByRole('app');

		expect(appComponent).toBeInTheDocument();
		expect(appComponent).toHaveClass('app');
		expect(InputForm.default).toHaveBeenCalledWith(context);
	});
});
