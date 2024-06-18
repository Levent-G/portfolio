import React from 'react';
import { CircularProgress, Box } from '@mui/material';
import { useTheme } from '../context/ThemeContext';

const Loading = () => {
  const {theme} = useTheme();
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'white',
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress sx={{ color: theme.primaryColor }} size={80} />
      </Box>
    </Box>
  );
};

export default Loading;
