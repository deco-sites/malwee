import type { Image } from "deco-sites/std/components/types.ts";

export interface Featured {
    image: Image;
    name: string;
    url: string;
}

export interface Props {
    images: Featured[];
}

export default function Featured({images}: Props) {
    return (
        <section class="flex" style="padding: 0px 1rem; margin: 1.5rem 0px 2.5rem;">
            <div class="flex flex-col gap-2 md:flex-row md:justify-between md:max-w-[75.25rem]">
                {images.map((image) => {
                    return (
                        <div>
                            <a href={image.url} class="block overflow-hidden">
                                <img src={image.image} alt="" class="md:hover:transform md:hover:scale-110" />
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    );
  }