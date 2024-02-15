import _ from "lodash";
import { chatParse } from "./chatParse.js";

export const onCreateNode = async ({
  node,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest,
}, pluginOptions) => {
  function transformObject(obj, id, type) {
    const txtNode = {
      ...obj,
      id,
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(obj),
        type,
      },
    }
    createNode(txtNode);
    createParentChildLink({ parent: node, child: txtNode });
  }

  const { createNode, createParentChildLink } = actions;
  const { users } = pluginOptions;

  if (node.internal.mediaType !== `text/plain`) {
    return
  }

  const content = await loadNodeContent(node);
  const parsedContent = chatParse(users, content);

  transformObject(
    {
      conversations: parsedContent
    },
    createNodeId(`${node.id} >>> chatParsed`),
    _.upperFirst(_.camelCase(`Chat Parsed`))
  );
}
