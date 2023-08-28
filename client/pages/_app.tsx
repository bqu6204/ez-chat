import type { AppProps } from "next/app";
import PrimaryLayout from "@/components/layouts/primary/primary-layout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material/styles";
import { brightTheme } from "@/styles/themes";

import "@/styles/dist/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={brightTheme}>
      <PrimaryLayout>
        <Component {...pageProps} />
      </PrimaryLayout>
    </ThemeProvider>
  );
}
