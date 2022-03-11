import React, { FC, HTMLAttributes, useRef } from "react";
import { TooltipProps } from "@cmsgov/design-system/dist/types/Tooltip/Tooltip";
import { Tooltip } from "@cmsgov/ds-medicare-gov";
import jeffsum from "jeffsum";

export const Tooltips: FC = () => {
  const sentences = useRef(jeffsum(3));
  console.debug(sentences.current);
  return (
    <>
      <Tooltip
        dialog
        showCloseButton
        children="Trigger for tooltip 1"
        title={sentences.current}
        style={{ display: "block", marginBottom: "5px" }}
      />
      <Tooltip
        dialog
        showCloseButton
        children="Trigger for tooltip 2"
        title={sentences.current}
        style={{ display: "block", marginBottom: "5px" }}
      />
      <Tooltip
        dialog
        showCloseButton
        children="Trigger for tooltip 3"
        title={sentences.current}
        style={{ display: "block", marginBottom: "5px" }}
      />
    </>
  );
};
