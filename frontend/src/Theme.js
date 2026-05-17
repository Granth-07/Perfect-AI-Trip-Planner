import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brandBlue: "#0077cc",
    brandAccent: "#f4a261",
    brandGrayLight: "#f8f9fa",
    brandGrayDark: "#343a40",
  },
  fonts: {
    heading: "'Nunito', sans-serif",
    body: "'Nunito', sans-serif",
  },
});

export default theme;
