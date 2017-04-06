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
    // something wrong happened and the story wasn't fetched
})

// Fetches a chapter
nodeFanfics.getChapter(storyId, chapterNumber).then(function (chapter) {
    chapter.title // title of chapter
    chapter.content // contents of chapter
}).catch(function (error) {
    // something wrong happened while fetching the chapter
})

// Fetches all chapters from a story
nodeFanfics.getAllChapters(storyId, chapters).then(function (chapters) {
    // loop through the chapters
    for (let chapter of chapters) {
        chapter.title // title of chapter
        chapter.content // contents of chapter
    }
}).catch(function (error) {
    // something wrong happened while fetching the chapters
})
```
