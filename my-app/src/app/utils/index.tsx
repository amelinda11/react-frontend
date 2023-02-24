export const shimmer = `
<svg width="full" height="full" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="full" height="full" fill="#333" />
  <rect id="r" width="full" height="full" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-full" to="full" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export const countStars = (stars: number) => {
  let convertStars = [];
  for (let idx = 0; idx < stars; idx++) {
    convertStars.push(idx);
  }
  return convertStars;
};
