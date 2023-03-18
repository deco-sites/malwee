import type { Image } from "deco-sites/std/components/types.ts";

export interface Category {
    image: Image;
    name: string;
    url: string;
}

export interface Props {
    categories: Category[];
}

export default function Category({categories}: Props) {
    return (
        <section>
            <div class="grid grid-cols-2 grid-rows-2 gap-2 md:hidden" style="margin: 5.5rem 1rem 2rem">
                {categories.map((category) => {
                    return (
                        <article>
                            <div>
                                <a href={category.url}>
                                    <img src={category.image} alt="" />
                                </a>
                            </div>
                            <div class="text-[1.125rem] font-bold" style="font-family: 'Neo Sans', sans-serif;">{category.name}</div>
                            <div>
                                <a href={category.url} class="text-[0.875rem] font-bold underline decoration-2" style="font-family: 'Neo Sans', sans-serif; text-decoration-thickness: 2px;">CONFIRA</a>
                            </div>
                        </article>
                    )
                })}
            </div>
            <div class="flex justify-between max-w-[75.25rem]" style="margin: 4.5rem auto 1rem">
                {categories.map((category) => {
                    return (
                        <article>
                            <div>
                                <a href={category.url}>
                                    <img src={category.image} alt="" />
                                </a>
                            </div>
                            <div class="text-[1.125rem] font-bold" style="font-family: 'Neo Sans', sans-serif;">{category.name}</div>
                            <div>
                                <a href={category.url} class="text-[0.875rem] font-bold underline decoration-2" style="font-family: 'Neo Sans', sans-serif; text-decoration-thickness: 2px;">CONFIRA</a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    );
  }