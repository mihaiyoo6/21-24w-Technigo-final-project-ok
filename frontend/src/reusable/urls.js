export const BASE_URL = 'http://localhost:3005'

export const API_URL = (slug) => `${BASE_URL}/${slug}`

export const API_URL_POS_SHARING = `${BASE_URL}/pos_sharing`
export const THUMBSUP_URL = (positivethought_ID) => `${BASE_URL}/pos_sharing/${positivethought_ID}/emojis`
 

export const API_URL_COMMENTS = `${BASE_URL}/pos_sharing/comments`