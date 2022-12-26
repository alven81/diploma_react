import ICategoryLanguage from "types/ICategoryLanguage";

export default function createLink(link: ICategoryLanguage, setLang: string): string {
    return link[setLang]
}