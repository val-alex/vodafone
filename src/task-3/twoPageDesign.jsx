// What data do you need and how would you design the APIs?
// Need request URL, API key and relevant queries
// Need to check to duplicate emails, can two users share same email address ?
// eslint-disable-next-line no-unused-vars
const data = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@accenture.com",
    previewImg: "http://example.com/preview-img",
    fullSizeImg: "http://example.com/full-size-img",
    details: "Lost and lots of more details...",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    email: "Jane.doe@accenture.com",
    previewImg: "http://example.com/preview-img",
    fullSizeImg: "http://example.com/full-size-img",
    details: "Lost and lots of more details...",
  },
  {
    firstName: "Adam",
    lastName: "Doe",
    email: "john.doe@accenture.com",
    previewImg: "http://example.com/preview-img",
    fullSizeImg: "http://example.com/full-size-img",
    details: "Lost and lots of more details...",
  },
  {
    firstName: "Mountain",
    lastName: "Doe",
    email: "mountain.doe@accenture.com",
    previewImg: "http://example.com/preview-img",
    fullSizeImg: "http://example.com/full-size-img",
    details: "Lost and lots of more details...",
  },
];

// How do you structure your UI components?
// I like Atomic design and Storybook for building UI library with Material UI frameworks
// create folders for Atoms Molecules Organisms Templates Pages
// build ui components in storybook in order or complexity, make sure that each component is reusable
// look like we need to build components for userName, userEmail, previewThumbnail, fullThumbnail and details
// always work with given constrains, if time allows it start with smaller components and build it up ( otherwise can combine functionalities eg have one component for text and one for thumbnail )

// How would you structure your code?
// follow React best practices and latest React standards, keep code in small chunks and readable
// i like to have one folder per component and have all relevant files in that folder eg component jsx file, separate styled components file, sotrybook file and test file
// make sure all components are reusable
// use functional components where possible

// How might SPA/React affect this?
// make sure that website doesn't refresh when user changes between pages
// cache and memoize data where possible to ensure faster load times
// apply lazy loading to images
// split js file into chunks if it is too big and impacts website performance
