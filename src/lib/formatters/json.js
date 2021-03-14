module.exports = (data = {}) => {
  try {
    return {
      contentType : 'application/json',
      value : JSON.stringify(data),
    }
  } catch (err) {
    throw new Error('invalid payload')
  }
}
