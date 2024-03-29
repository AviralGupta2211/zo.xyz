import React from "react";
import { FourZobusWorking } from "../../../assets/props";
import { useWindowSize } from "../../hooks";
import { Flex } from "../../structure";
import { Container } from "../../ui";

interface IntroductionProps {}

const Introduction: React.FC<IntroductionProps> = () => {
  const { width } = useWindowSize();

  return (
    <Container
      style={{
        background:
          "linear-gradient(356.51deg, #C3FCF1 -55.46%, #C2FBF4 -35.5%, #BFF6E9 -19.45%, #BBEFD7 -6.43%, #B5E5BC 11.36%, #ADD79B 25.24%, #A3C771 43.03%, #97B441 55.17%, #8BA00D 120.27%)",
      }}
      className="relative"
    >
      <Flex
        className="md:flex-row flex-col md:mx-0 mx-3"
        style={{ height: width > 768 ? "70vh" : "100vh" }}
      >
        <Flex
          col
          className="h-full md:pt-32 pb-32 pt-24 md:items-start items-center text-white"
        >
          <h1 className="md:text-3xl text-2xl font-bold">Masterplan</h1>
          <h1 className="mt-8 text-center md:text-left text-lg md:mt-8 max-w-xl">
            We believe all you need are a group of friends to travel anywhere in
            the world. We have this insight after hosting more than 1 million
            travellers from over 150 countries in our past work with Zo, the
            world’s largest backpacker hostel chain.
          </h1>
        </Flex>
        <Flex
          col
          className="h-full md:pt-40 pt-8 pb-32 md:items-start items-center"
        >
          <FourZobusWorking
            className="absolute bottom-0"
            style={{ width: "60vh" }}
          />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Introduction;
