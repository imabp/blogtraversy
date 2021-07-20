import { BlogPostConfig } from "../types/BlogPostConfig";

const axios = require("axios");



const getMediumArticles = async (username:string):Promise<BlogPostConfig> => {
    const URI =
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;
    try {
        const response = await axios.get(URI);
        return response.data.items.map((article:any):BlogPostConfig => {
            return {
                url: article.link,
                title: article.title,
                thumbnail: article.thumbnail,
            };
        });

    } catch (error) {
        return   {
            url: `#`,
            title: "Hint: Check your Medium Username",
            thumbnail: "https://cdn.discordapp.com/attachments/834130556865347645/866935800637816842/unknown.png"
          }
    }
};
export default getMediumArticles;
