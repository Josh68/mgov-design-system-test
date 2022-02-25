import { ChoiceList } from "@cmsgov/ds-medicare-gov";
import React from "react";

export const Choices: React.FC = () => {
  return (
    <>
      <ChoiceList
        name="choices"
        label="My Choices"
        type="checkbox"
        choices={[{ label: "Some label", value: 1 }]}
      />
      <div>I'm choices</div>
    </>
  );
};
