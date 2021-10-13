import PeopleService from '../service/peopleService';

const patchState = ({ data }) => data;

const updatePeople = (context) =>
	PeopleService.updatePeople(context);

const resetInputs = ({ seed, state: { people }}) => ({
	...seed,
	people,
});

const actions = {
	patchState,
	updatePeople,
	resetInputs,
};

export default actions;
