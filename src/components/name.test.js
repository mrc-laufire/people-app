import TestHelpers from '../../test/helpers';
import Name from './name';

TestHelpers.testInput({
	component: Name,
	name: 'name',
	type: 'text',
	value: TestHelpers.rndString(),
	prop: 'value',
});
