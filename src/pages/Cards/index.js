import {
  Button,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

const Cards = ({ image, title, author, data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log({ data });
  return (
    <Card alignItems={"center"} border={"1px solid black"}>
      <CardBody
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box>
          <Text>{title}</Text>
        </Box>
        <Box>
          <Image boxSize={"150px"} src={image} alt={"Book Cover"} />
        </Box>
        <Box>
          <Text>{author}</Text>
        </Box>
        <Box>
          <Button
            onClick={() => {
              onOpen();
            }}
          >
            Details
          </Button>
        </Box>
      </CardBody>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image h="50vh" src={image}></Image>
            <Text>{data.description}</Text>
            <Text>
              {data.genre[0]} : {data.genre[1]}
            </Text>
            <Text>Publication Year: {data.publication_year}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
};
export default Cards;
