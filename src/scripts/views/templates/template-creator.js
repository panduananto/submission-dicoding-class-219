import CONFIG from '../../global/config';

const renderError = () => {
  const mainContent = document.querySelector('#mainContent');
  mainContent.innerHTML = `
    <div class="content-error">
      <img
        src="${CONFIG.APP_ERROR_IMG.LARGE}"
        srcset="
          ${CONFIG.APP_ERROR_IMG.SMALL} 480w,
          ${CONFIG.APP_ERROR_IMG.MEDIUM} 800w
          ${CONFIG.APP_ERROR_IMG.LARGE} 1428w"
        alt="failed-to-retrieve-data"
      />
      <h1 tabindex="0">Failed to Retrieve Data</h1>
      <p tabindex="0">Data cannot be displayed due to an error on the server or because you are not connected to the internet and data is not available in the cache</p>
    </div>
  `;
};

const renderEmptyData = () => {
  const mainContent = document.querySelector('#mainContent');
  mainContent.innerHTML = `
    <div class="content-error">
      <img
        src="${CONFIG.APP_ERROR_IMG.LARGE}"
        srcset="
          ${CONFIG.APP_ERROR_IMG.SMALL} 480w,
          ${CONFIG.APP_ERROR_IMG.MEDIUM} 800w
          ${CONFIG.APP_ERROR_IMG.LARGE} 1428w"
        alt="failed-to-retrieve-data"
      />
      <h1 tabindex="0">No Favorite Restaurant</h1>
      <p tabindex="0">You haven't favorited any restaurants yet, so we don't have anything to show you! Go favorite some!</p>
    </div>
  `;
};

export { renderError, renderEmptyData };
