import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./pages/Header";
import Body from "./pages/Body";
import { SearchContextProvider } from "./context/SearchContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <SearchContextProvider>
          <Header />
          <Body />
        </SearchContextProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
