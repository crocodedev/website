export default {
  preview: {
    select: {
      title: "ourTeamTitle",
    },
  },

  title: "Our team item",
  name: "ourTeamItem",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Subitle",
      name: "subtitle",
      type: "string",
    },
    {
      title: "Team member photo",
      name: "teamMemberPhoto",
      type: "imageWithAlt",
    },
  ],
};
