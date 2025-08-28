import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Content from "./components/Content";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}
