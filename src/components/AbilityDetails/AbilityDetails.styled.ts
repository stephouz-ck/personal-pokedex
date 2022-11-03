import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  dialogContainer: {
    height: "50%",
    width: "22%",
    position: "fixed",
    right: "20px",
    bottom: "20px",
    overflowY: "auto",
    "& h1, h2, h3, h4, h5, h6 ": {
      textTransform: "uppercase",
    },
  },
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    padding: "1.75rem 0rem",
    gap: "2rem",
  },
  categoryTitle: {
    fontWeight: "bold",
    textTransform: "capitalize",
  },
}));
