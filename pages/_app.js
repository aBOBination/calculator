import { ThemeProvider } from "styled-components";
import Navigation from "../components/navigation.js";
import theme from "../components/theme.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
