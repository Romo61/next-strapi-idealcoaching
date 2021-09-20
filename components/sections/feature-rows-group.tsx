import classNames from 'classnames'
import CustomImage from '../elements/image'
import Video from '../elements/video'
import CustomLink from '../elements/custom-link'

const FeatureRowsGroup = ({ data }) => {
  return (
    <div className="container flex flex-col gap-12 py-12">
      {data.features.map((feature, index) => (
        <div
          className={classNames(
            // Common classes
            'flex flex-col justify-start md:justify-between md:items-center gap-10',
            {
              'lg:flex-row': index % 2 === 0,
              'lg:flex-row-reverse': index % 2 === 1,
            }
          )}
          key={feature.id}
        >
          {/* Text section */}
          <div className="w-full text-lg lg:pr-6 lg:w-6/12">
            <h3 className="title">{feature.title}</h3>
            <p className="my-6">{feature.description}</p>
            <CustomLink link={feature.link}>
              <div className="text-blue-600 hover:underline with-arrow">
                {feature.link?.text}
              </div>
            </CustomLink>
          </div>
          {/* Media section */}
          <div className="w-full max-h-full lg:w-4/12 sm:9/12">
            {/* Images */}
            {feature?.media?.mime?.startsWith('image') && (
              <CustomImage media={feature?.media} className="w-full h-auto" />
            )}
            {/* Videos */}
            {feature?.media?.mime?.startsWith('video') && (
              <Video
                media={feature?.media}
                className="w-full h-auto"
                autoPlay
                controls={false}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeatureRowsGroup
