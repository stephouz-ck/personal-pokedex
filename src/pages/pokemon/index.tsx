import {
  Box,
  Title,
  Text,
  Stack,
  Grid,
  Card,
  Image,
  Badge,
  Group,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Pokemon } from "../../interfaces/api";
import { TYPE_COLORS } from "../../interfaces/color-types";
import { fetchAllPokemon } from "../../services/pokemon.service";
import WithNavTemplate from "../../templates/WithNav.template";

const PokemonDetails = dynamic(
  () => import("../../components/PokemonDetails/PokemonDetails")
);
// const SecondPokemonDetails = dynamic(
//   () => import("../../components/PokemonDetails/SecondPokemonDetails")
// );

export default function AllPokemonPage() {
  const { data } = useQuery(["all-pokemon"], fetchAllPokemon);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  // const [secondSelected, setSecondSelected] = useState<Pokemon | null>(null);

  // const handlePokemonSelect = (first: Pokemon, second: Pokemon) => {
  //   if (second.id !== first.id) {
  //     setSecondSelected(second);
  //   }
  //   setSelectedPokemon(first)
  // };

  // useEffect(() => {
  //   if (selectedPokemon !== null) {
  //     setSecondSelected()
  //   }
  // }, [selectedPokemon])

  return (
    <WithNavTemplate>
      <Box sx={{ height: "100%" }}>
        <Grid columns={3}>
          {data?.map((pokemon) => {
            return (
              <Grid.Col span={1} key={pokemon.id}>
                <Card radius="md" onClick={() => setSelectedPokemon(pokemon)}>
                  <Card.Section inheritPadding py="xs">
                    <Stack align="center">
                      <Image
                        width="4.75rem"
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
                  <Card.Section inheritPadding py="xs">
                    <Stack align="center">
                      <Text>Base XP: {pokemon.base_experience}</Text>
                      <Group>
                        {pokemon.types.map((T) => (
                          <Badge
                            key={T.type.name}
                            color={
                              TYPE_COLORS[
                                T.type.name.toUpperCase() as keyof typeof TYPE_COLORS
                              ] as string
                            }
                            size="lg"
                          >
                            {T.type.name}
                          </Badge>
                        ))}
                      </Group>
                    </Stack>
                  </Card.Section>
                </Card>
              </Grid.Col>
            );
          })}
        </Grid>
      </Box>
      {selectedPokemon && (
        <PokemonDetails
          selectedPokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
      {/* {selectedPokemon && secondSelected && (
        <SecondPokemonDetails
          selectedPokemon={secondSelected}
          onClose={() => setSecondSelected(null)}
        />
      )} */}
    </WithNavTemplate>
  );
}
