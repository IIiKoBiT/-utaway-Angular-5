/**
 * Молдель эвентов
 */




export class Pagination {
  object_count: number;
  page_number: number;
  page_size: number;
  page_count: number;
  has_more_items: boolean;
}

export class RootEvents {
  pagination: Pagination;
  events: any[];
}
