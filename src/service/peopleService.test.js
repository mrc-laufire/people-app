import PeopleService from './peopleService';
import TestHelpers from '../../test/helpers';
import * as Random from '@laufire/utils/random';

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
		const id = rndString();

		jest.spyOn(Random, 'rndString').mockReturnValue(id);

		const result = PeopleService.updatePeople(context);

		expect(result).toEqual({
			...context.seed,
			people: people.concat({ id, name, age, gender, maritalStatus }),
		});
	});
});
