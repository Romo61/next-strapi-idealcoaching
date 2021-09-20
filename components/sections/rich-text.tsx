import MarkdownRender from 'utils/MarkdownRender'

interface RichTextProps {
  data?: {
    content?: string
  };
}

const RichText = ({
  data
}: RichTextProps) => {
  return (
    <div className="container py-12">
      <MarkdownRender>{data.content}</MarkdownRender>
    </div>
  )
}

export default RichText
