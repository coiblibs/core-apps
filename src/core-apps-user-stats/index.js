import InterfaceComponent from './interface.vue';
export default {
	id: 'core-apps-user-stats',
	name: 'User Stats',
	icon: 'query_stats',
	description: 'This is my custom interface!',
	component: InterfaceComponent,
	hideLabel: true,
	hideLoader: true,
	autoKey: true,
	options: null,
	types: ['json','bigInteger', 'number','integer'],
  };
  