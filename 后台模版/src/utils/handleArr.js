export default (arr) => {
  let obj = {}
  arr.forEach(item => {
    if(obj[item.chat_id]) {
      obj[item.chat_id].push(item)
    } else {
      obj[item.chat_id] = [item]
    }
  })
  return obj
}