import {
  Dialog,
  Stack,
  Title,
  Badge,
  Text,
  Image,
  Group,
  Box,
  Button,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Ability } from "../../interfaces/ability";

import { TYPE_COLORS } from "../../interfaces/color-types";
import { fetchAllAbilities } from "../../services/pokemon.service";
import AbilityDetails from "../AbilityDetails/AbilityDetails";
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
  const { data } = useQuery(["abilities"], fetchAllAbilities);
  const { classes } = useStyles();
  const [selectedAbility, setSelectedAbility] = useState<Ability["name"]>();
  const [abilityDetails, setAbilityDetails] = useState<Ability | null>(null);

  useEffect(() => {
    if (selectedAbility === undefined || data === undefined) return;

    const filteredAbilities: Ability[] = [];

    data.forEach((ability) => {
      if (selectedAbility === ability.name) {
        setAbilityDetails(ability);
        filteredAbilities.push(ability);
      }
      return filteredAbilities;
    });
    // TODO change the visibility if the ability id changes
    // TODO set the ability language to english only
    console.log(filteredAbilities);
  }, [selectedAbility, data]);

  return (
    <>
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
              <Button
                key={T.slot}
                onClick={() => setSelectedAbility(T.ability.name)}
              >
                {T.ability.name}
              </Button>
            ))}
          </Group>
          {/* STATS */}
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
          {/* HELD ITEMS */}
          <Title order={4} className={classes.categoryTitle}>
            Held Items
          </Title>
          <Group>
            {selectedPokemon.held_items.map((I) => (
              <Text key={I.item.name}>{I.item.name}</Text>
            ))}
          </Group>
        </Box>
      </Dialog>
      {abilityDetails && (
        <AbilityDetails
          selectedAbility={abilityDetails}
          onClose={() => setSelectedAbility(undefined)}
        />
      )}
    </>
  );
};

export default PokemonDetails;
