import { useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from "@mui/material";

export const AccountPopover = ({
  anchorEl,
  onClose,
  open,
}: {
  anchorEl?: Element | ((element: Element) => Element) | null;
  onClose?: (event?: {}, reason?: "backdropClick" | "escapeKeyDown") => void;
  open: boolean;
}) => {
  const router = useRouter();

  const handleSignOut = useCallback(() => {
    onClose?.();
    router.push("/auth/login");
  }, [onClose, router]);

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Account</Typography>
        <Typography color="text.secondary" variant="body2">
          Anika Visser
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          py: 1,
          "& > *": {
            borderRadius: 1,
          },
        }}
      >
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      </MenuList>
    </Popover>
  );
};
