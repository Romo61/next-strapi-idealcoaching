import MarkdownRender from 'utils/MarkdownRender'
import ButtonLink from '../elements/button-link'
import CustomImage from '../elements/image'
import { getButtonAppearance } from 'utils/button'
import React, { ReactElement, useState } from 'react'
import Link from 'next/link'
import CustomLink from './custom-link'

export interface GradientHero {
  data: {
    component: string
    id: number
    title: string
    blackText: string
    coloredText: string
    content: string
    title_color: 'black' | 'orange' | 'green' | 'yellow' | 'blue' | 'red'
    seminarcard: Seminarcard[]
  }
}

interface Seminarcard {
  id: number
  category: string
  content: string
  url: string
  newTab: boolean
  text: string
  tilte: string
  image: IMedia
}

/* interface IGradientHero {
  data: {
    __component: string
    id: number
    title: string
    black_text: string
    colored_text: string
    content: string
    title_color: 'black' | 'orange' | 'green' | 'yellow' | 'blue' | 'red'
    seminarcard: {
      id: number
      category: string
      content: string
      url: string
      newTab: boolean
      text: string
      tilte: string
      image: IMedia
    }[]
  }
} */

const SingleCard = ({
  category,
  content,
  id,
  url,
  newTab,
  text,
  tilte,
  image,
}: Seminarcard) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      key={id}
      onClick={() => setIsOpen(!isOpen)}
      className="flex overflow-y-auto flex-col h-full rounded-lg shadow-lg"
    >
      <Link href={url}>
        <a
          // Change target and rel attributes is newTab is turned on
          target={newTab ? '_blank' : '_self'}
          rel={newTab ? 'noopener noreferrer' : ''}
          title={tilte}
        >
          <div className="relative flex-shrink-0">
            <CustomImage
              className="object-cover w-full h-96"
              media={image}
              width={1000}
              height={700}
            />
            <div className="absolute bottom-0 left-0 w-full">
              <div className="flex flex-col flex-1 justify-between py-2 px-6 mx-auto bg-white">
                <div className="flex-1">
                  <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 text-md">
                    {category}
                  </p>
                  <div className="hidden mt-2 lg:block">
                    <div>
                      <MarkdownRender>{text}</MarkdownRender>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

function GradientHero({ data }: GradientHero): ReactElement {
  return (
    <div>
      {/*   {console.log(data)} */}
      {/* <div>
        <pre>{JSON.stringify(data.seminarcard, null, 2)}</pre>
      </div> */}
      <div className="relative mx-auto max-w-5xl">
        <div className="relative mx-auto rounded">
          <div className="absolute inset-0 z-0 max-w-7xl h-85vh">
            <div className="cssgradient h-85vh lg:h-75vh xl:h-65vh 2xl:h-85vh"></div>
          </div>
          <div className="relative m-8">
            <div className="absolute inset-0">
              <div className="h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative mx-auto max-w-7xl">
              <div className="pt-8 text-center">
                <MarkdownRender>{data.content}</MarkdownRender>
              </div>

              <div className="grid grid-cols-1 gap-3 mx-auto mt-12 max-w-lg lg:grid-cols-1 lg:max-w-none">
                {data.seminarcard?.map((node) => (
                  <div key={node.id}>
                    {/* {JSON.stringify(node, null, 2)} */}
                    <SingleCard {...node} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GradientHero
