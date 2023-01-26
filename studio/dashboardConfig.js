export default {
  widgets: [
    {
      name: "netlify",
      options: {
        title: "My Netlify deploys",
        sites: [
          {
            title: "Crocode production",
            apiId: "15b38e50-7eb6-4452-87d2-9752abb5b9c8",
            buildHookId: "63d27d651ae7af0221ff30fa",
            name: "Crocode",
            url: "https://crocode.io",
          },
          {
            title: "Crocode develop",
            apiId: "27ff182b-a80b-4082-bad2-8739b798050f",
            buildHookId: "63d27db731e1bd06a5782e16",
            name: "Crocode",
            url: "https://crocode-develop.netlify.app",
          },
        ],
      },
    },
  ],
};
