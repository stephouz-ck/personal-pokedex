import { Box, Button, Group, Image } from "@mantine/core";
import { TemplateProps } from "./template.types";

const TopNav = () => {
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
          src="/media/pokedex_logo2.png"
          style={{ maxWidth: "16rem" }}
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
            leftIcon={
              <Image
                src="/media/icons/other/eraser.png"
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

const WithNavTemplate = ({ children }: TemplateProps) => {
  return (
    <Box>
      <TopNav />
      {children}
    </Box>
  );
};

export default WithNavTemplate;
