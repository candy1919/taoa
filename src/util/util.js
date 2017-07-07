export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}
export const getStore = (name) => {
  if (!name) return
  let data = window.localStorage.getItem(name)
  console.log(data)
  return data
}
