import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_API_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_API_URL}detail/${id}`,
  POST_REVIEW: `${CONFIG.BASE_API_URL}review`,
};

export default API_ENDPOINT;
