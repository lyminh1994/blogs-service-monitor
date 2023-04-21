import { nanoid } from "@reduxjs/toolkit";
import Image from "next/image";
import { formatDistanceToNow, subHours } from "date-fns";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const products = [
  {
    id: nanoid(),
    name: "Dropbox",
    imageUrl: "/static/images/products/product_1.png",
    updatedAt: subHours(Date.now(), 2),
  },
  {
    id: nanoid(),
    name: "Medium Corporation",
    imageUrl: "/static/images/products/product_2.png",
    updatedAt: subHours(Date.now(), 2),
  },
  {
    id: nanoid(),
    name: "Slack",
    imageUrl: "/static/images/products/product_3.png",
    updatedAt: subHours(Date.now(), 3),
  },
  {
    id: nanoid(),
    name: "Lyft",
    imageUrl: "/static/images/products/product_4.png",
    updatedAt: subHours(Date.now(), 5),
  },
  {
    id: nanoid(),
    name: "GitHub",
    imageUrl: "/static/images/products/product_5.png",
    updatedAt: subHours(Date.now(), 9),
  },
];

const LatestProducts = () => (
  <Card sx={{ height: "100%" }}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Latest Products"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem divider={i < products.length - 1} key={product.id}>
          <ListItemAvatar>
            <Image
              alt={product.name}
              src={product.imageUrl}
              width={48}
              height={48}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`}
          />
          <IconButton edge="end" size="small">
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);

export default LatestProducts;
