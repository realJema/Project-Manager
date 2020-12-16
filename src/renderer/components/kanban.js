import React from 'react';
import KanbanBoard from './kanbanboard';
import { useRecoilValue } from 'recoil';
import { todoListState } from './globalState';

function Kanban() {
	const cardsList = useRecoilValue(todoListState);

	return <div className="kanban_body">{<KanbanBoard cards={cardsList} />}</div>;
}
export default Kanban;
