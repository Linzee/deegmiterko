import React from "react";

const HeaderAnnouncement = ({ siteMetadata }) => {
  return (siteMetadata.announcement.title && siteMetadata.announcement.link) && (
    <header className="header-announcement">
      <a href={siteMetadata.announcement.link}>
        {siteMetadata.announcement.title}
      </a>
    </header>
  );
}

export default HeaderAnnouncement;
