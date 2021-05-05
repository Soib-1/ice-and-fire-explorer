import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import { Box, Center, Text, Wrap } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";

const ContentItem = (props: Characters) => {
  return (
    <Tr>
      <Td>
        {props.name}
        <Text fontSize="sm">
          {props.aliases.length > 0 &&
            props.aliases.map((alias) => {
              return alias;
            })}
        </Text>
      </Td>
      <Td>{props.gender === "" ? "Unknown" : props.gender}</Td>
      <Td>{props.culture === "" ? "Unknown" : props.culture}</Td>
      <Td>
        <Text fontSize="md">
          {props.books.length > 0 &&
            props.books.map((book) => {
              return book[book.length - 1] + " ";
            })}
        </Text>
      </Td>
      <Td w="10">{props.tvSeries.length - 1}</Td>
    </Tr>
  );
};

const Content = () => {
  const [data, setData] = useState<Characters[]>([]);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    fetchData();

    function handlePageChange(page: number) {
      page != 0 && page != 214 && setPage(page);
    }
  }, [page]);

  const fetchData = () => {
    axios
      .get<Characters[]>(
        "https://www.anapioficeandfire.com/api/characters?page=" + page
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  };
  return (
    <Box>
      <Table
        colorScheme="telegram"
        maxH="80vh"
        minH="80vh"
        mb="6"
        fontFamily={"Asap"}
      >
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Gender</Th>
            <Th>Culture</Th>
            <Th>Book list</Th>
            <Th>Seasons</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((data) => (
            <ContentItem {...data} />
          ))}
        </Tbody>
      </Table>
      <Center>
        <Button m="1" onClick={() => setPage(1)}>
          <ArrowLeftIcon fontSize="xs" />
        </Button>
        <Button m="1" onClick={() => setPage(page - 1)}>
          <ChevronLeftIcon fontSize="xl" />
        </Button>
        <Button m="1" onClick={() => setPage(page + 1)}>
          <ChevronRightIcon fontSize="xl" />
        </Button>
        <Button m="1" fontSize="xs" onClick={() => setPage(214)}>
          <ArrowRightIcon />
        </Button>
      </Center>
    </Box>
  );
};

interface Characters {
  url: string;
  gender: string;
  culture: string;
  born: string;
  died: string;
  titles: Array<string>;
  aliases: Array<string>;
  father: string;
  mother: string;
  spouse: string;
  allegiances: Array<string>;
  books: Array<string>;
  povBooks: Array<string>;
  tvSeries: Array<string>;
  playedBy: Array<string>;
  name: string;
}

export default Content;
