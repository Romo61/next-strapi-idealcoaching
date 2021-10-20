import MarkdownRender from 'utils/MarkdownRender'
import classNames from 'classnames'
import { MdClose } from 'react-icons/md'
import Ticker from 'react-ticker'

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
          <div className="flex-1">
            <Ticker>
              {({ index }) => (
                <div>
                  <MarkdownRender white>{text}</MarkdownRender>
                  <p>{'         '} </p>
                </div>
              )}
            </Ticker>
          </div>
          <button
            onClick={closeSelf}
            className="flex-shrink-0 py-1 px-1"
            aria-label="Close Banner"
          >
            <MdClose className="w-auto h-6" color="#fff" aria-hidden="true" />
          </button>
        </div>
      </div>
    )
  return null
}

export default NotificationBanner
