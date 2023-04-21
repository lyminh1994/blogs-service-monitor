import { Box, Container, Grid } from "@mui/material";
import Head from "next/head";
import { ReactNode } from "react";
import DashboardLayout from "../components/dashboard-layout";
import Budget from "../sections/dashboard/budget";
import LatestOrders from "../sections/dashboard/latest-orders";
import LatestProducts from "../sections/dashboard/latest-products";
import Sales from "../sections/dashboard/sales";
import TasksProgress from "../sections/dashboard/tasks-progress";
import TotalCustomers from "../sections/dashboard/total-customers";
import TotalProfit from "../sections/dashboard/total-profit";
import TrafficByDevice from "../sections/dashboard/traffic-by-device";

const Home = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Budget />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalCustomers />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TasksProgress />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalProfit sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <Sales />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <TrafficByDevice />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <LatestProducts />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <LatestOrders />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Home.getLayout = (page: ReactNode) => <DashboardLayout>{page}</DashboardLayout>;

export default Home;
