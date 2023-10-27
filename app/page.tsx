import 'tailwindcss/tailwind.css';
import type { NextPage } from 'next'
import Head from "next/head"
import Link from 'next/link';
import { Header } from '@/components/Header';

const SectionTitle = ({children}:{children: string}) => <h2 className='text-xl font-bold '>{children}</h2>

const Box = ({ title }: { title: string }) => <div>
    <div className='rounded flex flex-col items-center justify-center border border-gray-100 py-10 shadow-lg'>
      <div className='p-4'>{title}</div>
    </div>
</div>

const Home: NextPage = () => {
    


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

            <div className='sticky top-0 bg-white max-w-3xl mt-20 p-12 mx-auto rounded-lg text-black'>
                <SectionTitle>Mejor biblioteca UI</SectionTitle>
                <ul>
                    <Box title="React" />
                    <Box title="Vue.js" />
                    <Box title="Angular" />
                    <Box title="Svelte" />
                    <Box title="Lit" />
                    <Box title="Ember" />
                    <Box title="Alpine.js" />
                    <Box title="Preact" />
                    <Box title="Stimulus" />
                    <Box title="Solid" />
                </ul>

                <SectionTitle>Mejor framework Backend</SectionTitle>
                <ul>
                    <Box title="Nest.js" />
                    <Box title="Express" />
                    <Box title="Fastify" />
                    <Box title="Hapi" />
                </ul>

                <SectionTitle>Mejor framework FullStack</SectionTitle>
                <ul>
                <Box title="Next.js" />
                    <Box title="Nuxt" />
                    <Box title="SvelteKit" />
                    <Box title="Remix" />
                    <Box title="BlitzJS" />
                </ul>

                <SectionTitle>Mejores empaquetadores de código</SectionTitle>
                <ul>
                    <Box title="Webpack" />
                    <Box title="Rollup" />
                    <Box title="Parcel" />
                    <Box title="Esbuild" />
                    <Box title="Vite" />
                </ul>

                <SectionTitle>Mejor librería CSS en JS</SectionTitle>
                <ul>
                    <Box title="Stitches" />
                    <Box title="Styled Components" />
                    <Box title="Emotion" />
                </ul>

                <SectionTitle>Mejor framework CSS</SectionTitle>
                <ul>
                    <Box title="Tailwind" />
                </ul>

                <SectionTitle>Mejor herramienta de testing</SectionTitle>
                <ul>
                    <Box title="Jest" />
                    <Box title="Testing Library" />
                    <Box title="Vitest" />
                </ul>

                <SectionTitle>Mejor test E2E</SectionTitle>
                <ul>
                    <Box title="Cypress" />
                    <Box title="Playwright" />
                    <Box title="Puppeteer" />
                </ul>

                <SectionTitle>Mejor BaaS (Backend as a service)</SectionTitle>
                <ul>
                    <Box title="Firebase" />
                    <Box title="Supabase" />
                    <Box title="Airtable" />
                    <Box title="Amplify" />
                    <Box title="Mongo Stitch" />
                </ul>

                <SectionTitle>Mejor catálogo de componentes</SectionTitle>
                <ul>
                    <Box title="Chakra UI" />
                    <Box title="Material UI" />
                    <Box title="NextUI" />
                    <Box title="Antd" />
                    <Box title="DaisyUI" />
                    <Box title="React Semantic UI" />
                </ul>

            </div>
        </section>
    </>
    )
}

export default Home
