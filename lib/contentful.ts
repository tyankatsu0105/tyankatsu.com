import { Entry } from "contentful";
export const Category = "category";
export interface Category {
  fields: {
    //Category
    /* カテゴリ登録用 */
    readonly slug?: string;
    readonly title: string;
  };
  contentTypeId: string;
}

type Image = {
  readonly url: string;
  readonly width: number;
  readonly height: number;
};

export const Posts = "posts";
export interface Posts {
  //Posts
  /* ブログ投稿 */
  readonly category: Entry<Category>;
  readonly contents?: string;
  readonly eyecatch?: Image;
  readonly slug: string;
  readonly tags: ReadonlyArray<Entry<Tag>>;
  readonly title: string;
  readonly sys: {
    firstPublishedAt: string;
    publishedAt: string;
  };
}

export const Tag = "tag";
export interface Tag {
  fields: {
    //Tag
    /* タグ登録用 */
    readonly slug: string;
    readonly title: string;
  };
  contentTypeId: string;
}
