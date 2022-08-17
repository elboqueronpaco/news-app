import Head from 'next/head'
import React from 'react'
import { HeadDescription } from './HeadDescription'
import { HeadTitle } from './HeadTitle'

export const HeadPage = ({title, description}) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
    </Head>
  )
}
