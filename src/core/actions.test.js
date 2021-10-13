import PeopleService from '../service/peopleService';
import actions from './actions';

describe('actions', () => {
	test('patchState', () => {
		const data = Symbol('data');

		const result = actions.patchState({ data });

		expect(result).toEqual(data);
	});
	test('updatePeople', () => {
		const data = Symbol('data');

		jest.spyOn(PeopleService, 'updatePeople').mockReturnValue(data);

		const result = actions.updatePeople(data);

		expect(result).toEqual(data);
		expect(PeopleService.updatePeople).toHaveBeenCalledWith(data);
	});
	test('resetInput', () => {
		const seed = { data: Symbol('data') };
		const state = { people: Symbol('people') };

		const result = actions.resetInputs({ seed, state });

		expect(result).toEqual({ ...seed, people: state.people });
	});
});
