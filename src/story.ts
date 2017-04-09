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
        if (start < 1) {
            throw new Error('Chapters must start at at least 1')
        }
        if (end > this.chapters) {
            throw new Error('Chapters must end at story\'s number of chapters')
        }
        if (start > end) {
            throw new Error('Start chapter is greater than end chapter')
        }
        var chapterGetters = genChapterGetters(this.id, start, end)
        return Promise.all([...chapterGetters])
    }
}
