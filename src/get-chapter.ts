import { get } from 'request'
import { env } from 'jsdom'

import Chapter from './chapter'

async function getChapterStr(id: number, chapter: number) {
    var url = `https://www.fanfiction.net/s/${id}/${chapter}`

    return new Promise<string>((resolve, reject) => {
        get(url, (err, res, body: string) => {
            if (err) {
                reject(err)
            } else if (res && res.statusCode) {
                resolve(body)
            }
        })
    })
}

async function getChapterDOM(id: number, chapter: number) {
    var chapterStr = await getChapterStr(id, chapter)

    return new Promise<Document>((resolve, reject) => {
        env(chapterStr, (err, window) => {
            if (err) {
                reject(err)
            } else {
                resolve(window.document)
            }
        })
    })
}

/**
 * Fetches a chapter from Fanfiction.net
 * @param id ID number of the story
 * @param chapter Chapter number to retrieve
 */
export default async function (id: number, chapter: number) {
    var dom = await getChapterDOM(id, chapter)

    return new Promise<Chapter>((resolve, reject) => {
        resolve(new Chapter(dom))
    })
}
