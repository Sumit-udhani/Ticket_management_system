import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
import { CustomButton } from "../component/Ui/CustomButton";

const statusOptions = ["Assigned", "In Process", "Resolved", "Deployed", "Closed"];

export const TicketForm = ({ onCreate = () => {} }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    ticketTitle: "",
    status: "Assigned", // ✅ THIS must be 'status', not 'position'
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      ...formData,
      id: Date.now().toString(),
    };
    onCreate(newTicket);
    setFormData({ customerName: "", ticketTitle: "", status: "Assigned" });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mb: 4, p: 2, display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        name="customerName"
        label="Customer Name"
        value={formData.customerName}
        onChange={handleChange}
        required
      />
      <TextField
        name="ticketTitle"
        label="Ticket Title"
        value={formData.ticketTitle}
        onChange={handleChange}
        required
      />
      <TextField
        select
        name="status" // ✅ Make sure this matches
        label="Status"
        value={formData.status}
        onChange={handleChange}
      >
        {statusOptions.map((status) => (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        ))}
      </TextField>
      <CustomButton type="submit">Create Ticket</CustomButton>
    </Box>
  );
};
