import { Paper, Typography } from "@mui/material";
export const TicketCard = ({ ticket }) => {
  return (
    <Paper sx={{ p: 1, mb: 1, backgroundColor: "#f5f5f5" }}>
      <Typography variant="subtitle1">{ticket.ticketTitle}</Typography>
      <Typography variant="body2" color="text.secondary">
        {ticket.customerName}
      </Typography>
    </Paper>
  );
};
