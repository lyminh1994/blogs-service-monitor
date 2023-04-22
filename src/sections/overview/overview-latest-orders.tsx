import { format } from "date-fns";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme,
} from "@mui/material";
import Scrollbar from "../../components/scrollbar";
import SeverityPill from "../../components/severity-pill";

type Order = {
  createdAt: number;
  id: string;
  ref: string;
  customer: { name: string };
  amount: number;
  status: "warning" | "success" | "error";
};

const OverviewLatestOrders = ({
  orders = [],
  sx,
}: {
  orders: Order[];
  sx?: SxProps<Theme>;
}) => {
  return (
    <Card sx={sx}>
      <CardHeader title="Latest Orders" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell sortDirection="desc">Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order: Order) => {
                const createdAt = format(order.createdAt, "dd/MM/yyyy");

                return (
                  <TableRow hover key={order.id}>
                    <TableCell>{order.ref}</TableCell>
                    <TableCell>{order.customer.name}</TableCell>
                    <TableCell>{createdAt}</TableCell>
                    <TableCell>
                      <SeverityPill color={order.status}>
                        {order.status}
                      </SeverityPill>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

export default OverviewLatestOrders;
