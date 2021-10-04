import Image from "next/image";
import React from "react";
import Background from "../../../../public/assets/about_us.png";
import { Flex } from "../../structure";
import { Container } from "../../ui";

interface MissionProps {}

const Mission: React.FC<MissionProps> = () => {
  return (
    <Container
      style={{
        background: "linear-gradient(180deg, #88C180 0%, #2FABA9 109.84%)",
      }}
      className="md:h-144"
    >
      <Flex className="md:flex-row flex-col">
        <Flex
          col
          className="h-full md:pt-40 pt-24 pb-32 md:items-start items-center md:mx-0 mx-3 md:w-1/2"
        >
          <h1 className="text-white md:text-4xl text-2xl font-bold">
            About <span className="text-orangy">Zo</span> World
          </h1>
          <h1 className="text-white md:text-2xl mt-8 text-center md:text-left md:leading-10 leading-7 text-lg md:mt-8">
            Go on adventures in real life, complete quests with the local{" "}
            <span className="text-orangy">Zo</span>
            community, earn collectibles and follow your heart in the{" "}
            <span className="text-orangy">Zo</span> World.
          </h1>
        </Flex>
        <Flex
          col
          className="h-full md:pt-40 pb-32 md:items-start md:mx-0 mx-3 md:w-1/2"
        >
          <Image src={Background} alt="" />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Mission;
