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
            <div class="relative grid grid-cols-2 grid-rows-2 gap-2 md:hidden" style="margin: 5.5rem 1rem 2rem">
                <div class="absolute flex items-center top-[-3.5rem] gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.695" height="17.778" viewBox="0 0 17.695 17.778"><path d="M3.547 4.467L.329 3.187A.45.45 0 0 1 0 2.754V.306Q0 .062.164.014a.679.679 0 0 1 .417.047l15.192 6.173a4.237 4.237 0 0 1 1.53.922 1.559 1.559 0 0 1 .392 1.053V9.32a1.863 1.863 0 0 1-.392 1.2 3.9 3.9 0 0 1-1.53.96L.582 17.709a.689.689 0 0 1-.417.047q-.164-.047-.164-.273v-2.39a.429.429 0 0 1 .329-.433l3.132-1.283 5.605-2.282 4.862-1.949c.118-.05.177-.119.177-.207v-.113c0-.088-.059-.157-.177-.207L9.291 6.77z" fill="#262626"></path><path d="M.489 12.63l6.138-2.517a1.721 1.721 0 0 0 .693-.444.94.94 0 0 0 .2-.6v-.448a.816.816 0 0 0-.2-.549 1.856 1.856 0 0 0-.687-.423L.5 5.156a.463.463 0 0 0-.291-.026.285.285 0 0 0-.2.3v.987a.369.369 0 0 0 .251.35l1.3.517 2.318.932 1.7.678-1.791.718-2.264.922-1.264.518a.355.355 0 0 0-.25.349v.965a.283.283 0 0 0 .2.291.457.457 0 0 0 .28-.027z" fill="#262626"></path></svg>
                    <span class="text-[1.125rem] font-bold" style="font-family: 'Neo Sans', sans-serif;">COMPRE POR CATEGORIA</span>
                </div>
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
            <div class="hidden md:relative md:flex md:gap-2 md:justify-between md:max-w-[75.25rem]" style="margin: 4.5rem auto 1rem">
                <div class="absolute flex items-center top-[-3.5rem] gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.695" height="17.778" viewBox="0 0 17.695 17.778"><path d="M3.547 4.467L.329 3.187A.45.45 0 0 1 0 2.754V.306Q0 .062.164.014a.679.679 0 0 1 .417.047l15.192 6.173a4.237 4.237 0 0 1 1.53.922 1.559 1.559 0 0 1 .392 1.053V9.32a1.863 1.863 0 0 1-.392 1.2 3.9 3.9 0 0 1-1.53.96L.582 17.709a.689.689 0 0 1-.417.047q-.164-.047-.164-.273v-2.39a.429.429 0 0 1 .329-.433l3.132-1.283 5.605-2.282 4.862-1.949c.118-.05.177-.119.177-.207v-.113c0-.088-.059-.157-.177-.207L9.291 6.77z" fill="#262626"></path><path d="M.489 12.63l6.138-2.517a1.721 1.721 0 0 0 .693-.444.94.94 0 0 0 .2-.6v-.448a.816.816 0 0 0-.2-.549 1.856 1.856 0 0 0-.687-.423L.5 5.156a.463.463 0 0 0-.291-.026.285.285 0 0 0-.2.3v.987a.369.369 0 0 0 .251.35l1.3.517 2.318.932 1.7.678-1.791.718-2.264.922-1.264.518a.355.355 0 0 0-.25.349v.965a.283.283 0 0 0 .2.291.457.457 0 0 0 .28-.027z" fill="#262626"></path></svg>
                    <span class="text-[1.125rem] font-bold" style="font-family: 'Neo Sans', sans-serif;">COMPRE POR CATEGORIA</span>
                </div>
                {categories.map((category) => {
                    return (
                        <article>
                            <div>
                                <a href={category.url} class="block group overflow-hidden">
                                    <img src={category.image} class="transition ease-in-out duration-300 hover:transform hover:scale-110" alt="" />
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