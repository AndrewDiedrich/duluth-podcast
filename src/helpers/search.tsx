export const searchArray = (
  list: Array<Object>,
  searchString: string
): Array<any> => {
  let substring = searchString;
  if (searchString === "" || searchString === "filter") {
    return list;
  } else {
    let filteredData = list.filter((item) =>
      Object.values(item)
        .map((key) => key)
        .join("")
        .toLowerCase()
        .includes(substring.toLowerCase())
    );
    return filteredData;
  }
};
