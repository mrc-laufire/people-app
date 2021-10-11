import actions from './actions';

describe('actions', () => {
	test('patchState', () => {
		const data = Symbol('data');

		const result = actions.patchState({ data });

		expect(result).toEqual(data);
	});
});
