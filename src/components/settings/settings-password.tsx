import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";

const SettingsPassword = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: { password: "", confirm: "" },
  });

  const handleChange = () => {
    console.log("first");
  };

  return (
    <form onSubmit={handleSubmit(handleChange)}>
      <Card>
        <CardHeader subheader="Update password" title="Password" />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            type="password"
            variant="outlined"
            {...register("password")}
          />
          <TextField
            fullWidth
            label="Confirm password"
            margin="normal"
            type="password"
            variant="outlined"
            {...register("confirm")}
          />
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
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default SettingsPassword;
