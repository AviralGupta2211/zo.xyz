import React from "react";
import { Flex } from "../../structure";
import { Container } from "../../ui";
import TeamCard from "./components/TeamCard";
import TeamMembers from "./data/TeamMembers";

interface TeamProps {}

const Team: React.FC<TeamProps> = () => {
  return (
    <Container className="h-auto">
      <Flex items="center" col className="h-full pb-12 md:mx-0 mx-3 mt-16">
        <h1
          style={{ color: "#BE392C" }}
          className="md:text-5xl text-2xl font-bold"
        >
          Our team
        </h1>
        <Flex
          items="center"
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 mb-10 w-full"
        >
          {TeamMembers.map((item, index: number) => (
            <TeamCard
              key={index}
              avatar={item.avatarUrl}
              name={item.name}
              department={item.department}
              twitter={item.twitter}
            />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Team;
