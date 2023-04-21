import { ReactNode } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, Button, ListItem } from "@mui/material";

interface NavItemProps {
  href: string;
  icon: ReactNode;
  title: string;
}

const NavItem = ({ href, icon, title, ...others }: NavItemProps) => {
  const router = useRouter();
  const active = href ? router.pathname === href : false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2,
      }}
      {...others}
    >
      <Button
        component={NextLink}
        href={href}
        passHref
        startIcon={icon}
        disableRipple
        sx={{
          background: active ? "rgba(255,255,255, 0.08)" : "rgba(0,0,0, 0)",
          borderRadius: 1,
          color: active ? "secondary.main" : "neutral.300",
          fontWeight: active ? "fontWeightBold" : "fontWeightItalic",
          justifyContent: "flex-start",
          px: 3,
          textAlign: "left",
          textTransform: "none",
          width: "100%",
          "& .MuiButton-startIcon": {
            color: active ? "secondary.main" : "neutral.400",
          },
          "&:hover": {
            backgroundColor: "rgba(255,255,255, 0.08)",
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>{title}</Box>
      </Button>
    </ListItem>
  );
};

export default NavItem;
