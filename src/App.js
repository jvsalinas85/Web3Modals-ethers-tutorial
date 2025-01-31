import { Box, Flex } from "@chakra-ui/react";
import { useAppKitAccount } from "@reown/appkit/react";

function App() {
  const { address, isConnected} = useAppKitAccount();
  console.log("Address:", address);
  console.log("Is Connected?:", isConnected);
  return (
    <Box w={'100vw'} h={'100vh'} bg={'gray.700'}>
      {!isConnected ? (
        <Flex w={'100vw'} h={'100vh'} alignItems={'center'} justifyContent={'center'}>
          <appkit-connect-button label="Conectar" size="md"></appkit-connect-button>
        </Flex>
      ) : (
        <Box></Box>
      )}
    </Box>
  );
}

export default App;
