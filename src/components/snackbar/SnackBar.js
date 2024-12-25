import { Alert, Box } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useEffect, useState } from "react";
const SnackBar = ({ message = "" }) => {
  const [alertMessage, setAlertMessage] = useState(message || "");

  useEffect(() => {
    if (alertMessage !== "") {
      const timeout = setTimeout(() => {
        setAlertMessage("");
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [alertMessage]);

  const handleClose = () => {
    setAlertMessage("");
  };

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={alertMessage !== "" ? true : false}
        onClose={handleClose}
        key={"topCenter"}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          icon={<ErrorOutlineIcon sx={{ color: "white" }} />}
          sx={{
            backgroundColor: "#f44336",
            color: "#fff",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ marginLeft: "8px" }}>{alertMessage}</span>
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SnackBar;
