import type { Image } from "deco-sites/std/components/types.ts";

export interface Card {
    image: Image;
    url: string;
    title: string;
    text: string;
}

export interface Props {
    title: string;
    cards: Card[];
}

export default function Sustentability({cards, title}: Props) {
    return (
        <section class="relative flex justify-between bg-[#a0e2d7]" style="padding: 5rem 1rem 2rem;">
            <div class="absolute top-[30px] md:top-[40px] left-[1rem] md:left-[50%] text-[1rem] md:text-[1.75rem] font-bold text-white md:text-left md:translate-x-[-50%] md:w-3/4" style="font-family: 'Neo Sans', sans-serif;">{title}</div>
            <div class="overflow-hidden w-full">
                <div class="flex justify-between gap-4 overflow-x-auto hidden-scroll md:w-3/4 md:m-w-[64.5rem] md:m-auto md:pt-8">
                    {cards.map((card) => {
                        return (
                            <article class="flex-shrink-0 max-w-[18.75rem] md:flex-shrink">
                                <div>
                                    <a href={card.url} class="block group overflow-hidden">
                                        <img src={card.image} class="md:hover:transform md:hover:scale-110" alt="" />
                                    </a>
                                </div>
                                <div class="text-[1.125rem] font-semibold text-white text-center pt-[1rem]" style="font-family: 'Neo Sans', sans-serif;">{card.title}</div>
                                <div class="text-[0.875rem] font-normal text-white text-center" style="font-family: 'Neo Sans', sans-serif; text-decoration-thickness: 2px;">
                                    {card.text}
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>

        </section>
    );
  }