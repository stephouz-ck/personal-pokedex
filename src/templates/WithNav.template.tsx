import { Box, Image } from "@mantine/core";
import { theme } from "../styles/theme";
import { TemplateProps } from "./template.types";

const TopNav = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        top: "0",
        position: "sticky",
        width: "100%",
        height: "100%",
        padding: "2rem 0",
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark : theme.colors.white,
        zIndex: "2",
      }}
    >
      <Image
        src={
          theme.colorScheme === "light"
            ? "/media/logo_dark.png"
            : "/media/logo_light.png"
        }
        style={{ maxWidth: "12rem" }}
        alt="Personal PokéDex"
      />
    </Box>
  );
};

const WithNavTemplate = ({ children }: TemplateProps) => {
  return (
    <Box style={{ position: "relative" }}>
      <TopNav />
      {children}
    </Box>
  );
};

export default WithNavTemplate;
