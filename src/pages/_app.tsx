import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";

import { theme } from "@/styles/theme/theme";

import "@/styles/globals.css";

const queryClient = new QueryClient();
const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
