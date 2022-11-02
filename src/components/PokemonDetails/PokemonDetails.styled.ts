import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  dialogContainer: {
    height: "95%",
    width: "22%",
    position: "fixed",
    left: "20px",
    top: "20px",
    "& > h1, h2, h3, h4, h5, h6 ": {
      textTransform: "uppercase",
    },
  },
  secondDialogContainer: {
    height: "95%",
    width: "22%",
    position: "fixed",
    right: "20px",
    top: "20px",
    "& > h1, h2, h3, h4, h5, h6 ": {
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
  statInfo: {
    justifyContent: "space-between",
    fontSize: "12px",
    textTransform: "uppercase",
  },
}));
