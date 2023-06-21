export const fetcher = async (url: string) => {
  return await fetch(url).then(res => res.json());
};
