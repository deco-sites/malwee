import type { Image } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";

export interface Footer {
    title: string;
    instagram: string;
    facebook: string;
    youtube: string;
}

export interface Contact {
    icon: string;
    title: string;
    linkText: string;
    linkUrl: string;
    isLink: boolean;
}

export interface Faq {
    question: string;
    answer: {
        text: string;
        url: string;
    }[]
}

export interface Props {
    contact: Contact[];
    footer: Footer;
    faq: Faq[];

}

export default function FooterMalwee({footer, contact, faq}: Props) {
    return (
        <section class="flex flex-col pt-[1.6875rem] px-[3.125rem] w-full" style="font-family: 'Neo Sans', sans-serif;">
            <div class="flex flex-col gap-8 pb-12 border-b md:flex-row md:justify-between">
                {contact.map((line) => {
                    return (
                        <div>
                        <div class="flex items-center justify-center gap-2">
                            <span dangerouslySetInnerHTML={{ __html: line.icon }}></span>
                            <span class="font-bold text-[1.125rem]">{line.title}</span>
                        </div>
                        {line.isLink ? <a href={line.linkUrl} class="block text-center underline text-[0.875rem]">{line.linkText}</a> : <p class="text-center text-[0.875rem]">{line.linkText}</p>}
                    </div>
                    )
                })}
            </div>
            <div class="flex flex-col gap-2 py-8 md:flex-row md:justify-between">
                <div class="flex flex-col gap-4">
                    <div class="flex justify-center">
                        <Icon id="Logo" width={149} height={30} />
                    </div>
                    <p class="text-center text-[0.875rem]  font-bold" style="font-family: 'Neo Sans', sans-serif;">{footer.title}</p>
                    <div class="flex justify-center items-center gap-8 pt-4">
                        <a href={footer.instagram}><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.996 19"><g fill="#262626"><path d="M18.951 5.586a6.943 6.943 0 0 0-.442-2.305A4.867 4.867 0 0 0 15.726.5a6.96 6.96 0 0 0-2.3-.442C12.404.011 12.081 0 9.501 0s-2.9.011-3.916.056A6.945 6.945 0 0 0 3.281.5a4.636 4.636 0 0 0-1.685 1.1A4.678 4.678 0 0 0 .501 3.277a6.961 6.961 0 0 0-.442 2.3C.011 6.6 0 6.922 0 9.5s.011 2.9.051 3.918a6.942 6.942 0 0 0 .442 2.305 4.866 4.866 0 0 0 2.78 2.78 6.961 6.961 0 0 0 2.305.442c1.013.045 1.336.056 3.916.056s2.9-.011 3.916-.056a6.941 6.941 0 0 0 2.3-.442 4.86 4.86 0 0 0 2.78-2.78 6.966 6.966 0 0 0 .442-2.305c.045-1.013.056-1.336.056-3.916s0-2.9-.048-3.916zm-1.711 7.757a5.208 5.208 0 0 1-.327 1.763 3.152 3.152 0 0 1-1.8 1.8 5.226 5.226 0 0 1-1.763.327c-1 .045-1.3.056-3.838.056s-2.839-.011-3.838-.056a5.205 5.205 0 0 1-1.763-.327 2.924 2.924 0 0 1-1.098-.706 2.954 2.954 0 0 1-.709-1.091 5.227 5.227 0 0 1-.327-1.763c-.045-1-.056-1.3-.056-3.838s.011-2.839.056-3.838a5.205 5.205 0 0 1 .327-1.763 2.888 2.888 0 0 1 .713-1.091 2.949 2.949 0 0 1 1.091-.709 5.23 5.23 0 0 1 1.763-.325c1-.045 1.3-.056 3.838-.056s2.839.011 3.838.056a5.208 5.208 0 0 1 1.763.327 2.922 2.922 0 0 1 1.091.709 2.953 2.953 0 0 1 .709 1.091 5.229 5.229 0 0 1 .327 1.763c.045 1 .056 1.3.056 3.838s-.011 2.832-.056 3.834zm0 0"></path><path d="M9.502 4.621a4.881 4.881 0 1 0 4.881 4.881 4.882 4.882 0 0 0-4.881-4.881zm0 8.047a3.166 3.166 0 1 1 3.17-3.166 3.167 3.167 0 0 1-3.17 3.166zm0 0"></path><path d="M15.716 4.428a1.14 1.14 0 1 1-1.14-1.139 1.14 1.14 0 0 1 1.14 1.139zm0 0"></path></g></svg></a>
                        <a href={footer.facebook}><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.083 19.083"><g><path d="M16.375 1H2.708A1.713 1.713 0 0 0 1 2.708v13.666a1.713 1.713 0 0 0 1.708 1.708h13.667a1.713 1.713 0 0 0 1.708-1.708V2.708A1.713 1.713 0 0 0 16.375 1z" fill="none" stroke="#262626" stroke-width="2"></path><path d="M15.181 3.39v2.434h-1.623a.767.767 0 0 0-.811.811v1.624h2.434v2.431h-2.435v5.68h-2.434v-5.68H8.689V8.259h1.623V6.23a2.875 2.875 0 0 1 2.84-2.84z" fill="#262626"></path></g></svg></a>
                        <a href={footer.youtube}><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.276 18.997"><path d="M24.775 3.66a3.041 3.041 0 0 0-2.139-2.14c-1.9-.52-9.5-.52-9.5-.52s-7.6 0-9.5.5A3.1 3.1 0 0 0 1.5 3.66 32.047 32.047 0 0 0 1 9.5a31.93 31.93 0 0 0 .5 5.839 3.042 3.042 0 0 0 2.14 2.14c1.919.52 9.5.52 9.5.52s7.6 0 9.5-.5a3.041 3.041 0 0 0 2.14-2.139 32.049 32.049 0 0 0 .5-5.839 30.419 30.419 0 0 0-.5-5.859zm0 0" fill="none" stroke="#393c41" stroke-width="2"></path><path d="M10.718 13.138l6.319-3.639-6.319-3.639zm0 0" fill="#262626"></path></svg></a>
                    </div>
                </div>
                <div class="flex flex-col pt-6 pb-4 md:hidden">
                    {faq.map((item) => {
                        return (
                            <details class="border-b border-solid border-[#131614]">
                            <summary class="flex flex-row py-2 items-center group cursor-pointer">
                            <p class="text-center text-[0.75rem] font-bold text-black flex-grow">{item.question}</p>
                            <svg
                                class="flex-shrink-0"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke-width="1.5"
                                stroke="#131614"
                            >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                            </summary>
                            <div class="flex flex-col justify-center gap-2">
                                {item.answer.map((answer) => {
                                    return (
                                        <a href={answer.url} class="block text-center text-black text-[0.8125rem]">{answer.text}</a>
                                    )
                                })}
                            </div>
                      </details>
                        )
                    })}
                </div>
                {faq.map((item) => {
                        return (
                            <div class="hidden md:block">
                                <div class="flex flex-row py-2 items-center group cursor-pointer">
                                    <p class="text-center text-[0.75rem] font-bold text-black flex-grow">{item.question}</p>
                                </div>
                                <div class="flex flex-col justify-center gap-2">
                                    {item.answer.map((answer) => {
                                        return (
                                            <a href={answer.url} class="block text-center text-black text-[0.8125rem]">{answer.text}</a>
                                        )
                                    })}
                                </div>
                      </div>
                        )
                    })}
            </div>
        </section>
    );
  }