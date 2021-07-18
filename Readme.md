<p align="center">
<img height="150" width="150" src ="https://media.discordapp.net/attachments/834130556865347645/866319407055634452/Frame_42.png"
/><br/><br/>
<b>Blog Traversy</b><br/>
A tool which helps you to fetch your articles from all the publications like medium and hashnode and show it on your custom blog.
</p>

## Getting Started

#### Installation

The easiest way to install `blogtraversy` is using NPM. If you have Node.js installed, it is most likely that you have NPM installed as well

```
$ npm install blogtraversy
```
#### Usage

1. Add the following to `index.js` 

```js
const {getBlogs} = require('blogtraversy')

```

2. A `usernames` config file is recommended. For now, you can use like this.

```js
const {getBlogs} = require('blogtraversy')

const usernames = {
    mediumUsername:'abirwrites',
    hashnodeUsername:'imabp'
}
```

3. Call GetBlogs based on your requirement passing your `usernames` config.

```js
getBlogs('all',usernames).then((res)=>console.log("All Blogs=>",res));
getBlogs('medium',usernames).then((res)=>console.log("Medium Blogs=>",res));
getBlogs('hashnode',usernames).then((res)=>console.log("Hashnode Blogs",res));
```

4. The received `res` consists of the following array of objects.

```js
//getBlogs('all',usernames) 
res= {
    mediumArticles:[
        {
            url: string,
            title: string,
            thumbnail: string
        }
    ],
    hashnodePosts:[
        {
            url: string,
            title: string,
            thumbnail: string
        }  
    ]
}

//getBlogs('medium',usernames) 
res =[  
        {
            url: string,
            title: string,
            thumbnail: string
        }
]

//getBlogs('hashnode',usernames) 
res =[  
        {
            url: string,
            title: string,
            thumbnail: string
        }
]
```

## Contribution
For contributions, please go through active [issues](https://github.com/imabp/blogtraversy/issues) 
