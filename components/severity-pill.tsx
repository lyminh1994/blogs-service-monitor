import { styled, Theme } from "@mui/material/styles";

type Color = "primary" | "secondary" | "error" | "info" | "warning" | "success";

const SeverityPillRoot = styled("span")(
  ({ theme, ownerState }: { theme?: Theme; ownerState: { color: Color } }) => {
    const backgroundColor = theme?.palette[ownerState.color].main;
    const color = theme?.palette[ownerState.color].contrastText;

    return {
      alignItems: "center",
      backgroundColor,
      borderRadius: 12,
      color,
      cursor: "default",
      display: "inline-flex",
      flexGrow: 0,
      flexShrink: 0,
      fontFamily: theme?.typography.fontFamily,
      fontSize: theme?.typography.pxToRem(12),
      lineHeight: 2,
      fontWeight: 600,
      justifyContent: "center",
      letterSpacing: 0.5,
      minWidth: 20,
      paddingLeft: theme?.spacing(1),
      paddingRight: theme?.spacing(1),
      textTransform: "uppercase",
      whiteSpace: "nowrap",
    };
  }
);

const SeverityPill = ({
  children,
  color = "primary",
}: {
  children: string;
  color: Color;
}) => {
  const ownerState = { color };

  return (
    <SeverityPillRoot ownerState={ownerState}>{children}</SeverityPillRoot>
  );
};

export default SeverityPill;
