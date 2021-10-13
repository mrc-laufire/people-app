import { render } from '@testing-library/react';
import TestHelpers from '../../test/helpers';
import Person from './person';

describe('Person', () => {
	const { rndString, rndNumber, rndGender, rndMaritalState } = TestHelpers;
	const name = rndString();
	const age = rndNumber();
	const gender = rndGender();
	const maritalStatus = rndMaritalState();
	const person = { name, age, gender, maritalStatus };
	const context = { data: person };

	test('renders the component', () => {
		const component = render(Person(context)).getByRole('person');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('person');
		[name, age, gender, maritalStatus].map((val) =>
			expect(component).toHaveTextContent(val));
	});
});
