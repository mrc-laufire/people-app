import TestHelpers from '../../test/helpers';
import * as Random from '@laufire/utils/random';
import PeopleService from './peopleService';

describe('People service', () => {
	const { rndString, rndNumber, rndGender, rndMaritalState } = TestHelpers;
	const context = {
		state: {
			name: rndString(),
			age: rndNumber(),
			gender: rndGender(),
			maritalStatus: rndMaritalState(),
			people: [],
		},
	};

	test('updatePeople returns updated people', () => {
		const { name, age, gender, maritalStatus, people } = context.state;
		const id = rndString();

		jest.spyOn(Random, 'rndString').mockReturnValue(id);

		const result = PeopleService.updatePeople(context);

		expect(result).toEqual({
			people: people.concat({ id, name, age, gender, maritalStatus }),
		});
	});
});
