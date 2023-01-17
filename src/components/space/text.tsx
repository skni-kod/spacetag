import type { ComponentProps } from "react";

import { Text as DreiText } from "@react-three/drei";

export type TextProps = Omit<ComponentProps<typeof DreiText>, "font">;

export const Text = (props: TextProps) => (
  <DreiText
    font="https://fonts.gstatic.com/s/titilliumweb/v15/NaPecZTIAOhVxoMyOr9n_E7fRMc.woff"
    {...props}
  />
);
