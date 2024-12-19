import {getPokemon, getPokemons} from "@/app/utils";
import Link from "next/link";
import {PokemonFlavorText} from "@/app/components/PokemonFlavorText";
import {Suspense} from "react";
import dayjs from "dayjs";
import {headers} from "next/headers";

export async function generateStaticParams() {
    const pokemons = await getPokemons()
    return pokemons.map(pokemon => ({id: pokemon.id}))
}

export default async function Page({params}: {params: {id: string}}) {
    const header = headers()
    const pokemon = await getPokemon(params.id)

    return (
        <div>
            <img src={pokemon.image} alt=""/>
            <h1>{pokemon.name}</h1>
            <Suspense fallback={<p>loading...</p>}>
                <PokemonFlavorText id={params.id}/>
            </Suspense>
            <p>created by: {dayjs().format("YYYY/MM/DD HH:mm:ss.SSS")}</p>
            <p>UserAgent: {header.get("user-agent")}</p>
            <Link href="/">Back</Link>
        </div>
    )
}
