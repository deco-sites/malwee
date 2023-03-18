import type { Image } from "deco-sites/std/components/types.ts";

export interface Props {
  image: Image;
  url: string;
  alt: string;
}

export default function Banner({image, url, alt}: Props) {
    return (
        <section class="py-2">
            <a href={url} class="block">
                <img src={image} alt={alt} class="w-full"/>
            </a>
        </section>
    );
  }