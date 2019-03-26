import uuid from "uuid";

const createItem = name => ({
  id: uuid(),
  name
});
const toId = ({ id }) => id;

const companies = [
  "Adobe",
  "Ancestry.com",
  "Bluehost",
  "DevMountain",
  "DigiCert",
  "Domo",
  "eBay",
  "IM Flash",
  "Instructure",
  "Jive Communications",
  "Lucid",
  "Microsoft",
  "MX",
  "Oracle",
  "Overstock",
  "Pluralsight",
  "Podium",
  "Qualtrics",
  "Solutionreach",
  "Vivint",
  "Workday",
  "Workfront",
  "Xactware"
];

export const items = companies.map(name => createItem(name));

export const hydrateById = items.reduce(
  (acc, i) => Object.assign({}, acc, { [i.id]: i }),
  {}
);
export const hydrateIds = items.map(toId);
