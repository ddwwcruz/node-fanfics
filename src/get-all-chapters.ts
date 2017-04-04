import getChapter from './get-chapter'
import Chapter from './chapter'

function* genChapterUrls(id: number, chapters: number) {
    for (let a = 1; a <= chapters; a++) {
        yield getChapter(id, a)
    }
}

export default async function (id: number, chapters: number) {
    var chapterPromisesGen = genChapterUrls(id, chapters)
    return Promise.all([...chapterPromisesGen])
}
