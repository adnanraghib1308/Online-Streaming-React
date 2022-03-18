const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '3053cffef4a29ba942e32bdfa4a342a7',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;