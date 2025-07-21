import React from "react";
import { useDrop } from "react-dnd";
import { Paper, Typography, Box } from "@mui/material";
import { TicketCard } from "./TicketCard"; // ✅ curly braces for named export


const Column = ({ status, tickets, onDrop }) => {
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: "TICKET",
    canDrop: () => status !== "Closed",
    drop: (item) => onDrop(item.id, status),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = isOver && canDrop;

  return (
    <Paper
      ref={dropRef}
      elevation={isActive ? 6 : 2}
       sx={{
    p: 2,
    width: 180,          // Smaller width
    minHeight: 150,
    backgroundColor: isActive ? "#e3f2fd" : "#f5f5f5",
    border: isActive ? "2px dashed #2196f3" : "1px solid #ccc",
    borderRadius: 2,
    display: "flex",
    flexDirection: "column",
  }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
        {status} <Typography component="span">({tickets.length})</Typography>
      </Typography>

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 2 }}>
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </Box>
    </Paper>
  );
};

export default Column;
