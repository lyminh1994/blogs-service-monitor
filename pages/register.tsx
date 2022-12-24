import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { touchedFields, errors },
  } = useForm({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      policy: false,
    },
    resolver: yupResolver(
      Yup.object({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        firstName: Yup.string().max(255).required("First name is required"),
        lastName: Yup.string().max(255).required("Last name is required"),
        password: Yup.string().max(255).required("Password is required"),
        policy: Yup.boolean().oneOf([true], "This field must be checked"),
      })
    ),
  });

  const onSubmit = () => {
    Router.push("/").catch(console.error);
  };

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Button
            component={NextLink}
            href="/"
            passHref
            startIcon={<ArrowBackIcon fontSize="small" />}
          >
            Dashboard
          </Button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Create a new account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to create a new account
              </Typography>
            </Box>
            <TextField
              error={Boolean(touchedFields.firstName && errors.firstName)}
              fullWidth
              helperText={touchedFields.firstName && errors.firstName?.message}
              label="First Name"
              margin="normal"
              variant="outlined"
              {...register("firstName")}
            />
            <TextField
              error={Boolean(touchedFields.lastName && errors.lastName)}
              fullWidth
              helperText={touchedFields.lastName && errors.lastName?.message}
              label="Last Name"
              margin="normal"
              variant="outlined"
              {...register("lastName")}
            />
            <TextField
              error={Boolean(touchedFields.email && errors.email)}
              fullWidth
              helperText={touchedFields.email && errors.email?.message}
              label="Email Address"
              margin="normal"
              type="email"
              variant="outlined"
              {...register("email")}
            />
            <TextField
              error={Boolean(touchedFields.password && errors.password)}
              fullWidth
              helperText={touchedFields.password && errors.password?.message}
              label="Password"
              margin="normal"
              type="password"
              variant="outlined"
              {...register("password")}
            />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
              }}
            >
              <Checkbox {...register("policy")} />
              <Typography color="textSecondary" variant="body2">
                I have read the{" "}
                <NextLink href="#" passHref>
                  <Link color="primary" underline="always" variant="subtitle2">
                    Terms and Conditions
                  </Link>
                </NextLink>
              </Typography>
            </Box>
            {Boolean(touchedFields.policy && errors.policy) && (
              <FormHelperText error>{errors.policy?.message}</FormHelperText>
            )}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up Now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Have an account?{" "}
              <Link
                component={NextLink}
                href="/login"
                passHref
                variant="subtitle2"
                underline="hover"
              >
                Sign In
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
