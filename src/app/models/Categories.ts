/**
 * Молдель категорий
 */


export class Pagination {
  object_count: number;
  page_number: number;
  page_size: number;
  page_count: number;
  has_more_items: boolean;
}

export class Category {
  resource_uri: string;
  id: string;
  name: string;
  name_localized: string;
  short_name: string;
  short_name_localized: string;
}

export class RootCategories {
  locale: string;
  pagination: Pagination;
  categories: Category[];

  static fromJSON(data: any) {
    return Object.assign(new this, data);
  }
}
