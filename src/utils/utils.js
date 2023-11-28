async function getByAttribute(selector, attribute = 'innerText') {
    return (await (await selector)?.getProperty(attribute))?.jsonValue()
}

export const getInnerText = async selector => await getByAttribute(selector)
export const getHref = async selector => await getByAttribute(selector, 'href')
export const getSrc = async selector => await getByAttribute(selector, 'src')
