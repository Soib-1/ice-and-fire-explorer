import { Text, Wrap } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ContentItem = (props: Characters) => {
  return <Text>{props}</Text>;
};

const Content = () => {
  const [data, setData] = useState<Characters[]>([]);

  useEffect(() => {
    axios
      .get("https://www.anapioficeandfire.com/api/characters")
      .then(function (response) {
        setData(response.data.result);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);
  return (
    <Wrap>
      {data.map((data) => (
        <ContentItem {...data} />
      ))}
    </Wrap>
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

interface Results {
  result: Characters[];
}

export default Content;
