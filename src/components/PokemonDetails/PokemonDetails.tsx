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

// const STATS = {
//   HP: "/media/icons/heart.png",
//   ATTACK:
// }

const PokemonDetails = ({ selectedPokemon, onClose }: PokemonDetailsProps) => {
  const { classes } = useStyles();

  return (
    <Dialog
      opened={true}
      className={classes.dialogContainer}
      transition="slide-right"
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
          width="14rem"
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
            <Group key={T.stat.name}>
              <Image src="/media/icons/heart.png" width="24px" alt="heart" />
              <Text key={T.stat.name}>{T.stat.name}</Text>
            </Group>
          ))}
        </Stack>
      </Box>
    </Dialog>
  );
};

export default PokemonDetails;
