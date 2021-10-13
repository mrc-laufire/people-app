import TestHelpers from '../../test/helpers';
import Gender from './gender';

TestHelpers.testSelect({
	component: Gender,
	name: 'gender',
	selectables: ['Male', 'Female'],
});
