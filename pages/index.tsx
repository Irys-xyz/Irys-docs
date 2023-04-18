import Footer from '../components/NewFooter/Footer'
import Head from 'next/head'
import Heading from '../components/Heading'
import HomeOptions from '../components/HomeOptions'
import React from 'react'

type Props = {}

const Beleza = (props: Props) => {
    return (
        <>
            <Head>
                <title>Bundlr Docs</title>
            </Head>
            <main className='bg-black text-white px-4 lg:px-[79px] pb-10'>
                <div className="pt-32">
                    <Heading level={1} className="text-white">GM BUNDLOOOORS!</Heading>
                    <p>Start saving your data permanently with 3-4 lines of code</p>
                </div>
                <HomeOptions />
            </main>
            <Footer />
        </>
    )
}

export default Beleza