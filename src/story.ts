import { getChapter } from './get-chapter'
import Chapter from './chapter'

function* genChapterGetters(id: number, start: number, end: number) {
    for (let a = start; a <= end; a++) {
        yield getChapter(id, a)
    }
}

export default class Story {
    constructor(
        public readonly id: number,
        public readonly title: string,
        public readonly authorName: string,
        public readonly summary: string,
        public readonly chapters: number,
        public readonly imgUrl: string
    ) { }

    async getChapters(start = 1, end = this.chapters) {
        var chapterGetters = genChapterGetters(this.id, start, end)
        return Promise.all([...chapterGetters])
    }
}
