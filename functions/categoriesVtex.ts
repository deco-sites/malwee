import type { LoaderFunction } from "$live/types.ts";

// Return type of this loader
export type CategoriesVtex = {
  name: string;
  hasChildren: boolean;
  url: string;
};

// Props type that will be configured in deco.cx's Admin
export interface Props {
  levelSearch?: number;
}

const categoriesVtex: LoaderFunction<Props, CategoriesVtex[]> = async (
  _req,
  _ctx,
  { levelSearch },
) => {
  const { data } = (await fetch(
    `https://vtex-search-proxy.global.ssl.fastly.net/v2/malwee/api/catalog_system/pub/category/tree/${levelSearch ?? 0}?map=c`,
  ).then((r) => r.json()));


  return {
    data: data.map((obj) => ({
        name: obj.name,
        hasChildren: obj.hasChildren,
        url: obj.url
    })),
  };
};

export default categoriesVtex;