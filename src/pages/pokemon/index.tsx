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
  LoadingOverlay,
  Skeleton,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { TYPE_COLORS } from "../../constants/constants";
import { Pokemon } from "../../interfaces/api";
import { fetchAllPokemon } from "../../services/pokemon.service";
import useStore from "../../store/useStore";
import WithNavTemplate from "../../templates/WithNav.template";
import { useStyles } from "./pokemon.styled";

const PokemonDetails = dynamic(
  () => import("../../components/PokemonDetails/PokemonDetails")
);

export default function AllPokemonPage() {
  const { data, isLoading } = useQuery(["all-pokemon"], fetchAllPokemon, {
    suspense: true,
    refetchOnWindowFocus: false,
  });
  const { classes } = useStyles();
  const { firstPokemon, secondPokemon, setFirstPokemon, setSecondPokemon } =
    useStore();

  const selectedPokemonArray: Pokemon[] = [];

  const handlePokemonSelect = (pokemon: Pokemon) => {
    selectedPokemonArray.unshift(pokemon);

    const tempArray = selectedPokemonArray.slice(0, 2);

    const filterPokemon = (clickedPokemon: Pokemon) => {
      if (firstPokemon === null) {
        tempArray.push(clickedPokemon);
        setFirstPokemon(tempArray.at(0) as Pokemon);
      }
      if (
        firstPokemon &&
        secondPokemon === null &&
        firstPokemon.id !== clickedPokemon.id
      ) {
        tempArray.unshift(clickedPokemon);
        setSecondPokemon(tempArray.at(1) as Pokemon);
      }
      // TODO: find way to handle a third choice
      // if (
      //   firstPokemon !== null &&
      //   secondPokemon !== null &&
      //   clickedPokemon.name !== tempArray.at(0)?.name &&
      //   clickedPokemon.name !== tempArray.at(1)?.name
      // ) {
      //   selectedPokemonArray.unshift(clickedPokemon);
      //   setSecondPokemon(clickedPokemon);
      // }
    };
    return filterPokemon(pokemon);
  };

  if (isLoading) {
    return (
      <Box style={{ width: "100%", height: "100%" }}>
        <LoadingOverlay visible={true} />
      </Box>
    );
  }

  return (
    <WithNavTemplate>
      <Grid columns={3}>
        {data?.map((pokemon) => (
          <Grid.Col span={1} key={pokemon.id}>
            <Card
              key={pokemon.id}
              radius="md"
              className={
                firstPokemon?.id === pokemon.id ||
                secondPokemon?.id === pokemon.id
                  ? classes.activeCard
                  : classes.cardContainer
              }
              onClick={() => handlePokemonSelect(pokemon)}
            >
              <Card.Section inheritPadding py="sm">
                <Stack align="center">
                  <Suspense
                    fallback={
                      isLoading && (
                        <Skeleton height="100%" width="100%" mb="xl" circle />
                      )
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
                  <Suspense
                    fallback={
                      isLoading && <Skeleton height="100%" width="auto" />
                    }
                  >
                    <Title className={classes.cardTitle} order={3}>
                      {pokemon.name}
                    </Title>
                  </Suspense>
                </Stack>
              </Card.Section>
              <Card.Section inheritPadding py="sm">
                <Stack align="center">
                  <Group>
                    {pokemon.types.map((T) => {
                      return (
                        <Suspense
                          key={T.slot}
                          fallback={
                            isLoading && <Skeleton width="auto" height="100%" />
                          }
                        >
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
                        </Suspense>
                      );
                    })}
                  </Group>
                  <Suspense
                    fallback={
                      isLoading && <Skeleton height="100%" width="auto" />
                    }
                  >
                    <Text>Base XP: {pokemon.base_experience}</Text>
                  </Suspense>
                </Stack>
              </Card.Section>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
      {firstPokemon && <PokemonDetails selectedPokemon={firstPokemon} />}
      {secondPokemon && (
        <PokemonDetails selectedPokemon={secondPokemon} isSecond />
      )}
    </WithNavTemplate>
  );
}
