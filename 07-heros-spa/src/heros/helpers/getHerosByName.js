import { heros } from "../data/heros"

export const getHerosByName = (name = '') => {
    name = name.trim().toLowerCase()
    if (name.length ===0) return []

    return heros.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    )
}