import { Text, Wrap } from "@chakra-ui/layout";
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

const ContentItem = (props: Characters) => {
  return (
    <Tr>
      <Td>
        {props.name}
        {props.aliases.map((alias) => {
          return alias + ",";
        })}
      </Td>
      <Td>{props.gender == "" ? "Unknown" : props.gender}</Td>
      <Td>{props.culture == "" ? "Unknown" : props.culture}</Td>
      <Td>
        {props.books.map((book) => {
          return book[book.length - 1] + ", ";
        })}
      </Td>
      <Td>{props.tvSeries.length - 1}</Td>
    </Tr>
  );
};

const Content = () => {
  const [data, setData] = useState<Characters[]>([]);
  useEffect(() => {
    axios
      .get<Characters[]>("https://www.anapioficeandfire.com/api/characters")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Table colorScheme="telegram">
      <TableCaption>Characters</TableCaption>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Gender</Th>
          <Th>Culture</Th>
          <Th>Book list</Th>
          <Th>Number of seasons</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((data) => (
          <ContentItem {...data} />
        ))}
      </Tbody>
    </Table>
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

interface Result {
  result: Characters[];
}

export default Content;
