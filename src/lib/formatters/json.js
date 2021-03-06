export default (data = {}) => {
  return {
    contentType : 'application/json',
    value : JSON.stringify(data),
  }
}
