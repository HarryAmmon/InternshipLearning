const classList = (classNames) => {
  console.log(classNames);
  return Object.entries(classNames)
    .filter((entry) => entry[1])
    .map((entry) => entry[0])
    .join(" ");
};

export default classList;
