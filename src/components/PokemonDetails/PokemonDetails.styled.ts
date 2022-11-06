import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  dialogContainer: {
    height: "95%",
    width: "22%",
    position: "fixed",
    left: "20px",
    top: "20px",
    overflow: "hidden",
    "& h1, h2, h3, h4, h5, h6 ": {
      textTransform: "uppercase",
    },
  },
  secondDialogContainer: {
    height: "95%",
    width: "22%",
    position: "fixed",
    right: "20px",
    top: "20px",
    overflow: "hidden",
    "& h1, h2, h3, h4, h5, h6 ": {
      textTransform: "uppercase",
    },
  },
  header: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  dialogContent: {
    width: "100%",
    height: "calc(100vh - 20vh)",
    overflow: "hidden",
  },
  dialogScrollArea: {
    height: "75%",
    padding: "0 0 4rem 0",
    margin: "2rem 0",
    // div1 = ScrollArea, div2 = Table, div3 = child elements
    "& > div > div > div": {
      margin: "2rem 0",
    },
    "&, &:hover": {
      // TODO: fix scroll bar height
      "& > div > mantine-ScrollArea-scrollbar": {
        height: "16rem",
        marginTop: "2rem 0",
      },
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
