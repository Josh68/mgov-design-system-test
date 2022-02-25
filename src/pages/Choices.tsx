import { ChoiceProps } from "@cmsgov/design-system/dist/types/ChoiceList/ChoiceList";
import { Accordion, AccordionItem, ChoiceList } from "@cmsgov/ds-medicare-gov";
import React, { ChangeEvent } from "react";

export const Choices: React.FC = () => {
  const [radioDefault, setRadioDefault] = React.useState(true);
  const [nestedChoiceDefault, setNestedChoiceDefault] = React.useState(true);
  const [nestedChoice2Default, setNestedChoice2Default] = React.useState(true);
  const onRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioDefault(e.currentTarget.value === "true");
  };
  const onNestedChoiceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNestedChoiceDefault(e.currentTarget.value === "true");
  };
  const onNestedChoice2Change = (e: ChangeEvent<HTMLInputElement>) => {
    setNestedChoice2Default(e.currentTarget.value === "true");
  };
  const nestedChoices: ChoiceProps[] = [
    { label: "Checkbox label", checked: nestedChoiceDefault, value: "true" },
    {
      label: "Another checkbox label",
      checked: !nestedChoiceDefault,
      value: "false",
    },
  ];
  const nestedChoices2: ChoiceProps[] = [
    { label: "Checkbox label", checked: nestedChoice2Default, value: "true" },
    {
      label: "Another checkbox label",
      checked: !nestedChoice2Default,
      value: "false",
    },
  ];
  const choices: ChoiceProps[] = [
    {
      label: "Some label",
      checked: radioDefault,
      value: "true",
      checkedChildren: (
        <ChoiceList
          name="nestedChoices"
          label="My Nested Choices"
          type="checkbox"
          onChange={onNestedChoiceChange}
          choices={nestedChoices}
        />
      ),
    },
    {
      label: "Some other label",
      checked: !radioDefault,
      value: "false",
      checkedChildren: (
        <ChoiceList
          name="nestedChoices2"
          label="My Other Nested Choices"
          type="checkbox"
          onChange={onNestedChoice2Change}
          choices={nestedChoices2}
        />
      ),
    },
  ];
  return (
    <>
      <Accordion>
        <AccordionItem heading="See some choices" defaultOpen={false}>
          <ChoiceList
            name="choices"
            label="My Choices"
            type="radio"
            onChange={onRadioChange}
            choices={choices}
          />
        </AccordionItem>
      </Accordion>
    </>
  );
};
