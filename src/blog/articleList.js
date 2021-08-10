// import article contents

import SamplePost from "./articles/sample-post-1.js";
import AnotherSamplePost from "./articles/sample-post-2.js";

// import article preview images

import cardSuits from "./../images/card-suits-image.svg";

/* this will be sorted by publishDate, so can be in any order */
export const articles = [
  {
    title: "Sample Blog Post",
    link: "sample-post",
    startDate: new Date("2021-02-01"),
    publishDate: new Date("2021-06-05"),
    editDate: "",
    image: "",
    tags: ["test", "writing", "code", "unique"],
    content: <SamplePost />,
  },
  {
    title: "Another Sample Blog Post: With a Longer Title Which Wraps Around",
    link: "another-sample-post",
    startDate: new Date("2021-01-03"),
    publishDate: new Date("2021-06-07"),
    editDate: new Date("2021-06-23"),
    image: cardSuits,
    tags: ["test", "unique2", "writing"],
    content: <AnotherSamplePost />,
  },
  /*
    title: "",
    link: "",
    startDate: new Date(''),
    publishDate: new Date(''),
    editDate: new Date(''),
    image: "",
    tags: [],
    content: ""
  */
];
