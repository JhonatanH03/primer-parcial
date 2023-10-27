import 'tailwindcss/tailwind.css';
import type { NextPage } from 'next'
import Head from "next/head"
const Home: NextPage = () => {

    return (
    <>
        <Head>
            <title> vota. dev - Vota los mejores del año en el mundo del desarrollo web</title>
        </Head>
        <header className='flex items-center w-full justify-between max-w-4xl mx-auto'>
            <h1 className='font-bold text-xl'> 🗳️ vota.dev</h1>
            <div>
            </div>
        </header>
        <section className='mt-48'>
            <h1 className='text-black text-9xl text-center font-extrabold'>
                Vota por la mejor tecnología del desarrollo web.
            </h1>
            <div className='flex flex-col items-center mt-8 max-w-lg text-center'>
              <p className='text-black opacity-90 text-2xl'>
                Decide qué stack, tecnologías y frameworks han sido los mejores del año. ¡Cada voto cuenta!
              </p>
            </div>

            <div className='bg-black max-w-3xl mt-20 h-screen p-12 mx-auto rounded-lg text-white'>
                <h2>Mejor Framework</h2>
                <ul>
                    <li>React</li>
                    <li>Vue</li>
                    <li>Angular</li>
                </ul>
            </div>
        </section>
    </>
    )
}

export default Home
