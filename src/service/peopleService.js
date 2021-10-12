import { rndString } from '@laufire/utils/random';

const PeopleService = {
	updatePeople: ({
		seed,
		state: { name, age, gender, maritalStatus, people },
	}) => {
		const idLength = 8;
		const id = rndString(idLength);

		return {
			...seed,
			people: people.concat({ id, name, age, gender, maritalStatus }),
		};
	},
};

export default PeopleService;
