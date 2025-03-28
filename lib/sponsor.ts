export type SponsorType = {
  title: string;
  logo: string;
  category: string;
  description: string;
  url: string;
};

type SponsorsTypes = {
  [key: string]: SponsorType[];
};

const sortedCategories = [
  "Government Patron",
  "Gold Sponsor",
  "Silver Sponsor",
  "Bronze Sponsor",
  "Prize Sponsor",
];
const sortedSponsors: SponsorsTypes = {};

export const sortSponsors = (data: SponsorType[]) => {
  const unSortedSponsors: SponsorsTypes = {};

  data.forEach((sponsor) => {
    if (!unSortedSponsors[sponsor.category]) {
      unSortedSponsors[sponsor.category] = [];
    }
    unSortedSponsors[sponsor.category].push(sponsor);
  });

  // Sort sponsors into the specified categories
  sortedCategories.forEach((category) => {
    if (unSortedSponsors[category]) {
      sortedSponsors[category] = unSortedSponsors[category];
    }
  });

  // Add remaining categories that are not specified
  Object.keys(unSortedSponsors).forEach((category) => {
    if (!sortedCategories.includes(category)) {
      sortedSponsors[category] = unSortedSponsors[category];
    }
  });

  return sortedSponsors;
};
