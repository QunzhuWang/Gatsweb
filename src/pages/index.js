import React from "react"
import { Link, useStaticQuery, graphql} from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import Img from "gatsby-image"


const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "world.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Now go build something great.</p>
    <div>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
