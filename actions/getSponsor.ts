"use server";
import { prisma } from "@/lib/prisma";
export const getSponsors = async () => {
  const data = await prisma.sponsor.findMany();
  return data;
};

export const getSponsorPamphlet = async () => {
  const data = await prisma.sponsor.findMany({
    where: {
      pamphlet: {
        not: undefined,
      },
    },
  });

  const filteredData = data.filter((sponsor) => sponsor.pamphlet !== "");

  // select the random sponsor from the list
  const randomIndex = Math.floor(Math.random() * filteredData.length);
  const selectedSponsor = filteredData[randomIndex];

  return {
    id: selectedSponsor.id,
    imageUrl: selectedSponsor.pamphlet,
    linkUrl: selectedSponsor.website,
    priority: 1,
  };
};
