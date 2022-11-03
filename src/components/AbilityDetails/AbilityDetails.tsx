import { Dialog, Stack, Text, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import {} from "../../services/pokemon.service";
import { useStyles } from "./AbilityDetails.styled";
import { AbilityProps } from "./AbilityDetails.types";

const AbilityDetails = ({ selectedAbility, onClose }: AbilityProps) => {
  const { classes } = useStyles();

  useEffect(() => {
    if (selectedAbility === undefined) return;

    selectedAbility.effect_entries.filter((E) => {
      E.language.name = "en";
    });
  }, [selectedAbility]);

  return (
    <Dialog
      opened
      className={classes.dialogContainer}
      transition="slide-left"
      transitionDuration={300}
      transitionTimingFunction="ease"
      onClose={() => onClose()}
      withCloseButton
      withBorder
    >
      <Stack>
        <Title order={4}>{selectedAbility.name}</Title>
        {selectedAbility.effect_entries.map((A) => (
          <Text key={selectedAbility.id}>{A.effect}</Text>
        ))}
      </Stack>
    </Dialog>
  );
};

export default AbilityDetails;
