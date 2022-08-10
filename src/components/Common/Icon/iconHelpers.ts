interface svgCollectionProps {
  keys: Function;
}

const importAll = (svgCollection: svgCollectionProps) => {
  let svgs = {};
  // @ts-ignore  //TODO: Add needed logic to remove typescript errors
  svgCollection.keys().map((item, index) => {
    // @ts-ignore
    let itemString = item.replace('./', '');
    itemString = itemString.replace('.svg', '');
    // @ts-ignore
    svgs[itemString] = svgCollection(item);
  });
  return svgs;
};

export const getSvgs = () => {
  const svgs = importAll(require.context('../../../assets/Icons', false, /\.svg$/));
  return svgs;
};
