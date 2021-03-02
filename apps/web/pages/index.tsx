import React, { FC } from 'react'
import { GetStaticProps } from 'next'

import getHomePage from 'services/contentful/homePage/getHomePage'
import { HomePage } from 'services/contentful/homePage/homePageParser'
import HomeTemplate from '@ui/templates/HomeTemplate'

// TODO investigate if ssg works with styled-components

type HomePageProp = {
  homePage: HomePage
}

const IndexPage: FC<HomePageProp> = ({ homePage }) => (
  <HomeTemplate page={homePage} />
)

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const homePage = await getHomePage()

  return {
    props: { homePage },
  }
}
