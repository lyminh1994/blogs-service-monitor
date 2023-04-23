import { ReactNode } from "react";
import Link from "next/link";
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
  const { data, error, isLoading } = useSwr<User[]>("/api/users", fetcher);

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <>
      <Head>
        <title>Users</title>
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
              <Typography variant="h4">Users</Typography>
            </div>
            <div>
              <Grid container spacing={3}>
                <Grid xs={12} md={6} lg={6}>
                  <ul>
                    {data.map((user) => (
                      <li key={user.id}>
                        <Link href="/users/[id]" as={`/users/${user.id}`}>
                          {user.name ?? `User ${user.id}`}
                        </Link>
                      </li>
                    ))}
                  </ul>
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
