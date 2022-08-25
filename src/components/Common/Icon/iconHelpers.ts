const importAll = (svgCollection: __WebpackModuleApi.RequireContext) => {
  let avaliableIcons: string[] = [];
  const svgs = svgCollection.keys().reduce((acc: {}, item: string) => {
    let itemString = item.replace('./', '');
    itemString = itemString.replace('.svg', '');
    return { ...acc, [itemString]: svgCollection(item) };
  }, {});

  Object.keys(svgs).forEach((key) => {
    avaliableIcons.push(key);
  });

  return { svgs, avaliableIcons };
};

export const getSvgs = () => {
  const svgs = importAll(require.context('../../../assets/Icons', false, /\.svg$/));
  return svgs;
};
