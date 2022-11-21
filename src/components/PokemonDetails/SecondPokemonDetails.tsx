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
  ScrollArea,
  LoadingOverlay,
  Loader,
  Grid,
  Overlay,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Ability } from "../../interfaces/ability";

import { TYPE_COLORS } from "../../interfaces/color-types";
import { fetchAllAbilities } from "../../services/pokemon.service";
import { useStyles } from "./PokemonDetails.styled";
import { PokemonDetailsProps } from "./PokemonDetails.types";

const AbilityDetails = dynamic(
  () => import("../AbilityDetails/AbilityDetails")
);

const STATS = {
  hp: "/media/icons/stats/hearts.png",
  attack: "/media/icons/stats/dagger.png",
  defense: "/media/icons/stats/wooden.png",
  "special-attack": "/media/icons/stats/swords.png",
  "special-defense": "/media/icons/stats/shield.png",
  speed: "/media/icons/stats/hermes.png",
};

const SecondPokemonDetails = ({
  selectedPokemon,
  onClose,
}: PokemonDetailsProps) => {
  const { data, isLoading } = useQuery(["abilities"], fetchAllAbilities);
  const { classes } = useStyles();
  const [selectedAbility, setSelectedAbility] = useState<
    Ability["name"] | null
  >(null);
  const [abilityDetails, setAbilityDetails] = useState<Ability | null>(null);

  useEffect(() => {
    if (selectedAbility === undefined || data === undefined) return;

    const filteredAbilities: Ability[] = [];
    // ? sets the selected ability of the available abilities
    data.forEach((ability) => {
      if (selectedAbility === ability.name) {
        setAbilityDetails(ability);
        filteredAbilities.push(ability);
      }
      return filteredAbilities;
    });
  }, [selectedAbility, data]);

  return (
    <Box>
      <Dialog
        opened
        className={classes.secondDialogContainer}
        transition="slide-right"
        transitionDuration={300}
        transitionTimingFunction="ease"
        onClose={() => onClose()}
        withCloseButton
        withBorder
      >
        {isLoading && (
          <Box>
            <LoadingOverlay visible={true}>
              <Loader scale="2rem" />
            </LoadingOverlay>
          </Box>
        )}
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
          className={classes.dialogScrollArea}
          component={ScrollArea}
          offsetScrollbars
          id="pokemon_details__sections"
        >
          {/* ABILITIES */}
          <Stack id="pokemon_details__abilities">
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
          </Stack>
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
      </Dialog>

      {abilityDetails && (
        <Overlay
          onClick={() => {
            setAbilityDetails(null);
            setSelectedAbility(null);
          }}
          style={{ backgroundColor: "#020202" }}
        >
          <AbilityDetails
            selectedAbility={abilityDetails}
            onClose={() => {
              setAbilityDetails(null);
              setSelectedAbility(null);
            }}
          />
        </Overlay>
      )}
    </Box>
  );
};

export default SecondPokemonDetails;
