// src/components/TopBar.js
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import classNames from 'classnames';
import 'animate.css';
import { useTheme } from '../context/ThemeContext';
import CustomTypography from '../components/typography/CustomTypography'; // Import CustomTypography component

const drawerWidth = 240;
const navItems = ['HOMEPAGE', 'BLOG'];

function TopBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { theme } = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", bgcolor: theme.backgroundColor }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                to={
                  item === "BLOG"
                    ? "/blog"
                    : item === "HOMEPAGE"
                    ? "/"
                    : `/${item.toLowerCase()}`
                }
                key={item}
              >
                <ListItemText primary={item} sx={{ color: theme.primaryTextColor }} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        className={classNames("animate__animated", "animate__fadeInDown")}
        style={{
          boxShadow: "none",
          background: `transparent linear-gradient(270deg, ${theme.primaryColor} 0%, #333333 62%, #333333 100%) 0% 0%`,
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            {navItems.map((item) => (
              <button key={item} >
                <Link
                  to={
                    item === "BLOG"
                      ? "/blog"
                      : item === "HOMEPAGE"
                      ? "/"
                      : `/${item.toLowerCase()}`
                  }
                  key={item}
                >
                  <CustomTypography text={item} strongText="" sx={{ color: theme.primaryTextColor,fontSize:"12px" ,margin:1}}  />
                </Link>
              </button>
            ))}
          </Box>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: theme.backgroundColor,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

TopBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default TopBar;
