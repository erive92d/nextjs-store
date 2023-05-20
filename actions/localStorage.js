export function saveItem(item) {
  const savedItem = localStorage.setItem("saves", item);
  return savedItem;
}
