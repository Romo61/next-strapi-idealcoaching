import cx from 'classnames'

interface HeadingProps {
  data: {
    title_type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    title_color: 'black' | 'orange' | 'green' | 'yellow' | 'blue' | 'red'
    title: string
    __component: string
    id: number
  }
}

const Component = ({ data }: HeadingProps) => {
  const { title, title_color, title_type } = data

  if (title_type === 'h1') return <h1>{title}</h1>
  if (title_type === 'h2') return <h2>{title}</h2>
  if (title_type === 'h3') return <h3>{title}</h3>
  if (title_type === 'h4') return <h4>{title}</h4>
  if (title_type === 'h5') return <h5>{title}</h5>
  if (title_type === 'h6') return <h6>{title}</h6>
}

const Heading = ({ data }: HeadingProps) => {
  const { title, title_color, title_type } = data

  return (
    <div className="prose">
      <div className="md:flex md:justify-between md:items-center">
        <div className="flex-1 min-w-0">
          <div
            className={cx(
              'py-3 mt-4 text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r lg:text-6xl md:text-5xl sm:text-4xl',
              {
                'from-yellow-vivid-800 to-yellow-vivid-500':
                  title_color === 'orange',
                'from-blue-500 to-green-400': title_color === 'green',
                'from-yellow-vivid-300 to-lime-green-500':
                  title_color === 'yellow',
                'from-cyan-500 to-lime-green-300': title_color === 'blue',
                'from-red-600 to-yellow-vivid-300': title_color === 'red',
                'text-black': title_color === 'black',
              }
            )}
          >
            <Component data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heading
