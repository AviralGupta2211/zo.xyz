import React from "react";
import { BecomeFounderDesktop, BecomeFounderMob } from "../assets/backgrounds";
import { useWindowSize } from "../components/hooks";
import { Flex } from "../components/structure";
import { Container } from "../components/ui";
import GiveawayCard from "../components/ui/GiveawayCard";
import giveawaysData from "./../data/giveaways.json";

interface giveawaysProps {}

const giveaways: React.FC<giveawaysProps> = () => {
  const { isMobile } = useWindowSize();

  return (
    <section
      className="h-full w-full min-h-screen relative"
      style={{ backgroundColor: "#5a9b4c" }}
    >
      {isMobile ? (
        <BecomeFounderMob className="absolute top-0" />
      ) : (
        <BecomeFounderDesktop className="absolute top-0" />
      )}
      <Container>
        <Flex col items="center" className="pt-24 text-black">
          <h1 className="text-4xl font-bold">Zo Giveaways</h1>
          <p className="text-center mt-8 px-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.itae. Etiam
            nunc volutpat auctor fermentum eget odio. Congue habitasse at
            tristique consectetur vitae.
          </p>
        </Flex>
      </Container>
      <Container className="py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8">
          {giveawaysData.map((d, i) => (
            <GiveawayCard {...d} key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default giveaways;
