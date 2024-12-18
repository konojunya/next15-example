import {getPokemons} from "@/app/utils";
import Link from "next/link";

export const PokemonList = async () => {
    const pokemons = await getPokemons()

    return (
        <ul className="grid grid-cols-4 gap-2">
            {pokemons.map(pokemon => (
                <li key={pokemon.id}>
                    <Link href={`/${pokemon.id}`} className="block p-4 bg-red-50">{pokemon.name}</Link>
                </li>
            ))}
        </ul>
    )
}
