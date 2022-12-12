import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  grid: {
    margin: "0 !important",
  },
  cardContainer: {
    cursor: "pointer",
    ":hover": {
      backgroundColor: theme.colors.blue[5],
      color: theme.colors.blue[0],
      transition: "200ms ease",
    },
  },
  activeCard: {
    backgroundColor: theme.colors.blue[5],
    cursor: "pointer",
  },
  cardTitle: {
    textTransform: "capitalize",
  },
}));
