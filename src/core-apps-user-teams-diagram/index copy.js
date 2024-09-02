import TreeView from './interface.vue';

export default {
  id: 'user-team-diagram',
  name: 'User Team Diagram',
  icon: 'box',
  description: 'This is my custom TreeView interface!',
  component: TreeView,
  group: 'relational', 
  types: ['alias'],
  localTypes: ['o2m'],
  options: ({ relations }) => {
	const collection = relations.o2m?.collection; 
	return [
		{
			field: 'displayTemplate',
			name: '$t:display_template',
			meta: {
				interface: 'system-display-template',
				options: {
					collectionName: collection,
				},
				width: 'full',
			},
		},
		{
			field: 'enableCreate',
			name: '$t:creating_items',
			schema: {
				default_value: true,
			},
			meta: {
				interface: 'boolean',
				options: {
					label: '$t:enable_create_button',
				},
				width: 'half',
			},
		}, 
	];
},
};
