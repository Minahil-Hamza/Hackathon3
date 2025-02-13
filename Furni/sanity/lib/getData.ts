import { client } from "./client";
import { bannerQuery } from "./queries";

export const getBannersData = async () => {
    const bannersData = await client.fetch(bannerQuery);
    return bannersData;
  };
  
  // export const getManBannersData = async () => {
  //   const bannersData = await client.fetch(menBannerQuery);
  //   return bannersData;
  // };
  