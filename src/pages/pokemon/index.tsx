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
  LoadingOverlay,
  Loader,
  Button,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import { Pokemon } from "../../interfaces/api";
import { TYPE_COLORS } from "../../interfaces/color-types";
import { fetchAllPokemon } from "../../services/pokemon.service";
import WithNavTemplate from "../../templates/WithNav.template";
import { useStyles } from "./pokemon.styled";

const PokemonDetails = dynamic(
  () => import("../../components/PokemonDetails/PokemonDetails")
);
const SecondPokemonDetails = dynamic(
  () => import("../../components/PokemonDetails/SecondPokemonDetails")
);

interface TopToolbarProps {
  onClear: () => void;
  allPokemon: Pokemon[];
}

const TopToolbar = ({ onClear, allPokemon }: TopToolbarProps) => {
  return (
    <Box
      style={{
        position: "fixed",
        top: "14rem",
        zIndex: "2",
        margin: "0 auto 2rem auto",
      }}
    >
      <Group spacing="md" position="right">
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
          Clear Selection
        </Button>
        <Searchbar allPokemon={allPokemon} />
      </Group>
    </Box>
  );
};

// TODO: FIRST & SECOND POKEMON CANNOT BE THE SAME

export default function AllPokemonPage() {
  const { data, isLoading } = useQuery(["all-pokemon"], fetchAllPokemon, {
    suspense: true,
    refetchOnWindowFocus: false,
  });
  const { classes } = useStyles();
  const [firstPokemon, setFirstPokemon] = useState<Pokemon | null>(null);
  const [secondPokemon, setSecondPokemon] = useState<Pokemon | null>(null);

  const selectedPokemonArray: Pokemon[] = [];

  const handlePokemonSelect = (pokemon: Pokemon) => {
    selectedPokemonArray.unshift(pokemon);
    const tempArray = selectedPokemonArray.slice(0, 2);

    const filterPokemons = (clickedPokemon: Pokemon) => {
      if (firstPokemon === null) {
        pokemon;
        setFirstPokemon(tempArray.at(0) as Pokemon);
      }
      if (firstPokemon && secondPokemon === null) {
        tempArray.push(clickedPokemon);
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
    return filterPokemons(pokemon);
  };

  const onClear = () => {
    setFirstPokemon(null);
    setSecondPokemon(null);
  };

  if (isLoading) {
    return <LoadingOverlay visible={true} />;
  }

  return (
    <WithNavTemplate>
      <TopToolbar onClear={() => onClear()} allPokemon={data!} />
      <Box>
        <Grid columns={3}>
          {data?.map((pokemon) => {
            return (
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
                      <Image
                        width="4.75rem"
                        src={
                          pokemon.sprites.other?.["official-artwork"]
                            .front_default
                        }
                        alt={pokemon.name}
                      />
                      <Title className={classes.cardTitle} order={3}>
                        {pokemon.name}
                      </Title>
                    </Stack>
                  </Card.Section>
                  <Card.Section inheritPadding py="sm">
                    <Stack align="center">
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
                      <Text>Base XP: {pokemon.base_experience}</Text>
                    </Stack>
                  </Card.Section>
                </Card>
              </Grid.Col>
            );
          })}
        </Grid>
      </Box>
      {firstPokemon && (
        <PokemonDetails
          selectedPokemon={firstPokemon}
          onClose={() => setFirstPokemon(null)}
        />
      )}
      {secondPokemon && (
        <SecondPokemonDetails
          selectedPokemon={secondPokemon}
          onClose={() => setSecondPokemon(null)}
        />
      )}
    </WithNavTemplate>
  );
}
