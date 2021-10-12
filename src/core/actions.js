import PeopleService from '../service/peopleService';

const patchState = ({ data }) => data;

const updatePeople = (context) =>
	PeopleService.updatePeople(context);

const actions = {
	patchState,
	updatePeople,
};

export default actions;
