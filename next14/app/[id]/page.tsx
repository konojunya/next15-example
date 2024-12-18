import {getPokemon, getPokemons} from "@/app/utils";
import Link from "next/link";
import {PokemonFlavorText} from "@/app/components/PokemonFlavorText";
import {Suspense} from "react";

export async function generateStaticParams() {
    const pokemons = await getPokemons()
    return pokemons.map(pokemon => ({id: pokemon.id}))
}

export default async function Page({params}: {params: {id: string}}) {
    const pokemon = await getPokemon(params.id)

    return (
        <div>
            <img src={pokemon.image} alt=""/>
            <h1>{pokemon.name}</h1>
            <Suspense fallback={<p>loading...</p>}>
                <PokemonFlavorText id={params.id}/>
            </Suspense>
            <Link href="/">Back</Link>
        </div>
    )
}
