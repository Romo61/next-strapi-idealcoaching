import MarkdownRender from 'utils/MarkdownRender'
import ButtonLink from '../elements/button-link'
import CustomImage from '../elements/image'
import { getButtonAppearance } from 'utils/button'
import React, { useState } from 'react'
import Link from 'next/link'
import CustomLink from './custom-link'

const SingleCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      key={data.id}
      onClick={() => setIsOpen(!isOpen)}
      className="flex overflow-y-auto flex-col rounded-lg shadow-lg"
    >
      <div className="relative flex-shrink-0">
        <CustomLink link={data.url}>
          <CustomImage
            className="object-cover w-full h-96 filter hover:brightness-95 transition duration-200"
            media={data.image}
            width={900}
            height={600}
          />
        </CustomLink>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="flex flex-col flex-1 justify-between py-2 px-6 mx-auto bg-white ">
            <div className="flex-1">
              <CustomLink link={data.url}>
                <span className="underline font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 text-md">
                  {data.category}
                </span>
              </CustomLink>

              <div className="hidden lg:block mt-2">
                <div className="mx-auto break-words prose prose-sm lg:prose-md">
                  <MarkdownRender>{data.content}</MarkdownRender>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const GradientHero = ({ data }) => {
  return (
    <div>
      {console.log(data?.seminarcard)}
      <div>
        <pre>{JSON.stringify(data?.seminarcard, null, 2)}</pre>
      </div>
      <div className="mx-auto max-w-5xl relative">
        <div className=" relative mx-auto rounded">
          <div className="absolute inset-0 z-0 max-w-7xl h-85vh">
            <div className="cssgradient h-85vh lg:h-75vh xl:h-65vh 2xl:h-85vh"></div>
          </div>
          <div className="relative m-8">
            <div className="absolute inset-0 ">
              <div className="h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative mx-auto max-w-7xl ">
              <div className="text-center pt-8">
                <MarkdownRender>{data.content}</MarkdownRender>
              </div>

              <div className="grid grid-cols-1 gap-3 mx-auto mt-12 max-w-lg lg:grid-cols-2 lg:max-w-none ">
                {data.seminarcard?.map((node) => (
                  <SingleCard key={node.id} data={node} />
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
