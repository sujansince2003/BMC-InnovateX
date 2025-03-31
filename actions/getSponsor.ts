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

  // select the random sponsor from the list
  const randomIndex = Math.floor(Math.random() * data.length);
  const selectedSponsor = data[randomIndex];

  return {
    id: selectedSponsor.id,
    imageUrl: selectedSponsor.pamphlet,
    linkUrl: selectedSponsor.website,
    priority: 1,
  };
};
