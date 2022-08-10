const importAll = (svgCollection: __WebpackModuleApi.RequireContext) => {
  const svgs = svgCollection.keys().reduce((acc: {}, item: string) => {
    let itemString = item.replace('./', '');
    itemString = itemString.replace('.svg', '');
    return { ...acc, [itemString]: svgCollection(item) };
  }, {});
  return svgs;
};

export const getSvgs = () => {
  const svgs = importAll(require.context('../../../assets/Icons', false, /\.svg$/));
  return svgs;
};
