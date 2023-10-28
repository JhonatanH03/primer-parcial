import 'tailwindcss/tailwind.css';
import type { NextPage } from 'next'
import Head from "next/head"
import Link from 'next/link';
import { Header } from '@/components/organisms/Header';

interface SectionTitleProps {
    children: string
}

const SectionTitle = ({children}:SectionTitleProps) => 
    <h2 className='text-xl font-bold '>{children}</h2>

interface BoxProps {
    image: string
    title: string
}

const Box = ({image, title }: BoxProps) => <div>
    <div className='rounded flex flex-col items-center justify-center border border-gray-100 py-10 shadow-lg'>
        <img alt={title} src={image} />
        <div className='font-bold mt-4 text-bold'>
            {title}
      </div>
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

            <div className='sticky bg-white max-w-3xl mt-20 p-12 mx-auto rounded-lg text-black shadow-yellow-950'>
                <SectionTitle>Mejor biblioteca UI</SectionTitle>
                <ul>
                    <Box image="/icons/react.svg" title="React" />
                    <Box image="/icons/vue.svg" title="Vue.js" />
                    <Box image="/icons/angular.svg"title="Angular" />
                    <Box image="/icons/svelte.svg"title="Svelte" />
                    <Box image="/icons/lit.svg"title="Lit" />
                    <Box image="/icons/ember.svg"title="Ember" />
                    <Box image="/icons/alpine.svg"title="Alpine.js" />

                </ul>

                <SectionTitle>Mejor framework Backend</SectionTitle>
                <ul>
                    <Box image="/icons/" title="Nest.js" />
                    <Box image="/icons/" title="Express" />
                    <Box image="/icons/" title="Fastify" />
                    <Box image="/icons/" title="Hapi" />
                </ul>

                <SectionTitle>Mejor framework FullStack</SectionTitle>
                <ul>
                    <Box image="/icons/" title="Next.js" />
                    <Box image="/icons/" title="Nuxt" />
                    <Box image="/icons/" title="SvelteKit" />
                    <Box image="/icons/" title="Remix" />
                    <Box image="/icons/" title="BlitzJS" />
                </ul>

                <SectionTitle>Mejores empaquetadores de código</SectionTitle>
                <ul>
                    <Box image="/icons/" title="Webpack" />
                    <Box image="/icons/" title="Rollup" />
                    <Box image="/icons/" title="Parcel" />
                    <Box image="/icons/" title="Esbuild" />
                    <Box image="/icons/" title="Vite" />
                </ul>

                <SectionTitle>Mejor librería CSS en JS</SectionTitle>
                <ul>
                    <Box image="/icons/" title="Stitches" />
                    <Box image="/icons/" title="Styled Components" />
                    <Box image="/icons/" title="Emotion" />
                </ul>

                <SectionTitle>Mejor framework CSS</SectionTitle>
                <ul>
                    <Box image="/icons/" title="Tailwind" />
                </ul>

                <SectionTitle>Mejor herramienta de testing</SectionTitle>
                <ul>
                    <Box image="/icons/" title="Jest" />
                    <Box image="/icons/" title="Testing Library" />
                    <Box image="/icons/" title="Vitest" />
                </ul>

                <SectionTitle>Mejor test E2E</SectionTitle>
                <ul>
                    <Box image="/icons/" title="Cypress" />
                    <Box image="/icons/" title="Playwright" />
                    <Box image="/icons/" title="Puppeteer" />
                </ul>

                <SectionTitle>Mejor BaaS (Backend as a service)</SectionTitle>
                <ul>
                    <Box image="/icons/" title="Firebase" />
                    <Box image="/icons/" title="Supabase" />
                    <Box image="/icons/" title="Airtable" />
                    <Box image="/icons/" title="Amplify" />
                    <Box image="/icons/" title="Mongo Stitch" />
                </ul>

                <SectionTitle>Mejor catálogo de componentes</SectionTitle>
                <ul>
                    <Box image="/icons/" title="Chakra UI" />
                    <Box image="/icons/" title="Material UI" />
                    <Box image="/icons/" title="NextUI" />
                    <Box image="/icons/" title="Antd" />
                    <Box image="/icons/" title="DaisyUI" />
                    <Box image="/icons/" title="React Semantic UI" />
                </ul>

            </div>
        </section>
    </>
    )
}

export default Home
