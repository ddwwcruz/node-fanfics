import { get } from 'request'
import { env } from 'jsdom'

export interface AuthorInformation {
    name: string
    profileText: string
    imgUrl: string
}

function buildInfo(args: Document): AuthorInformation {
    var name = args.querySelector('#content_wrapper_inner span').textContent
    var profileTextSelector = args.querySelector('#bio')
        .querySelectorAll('div, p, hr')
    var profileText = ''
    var imgUrl = null

    for (let a = 0; a < profileTextSelector.length; a++) {
        profileText += profileTextSelector.item(a).outerHTML
    }

    try {
        imgUrl = args.querySelector('#bio img').getAttribute('src')
    } catch (err) {
        // do nothing
    }

    return {
        name,
        profileText,
        imgUrl
    }
}

/**
 * Get the information of an author
 * @param id ID of the author
 */
export async function getAuthorInfo(id: number) {
    var url = `https://www.fanfiction.net/u/${id}`
    return new Promise<AuthorInformation>((resolve, reject) => {
        get(url, (err, res, body) => {
            if (err) {
                reject(err)
            } else if (res && res.statusCode == 200) {
                try {
                    env(body, (err, win) => {
                        if (err) reject(err)
                        else resolve(buildInfo(win.document))
                    })
                } catch (err) {
                    reject(err)
                }
            } else if (res && res.statusCode != 200) {
                reject({
                    code: res.statusCode,
                    message: res.statusMessage
                })
            }
        })
    })
}
