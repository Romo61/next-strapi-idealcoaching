import MarkdownRender from 'utils/MarkdownRender'
import classNames from 'classnames'
import { MdClose } from 'react-icons/md'

const NotificationBanner = ({ data: { text, type }, closeSelf }) => {
  if (text)
    return (
      <div
        className={classNames(
          // Common classes
          'text-white px-2 py-2',
          {
            // Apply theme based on notification type
            'bg-blue-600': type === 'info',
            'bg-yellow-600': type === 'warning',
            'bg-red-600': type === 'alert',
          }
        )}
      >
        <div className="container flex flex-row justify-between items-center">
          <div className="flex-1 text-white rich-text-banner">
            <MarkdownRender>{text}</MarkdownRender>
          </div>
          <button onClick={closeSelf} className="flex-shrink-0 py-1 px-1">
            <MdClose className="w-auto h-6" color="#fff" />
          </button>
        </div>
      </div>
    )
  return null
}

export default NotificationBanner
