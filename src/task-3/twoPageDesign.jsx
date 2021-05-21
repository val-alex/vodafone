// What data do you need and how would you design the APIs?
// Need request URL, API key and relevant queries for fetch function
// Need to check to duplicate emails, in screenshot it looks like different users share same email, can two users share same email address ?
// API example, assuming details could be split into further smaller chunks
// eslint-disable-next-line no-unused-vars
const data = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@accenture.com",
    previewImg: "http://example.com/preview-img",
    fullSizeImg: "http://example.com/full-size-img",
    details: {
      detail: "Lost and lots of more details...",
      moreDetails: "more details...",
      additionalDetail: "even more details...",
    },
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    email: "Jane.doe@accenture.com",
    previewImg: "http://example.com/preview-img",
    fullSizeImg: "http://example.com/full-size-img",
    details: {
      detail: "Lost and lots of more details...",
      moreDetails: "more details...",
      additionalDetail: "even more details...",
    },
  },
  {
    firstName: "Adam",
    lastName: "Doe",
    email: "john.doe@accenture.com",
    previewImg: "http://example.com/preview-img",
    fullSizeImg: "http://example.com/full-size-img",
    details: {
      detail: "Lost and lots of more details...",
      moreDetails: "more details...",
      additionalDetail: "even more details...",
    },
  },
  {
    firstName: "Mountain",
    lastName: "Doe",
    email: "mountain.doe@accenture.com",
    previewImg: "http://example.com/preview-img",
    fullSizeImg: "http://example.com/full-size-img",
    details: {
      detail: "Lost and lots of more details...",
      moreDetails: "more details...",
      additionalDetail: "even more details...",
    },
  },
];

// How do you structure your UI components?
// I like Atomic design and Storybook for building UI library with Material UI frameworks
// Atomic Design - results in a nice, easy to follow folder structure of components ( in order of complexity )
// Storybook - provides isolated environment, good for development and testing, helps to keep components structured and easy to navigate
// Material UI - provides a good base to start with in terms of development of the component, depending on the project could start from scratch
// create folders for Atoms, Molecules, Organisms, Templates Pages
// build ui components in storybook in order or complexity, make sure that each component is reusable
// look like we need to build components for userName, userEmail, previewThumbnail, fullThumbnail and details
// always work with given constrains, if time allows it start with smaller components and build it up ( otherwise can combine functionalities eg have one component for text and one for thumbnail )
// if time allows it , write units test for components

// How would you structure your code?
// follow React best practices and latest React standards, keep code in small chunks and readable. It is easy to read code this way, helps with testing and makes component more reusable
// i like to have one folder per component and have all relevant files in that folder eg component jsx file, separate styled components file, storybook file and test file
// this folder structure allows developer easy and quick access to relevant information and files, which result in smoother more enjoyable and quick development process
// make sure all components are reusable, this makes our codebase DRY
// use functional components where possible

// How might SPA/React affect this?
// make sure that website doesn't refresh when user changes between pages, this provides native like app experience to the user
// cache and memoize data where possible to ensure faster load times are fast
// apply lazy loading to images
// split js file into chunks if it is too big and impacts website performance
// all of the above this help with user conversion and overall smoother web app experience
