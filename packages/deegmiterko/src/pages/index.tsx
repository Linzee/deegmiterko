import React from "react";
import { PageProps, graphql } from "gatsby";

import SEO from "../components/SEO";
import Banner from "../components/Banner";
import Conversation from "../components/Conversation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeaderAnnouncement from "../components/HeaderAnnouncement";

import SlidesArtful from "../slides/artful/SlidesArtful";
import SlidesGenerativeDesign from "../slides/generative_design/SlidesGenerativeDesign";
import SlidesGameExperiments from "../slides/game_experiments/SlidesGameExperiments";
import SlidesProfessional from "../slides/professional/SlidesProfessional";
import SlidesMe from "../slides/me/SlidesMe";

type IndexData = {
  site: {
    siteMetadata: {
      author: string,
      description: string,
      siteUrl: string,
      title: string,
      keywords: string,
      tagline: string,
    },
  },
  content: {
    edges: {
      node: {
        name: string,
        childChatParsed: any,
      },
    }[],
  },
}

const IndexPage = ({ data }: PageProps<IndexData>) => {

  const content = {};
  data.content.edges.forEach(({node: {name, childChatParsed: {conversations}}}) => {
    content[name] = conversations[0].messages;
  });
  
  return (
    <>
      <SEO
        siteMetadata={data.site.siteMetadata}
      />
      <HeaderAnnouncement siteMetadata={data.site.siteMetadata} />
      <div className="page-about">
        <Banner siteMetadata={data.site.siteMetadata} />

        <main id="about">
          <h2>Artist</h2>
          <Conversation messages={content["artful-pre"]} />
          <SlidesArtful />
          <Conversation messages={content["artful-post"]} />
          
          <h2>Tie-in of art and tech</h2>
          <Conversation messages={content["generative-design-pre"]} />
          <SlidesGenerativeDesign />
          <Conversation messages={content["generative-design-post"]} />
          
          <h2>Game developer</h2>
          <Conversation messages={content["game-experiments-pre"]} />
          <SlidesGameExperiments />
          <Conversation messages={content["game-experiments-post"]} />
          
          <h2>Professional</h2>
          <Conversation messages={content["professional-pre"]} />
          <SlidesProfessional />
          <Conversation messages={content["professional-post"]} />
          
          <h2>Dee Gmiterko</h2>
          <SlidesMe />
          <Conversation messages={content["me"]} />
        </main>

        <Contact siteMetadata={data.site.siteMetadata} />

        <Footer siteMetadata={data.site.siteMetadata} />
      </div>
    </>
  )
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
        keywords
        tagline
        announcement {
          title
          link
        }
      }
    }
    content: allFile(
      filter: {sourceInstanceName: {eq: "content"}}
      sort: {name: ASC}
    ) {
      edges {
        node {
          name
          childChatParsed {
            conversations {
              name
              color
              messages {
                author
                message
                title
                media {
                  type
                  url
                  alt
                }
                website {
                  url
                  title
                  imageUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;