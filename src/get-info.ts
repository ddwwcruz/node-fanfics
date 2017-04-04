import * as request from 'request'

export interface StoryInformation {
    title: string
    authorName: string
}

function buildInfo(args: string): StoryInformation {
    var parser = new DOMParser()
    var dom = parser.parseFromString(args, 'text/html')
        .getElementById('profile_top')

    var title = dom.querySelector('b.xcontrast_txt').textContent
    var authorElement = dom.querySelector('a.xcontrast_txt')
    var authorName = authorElement.textContent

    return {
        title,
        authorName
    }
}

/**
 * Gets information from Fanfiction.net
 * @param id ID of the Story
 */
export default function (id: number): Promise<StoryInformation> {
    return new Promise<StoryInformation>((resolve, reject) => {
        request.get(`https://www.fanfiction.net/s/${id}`, (err, res, body) => {
            if (err) {
                reject(err)
                return
            }
            if (res && res.statusCode) {
                try {
                    var info = buildInfo(body)

                    resolve(info)
                } catch (err) {
                    reject(err)
                }
            }
        })
    })
}
