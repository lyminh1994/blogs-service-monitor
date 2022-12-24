import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";

const states = [
  {
    value: "alabama",
    label: "Alabama",
  },
  {
    value: "new-york",
    label: "New York",
  },
  {
    value: "san-francisco",
    label: "San Francisco",
  },
];

const AccountProfileDetails = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "Katarina",
      lastName: "Smith",
      email: "demo@devias.io",
      phone: "",
      state: "Alabama",
      country: "USA",
    },
  });

  const handleChange = () => {
    console.log("");
  };

  return (
    <form onSubmit={handleSubmit(handleChange)} autoComplete="off" noValidate>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                required
                variant="outlined"
                {...register("firstName")}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                required
                variant="outlined"
                {...register("lastName")}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                required
                variant="outlined"
                {...register("email")}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                type="number"
                variant="outlined"
                {...register("phone")}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Country"
                required
                variant="outlined"
                {...register("country")}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select State"
                required
                select
                SelectProps={{ native: true }}
                variant="outlined"
                {...register("state")}
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button type="submit" color="primary" variant="contained">
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
