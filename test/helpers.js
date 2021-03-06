/* eslint-disable max-lines-per-function */
import { rndString, rndBetween, rndValue } from '@laufire/utils/random';
import { render, fireEvent } from '@testing-library/react';

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
	rndGender: () => rndValue(['Male', 'Female']),
	rndMaritalState: () => rndValue(['Single', 'Married']),
	testInput: ({ component, name, type, value }) => {
		const values = {
			text: TestHelpers.rndString(),
			number: String(TestHelpers.rndNumber()),
		};

		describe(component, () => {
			const context = {
				state: {
				},
				actions: {
					patchState: jest.fn(),
				},
			};

			context.state[name] = values[type];

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
	testSelect: ({ component, name, selectables }) => {
		describe(name, () => {
			const values = {
				gender: TestHelpers.rndGender(),
				maritalStatus: TestHelpers.rndMaritalState(),
			};
			const context = {
				state: {
				},
				actions: {
					patchState: jest.fn(),
				},
			};

			context.state[name] = values[name];

			test('Renders the component', () => {
				const { getByRole, getAllByRole } = render(component(context));
				const rendered = getByRole(name);
				const options = getAllByRole('option');

				expect(rendered).toBeInTheDocument();
				expect(rendered).toHaveClass(name);
				expect(rendered.value).toEqual(context.state[name]);
				options.map((option) => expect(option).toBeInTheDocument());
			});

			test('triggers action which patches the state', () => {
				const [value] = selectables.filter((val) => val !== name);

				const rendered = render(component(context)).getByRole(name);

				fireEvent.change(rendered, { target: { value }});

				expect(context.actions.patchState)
					.toHaveBeenCalledWith({ [name]: value });
			});
		});
	},
};

export default TestHelpers;
