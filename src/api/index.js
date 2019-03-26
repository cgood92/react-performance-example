import * as otherData from "../data/other";
import { items } from "../data/items";
import { getRandomIntInclusive } from "../util";

const getRandomTime = () => getRandomIntInclusive(500, 1500);

const makeRandomPromise = data =>
  new Promise(resolve => {
    setTimeout(() => resolve(data), getRandomTime());
  });

export const fetchCompany = makeRandomPromise(otherData.company);
export const fetchUser = makeRandomPromise(otherData.user);
export const fetchNotifications = makeRandomPromise(otherData.notifications);
export const fetchUpdated = makeRandomPromise(otherData.updated);

const ITEMS_PER_PAGE = 5;
export const fetchItems = page => {
  const startingIndex = page * ITEMS_PER_PAGE;
  const endingIndex = startingIndex + ITEMS_PER_PAGE;
  const someItems = items.slice(startingIndex, endingIndex);
  const more = endingIndex < items.length;
  return makeRandomPromise({ items: someItems, more });
};
