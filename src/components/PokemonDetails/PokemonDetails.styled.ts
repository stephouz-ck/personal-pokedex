import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  detailsContainer: {
    overflow: "hidden",
    position: "fixed",
    border: "1px solid grey",
    backgroundColor: theme.colors.grey[8],
    borderRadius: "8px",
    padding: "1rem",
    minWidth: "28rem",
    "& h1, h2, h3, h4, h5, h6 ": {
      textTransform: "uppercase",
    },
  },
  firstPokemon: {
    top: "20px",
    left: "20px",
    bottom: "20px",
  },
  secondPokemon: {
    top: "20px",
    right: "20px",
    bottom: "20px",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  detailContent: {
    width: "100%",
    height: "calc(100vh - 20vh)",
    overflow: "scroll",
  },
  detailScrollArea: {
    height: "75%",
    margin: "2rem 0",
    // div1 = ScrollArea, div2 = Table, div3 = child elements
    "& > div > div > div": {
      margin: "2rem 0",
    },
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
