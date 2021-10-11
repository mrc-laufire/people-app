import TestHelpers from '../../test/helpers';
import { rndValue } from '@laufire/utils/random';
import Married from './married';

TestHelpers.testInput({
	component: Married,
	name: 'married',
	type: 'checkbox',
	value: rndValue([true, false]),
	prop: 'checked',
});
