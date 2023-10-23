import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

const useStyles = {
  drawer: {
    width: drawerWidth,
  },
  button: {
    margin: '2rem',
  },
};

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <Button
        sx={useStyles.button}
        variant="contained"
        color="primary"
        onClick={toggleDrawer}
      >
        Открыть меню
      </Button>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={useStyles.drawer}
      >
        <Accordion>
          <AccordionSummary>Меню</AccordionSummary>
          <AccordionDetails>
            <Typography>
              {/* Подменю с ссылками */}
              <ul>
                <li>Ссылка 1</li>
                <li>Ссылка 2</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Drawer>
    </div>
  );
}

export default App;