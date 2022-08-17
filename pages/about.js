import Head from 'next/head'
import React from 'react'
import { HeadPage } from '../components/heads/HeadPage'

export default function about() {
  return (
    <>
    <HeadPage title="About" description="La pagina de sobre nosotro" />
    <h1>Sobre nosotros</h1>
    </>
  )
}

