import axios from 'axios';
import * as fs from 'fs';
import { JSDOM } from 'jsdom';
import { BASE_URL, TRENDING } from '../data/constants.js';

export const setRoutes = (app) => {
    app.get('/', async (req, res) => {
        console.time('Time')
        axios.get(BASE_URL + TRENDING)
            .then(response => response.data)
            .then(html => {
                const dom = new JSDOM(html)

                const repos = dom.window.document.querySelectorAll('article.Box-row')

                const reposInfo = Array.from(repos).map(async repo => {
                    const title = repo.querySelector('h2 > a').textContent
                    const url = repo.querySelector('h2 a').getAttribute('href')
                    const description = repo.querySelector('h2 + p')?.innerHTML || ''
                    const lang = repo.querySelector('[itemProp="programmingLanguage"]')?.innerHTML || ''
                    const stars = repo.querySelector('p + div > span + a')?.textContent || ''
                    const teamNumber = repo.querySelectorAll('p + div > a + span > a').length
                    const starsToday = repo.querySelector('p + div > span + span')?.textContent || ''

                    return {
                        username: title.replace(/[\n\r]/g, '').trim().split('/')[0].trim(),
                        title: title.replace(/[\n\r]/g, '').trim().split('/')[1].trim(),
                        url: 'https://github.com' + url,
                        description: description.replace(/[\n\r]/g, '').trim(),
                        lang: lang.replace(/[\n\r]/g, '').trim(),
                        stars: stars.replace(/[\n\r]/g, '').trim().replace(',', ''),
                        teamNumber,
                        starsToday: starsToday.replace(/[\n\r]/g, '').trim().replace(',', '').split(' ')[0],
                    }
                })

                return reposInfo
            })
            .then(async reposInfo => {
                const data = []
                for (const rep of reposInfo) {
                    const d = await axios.get((await rep).url)
                        .then(response => response.data)
                        .then(async html2 => {
                            const dom2 = new JSDOM(html2)

                            const issues = dom2.window.document.querySelector('span[data-content="Issues"] + span')?.getAttribute('title') || ''
                            const pullRequests = dom2.window.document.querySelector('span[data-content="Pull' +
                                ' requests"] + span')?.getAttribute('title') || ''
                            const commits = dom2.window.document.querySelector('.octicon.octicon-history + span')?.textContent || ''
                            const filesNumber = dom2.window.document.querySelectorAll('div[role="grid"] > div[role="row"].Box-row').length

                            const r = await rep
                            return {
                                ...r,
                                issues,
                                pullRequests,
                                commits: commits.replace(/[\n\r]/g, '').trim().replace(/^\d/, ''),
                                filesNumber,
                            }
                        })
                    console.log(d)
                    data.push(d)
                }
                console.timeEnd('Time')
                try {
                    fs.writeFileSync('C:\\Users\\L\\WebstormProjects\\github_scrapper\\src\\data\\report/result.json', JSON.stringify(data), { flag: 'a+' })
                    console.log('Success!')
                } catch (err) {
                    console.error(err)
                }

                res.json(data)
            })
    })
}
