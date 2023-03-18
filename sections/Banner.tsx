import type { Image } from "deco-sites/std/components/types.ts";

export interface Props {
  image: Image;
  imageMob: Image;
  url: string;
  alt: string;
}

export default function Banner({image, imageMob, url, alt}: Props) {
    return (
        <section class="py-2">
            <a href={url} class="block">
                <div class="md:hidden">
                    <img src={imageMob} alt={alt} class="w-full"/>
                </div>
                <div class="hidden md:block">
                    <img src={image} alt={alt} class="w-full"/>
                </div>
            </a>
        </section>
    );
  }