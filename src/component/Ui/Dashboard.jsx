import { useEffect, useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Typography, Divider } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import { TicketForm } from '../../pages/TickectForm';

const statusList = ["Assigned", "In Process", "Resolved", "Deployed", "Closed"];
const drawerWidth = 280;

export const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('tickets');
    if (stored) setTickets(JSON.parse(stored));
  }, []);

  const saveTickets = (newTickets) => {
    localStorage.setItem('tickets', JSON.stringify(newTickets));
    setTickets(newTickets);
  };

  const handleAddTicket = (ticket) => {
    const newTickets = [...tickets, ticket];
    saveTickets(newTickets);
  };

  const onDragEnd = (result) => {
    const { destination, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === "Closed") return;

    const updatedTickets = [...tickets];
    const ticketIndex = updatedTickets.findIndex(t => t.id === draggableId);
    updatedTickets[ticketIndex].status = destination.droppableId;
    saveTickets(updatedTickets);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6">All Tickets</Typography>
        </Box>
        <Divider />
        <List>
          {tickets.map((ticket) => (
            <ListItem key={ticket.id} disablePadding>
              <ListItemText
                primary={ticket.ticketTitle}
                secondary={`Status: ${ticket.status}`}
                sx={{ px: 2 }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>Ticket Dashboard</Typography>
        <TicketForm onCreate={handleAddTicket} />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <DragDropContext onDragEnd={onDragEnd}>
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                tickets={tickets.filter(ticket => ticket.status === status)}
              />
            ))}
          </DragDropContext>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
