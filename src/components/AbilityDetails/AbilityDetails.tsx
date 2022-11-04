import { Box, Dialog, Group, Text, Title, Image } from "@mantine/core";
import { useStyles } from "./AbilityDetails.styled";
import { AbilityProps } from "./AbilityDetails.types";

const AbilityDetails = ({ selectedAbility, onClose }: AbilityProps) => {
  const { classes } = useStyles();

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
              <Group className={classes.categoryTitle}>
                <Image
                  src="/media/icons/other/information.png"
                  alt="Info"
                  width="1.75rem"
                />
                <Title key={selectedAbility.id} order={3}>
                  {selectedAbility.name}
                </Title>
              </Group>
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
