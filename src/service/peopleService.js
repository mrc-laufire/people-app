import { rndString } from '@laufire/utils/random';

const PeopleService = {
	updatePeople: ({
		state: { name, age, gender, maritalStatus, people },
	}) => {
		const idLength = 8;
		const id = rndString(idLength);

		return {
			people: people.concat({ id, name, age, gender, maritalStatus }),
		};
	},
};

export default PeopleService;
