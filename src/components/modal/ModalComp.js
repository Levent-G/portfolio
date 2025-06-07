import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
} from "@mui/material";
import { Typography } from "@gib-ui/core";
import CustomButton from "../button/CustomButton";
import { useTheme } from "../../context/ThemeContext";

export default function AreYouSureModal(props) {
  const { theme } = useTheme();

  const renderModalDescription = () => {
    if (typeof props.modalDescription === "function") {
      return (
        <props.modalDescription
          color="rgba(0, 0, 0, 0.7)"
          py="20px"
          fontSize="16px"
          fontWeight="600"
        />
      );
    } else {
      return (
        <DialogContentText>
          <Typography
            fontWeight={600}
            fontSize="16px"
            sx={{
              ...props.sx,
              paddingY: "20px",
              color: "rgba(0,0,0,0.7)",
              lineHeight: 1.5,
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            {props.modalDescription}
          </Typography>
        </DialogContentText>
      );
    }
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.closeModal}
      maxWidth={props.modalWidth}
      PaperProps={{
        sx: {
          borderRadius: 3,
          padding: 3,
          boxShadow:
            "0 10px 20px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)",
          bgcolor: "#fff",
        },
      }}
    >
      {props.modalTitle && (
        <DialogTitle
          sx={{
            backgroundColor: theme.primaryColor,
            color: "#fff",
            fontWeight: 800,
            fontSize: "22px !important",
            paddingY: 2,
            paddingX: 4,
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            letterSpacing: "0.03em",
            userSelect: "none",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        >
          {props.modalTitle}
        </DialogTitle>
      )}
      {props.closeIcon && (
        <IconButton
          aria-label="close"
          onClick={props.closeModal}
          sx={{
            position: "absolute",
            right: 12,
            top: 12,
            color: "#fff",
            transition: "color 0.3s ease",
            "&:hover": {
              color: theme.primaryColor,
              bgcolor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "50%",
            },
          }}
          size="small"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      )}

      <DialogContent sx={{ paddingX: 4, paddingTop: 3, paddingBottom: 4 }}>
        {props.modalDescription && renderModalDescription()}

        {props.children}

        <Stack
          spacing={3}
          direction="row"
          justifyContent="flex-end"
          sx={{ marginTop: 3 }}
        >
          {props.renderCloseModalButton && (
            <CustomButton
              variant="outlined"
              size="small"
              text={props.cancelLabel || "İptal Et"}
              onClick={props.closeModal}
              sx={{
                fontSize: 14,
                minWidth: 100,
                borderRadius: 2,
                color: "rgba(0,0,0,0.6)",
                borderColor: "rgba(0,0,0,0.3)",
                "&:hover": {
                  borderColor: theme.primaryColor,
                  color: theme.primaryColor,
                  bgcolor: "rgba(59,130,246,0.08)",
                },
              }}
            />
          )}
          <CustomButton
            variant="contained"
            size="small"
            text={props.confirmLabel || "Onayla"}
            onClick={props.confirmModal}
            linkTo={props?.linkTo}
            sx={{
              fontSize: 14,
              minWidth: 100,
              borderRadius: 2,
              bgcolor: theme.primaryColor,
              color: "#fff",
              boxShadow:
                "0 4px 12px rgba(59,130,246,0.3)",
              "&:hover": {
                bgcolor: theme.primaryColor,
                boxShadow:
                  "0 6px 16px rgba(59,130,246,0.5)",
              },
            }}
          />
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

AreYouSureModal.defaultProps = {
  modalWidth: "sm",
  renderCloseModalButton: true,
};

AreYouSureModal.propTypes = {
  modalTitle: PropTypes.string,
  modalDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  confirmModal: PropTypes.func,
  closeModal: PropTypes.func,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  children: PropTypes.node,
  closeIcon: PropTypes.bool,
  open: PropTypes.bool,
  renderCloseModalButton: PropTypes.bool,
};
