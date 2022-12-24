import { ReactNode } from "react";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Head from "next/head";

import { theme } from "../theme";
import { createEmotionCache } from "../utils/create-emotion-cache";
import { registerChartJs } from "../utils/register-chart-js";

import type { AppLayoutProps } from "next/app";

registerChartJs();

const clientSideEmotionCache = createEmotionCache();

const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

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
