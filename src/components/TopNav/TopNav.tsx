import { Group, Button, Image, Container } from "@mantine/core";
import useStore from "../../store/useStore";
import Searchbar from "../Searchbar/Searchbar";
import { useStyles } from "./TopNav.styled";

const TopNav = () => {
  const { classes } = useStyles();
  const { onClear } = useStore();

  return (
    <Group position="apart" className={classes.root} align="end">
      <Button
        size="sm"
        onClick={() => onClear()}
        leftIcon={
          <Image
            src="/media/icons/other/redo.png"
            style={{ maxWidth: "24px" }}
            alt="Clear selection"
          />
        }
      >
        Clear Selection
      </Button>
      <Image
        src="/media/logo_pokedex.png"
        style={{ maxWidth: "16rem" }}
        alt="Personal PokéDex"
      />
      <Searchbar />
    </Group>
  );
};

export default TopNav;
