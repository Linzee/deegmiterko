import React, { useEffect } from "react";
import { PageProps, graphql } from "gatsby";
import { useLocation } from "@reach/router";

import Seo from "../components/Seo";
import Banner from "../components/Banner";
import Conversation from "../components/Conversation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeaderAnnouncement from "../components/HeaderAnnouncement";
import useApp from "../hooks/useApp";
import LightboxImage from "../components/LightboxImage";

import SlidesArtful from "../components/slides/SlidesArtful";
import SlidesGenerativeDesign from "../components/slides/SlidesGenerativeDesign";
import SlidesGameExperiments from "../components/slides/SlidesGameExperiments";
import SlidesProfessional from "../components/slides/SlidesProfessional";
import SlidesMe from "../components/slides/SlidesMe";

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

const IndexPage = ({ data: { content, site } }: PageProps<IndexData>) => {
  const location = useLocation();
  const { books } = useApp();
  
  const contentMap = {};
  content.edges.forEach(({node: {name, childChatParsed: {conversations}}}) => {
    contentMap[name] = conversations[0].messages;
  });

  useEffect(() => {
    if(location.hash) {
      const pageId = location.hash.substring(1);
      for (const book of Object.values(books)) {
        const pageIndex = book.pages.findIndex(({ pageId: p }) => p == pageId);
        if(pageIndex >= 0) {
          book.openToPage(pageIndex);
          break;
        }
      }
    }
  }, [location.hash]);
  
  return (
    <>
      <HeaderAnnouncement siteMetadata={site.siteMetadata} />
      
      <div className="page-about">
        <Banner siteMetadata={site.siteMetadata} />

        <main id="about">
          <Conversation messages={contentMap["introduction"]} />
          
          <SlidesArtful />
          
          <Conversation messages={contentMap["artful"]} />

          <SlidesGenerativeDesign />
          
          <Conversation messages={contentMap["generative-design"]} />
          
          <SlidesGameExperiments />
          
          <Conversation messages={contentMap["game-experiments"]} />
          
          <SlidesProfessional />
          
          <Conversation messages={contentMap["professional"]} />
          
          <SlidesMe />

          <Conversation messages={contentMap["me"]} />
        </main>

        <Contact siteMetadata={site.siteMetadata} />

        <Footer siteMetadata={site.siteMetadata} />
      </div>

      <LightboxImage />
    </>
  )
};

export default IndexPage;

export const Head = ({ data: {site} }) => (
  <Seo siteMetadata={site.siteMetadata} />
);

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
              }
            }
          }
        }
      }
    }
  }
`;