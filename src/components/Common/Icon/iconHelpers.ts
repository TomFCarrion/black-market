interface rProps {
  keys: Function;
}

const importAll = (r: rProps) => {
  window.console.log(r);

  let svgs = {};
  // @ts-ignore  //TODO: Add needed login to remove typescript errors
  r.keys().map((item, index) => {
    // @ts-ignore
    let itemString = item.replace('./', '');
    itemString = itemString.replace('.svg', '');
    // @ts-ignore
    svgs[itemString] = r(item);
  });
  return svgs;
};

export const getSvgs = () => {
  const images = importAll(require.context('../../../assets/Icons', false, /\.svg$/));
  return images;
};
