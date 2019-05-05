const filterElement = (arr, query) => {
  return arr
    .filter(element => element.toLowerCase().indexOf(query.toLowerCase()) > -1)
    .slice(0, 10);
};

export default filterElement;
