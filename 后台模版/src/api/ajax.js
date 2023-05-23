import axios from 'axios'

const request = axios.create()

export default async function ajax(url, params={}, methods='get') {
  try {
    if(methods === 'get') {
      return (await request.get(url, { params })).data
    } else {
      return (await request.post(url, params)).data
    }
  } catch (error) {
    console.log('出错了')
    return {
      meta: {
        code: 3
      }
    }
  }
}