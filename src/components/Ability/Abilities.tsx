import { Skeleton, Group, Popover, Button, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Ability } from "../../interfaces/ability";
import { fetchAllAbilities } from "../../services/pokemon.service";
import { AbilitiesProps } from "./Abilities.types";

const Abilities = ({ selectedPokemon }: AbilitiesProps) => {
  const { data, isLoading } = useQuery(["abilities"], fetchAllAbilities);
  const [description, setDescription] = useState("");

  const handleAbilitySelect = (item: Ability["name"]) => {
    if (data === undefined) return null;

    data.find((detail) => {
      if (item === detail.name) {
        // filter out the short description of the ability
        detail.effect_entries.find((short) => {
          if (short.language.name === "en") {
            // set the desired short effect description
            setDescription(short.short_effect);
          }
        });
      }
    });
  };

  return (
    <Group>
      {selectedPokemon.abilities.map((T) => (
        <Popover
          id="ability"
          width={200}
          position="top"
          withArrow
          key={T.slot + 1}
          onChange={() => handleAbilitySelect(T.ability.name)}
        >
          <Skeleton
            visible={isLoading}
            height="100%"
            width="auto"
            key={T.slot + 5}
          >
            <Popover.Target key={T.slot}>
              <Button key={T.slot}>{T.ability.name}</Button>
            </Popover.Target>
          </Skeleton>
          <Popover.Dropdown key={T.slot + 3}>
            <Text size="sm">{description}</Text>
          </Popover.Dropdown>
        </Popover>
      ))}
    </Group>
  );
};

export default Abilities;
