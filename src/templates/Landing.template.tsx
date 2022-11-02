import { Box, createStyles } from "@mantine/core";
import { TemplateProps } from "./template.types";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const LandingTemplate = ({ children }: TemplateProps) => {
  const { classes } = useStyles();
  return <Box className={classes.container}>{children}</Box>;
};

export default LandingTemplate;
