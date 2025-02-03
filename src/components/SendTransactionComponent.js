import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { parseEther } from "ethers";
import { useState } from "react"

const SendTransactionComponent = ({ infoAccount, setNeedRefresh }) => {
    const {signer} = infoAccount;
    const [transactionValue, setTransactionValue] = useState({
        to: "", value: 0
    });
    const [txHash, setTxHash] = useState("");


    const handleChange = (e) => {
        const param = e.target.name;
        const value = param === "to" ? e.target.value : parseEther(e.target.value);

        setTransactionValue({
            ...transactionValue,
            [param]: value,
        });
    };

    const sendTransaction = () => {
        signer.sendTransaction(transactionValue)
        .then(async (tx) => {  
            await tx.wait();
            const { hash } = tx;
            setTxHash(hash);
            setNeedRefresh(true);
        }).catch(e => console.log(e));
    };
    

  return (
    <Flex w={"100%"} p={4} direction={"column"} gap={2}>
        <Text fontWeight={"bold"} fontSize={"2xl"} color={"white"}>
            Send Transaction
        </Text>
        {txHash && (
            <>
                <Text color={"white"} fontWeight={"bold"}>
                    TxHash: {txHash}
                </Text>
            </>
        )}
        <Input placeholder={"Wallet Address"} name="to" onChange={handleChange} color={"white"}/>
        <Input placeholder={"Value"} name="value" onChange={handleChange} color={"white"}/>
        <Button onClick={sendTransaction}>Send Transaction</Button>
    </Flex>
  )
}

export default SendTransactionComponent