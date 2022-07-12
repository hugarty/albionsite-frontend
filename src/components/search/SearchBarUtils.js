const SEARCH_URL = process.env.REACT_APP_SEARCH_URL;

export const STATE_GUILDS =  0;
export const STATE_ALLIANCES = 1;

function concatZeroIfSmallerThanTen(number) {
  return number < 10 ? "0" + number : number;
}

function getDateISO8601(date) {
  const month = date.getMonth() + 1;
  const stringMonth = concatZeroIfSmallerThanTen(month);
  const stringDay = concatZeroIfSmallerThanTen(date.getDate());

  return `${date.getFullYear()}-${stringMonth}-${stringDay}`;
}

export function getSearchUrl(selectedItems, calendarValue, radioState) {
  const ids = selectedItems.map((item) => item.id);
  const startDate = getDateISO8601(calendarValue[0]);
  const endDate = getDateISO8601(calendarValue[1] || calendarValue[0]);
  const searchType = radioState === STATE_GUILDS ? "guilds" : "alliances";

  const queryParam = `?startDate=${startDate}&endDate=${endDate}&ids=${ids.join()}`;
  return `${SEARCH_URL}/${searchType}${queryParam}`;
}

export function getDateSixDaysAgo() {
  const sixDaysAgo = new Date();
  sixDaysAgo.setDate(sixDaysAgo.getDate() - 6);
  return sixDaysAgo;
}