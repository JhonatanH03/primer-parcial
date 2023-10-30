import 'tailwindcss/tailwind.css';
import type { NextPage } from 'next'
import Head from "next/head"
import Link from 'next/link';
import React from 'react';
import BoxAtom from '../components/atoms/BoxAtom'
import TitleAtom from '../components/atoms/TitleAtom';
import GitHubButton from '@/components/atoms/GitHubButton';


interface SectionTitleProps {
    children: string
}

const SectionTitle = ({children}:SectionTitleProps) => 
    <h2 className='text-4xl mb-6 font-bold '>{children}</h2>


const Page: NextPage = () => {
    
    return (
    <>
        <Head>
            <TitleAtom text="Vota.dev" />
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
                    <BoxAtom image="/icons/react.svg" title="React" />
                    <BoxAtom image="/icons/vue.svg" title="Vue.js" />
                    <BoxAtom image="/icons/angular.svg"title="Angular" />
                    <BoxAtom image="/icons/svelte.svg"title="Svelte" />
                    <BoxAtom image="/icons/lit.svg"title="Lit" />
                    <BoxAtom image="/icons/ember.svg"title="Ember" />
                    <BoxAtom image="/icons/alpine.svg"title="Alpine.js" />

                </ul>

                <SectionTitle>Mejor framework Backend</SectionTitle>
                <ul className='grid grid-cols-4 gap-4 mb-8'>
                    <BoxAtom image="/icons/nestjs.svg" title="Nest.js" />
                    <BoxAtom image="/icons/express.svg" title="Express" />
                    <BoxAtom image="/icons/fastify.svg" title="Fastify" />
                    <BoxAtom image="/icons/hapi.svg" title="Hapi" />
                </ul>

                <SectionTitle>Mejor framework FullStack</SectionTitle>
                <ul className='grid grid-cols-4 gap-4 mb-8'>
                    <BoxAtom image="/icons/next.svg" title="Next.js" />
                    <BoxAtom image="/icons/nuxt.svg" title="Nuxt" />
                    <BoxAtom image="/icons/sveltekit.svg" title="SvelteKit" />
                    <BoxAtom image="/icons/remix.svg" title="Remix" />
                </ul>

                <SectionTitle>Mejores empaquetadores de código</SectionTitle>
                <ul className='grid grid-cols-4 gap-4 mb-8'>
                    <BoxAtom image="/icons/webpack.svg" title="Webpack" />
                    <BoxAtom image="/icons/rollupjs.svg" title="Rollup" />
                    <BoxAtom image="/icons/parcel.svg" title="Parcel" />
                    <BoxAtom image="/icons/esbuild.svg" title="Esbuild" />
                    <BoxAtom image="/icons/vitejs.svg" title="Vite" />
                </ul>

                <SectionTitle>Mejor herramienta de testing</SectionTitle>
                <ul className='grid grid-cols-4 gap-4 mb-8'>
                    <BoxAtom image="/icons/jest.svg" title="Jest" />
                    <BoxAtom image="/icons/vitest.svg" title="Vitest" />
                </ul>

                <SectionTitle>Mejor test E2E</SectionTitle>
                <ul className='grid grid-cols-4 gap-4 mb-8'>
                    <BoxAtom image="/icons/cypress.svg" title="Cypress" />
                    <BoxAtom image="/icons/playwright.svg" title="Playwright" />

                </ul>

                <SectionTitle>Mejor BaaS (Backend as a service)</SectionTitle>
                <ul className='grid grid-cols-4 gap-4 mb-8'>
                    <BoxAtom image="/icons/firebase.svg" title="Firebase" />
                    <BoxAtom image="/icons/supabase.svg" title="Supabase" />
                    <BoxAtom image="/icons/airtable.svg" title="Airtable" />
                    <BoxAtom image="/icons/aws-amplify.svg" title="Amplify" />
                </ul>

                <SectionTitle>Mejor catálogo de componentes</SectionTitle>
                <ul className='grid grid-cols-4 gap-4 mb-8'>
                    <BoxAtom image="/icons/material-ui.svg" title="Material UI" />
                    <BoxAtom image="/icons/daisyUI.svg" title="DaisyUI" />
                    <BoxAtom image="/icons/semantic-ui.svg" title="React Semantic UI" />
                </ul>
                <GitHubButton />
            </div>
        </section>
    </>
    )
}

export default Page
