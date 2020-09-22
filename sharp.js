const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/assets/images');
const destination = path.resolve(__dirname, 'src/assets/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  const imageFileNameArray = image.split('.');
  const imageExtension = imageFileNameArray[imageFileNameArray.length - 1];

  sharp(`${target}/${image}`)
    .resize(800)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image
          .split('.')
          .slice(0, -1)
          .join('.')}-medium.${imageExtension}`
      )
    );

  sharp(`${target}/${image}`)
    .resize(480)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image
          .split('.')
          .slice(0, -1)
          .join('.')}-small.${imageExtension}`
      )
    );
});
