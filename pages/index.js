import Head from 'next/head'
import { HeadPage } from '../components/heads/HeadPage'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function Home({ articles}) {
 
  console.log(articles)
  return (
    <>
      {
        articles.map(article => (
          <article key={article.id}>
            <img src={article.urlToImage}  alt='no se nombre de imagen'/>
            <Link href={`./article/${article.title}`} passHref><a><h2>{article.title}</h2></a></Link>
            <p>{article.description}</p>
          </article>
        ))
      }
    </>
  )
}

export async function getStaticProps(){
  const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-07-17&sortBy=publishedAt&apiKey=8fc6033e9b8d46a792ff8f5887f681e2')
  const {articles} = await response.json()
  return {
    props: {
      articles
    }
  }
}
