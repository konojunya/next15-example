import {setTimeout} from "node:timers/promises"

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function getPokemons() {
    console.log("call function getPokemons")
    await setTimeout(1000 * 5)

    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12", {cache: "no-store"})
    const data =  await res.json()

    const pokemons: {id: string,name: string}[] = []

    for (const pokemon of data.results) {
        const id = pokemon.url.split("/").at(-2)
        pokemons.push({id, name: pokemon.name})
    }

    return pokemons
}

export async function getPokemon(id: string) {
    console.log("call function getPokemon", id)

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {cache: "no-store"})
    const data = await res.json()
    const detailRes = await fetch(data.species.url)
    const detail =  await detailRes.json()

    return {
        id,
        image: data.sprites.front_default,
        name: detail.names.find((n: any)  => n.language.name.includes("ja"))?.name,
        flavor_text: detail.flavor_text_entries.find((f: any) => f.language.name.includes("ja"))?.flavor_text
    }
}

export async function getPokemonFlavorText(id: string) {
    console.log("call function getPokemonFlavorText", id)

    await setTimeout(1000 * 10)

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {cache: "no-store"})
    const data = await res.json()
    const detailRes = await fetch(data.species.url)
    const detail =  await detailRes.json()

    return detail.flavor_text_entries.find((f: any) => f.language.name.includes("ja"))?.flavor_text
}
