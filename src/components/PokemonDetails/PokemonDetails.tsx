import {
  Dialog,
  Stack,
  Title,
  Badge,
  Text,
  Image,
  Group,
  Box,
  ScrollArea,
  Grid,
} from "@mantine/core";
import { STATS, TYPE_COLORS } from "../../constants/constants";

import Abilities from "../Ability/Abilities";
import { useStyles } from "./PokemonDetails.styled";
import { PokemonDetailsProps } from "./PokemonDetails.types";

const PokemonDetails = ({ selectedPokemon, isSecond }: PokemonDetailsProps) => {
  const { classes, cx } = useStyles();

  return (
    <Box
      className={cx(
        classes.detailsContainer,
        isSecond ? classes.secondPokemon : classes.firstPokemon
      )}
    >
      <Stack
        align="center"
        className={classes.header}
        id="pokemon_details__header"
      >
        <Image
          src={
            selectedPokemon.sprites.other?.["official-artwork"].front_default
          }
          alt={`${selectedPokemon.name}`}
          width="12rem"
        />
        <Title order={2}>{selectedPokemon.name}</Title>
        <Group>
          {selectedPokemon.types.map((T) => (
            <Badge
              key={T.type.name}
              color={
                TYPE_COLORS[
                  T.type.name.toUpperCase() as keyof typeof TYPE_COLORS
                ] as string
              }
              size="md"
            >
              {T.type.name}
            </Badge>
          ))}
        </Group>
      </Stack>
      <Box
        className={classes.detailScrollArea}
        component={ScrollArea}
        offsetScrollbars
        id="pokemon_details__sections"
      >
        {/* STATS */}
        <Stack id="pokemon_details__stats">
          <Title order={4} className={classes.categoryTitle}>
            Stats
          </Title>
          <Stack>
            {selectedPokemon.stats.map((T) => (
              <Group key={`${T.stat.name}`} className={classes.statInfo}>
                <Group>
                  <Image
                    src={
                      `${STATS[T.stat.name as keyof typeof STATS]}` as string
                    }
                    width="24px"
                    key={T.base_stat}
                    alt={T.stat.name}
                  />
                  <Text key={T.stat.name}>{T.stat.name}</Text>
                </Group>
                <Text key={T.base_stat}>{T.base_stat}</Text>
              </Group>
            ))}
          </Stack>
        </Stack>
        {/* ABILITIES */}
        <Stack id="pokemon_details__abilities">
          <Title order={4} className={classes.categoryTitle}>
            Abilities
          </Title>
          <Abilities selectedPokemon={selectedPokemon} />
        </Stack>
        {/* HELD ITEMS */}
        {selectedPokemon.held_items.length !== 0 && (
          <Box id="pokemon_details__held_items">
            <Title order={4} className={classes.categoryTitle}>
              Held Items
            </Title>
            <Group>
              {selectedPokemon.held_items.map((I) => (
                <Text key={I.item.name}>{I.item.name}</Text>
              ))}
            </Group>
          </Box>
        )}
        {/* SPECS */}
        <Box id="pokemon_details__specs">
          <Grid columns={2}>
            <Grid.Col span={1}>
              <Title order={4} className={classes.categoryTitle}>
                Height
              </Title>
              <Text>{selectedPokemon.height}</Text>
            </Grid.Col>
            <Grid.Col span={1}>
              <Title order={4} className={classes.categoryTitle}>
                Weight
              </Title>
              <Text>{selectedPokemon.weight}</Text>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default PokemonDetails;
