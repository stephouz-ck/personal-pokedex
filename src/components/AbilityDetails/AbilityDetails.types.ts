import { Ability } from "../../interfaces/ability";

export type AbilityProps = {
  selectedAbility: Ability;
  onClose: () => void;
};
