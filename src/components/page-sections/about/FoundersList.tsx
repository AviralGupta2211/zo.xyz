import React from "react";
import foundersHQ from "../../../data/founders-hq.json";
import { sortByAlias } from "../../../utils";
import { Flex } from "../../structure";
import { Container } from "../../ui";
import FounderInfoCard from "../../ui/FounderInfoCardß";

interface FoundersListProps {}

const FoundersList: React.FC<FoundersListProps> = () => {
  return (
    <Container className="h-auto">
      <Flex items="center" col className="h-full pb-12 md:mx-0 mx-3 mt-16">
        <h1
          style={{ color: "#BE392C" }}
          className="md:text-5xl text-2xl font-bold"
        >
          Founders
        </h1>
        <Flex
          items="center"
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 mb-10 w-full"
        >
          {foundersHQ.sort(sortByAlias).map((item, index: number) => (
            <FounderInfoCard
              key={index}
              avatar={item.avatarUrl}
              name={item.alias}
              department={item.department}
              numberOfCards={item.numberOfCards}
              twitter={item.twitter}
              instagram={item.instagram}
              linkedin={item.linkedin}
            />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default FoundersList;
