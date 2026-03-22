export const storeDataToken = (key: any, value: any) => {
  const data = JSON.stringify(value);
  localStorage.setItem(key, data);
};
