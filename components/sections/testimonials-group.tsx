import classNames from 'classnames'
import { useState } from 'react'
import CustomImage from '../elements/image'
import CustomLink from '../elements/custom-link'
import slugify from 'slugify'

const TestimonialsGroup = ({ data }) => {
  // Only show one testimonial at a time
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState(0)
  const selectedTestimonial = data.testimonials[selectedTestimonialIndex]

  return (
    <section className="pt-12 pb-16 text-lg text-center bg-gray-200">
      <h2
        id={slugify(`${data.title}`, {
          lower: true,
          locale: 'de',
        })}
        className="mb-4 title"
      >
        {data.title}
      </h2>
      <p className="mb-4 text-gray-700">{data.description}</p>
      <CustomLink link={data.link}>
        <span className="text-blue-700 hover:underline with-arrow">
          {data.link?.text}
        </span>
      </CustomLink>
      {/* Current testimonial card */}
      <div className="flex flex-col mx-auto mt-10 w-8/12 max-w-5xl text-left bg-white shadow-md sm:flex-row sm:w-8/12 sm:shadow-xl">
        <CustomImage
          media={selectedTestimonial?.picture}
          className="object-cover flex-shrink-0 w-full md:w-4/12"
        />
        <div className="flex flex-col justify-between py-4 px-4 sm:px-12 sm:pt-12 sm:pb-4">
          <div>
            <CustomImage
              media={selectedTestimonial?.logo}
              className="mt-2 mb-6 w-auto h-8 sm:mt-0 sm:mb-10"
            />
            <p className="mb-6 italic">
              &rdquo;{selectedTestimonial?.text}&rdquo;
            </p>
            <p className="text-base font-bold sm:text-sm">
              {selectedTestimonial?.authorName}
            </p>
            <p className="text-base sm:text-sm">
              {selectedTestimonial?.authorTitle}
            </p>
          </div>
          <CustomLink
            link={{
              url: selectedTestimonial?.link,
              text: '',
              alt: selectedTestimonial?.alt,
              title: selectedTestimonial?.title,
              newTab: false,
              id: 0,
            }}
          >
            <span className="mt-6 tracking-wide text-blue-700 uppercase sm:self-end sm:mt-0 hover:underline with-arrow">
              Read story
            </span>
          </CustomLink>
        </div>
      </div>
      {/* Change selected testimonial (only if there is more than one) */}
      {data.testimonials.length > 1 && (
        <div className="flex flex-row gap-4 justify-center mt-10">
          {data.testimonials.map((testimonial, index) => (
            <button
              onClick={() => setSelectedTestimonialIndex(index)}
              className={classNames(
                // Common classes
                'rounded-full h-3 w-3',
                {
                  'bg-gray-500': index !== selectedTestimonialIndex,
                  'bg-primary-600': index === selectedTestimonialIndex,
                }
              )}
              key={testimonial.id}
            ></button>
          ))}
        </div>
      )}
      {/* Logos list */}
      <div className="flex flex-row flex-wrap gap-6 justify-center items-center px-6 mt-10 sm:gap-20 sm:px-0">
        {data.logos.map((logo) => (
          <CustomImage
            media={logo?.logo}
            className="object-contain w-auto max-w-xs h-8"
            key={logo.id}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialsGroup
