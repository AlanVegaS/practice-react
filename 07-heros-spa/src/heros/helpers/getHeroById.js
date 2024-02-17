import { heros } from "../data/heros";

export const getHerosById = (id) => {
    return heros.find(hero => hero.id === id)
}