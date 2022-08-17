import React from 'react'
import { HeaderLayoutAPP } from '../components/headers/HeaderLayoutAPP'
import { MainLayout } from '../components/mains/MainLayout'

export const AppLayout = ({children}) => {
  return (
    <>
        <HeaderLayoutAPP />
        <MainLayout>{children}</MainLayout>
    </>
  )
}
