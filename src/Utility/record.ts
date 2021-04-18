interface IPageInfo {
  title: string;
}
type Page = "home" | "about" | "contact";

const page: Record<Page, IPageInfo> = {
  home: { title: "0" },
  about: { title: "1" },
  contact: { title: "2" },
};
