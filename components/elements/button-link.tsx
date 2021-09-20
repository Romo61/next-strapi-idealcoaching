import classNames from 'classnames'
import CustomLink from './custom-link'

interface ButtonLinkProps {
  button?: {
    text?: string
  }
  appearance?: 'dark' | 'white-outline' | 'white' | 'dark-outline'
  compact?: boolean
  type?: 'button' | 'reset' | 'submit'
  isDisabled?: boolean
  loading?: boolean
}

const ButtonLink = ({
  button,
  appearance,
  compact = false,
  type,
  isDisabled,
  loading,
}: ButtonLinkProps) => {
  return (
    <CustomLink link={button}>
      <button
        type={type}
        disabled={isDisabled}
        className={classNames(
          // Common classes
          'block w-full lg:w-auto text-center uppercase tracking-wide font-semibold text-base md:text-sm border-2 rounded-md',
          // Full-size button
          {
            'px-8 py-4': compact === false,
          },
          // Compact button
          {
            'px-6 py-2': compact === true,
          },
          // Specific to when the button is fully dark
          {
            'bg-primary-600 text-white border-primary-600':
              appearance === 'dark',
          },
          // Specific to when the button is dark outlines
          {
            'text-primary-600 border-primary-600':
              appearance === 'dark-outline',
          },
          // Specific to when the button is fully white
          {
            'bg-white text-primary-600 border-white': appearance === 'white',
          },
          // Specific to when the button is white outlines
          {
            'text-white border-white': appearance === 'white-outline',
          }
        )}
      >
        {button?.text}

        {/* loading state */}
        {loading ? (
          <svg
            className="mr-3 -ml-1 w-5 h-5 text-white animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : null}
      </button>
    </CustomLink>
  )
}

export default ButtonLink
