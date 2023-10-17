import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Interactions Developer</title>
        <meta property="og:title" content="Dynamic Interactions Developer" />
      </Helmet>
    </div>
  )
}

export default Home
