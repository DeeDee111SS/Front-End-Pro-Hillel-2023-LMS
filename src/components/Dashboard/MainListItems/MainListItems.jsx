import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import BarChartIcon from '@mui/icons-material/BarChart';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeWorkSharpIcon from '@mui/icons-material/HomeWorkSharp';
import ImportContactsSharpIcon from '@mui/icons-material/ImportContactsSharp';
import JavascriptIcon from '@mui/icons-material/Javascript';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import { Link } from 'react-router-dom';

export const MainListItems = () => {

  const [openJs, setOpenJs] = React.useState(false);
  const [openReact, setOpenReact] = React.useState(false);

  const handleClickJsCourse = () => {
    setOpenJs(!openJs);
  };

  const handleClickReactCourse = () => {
    setOpenReact(!openReact);
  };

  return (
  <React.Fragment>
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>  

    <ListItemButton>
      <ListItemIcon>
        <PersonSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>

    {/* <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton> */}

    <ListItemButton onClick={handleClickJsCourse}>
      <ListItemIcon>
        <JavascriptIcon />
      </ListItemIcon>
      <ListItemText primary="JS Course" />
      {openJs ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={openJs} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <Link to="/lessons" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ImportContactsSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Lessons" />
          </ListItemButton>
        </Link> 
      </List>
      <List component="div" disablePadding>
        <Link to="/homeworks" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <HomeWorkSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Homeworks" />
          </ListItemButton>
        </Link> 
      </List>
    </Collapse>

      <ListItemButton onClick={handleClickReactCourse}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="React Course" />
        {openReact ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openReact} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <Link to="/lessons" style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <ImportContactsSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Lessons" />
                </ListItemButton>
            </Link>
        </List>
        <List component="div" disablePadding>
          <Link to="/homeworks" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <HomeWorkSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Homeworks" />
            </ListItemButton>
          </Link> 
        </List>        
      </Collapse> 
  </React.Fragment>
);}

export default MainListItems;
