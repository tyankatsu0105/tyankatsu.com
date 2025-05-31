import { Entry, Asset } from 'contentful'
export const Category = 'category'
export interface Category {
  //Category
  /* カテゴリ登録用 */
  readonly slug?: string
  readonly title: string
}

export const Posts = 'posts'
export interface Posts {
  //Posts
  /* ブログ投稿 */
  readonly category: Entry<Category>
  readonly contents?: string
  readonly eyecatch?: Asset
  readonly slug: string
  readonly tags: ReadonlyArray<Entry<Tag>>
  readonly title: string
}

export const Tag = 'tag'
export interface Tag {
  //Tag
  /* タグ登録用 */
  readonly slug: string
  readonly title: string
}

