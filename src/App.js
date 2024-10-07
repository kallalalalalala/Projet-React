/*import { Price } from "./price";
import { Category } from "./category";
import Name from "./Name";
import { Description } from "./Description";
import { Fiche } from "./Image";
*/
import { ChakraProvider } from "@chakra-ui/react";
import AirbnbCard from "./rendu";

function App(){
  return (
    <ChakraProvider>

      <AirbnbCard />

    </ChakraProvider>
  );
}

export default App;