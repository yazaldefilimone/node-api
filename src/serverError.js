module.exports = (response, header) => {
  return () => {
    response.writeHead(500, header);
    response.write(JSON.stringify({error: 'internal server error'}))
     response.end ()
  }
}




