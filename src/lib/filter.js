const filterElement = (arr, query) => {
  return arr
    .filter(element => element.toLowerCase().indexOf(query.toLowerCase()) > -1)
    .slice(0, 20);
};

export default filterElement;
