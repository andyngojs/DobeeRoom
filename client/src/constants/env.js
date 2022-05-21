import Config from "../config"

const config = new Config()

export const API_KEY_MAP = 'AIzaSyBOTZhbeo_YeKKyTd9yDQ9GO9EfqQk9BhQ'

// Network
export const URL = `http://${config.networkIP}`
export const URL_API=  `http://${config.networkIP}:5000`  // When use network with multi device, Use this api and fill URL IP network