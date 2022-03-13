/**
 * It checks if the url is valid or not.
 */
const isValidUrl = (url) => {
    try {
      new URL(url);
    } catch (e) {
      return false;
    }
    return true;
  };

export default isValidUrl;
