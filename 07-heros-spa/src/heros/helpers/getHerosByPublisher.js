import { heros } from "../data/heros"

export const getHerosBtPublisher = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics']
    if (!validPublisher.includes(publisher))
        throw new Error(`${publisher} is not a valid publisher`)

    return heros.filter(hero => hero.publisher === publisher)
}