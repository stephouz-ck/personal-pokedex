import { Center, Box, Button, Stack, Image } from "@mantine/core";
import Link from "next/link";
import LandingTemplate from "../templates/Landing.template";

export default function Home() {
  return (
    <LandingTemplate>
      <Box sx={{ height: "100%" }}>
        <Center sx={{ height: "100%" }}>
          <Stack>
            <Image src="/media/pokedex_logo.png" alt="PokéSteph" />
            <Link href="/pokemon" passHref>
              <Button component="a" sx={{ margin: "0 auto" }}>
                Show all pokemon
              </Button>
            </Link>
          </Stack>
        </Center>
      </Box>
    </LandingTemplate>
  );
}
