import { Hashnode, Medium } from "./blogs";
import { UsernameConfig } from "./types/UserNameConfig";

export const getBlogs=async(type:'medium'|'hashnode'|'all', username:UsernameConfig)=>{
    if(type=="medium")
    {
        return Medium(username.mediumUsername);
    }
    else if(type=="hashnode")
    {
        return Hashnode(username.hashnodeUsername);
    }
    else
    {   
        const mediumArticles= await Medium(username.mediumUsername);
        const hashnodePosts = await Hashnode(username.hashnodeUsername);
        return {
            mediumArticles: mediumArticles,
            hashnodePosts: hashnodePosts
        };
        
    }
};

export * from './types'
