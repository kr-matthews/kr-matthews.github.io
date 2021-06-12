

function ExternalRedirect({title, url}) {
  const time = 7;
  return (
    <>
    <head>
      <meta
        http-equiv = "refresh"
        content = {"" + time + "; URL=" + url}
      />
    </head>
    <h1>{title}</h1>
    <p>{title} is hosted on a different site. You will be redirected within {time} seconds.</p>
    </>
  )
}

export default ExternalRedirect;
