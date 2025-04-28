export type SponsorType = {
  name: string;
  logo: string;
  category: string;
  description: string;
  website: string;
};

type SponsorsTypes = {
  [key: string]: SponsorType[];
};

const sortedCategories = [
  "Government Patron",
  "Gold Sponsor",
  "Silver Sponsor",
  "Bronze Sponsor",
  "Supporting Partner",
  "1st Prize Sponsor",
  "2nd Prize Sponsor",
  "Education Partner",
  "Payment Partner",
  "Tshirt Sponsor",
  "Audio Partner",
  "3rd Prize Sponsor",
  "T-Shirt Sponsor",
  "Technology Partner",
  "Networking Partner",
  "Travel Partner",
  "Category Prize Sponsor",
  "Food Partner",
  "Sports Partner",
  "Beverage Partner",
  "Entertainment Partner",
  "Media Partner"

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
