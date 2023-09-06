export default {
    preview: {
      select: {
        title: "title",
      },
    },
  
    title: "Image block",
    name: "imageBlock",
    type: "document",
    i18n: true,
    fields: [
      {
        title: "Title",
        name: "title",
        type: "string",
      },
      {
        title: "Image",
        name: "image",
        type: "imageWithAlt",
      },
    ],
  };
  