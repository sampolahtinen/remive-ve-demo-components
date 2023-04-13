import type React = require("react");

export const Text = ({ children }: React.ComponentProps<"span">) => (
  <span>{children}</span>
);
