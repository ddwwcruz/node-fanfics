# node-fanfics

## Installation
```
npm install node-fanfics
```

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
    info.getChapters() // a promise yielding an array of chapters
    info.getChapters(startChapter, endChapter) // you only want certain chapters
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

// Fetches information from author (you stalker)
nodeFanfics.getAuthorInfo(authorId).then(function (author) {
    author.name // name of the author
    author.profileText // author's profile
    author.imgUrl // url the author's profile picture
}).catch(function (error) {
    // something wrong happened while fetching author's profile
})
```

All functions return [ES6 Promises](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise).
They can be used like this:
```js
var storyInfo = await nodeFanfics.getInfo(storyId)
var chapter = await nodeFanfics.getChapter(storyId, chapterNumber)
var chapters = await nodeFanfics.getAllChapters(storyId, numberOfChapters)
var author =  await nodeFanfics.getAuthorInfo(authorId)
```
