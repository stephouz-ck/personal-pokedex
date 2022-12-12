import { createStyles } from "@mantine/styles";

export const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    margin: "0.5rem",
    position: "sticky",
  },
}));
