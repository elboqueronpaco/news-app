import Head from 'next/head'
import React from 'react'

export const HeadTitle = ({title}) => {
  return (
    <Head>
        <title>{title}</title>
    </Head>
  )
}
