import * as request from 'request'
import { env } from 'jsdom'

export interface StoryInformation {
    title: string
    authorName: string
    summary: string
    chapters: number
    imgUrl: string
}

function buildInfo(args: Window): StoryInformation {
    var dom = args.document.getElementById('profile_top')

    var title = dom.querySelector('b.xcontrast_txt').textContent
    var authorElement = dom.querySelector('a.xcontrast_txt')
    var authorName = authorElement.textContent
    var summary = dom.querySelector('div.xcontrast_txt').textContent
    var chapters = 1
    var imgUrl = null

    try {
        chapters = args.document.getElementById('chap_select')
            .querySelectorAll('option')
            .length
    } catch (err) {
    }

    try {
        imgUrl = dom.querySelector('img').src
    } catch (err) {
    }

    return {
        title,
        authorName,
        summary,
        chapters,
        imgUrl
    }
}

/**
 * Gets information from Fanfiction.net
 * @param id ID of the Story
 */
export async function getInfo(id: number): Promise<StoryInformation> {
    return new Promise<StoryInformation>((resolve, reject) => {
        request.get(`https://www.fanfiction.net/s/${id}`, (err, res, body) => {
            if (err) {
                reject(err)
                return
            }
            if (res && res.statusCode) {
                try {
                    env(body, (err, dom) => {
                        if (err) {
                            reject(err)
                        } else {
                            var info = buildInfo(dom)
                            resolve(info)
                        }
                    })
                } catch (err) {
                    reject(err)
                }
            }
        })
    })
}
