import React, { FunctionComponent, ReactNode } from "react";
import moment from "moment";
import Page from "../Page/Page";

const TitlePage: FunctionComponent<{
  title: string,
  titleNode?: ReactNode,
  subtitle?: string,
  lecture: number,
  titleClassName?: string,
}> = ({ title, titleNode, subtitle, lecture, titleClassName }) => {
  const day = moment().startOf('week').add(lecture-1, 'day');

  return (
    <Page title={title} titleNode={titleNode} subtitle={subtitle} titleClassName={titleClassName} level={1}>
      <p>
        {lecture}th lecture, {day.format('ddd MMMM Do')}
      </p>
      <p className="text-right">
        <span className="subheading">
          Dee Gmiterko
        </span>
      </p>
    </Page>
  );
}

export default TitlePage;