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
          color="rgba(0, 0, 0, 0.6)"
          py="20px"
          fontSize="18px"
          fontWeight="bold"
        />
      );
    } else {
      return (
        <DialogContentText>
          <Typography
            fontWeight={"bold"}
            fontSize={"18px"}
            sx={{
              ...props.sx,
              paddingY: "20px",
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
    >
      {props.modalTitle && (
        <DialogTitle
          sx={{
            backgroundColor: theme.primaryColor,
            color: "#FFFF",
            fontWeight: "700",
            fontSize: "24px !important",
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
            right: 8,
            top: 8,
            color: "#FFFF",
          }}
        >
          <CloseIcon />
        </IconButton>
      )}

      <DialogContent>
        {props.modalDescription && renderModalDescription()}

        {props.children}

        <Stack
          spacing={2}
          direction={"row"}
          display={"flex"}
          justifyContent={"end"}
        >
          {props.renderCloseModalButton && (
            <CustomButton
              variant="outlined"
              size="small"
              text={props.cancelLabel || "İptal Et"}
              onClick={props.closeModal}
           
            />
         
          )}
          <CustomButton
            variant="outlined"
            text={props.confirmLabel || "Onayla"}
            onClick={props.confirmModal}
            linkTo={props?.linkTo}
          />
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

//Modal default width
AreYouSureModal.defaultProps = {
  modalWidth: "sm",
  renderCloseModalButton: true,
};

AreYouSureModal.propTypes = {
  modalTitle: PropTypes.string,
  modalDescription: PropTypes.string,
  confirmModal: PropTypes.func,
  closeModal: PropTypes.func,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  children: PropTypes.node,
  closeIcon: PropTypes.bool,
  open: PropTypes.bool,
  renderCloseModalButton: PropTypes.bool,
};
