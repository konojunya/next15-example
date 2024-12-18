import {Suspense} from "react";
import {PokemonList} from "@/app/components/PokemonList";

export const dynamic = "force-dynamic"

export default async function Page() {
  return (
      <div>
        <h1>Pokemons</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <PokemonList/>
        </Suspense>
      </div>
  )
}
