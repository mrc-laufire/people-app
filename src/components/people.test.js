import { React } from 'react';
import { render } from '@testing-library/react';
import { range } from '@laufire/utils/collection';
import * as Person from './person';
import People from './people';

describe('People', () => {
	const max = 10;
	const people = range(0, max).map((i) => ({
		id: i,
		name: Symbol('person'),
	}));
	const context = {
		state: {
			people,
		},
	};

	test('Renders the component', () => {
		jest.spyOn(Person, 'default').mockImplementation(({ data }) =>
			<div key={ data.id } role="person"/>);

		const { getByRole, getAllByRole } = render(People(context));
		const component = getByRole('people');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('people');
		expect(getAllByRole('person').length).toEqual(people.length);
		getAllByRole('person').map((val) => expect(val).toBeInTheDocument());
		people.map((person) => expect(Person.default)
			.toHaveBeenCalledWith({ ...context, data: person }));
	});
});
