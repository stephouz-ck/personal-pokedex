import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  cardContainer: {
    cursor: "pointer",
    ":hover": {
      backgroundColor: theme.colors.blue[5],
      color: theme.colors.blue[0],
      transition: "200ms ease",
    },
  },
  activeCard: {
    border: `1.5px solid ${theme.colors.blue[0]}`,
  },
  cardTitle: {
    textTransform: "capitalize",
  },
}));
