import multiparty from 'multiparty'

const getPartContents = (part) => {
  return new Promise((resolve, reject) => {
    let contents = ''
    part.on('data', (chunk) => {
      contents += chunk.toString()
    }).on('end', () => {
      resolve(contents)
    }).on('error', (err) => {
      reject(err)
    })
  })
}

export default (req) => {
  return new Promise((resolve, reject) => {
    if (req.headers['content-type'] !== 'multipart/form-data') {
      return reject(new Error('cannot parse contents from a non multipart request'))
    }
    const formData = {}
    const form = new multiparty.Form()
    return form
      .on('part', async (part) => {
        if (!part.filename) {
          formData[part.name] = {
            type : 'field',
            value : await getPartContents(part),
          }
        } else {
          formData[part.name] = {
            type : 'file',
            value : part,
          }
        }
      })
      .on('close', () => {
        resolve(formData)
      })
      .on('error', (err) => {
        reject(err)
      })
  })
}
