/* eslint-disable max-lines-per-function */
import { rndString } from '@laufire/utils/random';
import { render, fireEvent } from '@testing-library/react';

const TestHelpers = {
	rndString: () => {
		const idLength = 8;

		return rndString(idLength);
	},
	testInput: ({ component, name, type, value }) => {
		describe(component, () => {
			const context = {
				state: {
				},
				actions: {
					patchState: jest.fn(),
				},
			};

			context.state[name] = TestHelpers.rndString();

			test('Renders the component', () => {
				const rendered = render(component(context))
					.getByRole(name);

				expect(rendered).toBeInTheDocument();
				expect(rendered).toHaveClass(name);
				expect(rendered.value).toEqual(context.state[name]);
				expect(rendered.type).toEqual(type);
			});

			test('triggers action which patches the state', () => {
				const rendered = render(component(context))
					.getByRole(name);

				fireEvent.change(rendered, { target: { value }});

				expect(context.actions.patchState)
					.toHaveBeenCalledWith({ [name]: value });
			});
		});
	},
};

export default TestHelpers;
