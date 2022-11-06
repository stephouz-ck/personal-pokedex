import { Box, Button, Group, Image } from "@mantine/core";
import { TemplateProps, TopNavProps } from "./template.types";

const TopNav = ({ onClear }: TopNavProps) => {
  return (
    <Box sx={{ margin: "1.5rem 0" }}>
      <Group
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Image
          src="/media/pokedex_logo.png"
          style={{ maxWidth: "8rem" }}
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
    <Box>
      <TopNav onClear={() => onClear()} />
      {children}
    </Box>
  );
};

export default WithNavTemplate;
