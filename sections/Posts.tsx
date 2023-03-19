import type { Image } from "deco-sites/std/components/types.ts";

export interface Post {
    image: Image;
    imageMob: Image;
    url: string;
    text: string;
}

export interface Props {
    title: string;
    posts: Post[];
    blogUrl: string;
}

export default function Posts({posts, title, blogUrl}: Props) {
    return (
        <section class="max-w-[75.25rem]   mt-[3.875rem] mx-[1rem] mb-[2rem] md:mt-[4.5rem] md:mx-auto md:mb-[0px]">
            <div class="relative flex justify-between ">
                <div class="absolute flex items-center top-[-3.5rem] gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.695" height="17.778" viewBox="0 0 17.695 17.778"><path d="M3.547 4.467L.329 3.187A.45.45 0 0 1 0 2.754V.306Q0 .062.164.014a.679.679 0 0 1 .417.047l15.192 6.173a4.237 4.237 0 0 1 1.53.922 1.559 1.559 0 0 1 .392 1.053V9.32a1.863 1.863 0 0 1-.392 1.2 3.9 3.9 0 0 1-1.53.96L.582 17.709a.689.689 0 0 1-.417.047q-.164-.047-.164-.273v-2.39a.429.429 0 0 1 .329-.433l3.132-1.283 5.605-2.282 4.862-1.949c.118-.05.177-.119.177-.207v-.113c0-.088-.059-.157-.177-.207L9.291 6.77z" fill="#262626"></path><path d="M.489 12.63l6.138-2.517a1.721 1.721 0 0 0 .693-.444.94.94 0 0 0 .2-.6v-.448a.816.816 0 0 0-.2-.549 1.856 1.856 0 0 0-.687-.423L.5 5.156a.463.463 0 0 0-.291-.026.285.285 0 0 0-.2.3v.987a.369.369 0 0 0 .251.35l1.3.517 2.318.932 1.7.678-1.791.718-2.264.922-1.264.518a.355.355 0 0 0-.25.349v.965a.283.283 0 0 0 .2.291.457.457 0 0 0 .28-.027z" fill="#262626"></path></svg>
                    <span class="text-[1.125rem] font-bold" style="font-family: 'Neo Sans', sans-serif;">{title}</span>
                </div>
                <div class="overflow-hidden w-full">
                    <div class="flex gap-4 overflow-x-auto hidden-scroll">
                        {posts.map((post) => {
                            return (
                                <article class="relative flex-shrink-0 max-w-[259px] md:max-w-full md:flex-shrink">
                                    <div>
                                        <a href={post.url} class="block group overflow-hidden">
                                            <img src={post.image} class="hidden md:block md:filter md:brightness-90 transition ease-in-out duration-300 md:hover:brightness-100" alt="" />
                                            <img src={post.imageMob} class="md:hidden" alt="" />
                                        </a>
                                    </div>
                                    <div class="absolute bottom-[1rem] md:bottom-[4rem] left-[1rem] md:left-[2rem] text-[0.875rem] md:text-[1rem] font-normal text-white w-[85%] md:w-[65%]" style="font-family: 'Neo Sans', sans-serif;">
                                        {post.text}
                                    </div>
                                    <a href={post.url} target="_blank" class="transition ease-in-out duration-300 hidden md:block md:opacity-[0.7] md:hover:opacity-100 md:absolute md:bottom-[1.9375rem] md:bg-transparent md:left-[2rem] md:text-[0.875rem] md:font-normal md:text-white md:z-50" style="font-family: 'Neo Sans', sans-serif;">
                                        SAIBA MAIS
                                    </a>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </div>
            <a href={blogUrl} class="hidden md:block md:underline md:mt-[1.9375rem] md:text-[0.875rem] md:font-bold md:text-center md:pb-[63px]" style="font-family: 'Neo Sans', sans-serif;">VER MAIS NO BLOG+</a>
        </section>
    );
  }