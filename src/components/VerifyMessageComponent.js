import { Button, Flex, Input, Text } from "@chakra-ui/react"
import { ethers } from "ethers";
import { useState } from "react";

const VerifyMessageComponent = () => {

    const [dataToVerify, setDataToVerify] = useState({
        message: "",
        address: "",
        signature: "",
    });

    const [isVerified, setIsVerified] = useState(false);

    const onHandleChange = (e) => {
        const param = e.target.name;
        const value = e.target.value;
        setDataToVerify({
           ...dataToVerify,
            [param]: value,
        });
    };

    const handleVerifyMessage = () => {
        if (dataToVerify.address && dataToVerify.message && dataToVerify.signature){
            const recoveredAddress = ethers.verifyMessage(dataToVerify.message, dataToVerify.signature); //returns the private key that produced the signature
            const isVerified = recoveredAddress === dataToVerify.address;
            setIsVerified(isVerified);
        }
    };

  return (
    <Flex w={"50%"} gap={2} direction={"column"} p={4}>
            <Text fontSize={"xl"} color={"white"} fontWeight={"bold"}>Verify Message</Text>
            <Input placeholder={"Message..."} name="message" onChange={onHandleChange} color={"white"} />
            <Input placeholder={"Public Key..."} name="address" onChange={onHandleChange} color={"white"} />
            <Input placeholder={"Signature..."} name="signature" onChange={onHandleChange} color={"white"} />
            <Button onClick={handleVerifyMessage}>Verify Message</Button>
            {isVerified && (
                <Text color={"white"} fontWeight={"bold"}>Message is verified</Text>
            )};
            
            
        </Flex>
  )
}

export default VerifyMessageComponent