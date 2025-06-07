import React from 'react';
import { CircularProgress, Box } from '@mui/material';
import { useTheme } from '../context/ThemeContext';

const Loading = () => {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0, // top:0, left:0, right:0, bottom:0 kısa hali
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'white',
        zIndex: 1300, // üstte görünmesi için yüksek zIndex
      }}
    >
      <CircularProgress
        size={40}
        sx={{ color: theme.primaryColor || '#1976d2' }}
      />
    </Box>
  );
};

export default Loading;
