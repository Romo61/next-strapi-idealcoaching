import { getStrapiMedia } from 'utils/media'
import Image from 'next/image'

interface CustomImageProps {
  media?: IMedia
  className?: string
  width?: string | number
  height?: string | number
}

const CustomImage = ({ media, className, width, height }: CustomImageProps) => {
  const fullUrl = getStrapiMedia(media?.url)

  return (
    <div>
      <Image
        src={fullUrl}
        alt={media?.alternativeText || ''}
        title={media?.caption || ''}
        layout="intrinsic"
        className={`rounded ` + className}
        width={width || media?.width}
        height={height || media?.height}
      />
    </div>
  )
}

export default CustomImage
