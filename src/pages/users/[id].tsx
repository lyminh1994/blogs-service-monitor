import { ReactNode } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import useSwr from "swr";
import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { DashboardLayout } from "layouts/dashboard/layout";

import type { User } from "types/app";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Page = () => {
  const { query } = useRouter();
  const { data, error, isLoading } = useSwr<User>(
    query.id ? `/api/users/${query.id}` : null,
    fetcher
  );

  if (error) return <div>Failed to load user</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">User</Typography>
            </div>
            <div>
              <Grid container spacing={3}>
                <Grid xs={12} md={6} lg={6}>
                  <div>{data.name}</div>
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page: ReactNode) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
