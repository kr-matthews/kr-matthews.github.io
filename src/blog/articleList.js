import samplePost from './articles/sample-post-1.js'
import anotherSamplePost from './articles/sample-post-2.js'
import cardSuits from './../images/card-suits-image.svg'

export const articles = [
  {
    title: "Sample Blog Post",
    link: "sample-post",
    startDate: new Date('2021-02-01'),
    publishDate: new Date('2021-06-05'),
    editDate: "",
    image: "",
    tags: ["test", "writing", "code"],
    content: samplePost
  },
  {
    title: "Another Sample Blog Post: With a Longer Title Which Wraps Around",
    link: "another-sample-post",
    startDate: new Date('2021-01-03'),
    publishDate: new Date('2021-06-07'),
    editDate: new Date('2021-06-23'),
    image: cardSuits,
    tags: ["test", "code", "writing"],
    content: anotherSamplePost
  }
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
]
