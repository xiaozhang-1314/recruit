export const saveInfo = (key, value) => {
  const objStr = JSON.stringify(value)
  window.sessionStorage.setItem(key, objStr)
}

export const getInfo = key => {
  const info = JSON.parse(window.sessionStorage.getItem(key) || '{}')
  return info
}

export const removeInfo = key => {
  window.sessionStorage.removeItem(key)
}