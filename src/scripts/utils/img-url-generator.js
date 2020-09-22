import CONFIG from '../global/config';

const imgUrlGenerator = (pictureId, pictureSize) => {
  const imgUrl = `${
    pictureId
      ? CONFIG.BASE_IMAGE_URL + CONFIG.IMAGE_QUALITY[pictureSize] + pictureId
      : 'https://i.picsum.photos/id/23/800/450.jpg?grayscale'
  }`;

  return imgUrl;
};

export default imgUrlGenerator;
