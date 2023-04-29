import { ReactNode } from "react";
import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useNProgress } from "hooks/use-nprogress";
import { createTheme } from "theme";
import createEmotionCache from "utils/create-emotion-cache";
import "simplebar-react/dist/simplebar.min.css";

import type { AppLayoutProps } from "next/app";

const clientSideEmotionCache = createEmotionCache();

const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppLayoutProps) => {
  useNProgress();

  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  const theme = createTheme();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Material Kit</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default App;
