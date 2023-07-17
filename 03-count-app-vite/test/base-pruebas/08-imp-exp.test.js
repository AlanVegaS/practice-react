import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import { heroes } from "../../src/base-pruebas/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    test('GetHeroeById debe retornar un heroe por ID ', () => {
        const id = 1
        const hero = getHeroeById(id)

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });
    test('GetHeroeById debe retornar un undifined cuando no existe el ID', () => {
        const hero = getHeroeById(100)

        expect(hero).toBeFalsy()
    });
    test('getHeroesByOwner debe retornar los superherores de DC', () => {
        const DC = 'DC'
        const heroes = getHeroesByOwner(DC)

        expect(heroes).toEqual(expect.any(Array))
        expect(heroes.length).toBe(3)
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])
    });
    test('getHeroesByOwner debe retornar los superherores de Marvel', () => {
        const marvel = 'Marvel'
        const heroesMarvel = getHeroesByOwner(marvel)

        expect(heroesMarvel).toEqual(heroes.filter( (heroe) => heroe.owner === marvel))
        expect(heroesMarvel.length).toBe(2)
    });
})