<<<<<<< HEAD
const importAll = (svgCollection: __WebpackModuleApi.RequireContext) => {
  const svgs = svgCollection.keys().reduce((acc: {}, item: string) => {
    let itemString = item.replace('./', '');
    itemString = itemString.replace('.svg', '');
    return { ...acc, [itemString]: svgCollection(item) };
  }, {});
=======
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
>>>>>>> 9aea2d2 (COMMON: [ICONS] Icon common component V1)
  return svgs;
};

export const getSvgs = () => {
<<<<<<< HEAD
  const svgs = importAll(require.context('../../../assets/Icons', false, /\.svg$/));
  return svgs;
=======
  const images = importAll(require.context('../../../assets/Icons', false, /\.svg$/));
  return images;
>>>>>>> 9aea2d2 (COMMON: [ICONS] Icon common component V1)
};
