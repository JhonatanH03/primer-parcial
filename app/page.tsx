import 'tailwindcss/tailwind.css';
import type { NextPage } from 'next'
import Head from "next/head"
import Link from 'next/link';
import { Header } from '@/components/organisms/Header';
import React from 'react';
import TitleAtom from '../components/atoms/TitleAtom';



interface SectionTitleProps {
    children: string
}

const SectionTitle = ({children}:SectionTitleProps) => 
    <h2 className='text-4xl mb-6 font-bold '>{children}</h2>

interface BoxProps {
    image: string
    title: string
}



const Box = ({image, title }: BoxProps) => <div>
    <div className='rounded flex flex-col items-center justify-center py-10 border-2 border-gray-200  '>
        <div className='w-32 h-32 p-4'>
        <img alt={title} src={image} />
        </div>
        <div className='font-bold mt-4 text-bold'>
            {title}
      </div>
    </div>
</div>

const Page: NextPage = () => {
    


    return (
    <>
        <Head>
            <TitleAtom text="Vota.dev!" />
        </Head>
        <header className='flex items-center w-full justify-between max-w-4xl mx-auto'>
            <h1 className='font-bold text-xl'> 🗳️ vota.dev</h1>
            <div>
            </div>
        </header>
        <section className='mt-40'>
            <h1 className='text-black text-9xl text-center font-extrabold'>
                Vota por la mejor tecnología del desarrollo web.
            </h1>
            <div className='flex flex-col items-center mt-8 max-w-7xl text-center mx-auto'>
              <p className='text-black opacity-90 text-2xl'>
                Decide qué stack, tecnologías y frameworks han sido los mejores del año. ¡Cada voto cuenta!
                
              </p>
            </div>

            <div className='sticky bg-white max-w-3xl mt-20 p-12 mx-auto rounded-lg text-black border-2 border-black'>
                <SectionTitle>Mejor biblioteca UI</SectionTitle>
                <ul className='grid grid-cols-4 gap-4 mb-8'>
                    <Box image="/icons/react.svg" title="React" />
                    <Box image="/icons/vue.svg" title="Vue.js" />
                    <Box image="/icons/angular.svg"title="Angular" />
                    <Box image="/icons/svelte.svg"title="Svelte" />
                    <Box image="/icons/lit.svg"title="Lit" />
                    <Box image="/icons/ember.svg"title="Ember" />
                    <Box image="/icons/alpine.svg"title="Alpine.js" />

                </ul>

                <SectionTitle>Mejor framework Backend</SectionTitle>
                <ul className='grid grid-cols-4 gap-4 mb-8'>
                    <Box image="/icons/nestjs.svg" title="Nest.js" />
                    <Box image="/icons/express.svg" title="Express" />
                    <Box image="/icons/fastify.svg" title="Fastify" />
                    <Box image="/icons/hapi.svg" title="Hapi" />
                </ul>

                <SectionTitle>Mejor framework FullStack</SectionTitle>
                <ul className='grid grid-cols-4 gap-4 mb-8'>
                    <Box image="/icons/next.svg" title="Next.js" />
                    <Box image="/icons/nuxt.svg" title="Nuxt" />
                    <Box image="/icons/sveltekit.svg" title="SvelteKit" />
                    <Box image="/icons/remix.svg" title="Remix" />
                </ul>

                <SectionTitle>Mejores empaquetadores de código</SectionTitle>
                <ul className='grid grid-cols-4 gap-4 mb-8'>
                    <Box image="/icons/webpack.svg" title="Webpack" />
                    <Box image="/icons/rollupjs.svg" title="Rollup" />
                    <Box image="/icons/parcel.svg" title="Parcel" />
                    <Box image="/icons/esbuild.svg" title="Esbuild" />
                    <Box image="/icons/vitejs.svg" title="Vite" />
                </ul>

                <SectionTitle>Mejor herramienta de testing</SectionTitle>
                <ul className='grid grid-cols-4 gap-4 mb-8'>
                    <Box image="/icons/jest.svg" title="Jest" />
                    <Box image="/icons/vitest.svg" title="Vitest" />
                </ul>

                <SectionTitle>Mejor test E2E</SectionTitle>
                                <ul className='grid grid-cols-4 gap-4 mb-8'>
                    <Box image="/icons/cypress.svg" title="Cypress" />
                    <Box image="/icons/playwright.svg" title="Playwright" />

                </ul>

                <SectionTitle>Mejor BaaS (Backend as a service)</SectionTitle>
                <ul className='grid grid-cols-4 gap-4 mb-8'>
                    <Box image="/icons/firebase.svg" title="Firebase" />
                    <Box image="/icons/supabase.svg" title="Supabase" />
                    <Box image="/icons/airtable.svg" title="Airtable" />
                    <Box image="/icons/aws-amplify.svg" title="Amplify" />
                </ul>

                <SectionTitle>Mejor catálogo de componentes</SectionTitle>
                <ul className='grid grid-cols-4 gap-4 mb-8'>
                    <Box image="/icons/material-ui.svg" title="Material UI" />
                    <Box image="/icons/daisyUI.svg" title="DaisyUI" />
                    <Box image="/icons/semantic-ui.svg" title="React Semantic UI" />
                </ul>

            </div>
        </section>
    </>
    )
}

export default Page
