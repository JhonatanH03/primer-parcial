import 'tailwindcss/tailwind.css';
import type { NextPage } from 'next'
import Head from "next/head"
import Link from 'next/link';
const Home: NextPage = () => {

const SectionTitle = ({children}:{children: string}) => <h2 className='text-xl font-bold '>{children}</h2>

    return (
    <>
        <Head>
            <title>Vota los mejores del año en el mundo del desarrollo web</title>
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
            <div className='flex flex-col items-center mt-8 max-w-7xl text-center mx-auto'>
              <p className='text-black opacity-90 text-2xl'>
                Decide qué stack, tecnologías y frameworks han sido los mejores del año. ¡Cada voto cuenta!
              </p>
            </div>

            <div className='sticky top-0 bg-black max-w-3xl mt-20 p-12 mx-auto rounded-lg text-white'>
                <SectionTitle>Mejor biblioteca UI</SectionTitle>
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

                <SectionTitle>Mejor framework Backend</SectionTitle>
                <ul>
                    <li>Nest.js</li>
                    <li>Express</li>
                    <li>Fastify</li>
                    <li>Hapi</li>
                </ul>

                <SectionTitle>Mejor framework FullStack</SectionTitle>
                <ul>
                    <li>Next.js</li>
                    <li>Nuxt</li>
                    <li>SvelteKit</li>
                    <li>Remix</li>
                    <li>BlitzJS</li>
                    
                </ul>

                <SectionTitle>Mejores empaquetadores de código</SectionTitle>
                <ul>
                    <li>Webpack</li>
                    <li>Rollup</li>
                    <li>Parcel</li>
                    <li>Esbuild</li>
                    <li>Vite</li>
                    
                </ul>

                <SectionTitle>Mejor librería CSS en JS</SectionTitle>
                <ul>
                    <li>Stitches</li>
                    <li>Styled Components</li>
                    <li>Emotion</li>
                    
                </ul>

                <SectionTitle>Mejor framework CSS</SectionTitle>
                <ul>
                    <li>Tailwind</li>
                    
                
                </ul>

                <SectionTitle>Mejor herramienta de testing</SectionTitle>
                <ul>
                    <li>Jest</li>
                    <li>Testing Library</li>
                    <li>Vitest</li>
                    
                
                </ul>

                <SectionTitle>Mejor test E2E</SectionTitle>
                <ul>
                    <li>Cypress</li>
                    <li>Playwright</li>
                    <li>Pupeeteer</li>
                    
                
                </ul>

                <SectionTitle>Mejor BaaS (Backend as a service)</SectionTitle>
                <ul>
                    <li>Firebase</li>
                    <li>Supabase</li>
                    <li>Airtable</li>
                    <li>Amplify</li>
                    <li>Mongo Stitch</li>
                
                </ul>

                <SectionTitle>Mejor catalogo de componentes</SectionTitle>
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
