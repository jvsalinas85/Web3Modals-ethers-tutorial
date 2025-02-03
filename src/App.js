import { Box, Flex } from "@chakra-ui/react";
import { useAppKitAccount } from "@reown/appkit/react";
import { ethers } from "ethers";
import { useState, useEffect } from "react";

function App() {
  const { address, isConnected, embeddedWalletInfo } = useAppKitAccount();
  
  console.log("Address:", address);
  console.log("Is Connected?:", isConnected);

  // Intentamos obtener el proveedor de AppKit si existe
  const authProvider = embeddedWalletInfo?.authProvider;
  const [needRefresh, setNeedRefresh] = useState(true);

  // Estado para guardar la info de la cuenta
  const [infoAccount, setInfoAccount] = useState({
    provider: null,
    signer: null,
    balance: 0,
  });

  console.log(infoAccount);

  useEffect(() => {
    const getBalance = async () => {
      try {
        let provider = null;

        if (authProvider && typeof authProvider.request === "function") {
          // Si authProvider es un proveedor Web3 válido, lo usamos
          provider = new ethers.BrowserProvider(authProvider);
        } else if (window.ethereum) {
          // Si no, intentamos con window.ethereum (MetaMask, Brave, etc.)
          provider = new ethers.BrowserProvider(window.ethereum);
        }

        if (!provider) {
          console.error("No se encontró un proveedor Web3 válido.");
          return;
        }

        const signer = await provider.getSigner();
        const balance = await provider.getBalance(address);
        const ethBalance = ethers.formatEther(balance);

        setInfoAccount({
          provider,
          signer,
          balance: ethBalance,
        });

        setNeedRefresh(false);
      } catch (error) {
        console.error("Error obteniendo balance:", error);
      }
    };

    // Solo ejecutamos si el usuario está conectado y hay dirección
    if (isConnected && address) {
      getBalance();
    }
  }, [address, isConnected, authProvider, needRefresh]);

  return (
    <Box w={"100vw"} h={"100vh"} bg={"gray.700"}>
      {!isConnected ? (
        <Flex
          w={"100vw"}
          h={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <appkit-connect-button label="Connect" size="md"></appkit-connect-button>
        </Flex>
      ) : (
        <Box>
          <p>Balance: {infoAccount.balance} ETH</p>
        </Box>
      )}
    </Box>
  );
}

export default App;
