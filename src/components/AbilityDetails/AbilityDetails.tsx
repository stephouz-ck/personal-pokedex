import { Box, Dialog, Container, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useStyles } from "./AbilityDetails.styled";
import { AbilityProps } from "./AbilityDetails.types";

const AbilityDetails = ({ selectedAbility, onClose }: AbilityProps) => {
  const { classes } = useStyles();

  // useEffect(() => {
  //   const effectEntries = () => {
  //     selectedAbility.effect_entries.filter((T) => {
  //       if (T.language.name === "en") {
  //         return T.short_effect as string;
  //       }
  //     });
  //   };
  //   effectEntries();
  // }, [selectedAbility]);

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
      {selectedAbility.effect_entries.map(
        (T) =>
          T.language.name === "en" && (
            <Box>
              <Title
                className={classes.categoryTitle}
                key={selectedAbility.id}
                order={4}
              >
                {selectedAbility.name}
              </Title>
              <Box className={classes.dialogContent}>
                <Text key={selectedAbility.name}>{T.short_effect}</Text>
                <Text key={T.language.name}>{T.effect}</Text>
              </Box>
            </Box>
          )
      )}
    </Dialog>
  );
};

export default AbilityDetails;
