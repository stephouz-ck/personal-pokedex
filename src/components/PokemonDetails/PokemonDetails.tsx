import {
  Dialog,
  Stack,
  Title,
  Badge,
  Grid,
  Text,
  Image,
  Group,
  Box,
} from "@mantine/core";

import { TYPE_COLORS } from "../../interfaces/color-types";
import { useStyles } from "./PokemonDetails.styled";
import { PokemonDetailsProps } from "./PokemonDetails.types";

const STATS = {
  hp: "/media/icons/stats/hearts.png",
  attack: "/media/icons/stats/dagger.png",
  defense: "/media/icons/stats/wooden.png",
  "special-attack": "/media/icons/stats/swords.png",
  "special-defense": "/media/icons/stats/shield.png",
  speed: "/media/icons/stats/hermes.png",
};

const PokemonDetails = ({ selectedPokemon, onClose }: PokemonDetailsProps) => {
  const { classes } = useStyles();

  return (
    <Dialog
      opened
      className={classes.dialogContainer}
      transition="slide-right"
      transitionDuration={300}
      transitionTimingFunction="ease"
      onClose={() => onClose()}
      withCloseButton
      withBorder
    >
      <Stack align="center">
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
      <Box className={classes.dialogContent}>
        {/* ABILITIES */}
        <Title order={4} className={classes.categoryTitle}>
          Abilities
        </Title>
        <Group>
          {selectedPokemon.abilities.map((T) => (
            <Text key={T.slot}>{T.ability.name}</Text>
          ))}
        </Group>
        {/* STATS */}
        <Title order={4} className={classes.categoryTitle}>
          Stats
        </Title>
        <Stack>
          {selectedPokemon.stats.map((T) => (
            <Group key={T.stat.name} className={classes.statInfo}>
              <Group key={T.stat.name}>
                <Image
                  src={`${STATS[T.stat.name as keyof typeof STATS]}` as string}
                  width="24px"
                  key={T.stat.name}
                  alt={T.stat.name}
                />
                <Text key={T.stat.name}>{T.stat.name}</Text>
              </Group>
              <Text key={T.base_stat}>{T.base_stat}</Text>
            </Group>
          ))}
        </Stack>
      </Box>
    </Dialog>
  );
};

export default PokemonDetails;
