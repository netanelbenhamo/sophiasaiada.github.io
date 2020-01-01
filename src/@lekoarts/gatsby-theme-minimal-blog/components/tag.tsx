/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Flex, Heading } from "@theme-ui/components"
import { Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"

type TagProps = {
  posts: {
    slug: string
    title: string
    date: string
    tags: {
      name: string
      slug: string
    }[]
  }[]
  pageContext: {
    isCreatedByStatefulCreatePages: boolean
    slug: string
    name: string
    [key: string]: any
  }
}

const Tag = ({ posts, pageContext }: TagProps) => {
  const { tagsPath, basePath } = useSiteMetadata()

  return (
    <Layout>
      <SEO title={`תגית: ${pageContext.name}`} />
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Heading variant="h2" as="h2">
          {pageContext.name}
        </Heading>
        <Styled.a as={Link} sx={{ variant: `links.secondary` }} to={replaceSlashes(`/${basePath}/${tagsPath}`)}>
          כל התגיות
        </Styled.a>
      </Flex>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  )
}

export default Tag
