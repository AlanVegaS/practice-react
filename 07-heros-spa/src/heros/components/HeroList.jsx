import React, { useMemo } from "react";
import { getHerosBtPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {

    const heros = useMemo(() => getHerosBtPublisher(publisher), [publisher])

    return (
        < div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heros.map(hero => (
                    <HeroCard key={hero.id} {...hero}/>
                ))
            }
        </div >
    )
}