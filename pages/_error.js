import Head from 'next/head'

function Error({ statusCode }) {
  return (
    <div>
      <div className="min-h-screen">
        <h1 className="my-auto mt-24 text-2xl font-bold text-center">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </h1>
      </div>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404

  return { statusCode }
}

export default Error
