import React from "react";
import { useDrag } from "react-dnd";
import { Card, CardContent, Typography } from "@mui/material";

export const TicketCard = ({ ticket }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "TICKET",
    item: { id: ticket.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Card
      ref={dragRef}
      variant="outlined"
      sx={{
        mb: 2,
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        boxShadow: 1,
        transition: "opacity 0.2s ease-in-out",
        maxWidth: 250,          // Added maxWidth
        width: "100%",          // To be responsive within parent container
      }}
    >
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold">
          {ticket.ticketTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Customer: {ticket.customerName}
        </Typography>
      </CardContent>
    </Card>
  );
};
