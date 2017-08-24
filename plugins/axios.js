import * as axios from 'axios'

let options = {}
// The server-side needs a full url to works
if (process.SERVER_BUILD) {
  options.baseURL = `http://${process.env.HOST || '192.168.1.110'}:${process.env.PORT || 8000}`
}

export default axios.create(options)
