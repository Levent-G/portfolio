import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import CustomTypography from '../components/typography/CustomTypography';

const navItems = ['HOMEPAGE', 'BLOG'];

export default function TopBar(props) {
  const { theme } = useTheme();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          bgcolor: theme.backgroundColor,
          borderBottom: `1px solid ${theme.primaryColor}33`,
          paddingY: 1,
          position: 'sticky',
          top: 0,
          zIndex: 1300,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Box sx={{ maxWidth: 1200, marginX: 'auto', width: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center', 
              gap: 6,
              px: 2,
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item}
                to={item === 'BLOG' ? '/blog' : item === 'HOMEPAGE' ? '/' : `/${item.toLowerCase()}`}
                style={{ textDecoration: 'none' }}
              >
                <CustomTypography
                  text={item}
                  sx={{
                    color: theme.primaryColor,
                    fontWeight: 500,
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    transition: 'color 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': { color: theme.accentColor },
                    display: 'block',
                    padding: '10px 16px',
                  }}
                />
              </Link>
            ))}
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}

