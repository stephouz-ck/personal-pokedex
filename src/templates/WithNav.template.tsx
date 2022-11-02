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
          <Button size="md">button</Button>
          <Button size="md">button</Button>
          <Button size="md">button</Button>
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
