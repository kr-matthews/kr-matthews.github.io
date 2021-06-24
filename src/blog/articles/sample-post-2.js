import React from "react"
import LoremIpsum from 'react-lorem-ipsum';

function Content(props) {
  return (
    <>
      <p>This one has a picture and an edit date.</p>
      <LoremIpsum p={4} />
    </>
  )
}

export default Content;
