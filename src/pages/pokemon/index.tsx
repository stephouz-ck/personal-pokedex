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
  Skeleton,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import { Ability } from "../../interfaces/ability";
import { Pokemon } from "../../interfaces/api";
import { TYPE_COLORS } from "../../interfaces/color-types";
import { fetchAllPokemon } from "../../services/pokemon.service";
import WithNavTemplate from "../../templates/WithNav.template";
import { useStyles } from "./pokemon.styled";

const PokemonDetails = dynamic(
  () => import("../../components/PokemonDetails/PokemonDetails")
);

export default function AllPokemonPage() {
  const { data, isLoading } = useQuery(["all-pokemon"], fetchAllPokemon, {
    suspense: true,
  });
  const { classes } = useStyles();
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  return (
    <WithNavTemplate>
      <Box sx={{ height: "100%" }}>
        <Grid columns={3}>
          {data?.map((pokemon) => {
            return (
              <Grid.Col span={1} key={pokemon.id}>
                <Suspense
                  fallback={<Skeleton visible={isLoading} width="4.75rem" />}
                >
                  <Card
                    radius="md"
                    className={classes.cardContainer}
                    onClick={(e) => {
                      setSelectedPokemon(pokemon);
                    }}
                  >
                    <Card.Section inheritPadding py="sm">
                      <Stack align="center">
                        <Suspense
                          fallback={
                            <Skeleton visible={isLoading} width="4.75rem" />
                          }
                        >
                          <Image
                            width="4.75rem"
                            src={
                              pokemon.sprites.other?.["official-artwork"]
                                .front_default
                            }
                            alt={pokemon.name}
                          />
                        </Suspense>
                        <Title className={classes.cardTitle} order={3}>
                          {pokemon.name}
                        </Title>
                      </Stack>
                    </Card.Section>
                    <Card.Section inheritPadding py="sm">
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
                </Suspense>
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
    </WithNavTemplate>
  );
}
