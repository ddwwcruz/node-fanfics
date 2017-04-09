export default class Story {
    constructor(
        public readonly title: string,
        public readonly authorName: string,
        public readonly summary: string,
        public readonly chapters: number,
        public readonly imgUrl: string
    ) { }
}
