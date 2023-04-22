import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";

const OverviewTotalProfit = ({
  value,
  sx,
}: {
  value: string;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              Total Profit
            </Typography>
            <Typography variant="h4">{value}</Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "primary.main",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>
              <CurrencyDollarIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default OverviewTotalProfit;
