export default ({ content, data, nodeType }) => {
  console.log(content);
  let items;
  if (content.length > 0) {
    items = content.map(({ nodeType, content, data }) => {
      return nodeType === "paragraph"
        ? content[0].value
        : nodeType === "embedded-asset-block"
        ? data.target.fields.file
        : nodeType === "ordered-list"
        ? content.map(({ content }) => {
            return content[0].content[0].value;
          })
        : null;
    });
  }
  console.log(items);
  return items;
};
