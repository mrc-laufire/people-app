import TestHelpers from '../../test/helpers';
import MaritalStatus from './marital-status';

TestHelpers.testSelect({
	component: MaritalStatus,
	name: 'maritalStatus',
	selectables: ['Single', 'Married'],
});
