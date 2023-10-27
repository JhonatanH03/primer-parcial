import 'tailwindcss/tailwind.css';
import type { NextPage } from 'next'
import Head from "next/head"
import Link from 'next/link';
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
                <h2>Mejor biblioteca UI</h2>
                <ul>
                    <li>React</li>
                    <li>Vue.js</li>
                    <li>Angular</li>
                    <li>Svelte</li>
                    <li>Lit</li>
                    <li>Ember</li>
                    <li>Alpine.js</li>
                    <li>Preact</li>
                    <li>Stimulus</li>
                    <li>Solid</li>
                    
                </ul>

                <h2>Mejor framework Backend</h2>
                <ul>
                    <li>Nest.js</li>
                    <li>Express</li>
                    <li>Fastify</li>
                    <li>Hapi</li>
                </ul>

                <h2>Mejor framework FullStack</h2>
                <ul>
                    <li>Next.js</li>
                    <li>Nuxt</li>
                    <li>SvelteKit</li>
                    <li>Remix</li>
                    <li>BlitzJS</li>
                    
                </ul>

                <h2>Mejores empaquetadores de código</h2>
                <ul>
                    <li>Webpack</li>
                    <li>Rollup</li>
                    <li>Parcel</li>
                    <li>Esbuild</li>
                    <li>Vite</li>
                    
                </ul>

                <h2>Mejor librería CSS en JS</h2>
                <ul>
                    <li>Stitches</li>
                    <li>Styled Components</li>
                    <li>Emotion</li>
                    
                </ul>

                <h2>Mejor framework CSS</h2>
                <ul>
                    <li>Tailwind</li>
                    
                
                </ul>

                <h2>Mejor herramienta de testing</h2>
                <ul>
                    <li>Jest</li>
                    <li>Testing Library</li>
                    <li>Vitest</li>
                    
                
                </ul>

                <h2>Mejor test E2E</h2>
                <ul>
                    <li>Cypress</li>
                    <li>Playwright</li>
                    <li>Pupeeteer</li>
                    
                
                </ul>

                <h2>Mejor BaaS (Backend as a service)</h2>
                <ul>
                    <li>Firebase</li>
                    <li>Supabase</li>
                    <li>Airtable</li>
                    <li>Amplify</li>
                    <li>Mongo Stitch</li>
                
                </ul>

                <h2>Mejor catalogo de componentes</h2>
                <ul>
                    <li>Chakra UI</li>
                    <li>Material UI</li>
                    <li>NextUI</li>
                    <li>Antd</li>
                    <li>DaisyUI</li>
                    <li>React Semantic UI</li>
                </ul>

            </div>
        </section>
    </>
    )
}

export default Home
