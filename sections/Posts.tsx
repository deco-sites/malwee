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
}

export default function Posts({posts, title}: Props) {
    return (
        <section class="relative flex justify-between max-w-[75.25rem]   mt-[3.875rem] mx-[1rem] mb-[2rem] md:mt-[4.5rem] md:mx-auto md:mb-[0px]">
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
                                <a href={post.url} class="transition ease-in-out duration-300 hidden md:block md:opacity-[0.7] md:hover:opacity-100 md:absolute md:bottom-[1.9375rem] md:bg-transparent md:left-[2rem] md:text-[0.875rem] md:font-normal md:text-white md:z-50" style="font-family: 'Neo Sans', sans-serif;">
                                    SAIBA MAIS
                                </a>
                            </article>
                        )
                    })}
                </div>
            </div>

        </section>
    );
  }