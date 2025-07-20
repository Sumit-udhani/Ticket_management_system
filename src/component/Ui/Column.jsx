import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { TicketCard } from './TicketCard';

const Column = ({ title, tickets }) => {
  return (
    <div className="column">
      <h3>{title}</h3>
      <Droppable droppableId={title}>
        {(provided) => (
          <div
            className="droppable-area"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tickets.map((ticket, index) => (
              <TicketCard key={ticket.id} ticket={ticket} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
