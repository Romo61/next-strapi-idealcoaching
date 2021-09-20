import React, { Fragment, ReactElement, useEffect, useState } from 'react'

interface Props {
  data: {
    [x: string]: any
    id: string
    html: string
  }
}

function DynamicRichText({ data }: Props): ReactElement {
  return (
    <div className="container flex flex-col gap-12 py-12 align-top lg:flex-row lg:flex-wrap">
      {/* <pre>{JSON.stringify(data, null, 6)}</pre> */}
      <div key={data.id} dangerouslySetInnerHTML={{ __html: data.html }} />.
    </div>
  )
}

export default DynamicRichText
