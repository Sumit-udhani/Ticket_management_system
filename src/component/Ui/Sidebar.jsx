import React from "react";
import { useDrag } from "react-dnd";
import { ListItem, Paper, ListItemText } from "@mui/material";

export const SidebarTicketCard = ({ ticket }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "TICKET",
    item: { id: ticket.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <ListItem
      ref={dragRef}
      sx={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "grab",
        p: 0,
      }}
    >
      <Paper sx={{ p: 1, width: "100%" }}>
        <ListItemText
          primary={ticket.ticketTitle}
          secondary={`Customer: ${ticket.customerName}`}
        />
      </Paper>
    </ListItem>
  );
};
