import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_API_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_API_URL}detail/${id}`,
};

export default API_ENDPOINT;
