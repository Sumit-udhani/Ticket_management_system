import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Column from "./Column";
import { TicketForm } from "../../pages/TickectForm";
import { CustomButton } from "./CustomButton";

const STATUS_LIST = ["Assigned", "In Process", "Resolved", "Deployed", "Closed"];

// DraggableTicketCard omitted for brevity — keep your original code

export const Dashboard = ({ setIsAuthenticated }) => {
  const [tickets, setTickets] = useState([]);
  const [openForm, setOpenForm] = useState(false); // <-- Modal open state
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("tickets");
    if (stored) setTickets(JSON.parse(stored));
  }, []);

  const saveTickets = (newTickets) => {
    localStorage.setItem("tickets", JSON.stringify(newTickets));
    setTickets(newTickets);
  };

  const handleAddTicket = (ticket) => {
    saveTickets([...tickets, ticket]);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const moveTicket = (id, newStatus) => {
    if (newStatus === "Closed") return;
    const updated = tickets.map((t) =>
      t.id === id ? { ...t, status: newStatus } : t
    );
    saveTickets(updated);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={{ p: 3 }}>
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 3,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
            Ticket Dashboard
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <CustomButton variant="contained"  onClick={() => setOpenForm(true)}>
              Create Ticket
            </CustomButton>

            <CustomButton variant="outlined"  sx={{ backgroundColor:'red', color:'white'}}  onClick={handleLogout}>
              Logout
            </CustomButton>
          </Box>
        </Box>

        {/* Modal form */}
        <TicketForm
          open={openForm}
          onClose={() => setOpenForm(false)}
          onCreate={handleAddTicket}
        />

        <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
          {STATUS_LIST.map((status) => (
            <Column
              key={status}
              status={status}
              tickets={tickets.filter((t) => t.status === status)}
              onDrop={moveTicket}
            />
          ))}
        </Box>
      </Box>
    </DndProvider>
  );
};

export default Dashboard;
