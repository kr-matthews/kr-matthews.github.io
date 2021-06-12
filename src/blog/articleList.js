import exampleBlogPost1 from './articles/example-blog-post-1.js'
import anotherSamplePost from './articles/another-sample-post.js'

export const articles = [
  {
    title: "Example Blog Post 1 sdfghdfg sdfsdfsdfsd",
    link: "example-blog-post-1",
    startDate: new Date('2021-02-01'),
    publishDate: new Date('2021-06-05'),
    editDate: "",
    image: "",
    tags: ["test", "writing", "code"],
    content: exampleBlogPost1
  },
  {
    title: "Another sample post: A longer name which wraps around",
    link: "another-sample-post",
    startDate: new Date('2021-01-03'),
    publishDate: new Date('2021-06-07'),
    editDate: new Date('2021-06-09'),
    image: "http://localhost:3000/static/media/card-suits-image.0e314b0e.svg",
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
