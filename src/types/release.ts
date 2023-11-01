export type ReleaseResponse = {
  pagination: {
    page: number;
    pages: number;
    per_page: number;
    items: number;
    urls: {};
  };
  results: Array<Release>;
};

export type Release = {
  country: string;
  year: string;
  format: Array<string>;
  label: Array<string>;
  type: string;
  genre: Array<string>;
  style: Array<string>;
  id: number;
  barcode: Array<string>;
  user_data: {
    in_wantlist: boolean;
    in_collection: boolean;
  };
  master_id: number;
  master_url: string;
  uri: string;
  catno: string;
  title: string;
  thumb: string;
  cover_image: string;
  resource_url: string;
  community: {
    want: number;
    have: number;
  };
  format_quantity: number;
  formats: Array<{
    name: string;
    qty: string;
    text: string;
    descriptions: Array<string>;
  }>;
};
