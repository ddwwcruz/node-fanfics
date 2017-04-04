export default class Chapter {
    constructor(protected document: Document) {
    }

    get content() {
        return this.document.getElementById('storytext').innerHTML
    }

    get title() {
        try {
            return this.document
                .getElementById('chap_select')
                .querySelector('option[selected]')
                .innerHTML
        } catch (err) {
            return 'Chapter'
        }
    }
}
