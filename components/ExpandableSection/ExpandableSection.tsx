import { CodeBlock, dracula } from 'react-code-blocks'

import { useState } from 'react'

const useExpandableSection = () => {

  // handle individual section state
  const [currentlyOpen, setCurrentlyOpen] = useState(1)

  const handleSectionClick = (id: number) => {
    setCurrentlyOpen(id)
  }

  const CODE_EXAMPLE = `import Bundlr from '@bundlr-network/client';
import { default as fsWithCallbacks } from 'fs';
const fs = fsWithCallbacks.promises;

const bundlr = new Bundlr('https://node1.bundlr.network', 'solana', myPrivateKey);

const pathToFile = './llama.png';
const size = (await fs.stat(pathToFile)).size;
const price = await bundlr.getPrice(size);
await bundlr.fund(price);

const { id } = await bundlr.uploadFile(pathToFile);
console.log(\`\${pathToFile} --> Uploaded to https://arweave.net/\${id}\`);`

  return {
    currentlyOpen,
    handleSectionClick,
    CODE_EXAMPLE
  }
}

const ExpandableSection = ({
  subtitle,
  items
}: {
  subtitle: string
  items: {
    id: number
    title: string
    description: string | null
    snippet: string
  }[]
}) => {
  console.log("🚀 ~ file: ExpandableSection.tsx:62 ~ items:", items)
  const { currentlyOpen, handleSectionClick, CODE_EXAMPLE } =
    useExpandableSection()

  const CODE_SECTIONS = {
    1: <code className='font-robotoMono bg-[#1f282f] bg-primary-700/5 mb-4 px-4 overflow-x-auto rounded-xl font-medium subpixel-antialiased dark:bg-primary-300/10 text-[.9em] contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40 py-4 ' style={{
      fontSize: '.9em',
      lineHeight: '1.25rem',
    }}>
      <span className="text-[#eb707d]">const</span> <span className="text-[#79b8ff]">bundlr</span> <span className="text-[#eb707d]"> = new</span> <span className="text-[#b392f0]">Bundlr</span>(<span className="text-[#44a447]">"https://node1.bundlr.network"</span>, <span className="text-[#44a447]">"matic"</span>, <span className="text-[#44a447]">"polygon-private-key"</span>);
    </code>,
    2: <code className='font-robotoMono bg-[#1f282f] bg-primary-700/5 mb-4 px-4 overflow-x-auto rounded-xl font-medium subpixel-antialiased dark:bg-primary-300/10 text-[.9em] contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40 py-4 ' style={{
      fontSize: '.9em',
      lineHeight: '1.25rem',
    }}>
      <span className="text-[#eb707d]">const</span> <span className="text-[#79b8ff]">response</span> <span className="text-[#eb707d]"> = await</span> <span className="text-[#79b8ff]">bundlr</span>.<span className="text-[#b392f0]">fund</span>(fundAmount);
    </code>,
    3: <div className='inline-block font-robotoMono bg-[#1f282f] bg-primary-700/5 mb-4 px-4 overflow-x-auto rounded-xl font-medium subpixel-antialiased dark:bg-primary-300/10 text-[.9em] contrast-more:border contrast-more:border-primary-900/20 contrast-more:contrast-150 contrast-more:dark:border-primary-100/40 py-4 ' style={{
      fontSize: '.9em',
      lineHeight: '1.25rem',
    }}>
      <span className="text-[#eb707d]">const</span> <span className="text-[#79b8ff]">dataToUpload</span> <span className="text-[#eb707d]">=</span> <span className="text-[#44a447]">"GM world."</span>;<br />
      <span className="text-[#eb707d]">const</span> <span className="text-[#79b8ff]">response</span> <span className="text-[#eb707d]"> = await</span> <span className="text-[#79b8ff]">bundlr</span>.<span className="text-[#b392f0]">upload</span>(dataToUpload);

    </div>,
  }

  return (
    <>
      <section className="flex flex-col gap-10 ">
        <p className="text-center font-robotoMono text-lg md:text-left">
          {subtitle}
        </p>
        <ul className="flex flex-col gap-10 lg:gap-16">

          {items.map((section) => (
            <li
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className="flex cursor-pointer flex-col items-center justify-center gap-2 md:items-start lg:gap-9"
            >
              <h2
                className={`flex items-center gap-3 text-center text-3xl text-white md:text-left lg:text-5xl ${currentlyOpen !== section.id && 'text-onyx hover:text-onyx/90'
                  }`}
              >
                <span
                  className={`hidden h-6 w-6 items-center justify-center rounded-full bg-white text-base text-black lg:flex ${currentlyOpen !== section.id && 'bg-onyx hover:bg-onyx/90'
                    }`}
                >
                  {section.id}
                </span>{' '}
                {section.title}
              </h2>
              {currentlyOpen === section.id && (
                <>
                  <div className="w-full">
                    {CODE_SECTIONS[section.id]}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>

    </>
  )
}

export default ExpandableSection
