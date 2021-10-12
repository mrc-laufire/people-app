import PeopleService from './peopleService';
import TestHelpers from '../../test/helpers';

describe('People service', () => {
	const { rndString, rndNumber, rndGender, rndMaritalState } = TestHelpers;
	const context = {
		seed: { data: Symbol('data') },
		state: {
			name: rndString(),
			age: rndNumber(),
			gender: rndGender(),
			maritalStatus: rndMaritalState(),
			people: [],
		},
	};

	test('udatePeople returns updated people', () => {
		const { name, age, gender, maritalStatus, people } = context.state;

		const result = PeopleService.updatePeople(context);

		expect(result).toEqual({
			...context.seed,
			people: people.concat({ name, age, gender, maritalStatus }),
		});
	});
});
