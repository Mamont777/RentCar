const unsplashApiKey = 'G-UoKnb_RYfQpDCfmtPZCq8kAuQdScWka33kNmNf38U';
const query = 'car, luxury cars, travel';

export async function getUnsplashPhotos() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random/?count=5&query=${query}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Client-ID ${unsplashApiKey}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Ошибка при запросе к Unsplash API');
    }
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
}
