import { React } from 'react';
import { render } from '@testing-library/react';
import { range } from '@laufire/utils/collection';
import Person from './person';
import People from './people';

describe('People', () => {
	const max = 10;
	const people = range(0, max).map(() => Symbol('person'));
	const context = {
		state: {
			people,
		},
	};

	test('Renders the component', () => {
		jest.spyOn(people, 'map').mockReturnValue(<div role="person"/>);

		const { getByRole } = render(People(context));
		const component = getByRole('people');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('people');
		expect(people.map).toHaveBeenCalledWith(Person);
		expect(getByRole('people')).toBeInTheDocument();
	});
});
