import "./App.css";
import Home from "./pages/Home";
import "./styles/styles.scss";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="bg">
        <Home />
      </div>
    </ChakraProvider>
  );
}

export default App;
