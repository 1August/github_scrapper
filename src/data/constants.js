export const PORT = 5000
export const BASE_URL = 'https://github.com'
export const TRENDING = '/trending'




/*
// GOTO: github.com/trending
openNewPage('https://www.github.com/trending')


let openNewPage = (url) => {
    const a = document.createElement('a')
    a.setAttribute('target', '_blank')
    a.setAttribute('href', url)
    a.click()
}

let repos = document.querySelectorAll('article.Box-row')

let reposData = [...repos].map(repo => {
    const title = repo.querySelector('h2 > a')?.textContent || ''
    const url = 'https://github.com' + repo.querySelector('h2 > a').getAttribute('href')
    const description = repo.querySelector('p')?.textContent || ''
    const lang = repo.querySelector('[itemprop="programmingLanguage"]')?.textContent || ''
    const stars = repo.querySelector('span + a.Link.Link--muted')?.textContent || ''
    const forks = repo.querySelector('a + a.Link.Link--muted')?.textContent || ''
    const teamNumber = repo.querySelectorAll('a.Link.Link--muted + span > a').length
    const starsToday = repo.querySelector('a.Link.Link--muted + span + span')?.textContent || ''

    let getInfo = () => {
        const issues = document.querySelector('span[data-content="Issues"] + span').getAttribute('title') || ''
        const pullRequests = document.querySelector('span[data-content="Pull requests"] + span').getAttribute('title') || ''
        const commits = document.querySelector('.octicon.octicon-history + span')?.textContent || ''
        const filesNumber = document.querySelectorAll('div[role="grid"] > div[role="row"].Box-row').length

        return {
            issues, pullRequests,
            commits: commits.replace(/[\n\r]/g, '').trim().replace(/^\d/, ''),
            filesNumber
        }
    }


    openNewPage(url)
    const info = getInfo()

    return {
        title: title.replace(/[\n\r]/g, '').trim(),
        author: title.replace(/[\n\r]/g, '').trim().split('/')[0].trim(),
        name: title.replace(/[\n\r]/g, '').trim().split('/')[1].trim(),
        url,
        description: description.replace(/[\n\r]/g, '').trim(),
        lang,
        stars: stars.replace(/[\n\r]/g, '').trim().replace(',', ''),
        forks: forks.replace(/[\n\r]/g, '').trim().replace(',', ''),
        teamNumber,
        starsToday: starsToday.replace(/[\n\r]/g, '').trim().replace(',', ''),
        info
    }
})


[
  {
    "title": "Las-Fuerzas-Del-Cielo /      Sistema-Anti-Fraude-Electoral",
    "author": "Las-Fuerzas-Del-Cielo",
    "name": "Sistema-Anti-Fraude-Electoral",
    "url": "https://github.com/Las-Fuerzas-Del-Cielo/Sistema-Anti-Fraude-Electoral",
    "description": "Sistema Open Source para Identificar potenciales fraudes electorales, minimizar su ocurrencia e impacto.",
    "lang": "PHP",
    "stars": "873",
    "forks": "139",
    "teamNumber": 5,
    "starsToday": "138 stars today"
  },
  {
    "title": "public-apis /      public-apis",
    "author": "public-apis",
    "name": "public-apis",
    "url": "https://github.com/public-apis/public-apis",
    "description": "A collective list of free APIs",
    "lang": "Python",
    "stars": "266626",
    "forks": "30017",
    "teamNumber": 5,
    "starsToday": "1987 stars today"
  },
  {
    "title": "donnemartin /      system-design-primer",
    "author": "donnemartin",
    "name": "system-design-primer",
    "url": "https://github.com/donnemartin/system-design-primer",
    "description": "Learn how to design large-scale systems. Prep for the system design interview. Includes Anki flashcards.",
    "lang": "Python",
    "stars": "233681",
    "forks": "40964",
    "teamNumber": 5,
    "starsToday": "660 stars today"
  },
  {
    "title": "xxlong0 /      Wonder3D",
    "author": "xxlong0",
    "name": "Wonder3D",
    "url": "https://github.com/xxlong0/Wonder3D",
    "description": "A cross-domain diffusion model for 3D reconstruction from a single image",
    "lang": "Python",
    "stars": "1594",
    "forks": "65",
    "teamNumber": 2,
    "starsToday": "335 stars today"
  },
  {
    "title": "juspay /      hyperswitch",
    "author": "juspay",
    "name": "hyperswitch",
    "url": "https://github.com/juspay/hyperswitch",
    "description": "An open source payments switch written in Rust to make payments fast, reliable and affordable",
    "lang": "Rust",
    "stars": "6406",
    "forks": "535",
    "teamNumber": 5,
    "starsToday": "841 stars today"
  },
  {
    "title": "i-am-alice /      2nd-devs",
    "author": "i-am-alice",
    "name": "2nd-devs",
    "url": "https://github.com/i-am-alice/2nd-devs",
    "description": "",
    "lang": "HTML",
    "stars": "61",
    "forks": "27",
    "teamNumber": 1,
    "starsToday": "13 stars today"
  },
  {
    "title": "SidraChain /      sidra-contracts",
    "author": "SidraChain",
    "name": "sidra-contracts",
    "url": "https://github.com/SidraChain/sidra-contracts",
    "description": "Genesis Smart Contracts for Sidra Chain",
    "lang": "Solidity",
    "stars": "1534",
    "forks": "470",
    "teamNumber": 2,
    "starsToday": "206 stars today"
  },
  {
    "title": "OpenSignLabs /      OpenSign",
    "author": "OpenSignLabs",
    "name": "OpenSign",
    "url": "https://github.com/OpenSignLabs/OpenSign",
    "description": "The free & Open Source Alternative to DocuSign",
    "lang": "JavaScript",
    "stars": "1283",
    "forks": "63",
    "teamNumber": 5,
    "starsToday": "325 stars today"
  },
  {
    "title": "SidraChain /      go-ethereum",
    "author": "SidraChain",
    "name": "go-ethereum",
    "url": "https://github.com/SidraChain/go-ethereum",
    "description": "Forked Golang execution layer implementation of the Ethereum protocol.",
    "lang": "Go",
    "stars": "1659",
    "forks": "463",
    "teamNumber": 1,
    "starsToday": "215 stars today"
  },
  {
    "title": "witnessmenow /      ESP32-Cheap-Yellow-Display",
    "author": "witnessmenow",
    "name": "ESP32-Cheap-Yellow-Display",
    "url": "https://github.com/witnessmenow/ESP32-Cheap-Yellow-Display",
    "description": "Building a community around a cheap ESP32 Display with a touch screen",
    "lang": "C",
    "stars": "299",
    "forks": "19",
    "teamNumber": 5,
    "starsToday": "62 stars today"
  },
  {
    "title": "massgravel /      Microsoft-Activation-Scripts",
    "author": "massgravel",
    "name": "Microsoft-Activation-Scripts",
    "url": "https://github.com/massgravel/Microsoft-Activation-Scripts",
    "description": "A Windows and Office activator using HWID / KMS38 / Online KMS activation methods, with a focus on open-source code and fewer antivirus detections.",
    "lang": "Batchfile",
    "stars": "50039",
    "forks": "5077",
    "teamNumber": 5,
    "starsToday": "156 stars today"
  },
  {
    "title": "THUDM /      ChatGLM3",
    "author": "THUDM",
    "name": "ChatGLM3",
    "url": "https://github.com/THUDM/ChatGLM3",
    "description": "ChatGLM3 series: Open Bilingual Chat LLMs | 开源双语对话语言模型",
    "lang": "Python",
    "stars": "2085",
    "forks": "124",
    "teamNumber": 5,
    "starsToday": "654 stars today"
  },
  {
    "title": "microsoft /      Web-Dev-For-Beginners",
    "author": "microsoft",
    "name": "Web-Dev-For-Beginners",
    "url": "https://github.com/microsoft/Web-Dev-For-Beginners",
    "description": "24 Lessons, 12 Weeks, Get Started as a Web Developer",
    "lang": "JavaScript",
    "stars": "77416",
    "forks": "11987",
    "teamNumber": 5,
    "starsToday": "27 stars today"
  },
  {
    "title": "deepseek-ai /      DreamCraft3D",
    "author": "deepseek-ai",
    "name": "DreamCraft3D",
    "url": "https://github.com/deepseek-ai/DreamCraft3D",
    "description": "Official implementation of DreamCraft3D: Hierarchical 3D Generation with Bootstrapped Diffusion Prior",
    "lang": "",
    "stars": "",
    "forks": "27",
    "teamNumber": 2,
    "starsToday": "155 stars today"
  },
  {
    "title": "SagerNet /      sing-box",
    "author": "SagerNet",
    "name": "sing-box",
    "url": "https://github.com/SagerNet/sing-box",
    "description": "The universal proxy platform",
    "lang": "Go",
    "stars": "5619",
    "forks": "634",
    "teamNumber": 5,
    "starsToday": "26 stars today"
  },
  {
    "title": "InterviewReady /      system-design-resources",
    "author": "InterviewReady",
    "name": "system-design-resources",
    "url": "https://github.com/InterviewReady/system-design-resources",
    "description": "These are the best resources for System Design on the Internet",
    "lang": "",
    "stars": "",
    "forks": "1374",
    "teamNumber": 5,
    "starsToday": "203 stars today"
  },
  {
    "title": "Grasscutters /      Grasscutter",
    "author": "Grasscutters",
    "name": "Grasscutter",
    "url": "https://github.com/Grasscutters/Grasscutter",
    "description": "A server software reimplementation for a certain anime game.",
    "lang": "Java",
    "stars": "14607",
    "forks": "4410",
    "teamNumber": 5,
    "starsToday": "52 stars today"
  },
  {
    "title": "telegramdesktop /      tdesktop",
    "author": "telegramdesktop",
    "name": "tdesktop",
    "url": "https://github.com/telegramdesktop/tdesktop",
    "description": "Telegram Desktop messaging app",
    "lang": "C++",
    "stars": "23015",
    "forks": "4719",
    "teamNumber": 5,
    "starsToday": "25 stars today"
  },
  {
    "title": "torvalds /      linux",
    "author": "torvalds",
    "name": "linux",
    "url": "https://github.com/torvalds/linux",
    "description": "Linux kernel source tree",
    "lang": "C",
    "stars": "159957",
    "forks": "50869",
    "teamNumber": 5,
    "starsToday": "85 stars today"
  },
  {
    "title": "wg-easy /      wg-easy",
    "author": "wg-easy",
    "name": "wg-easy",
    "url": "https://github.com/wg-easy/wg-easy",
    "description": "The easiest way to run WireGuard VPN + Web-based Admin UI.",
    "lang": "HTML",
    "stars": "9165",
    "forks": "911",
    "teamNumber": 5,
    "starsToday": "18 stars today"
  },
  {
    "title": "OpenZeppelin /      openzeppelin-contracts",
    "author": "OpenZeppelin",
    "name": "openzeppelin-contracts",
    "url": "https://github.com/OpenZeppelin/openzeppelin-contracts",
    "description": "OpenZeppelin Contracts is a library for secure smart contract development.",
    "lang": "JavaScript",
    "stars": "23173",
    "forks": "11645",
    "teamNumber": 5,
    "starsToday": "31 stars today"
  },
  {
    "title": "vercel /      next-learn",
    "author": "vercel",
    "name": "next-learn",
    "url": "https://github.com/vercel/next-learn",
    "description": "Learn Next.js Starter Code",
    "lang": "TypeScript",
    "stars": "2383",
    "forks": "1389",
    "teamNumber": 5,
    "starsToday": "92 stars today"
  },
  {
    "title": "arendst /      Tasmota",
    "author": "arendst",
    "name": "Tasmota",
    "url": "https://github.com/arendst/Tasmota",
    "description": "Alternative firmware for ESP8266 and ESP32 based devices with easy configuration using webUI, OTA updates, automation using timers or rules, expandability and entirely local control over MQTT, HTTP, Serial or KNX. Full documentation at",
    "lang": "C",
    "stars": "20479",
    "forks": "4542",
    "teamNumber": 5,
    "starsToday": "9 stars today"
  },
  {
    "title": "topjohnwu /      Magisk",
    "author": "topjohnwu",
    "name": "Magisk",
    "url": "https://github.com/topjohnwu/Magisk",
    "description": "The Magic Mask for Android",
    "lang": "C++",
    "stars": "39253",
    "forks": "10212",
    "teamNumber": 5,
    "starsToday": "33 stars today"
  },
  {
    "title": "home-assistant /      core",
    "author": "home-assistant",
    "name": "core",
    "url": "https://github.com/home-assistant/core",
    "description": "🏡 Open source home automation that puts local control and privacy first.",
    "lang": "Python",
    "stars": "63768",
    "forks": "25348",
    "teamNumber": 5,
    "starsToday": "24 stars today"
  }
]


 */


