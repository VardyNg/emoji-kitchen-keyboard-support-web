import getAxiosInstance from "./getAxiosInstance"

export default function sendForm(body) {
  console.log('sendForm')
  console.log(body)
  let axios = getAxiosInstance()
  return axios.post('/api/form', body)
}