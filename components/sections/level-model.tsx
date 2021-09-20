import MarkdownRender from 'utils/MarkdownRender'
import LevelRow from '../elements/level-row'

interface LevelModelProps {
  data: {
    title?: string
    content?: string
    LevelRow: {
      id: string
      title: string
      content: string
      titleColor: string
    }[]
  }
}

const LevelModel = ({ data }: LevelModelProps) => {
  return (
    <div>
      <div className="py-6 mx-auto text-center lg:text-left">
        <div className="px-4 sm:px-8">
          <div className="mx-auto mb-4">
            <div className="mx-auto max-w-prose md:mt-5 md:max-w-3xl lg:break-words">
              <MarkdownRender>{data.title}</MarkdownRender>
            </div>
            <div className="mx-auto max-w-prose md:mt-5 md:max-w-3xl lg:break-words">
              <MarkdownRender>{data.content}</MarkdownRender>
            </div>
          </div>
          <div>
            {data.LevelRow.map((item) => (
              <LevelRow key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LevelModel
