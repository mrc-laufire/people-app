/* eslint-disable max-lines-per-function */
import { rndString, rndBetween, rndValue } from '@laufire/utils/random';
import { render, fireEvent } from '@testing-library/react';
import { peek } from '@laufire/utils/debug';

const TestHelpers = {
	rndString: () => {
		const idLength = 8;

		return rndString(idLength);
	},
	rndNumber: () => {
		const min = 0;
		const max = 1000;

		return rndBetween(min, max);
	},
	rndGender: () => rndValue(['male', 'female']),
	testInput: ({ component, name, type, value, prop }) => {
		const values = {
			text: TestHelpers.rndString(),
			number: String(TestHelpers.rndNumber()),
			checkbox: [true, false].filter((val) => val !== value)[0],
		};

		describe(component, () => {
			const context = {
				state: {
				},
				actions: {
					patchState: jest.fn(),
				},
			};

			context.state[name] = peek(values[type], 'state');

			test('Renders the component', () => {
				const rendered = render(component(context))
					.getByRole(name);

				expect(rendered).toBeInTheDocument();
				expect(rendered).toHaveClass(name);
				expect(rendered[prop]).toEqual(context.state[name]);
				expect(rendered.type).toEqual(type);
			});

			test('triggers action which patches the state', () => {
				const rendered = render(component(context))
					.getByRole(name);

				fireEvent.change(rendered,
					peek({ target: { [prop]: peek(value, 'value') }},
						'target'));

				expect(context.actions.patchState)
					.toHaveBeenCalledWith({ [name]: value });
			});
		});
	},
};

export default TestHelpers;
