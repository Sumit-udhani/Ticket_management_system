import { Box, MenuItem, Typography, Modal, IconButton } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { CustomButton } from "../component/Ui/CustomButton";
import { InputField } from "../component/Ui/InputField";

const statusOptions = ["Assigned", "In Process", "Resolved", "Deployed", "Closed"];

export const TicketForm = ({ open, onClose, onCreate = () => {} }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    ticketTitle: "",
    status: "Assigned",
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
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="create-ticket-modal"
      aria-describedby="create-ticket-form"
      closeAfterTransition
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: "relative",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          width: 400,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
          aria-label="close"
          size="small"
        >
          <CloseIcon />
        </IconButton>

        <Typography id="create-ticket-modal" variant="h6" component="h2" textAlign="center" mb={2}>
          Create Ticket
        </Typography>

        <InputField
          name="customerName"
          label="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
          required
          fullwidth
        />
        <InputField
          name="ticketTitle"
          label="Ticket Title"
          value={formData.ticketTitle}
          onChange={handleChange}
          required
          fullwidth
        />
        <InputField
          name="status"
          label="Status"
          value={formData.status}
          onChange={handleChange}
          fullwidth
          select
        >
          {statusOptions.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </InputField>

        <CustomButton type="submit" fullWidth>
          Create Ticket
        </CustomButton>
      </Box>
    </Modal>
  );
};
