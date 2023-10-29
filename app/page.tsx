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
                    <Box image="/icons/nestjs.svg" title="Nest.js" />
                    <Box image="/icons/express.svg" title="Express" />
                    <Box image="/icons/fastify.svg" title="Fastify" />
                    <Box image="/icons/hapi.svg" title="Hapi" />
                </ul>

                <SectionTitle>Mejor framework FullStack</SectionTitle>
                <ul>
                    <Box image="/icons/next.svg" title="Next.js" />
                    <Box image="/icons/nuxt.svg" title="Nuxt" />
                    <Box image="/icons/sveltekit.svg" title="SvelteKit" />
                    <Box image="/icons/remix.svg" title="Remix" />
                    <Box image="/icons/blitzjs.svg" title="BlitzJS" />
                </ul>

                <SectionTitle>Mejores empaquetadores de código</SectionTitle>
                <ul>
                    <Box image="/icons/webpack.svg" title="Webpack" />
                    <Box image="/icons/rollupjs.svg" title="Rollup" />
                    <Box image="/icons/parcel.svg" title="Parcel" />
                    <Box image="/icons/esbuild.svg" title="Esbuild" />
                    <Box image="/icons/vitejs.svg" title="Vite" />
                </ul>

                <SectionTitle>Mejor framework CSS</SectionTitle>
                <ul>
                    <Box image="/icons/tailwindcss.svg" title="Tailwind" />
                </ul>

                <SectionTitle>Mejor herramienta de testing</SectionTitle>
                <ul>
                    <Box image="/icons/jest.svg" title="Jest" />
                    <Box image="/icons/testing-library.svg" title="Testing Library" />
                    <Box image="/icons/vitest.svg" title="Vitest" />
                </ul>

                <SectionTitle>Mejor test E2E</SectionTitle>
                <ul>
                    <Box image="/icons/cypress.svg" title="Cypress" />
                    <Box image="/icons/playwright.svg" title="Playwright" />
                    <Box image="/icons/puppeteer.svg" title="Puppeteer" />
                </ul>

                <SectionTitle>Mejor BaaS (Backend as a service)</SectionTitle>
                <ul>
                    <Box image="/icons/firebase.svg" title="Firebase" />
                    <Box image="/icons/supabase.svg" title="Supabase" />
                    <Box image="/icons/airtable.svg" title="Airtable" />
                    <Box image="/icons/aws-amplify.svg" title="Amplify" />
                </ul>

                <SectionTitle>Mejor catálogo de componentes</SectionTitle>
                <ul>
                    <Box image="/icons/material-ui.svg" title="Material UI" />
                    <Box image="/icons/daisyUI.svg" title="DaisyUI" />
                    <Box image="/icons/semantic-ui.svg" title="React Semantic UI" />
                </ul>

            </div>
        </section>
    </>
    )
}

export default Home
