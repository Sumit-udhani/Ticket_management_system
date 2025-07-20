import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { TicketCard } from "./TicketCard";

const Column = ({ title, droppableId, tickets }) => {
  return (
    <div className="column">
      <h3>{title}</h3>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div
            className="droppable-area"
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ minHeight: "100px" }}
          >
            {tickets.map((ticket, index) => (
              <Draggable
                key={ticket.id}
                draggableId={ticket.id.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      userSelect: "none",
                      marginBottom: 8,
                      ...provided.draggableProps.style,
                    }}
                  >
                    <TicketCard ticket={ticket} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
