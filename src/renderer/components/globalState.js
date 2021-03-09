
const { atom } = require("recoil");

export const todoListState = atom({
	key: 'todoListState',
	default: [
		{
			id: 1,
			title: 'Read the Book',
			color: '#BD8D31',
			description: 'I should read the **whole** book',
			status: 'in-progress',
			tasks: [],
		},
		{
			id: 2,
			title: 'Write some code',
			color: '#3A7E28',
			description:
				'Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)',
			status: 'to-do',
			tasks: [
				{ id: 1, name: 'ContactList Example', done: true },
				{ id: 2, name: 'Kanban Example', done: false },
				{ id: 3, name: 'My own experiments', done: false },
			],
		},
		{
			id: 3,
			title: 'Read the Book',
			color: '#BD8D31',
			description: 'I should read the **whole** book',
			status: 'in-progress',
			tasks: [],
		},
		{
			id: 4,
			title: 'Write some code',
			color: '#3A7E28',
			description:
				'Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)',
			status: 'to-do',
			tasks: [
				{ id: 1, name: 'ContactList Example', done: true },
				{ id: 2, name: 'Kanban Example', done: false },
				{ id: 3, name: 'My own experiments', done: false },
			],
		},
	],
});

// export const removeTask = selector({
// 	key: 'removeTask',
// 	get: ({ get, set }) => {
//         const todoList = get(todoListState);
//         for (index = 0; index < todoList.length; ++index) {
// 			if (todoList.id == passedId) {
// 				todoList.splice(index, 1); // This will remove the object that first name equals to Test1
// 				return false; // This will stop the execution of jQuery each loop.
// 			}
// 		}
		
// 	},
// });
