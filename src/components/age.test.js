import TestHelpers from '../../test/helpers';
import Age from './age';

TestHelpers.testInput({
	component: Age,
	name: 'age',
	type: 'number',
	value: String(TestHelpers.rndNumber()),
	prop: 'value',
});
