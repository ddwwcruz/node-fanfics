# node-fanfics

## Usage

Fetching a story
```js
const nodeFanfics = require('node-fanfics')

// Fetches story information
nodeFanfics.getInfo(storyId).then(function (info) {
    info.title // title of the story
    info.authorName // username of the author
    info.summary // summary of the story
    info.chapters // number of chapters in the story
    info.imgUrl // url of the story's cover image
}).catch(function (error) {
    // something wrong happened and the story wasn't
})
```
