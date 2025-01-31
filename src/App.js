import { Box, Flex } from "@chakra-ui/react";
import { useAppKitAccount } from "@reown/appkit/react";
//import { ethers } from "ethers";

function App() {
  const { address, isConnected, embeddedWalletInfo } = useAppKitAccount();


  console.log("Address:", address);
  console.log("Is Connected?:", isConnected);
  const authProvider = embeddedWalletInfo?.authProvider;
  console.log(authProvider);

  return (
    <Box w={'100vw'} h={'100vh'} bg={'gray.700'}>
      {!isConnected ? (
        <Flex w={'100vw'} h={'100vh'} alignItems={'center'} justifyContent={'center'}>
          <appkit-connect-button label="Connect" size="md"></appkit-connect-button>
        </Flex>
      ) : (
        <Box></Box>
      )}
    </Box>
  );
}

export default App;
