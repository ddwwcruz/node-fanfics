import { get } from 'request'
import { env } from 'jsdom'

export interface AuthorInformation {
    name: string
    profileText: string
    imgUrl: string
}
