import { render, fireEvent } from '@testing-library/react';
import AddButton from './addButton';

describe('AddButton', () => {
	const context = {
		actions: {
			updatePeople: jest.fn(),
			resetInputs: jest.fn(),
		},
	};

	test('Renders the component', () => {
		const component = render(AddButton(context)).getByRole('add-button');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('add-button');
		expect(component).toHaveTextContent('+');
	});

	test('triggers action which patches the state', () => {
		const component = render(AddButton(context))
			.getByRole('add-button');

		fireEvent.click(component);

		expect(context.actions.updatePeople).toHaveBeenCalledWith();
		expect(context.actions.resetInputs).toHaveBeenCalledWith();
	});
});
