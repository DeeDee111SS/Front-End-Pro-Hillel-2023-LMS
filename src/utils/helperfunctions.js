export const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export const articlePreview = (article) => {
    const maxLength = 120;
    const previewText = article.length > maxLength
      ? article.slice(0, maxLength) + '...'
      : article;  
    return previewText;
}