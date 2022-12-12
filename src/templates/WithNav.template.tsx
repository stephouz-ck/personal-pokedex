import { Box, Container, Stack } from "@mantine/core";
import TopNav from "../components/TopNav/TopNav";

import { TemplateProps } from "./template.types";

const WithNavTemplate = ({ children }: TemplateProps) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Container size="md">
        <TopNav />
        {children}
      </Container>
    </Box>
  );
};

export default WithNavTemplate;
