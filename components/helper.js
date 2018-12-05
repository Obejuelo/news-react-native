export const getNews = (category) => {
    let key = `540d533516a74f4bb7f8092f6634c92c`;
    let url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${key}`;

    return fetch(url)
      .then(res => res.json())
}