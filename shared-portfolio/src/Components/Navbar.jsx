import { Flex, Stack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <Flex as="nav" justify="space-between" align="center" p={4} w="100%">

        <Stack direction="row" spacing={3} justify="flex-start">
            <Button as={Link} to="/" variant="ghost" color="white">Home</Button>
            <Button as={Link} to="/" variant="ghost" color="white">About</Button>
            <Button as={Link} to="/" variant="ghost" color="white">Projects</Button>
        </Stack>
        </Flex>
    );
}

export default Navbar;