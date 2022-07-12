const EIGHT_HOURS = 8;
const LOCAL_STORAGE_LIMIT = 100;
const NUMBER_CONVERT_HOURS = 3600000;

async function doGet (url) {
  const response = await fetch(url);
  if(response.ok){
    return response.json();
  }
  if (response.status === 400) {
    const json = await response.json();
    if (json.hasOwnProperty('error')){
      throw new Error(json['error']);
    }
  }
  throw new Error("An error occurred, try again later.");
}

async function doGetAndCacheResult(url) {
  const json = await doGet(url);
  if (localStorage.length >= LOCAL_STORAGE_LIMIT){
    localStorage.clear();
  }
  const cache = {
    date : new Date(),
    data : json
  }
  localStorage.setItem(url, JSON.stringify(cache));
  return json;
}

function getHoursDifference(cachedData) {
  return Math.abs(new Date(cachedData.date) - new Date()) / NUMBER_CONVERT_HOURS;
}

function getCacheIfValid (url) {
  const stringCachedData = localStorage.getItem(url);
  if (!stringCachedData) {
    return false;
  }
  const cachedData = JSON.parse(stringCachedData);
  if (getHoursDifference(cachedData) > EIGHT_HOURS) {
    return false;
  }
  if (Array.isArray(cachedData.data) && cachedData.data.length > 0) {
    return false;
  }
  return cachedData.data;
}

async function tryFetchDataFromCache (url) {
  const cache = getCacheIfValid(url);
  if (cache) {
    return cache;
  }
  return doGetAndCacheResult(url);
}

export function buildFetchData(setErrorMessage) {
  const fetchData = async (url, setJsonData, setLoadingState=()=>{/* do nothing*/}) => {
    try {
      setLoadingState(true);
      setJsonData(await tryFetchDataFromCache(url));
    } catch (e) {
      setErrorMessage(e.message);
    } finally {
      setLoadingState(false);
    }
  };
  fetchData.bind(setErrorMessage);
  return fetchData;
}