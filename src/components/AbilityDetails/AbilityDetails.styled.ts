import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  dialogContainer: {
    height: "auto",
    width: "22%",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%) !important",
    gap: "4rem",
    "& h1, h2, h3, h4, h5, h6 ": {
      textTransform: "uppercase",
    },
  },
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  categoryTitle: {
    fontWeight: "bold",
    textTransform: "capitalize",
    margin: "0 0 2rem 0",
  },
}));
