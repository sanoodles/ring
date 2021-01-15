import React from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import getAllPostsForHome from '../services/contentful/page/getPageForHome'
import Layout from '../components/Layout'

// TODO investigate if ssg works with styled-components

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { preview, allPosts },
  }
}

export default Index
