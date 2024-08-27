export function filterData(searchInput, Restaurant) {
  const filterDatas = Restaurant?.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  return filterDatas;
}
