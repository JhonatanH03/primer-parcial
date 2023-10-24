import { NavUserOutlet } from "components/NavUserOutlet"

export function Header() {
    return (
        <header className='flex w-full justify-between max-w-4xl'>
            <h1 className='font-bold text-xl'> 🗳️ vota.dev</h1>
            <div>
                <NavUserOutlet />
            </div>
            
        </header>
    )
}