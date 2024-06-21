import React, { useState } from "react";
import { Fab, Modal, Box, Typography, IconButton } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { HexColorPicker } from "react-colorful";
import { useTheme } from "../../context/ThemeContext";

const ColorPickerComponent = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState(theme.primaryColor);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleColorChange = (color) => {
    setCurrentColor(color);
    setTheme({ ...theme, primaryColor: color });
  };

  return (
    <div>
      <Fab 
        color="primary" 
        aria-label="color picker" 
        onClick={handleOpen} 
        style={{ position: "fixed", bottom: 16, right: 16 ,backgroundColor:theme.primaryColor}}
      >
        <ColorLensIcon  />
      </Fab>
      <Modal open={open} onClose={handleClose}>
        <Box 
          position="absolute" 
          top="50%" 
          left="50%" 
          style={{ transform: "translate(-50%, -50%)" }}
          bgcolor="background.paper" 
          p={4} 
          boxShadow={24}
        >
          <Typography variant="h6" gutterBottom>
            Select Color
          </Typography>
          <HexColorPicker color={currentColor} onChange={handleColorChange} />
          <IconButton onClick={handleClose} style={{ marginTop: 16 }}>
            <ColorLensIcon />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
};

export default ColorPickerComponent;
