import { Box, Button, Group, Image } from "@mantine/core";
import { theme } from "../styles/theme";
import { TemplateProps, TopNavProps } from "./template.types";

const TopNav = ({ onClear }: TopNavProps) => {
  return (
    <Box
      style={{
        top: "0",
        position: "sticky",
        width: "100%",
        height: "100%",
        padding: "2rem 0",
        backgroundColor: theme.colors.dark[7],
        zIndex: "2",
      }}
    >
      <Group
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Image
          src="/media/pokedex_logo.png"
          style={{ maxWidth: "12rem" }}
          alt="Personal PokéDex"
        />
        <Group>
          <Button
            size="md"
            leftIcon={
              <Image
                src="/media/icons/other/exchange.png"
                style={{ maxWidth: "24px" }}
                alt="Compare"
              />
            }
          >
            Compare
          </Button>
          <Button
            size="md"
            onClick={() => onClear()}
            leftIcon={
              <Image
                src="/media/icons/other/redo.png"
                style={{ maxWidth: "24px" }}
                alt="Compare"
              />
            }
          >
            Clear
          </Button>
        </Group>
      </Group>
    </Box>
  );
};

const WithNavTemplate = ({ children, onClear }: TemplateProps) => {
  return (
    <Box style={{ position: "relative" }}>
      <TopNav onClear={() => onClear()} />
      {children}
    </Box>
  );
};

export default WithNavTemplate;
