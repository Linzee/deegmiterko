import React, { FunctionComponent } from "react";

const tagColors = [
  "#f94144",
  "#f3722c",
  "#f8961e",
  "#f9844a",
  "#f9c74f",
  "#90be6d",
  "#43aa8b",
  "#4d908e",
  "#577590",
  "#277da1",
];

const TagList: FunctionComponent<{
  tags: Array<string>,
}> = ({tags}) => {
  
  const tagColor = (tag: string) => {
    let n = 8;
    for (let i = 0; i < tag.length; i++) {
      n += Math.pow(Math.abs(tag.charCodeAt(i) - "a".charCodeAt(0)), 2)-1;
      n *= 3;
    }
    return tagColors[n % tagColors.length];
  }

  return (
    <div className="tag-list">
      {tags.map(tag => (
        <span key={tag} className="tag" style={{backgroundColor: tagColor(tag)}}>
          {tag}
        </span>
      ))}
    </div>
  )
}

export default TagList;