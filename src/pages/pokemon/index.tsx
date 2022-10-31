import {
  Box,
  Title,
  Text,
  Stack,
  Grid,
  Card,
  Image,
  Badge,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchAllPokemon } from "../../services/pokemon.service";

const COLORS = {
  NORMAL: "grey",
  FIRE: "red",
  WATER: "blue",
  ELECTRIC: "yellow",
  GRASS: "green",
  ICE: "lightBlue",
  FIGHTING: "burgundy",
  POISON: "purple",
  GROUND: "brown",
  FLYING: "orange",
  PSYCHIC: "violet",
  BUG: "lime",
  ROCK: "lightGray",
  GHOST: "white",
  DRAGON: "bloodOrange",
  DARK: "black",
  STEEL: "darkGray",
  FAIRY: "pink",
};

export default function AllPokemonPage() {
  const { data } = useQuery(["all-pokemon"], fetchAllPokemon);

  return (
    <Box sx={{ height: "100%" }}>
      <Title>Pokemon List</Title>
      <Grid columns={3}>
        {data?.map((pokemon) => {
          return (
            <Grid.Col span={1} key={pokemon.id}>
              <Card radius="md">
                <Card.Section>
                  <Stack align="center">
                    <Image
                      width="128px"
                      src={
                        pokemon.sprites.other?.["official-artwork"]
                          .front_default
                      }
                      alt={pokemon.name}
                    />
                    <Title style={{ textTransform: "capitalize" }} order={3}>
                      {pokemon.name}
                    </Title>
                  </Stack>
                </Card.Section>
                <Card.Section>
                  <Text>Base XP: {pokemon.base_experience}</Text>
                  {pokemon.types.map((T) => (
                    <Badge
                      key={T.type.name}
                      color={
                        COLORS[
                          T.type.name.toUpperCase() as keyof typeof COLORS
                        ] as string
                      }
                      size="lg"
                    >
                      {T.type.name}
                    </Badge>
                  ))}
                </Card.Section>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </Box>
  );
}
