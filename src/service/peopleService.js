const PeopleService = {
	updatePeople: ({
		seed,
		state: { name, age, gender, maritalStatus, people },
	}) => ({
		...seed,
		people: people.concat({ name, age, gender, maritalStatus }),
	}),
};

export default PeopleService;
