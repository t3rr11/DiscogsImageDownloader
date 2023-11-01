export type MasterResponse = {
  id: number;
  main_release: number;
  most_recent_release: number;
  resource_url: string;
  uri: string;
  versions_url: string;
  main_release_url: string;
  most_recent_release_url: string;
  num_for_sale: number;
  lowest_price: number;
  images: Array<MasterImage>;
  genres: Array<string>;
  styles: Array<string>;
  year: number;
  tracklist: Array<{
    position: string;
    type_: string;
    title: string;
    extraartists?: Array<{
      name: string;
      anv: string;
      join: string;
      role: string;
      tracks: string;
      id: number;
      resource_url: string;
    }>;
    duration: string;
  }>;
  artists: Array<{
    name: string;
    anv: string;
    join: string;
    role: string;
    tracks: string;
    id: number;
    resource_url: string;
    thumbnail_url: string;
  }>;
  title: string;
  data_quality: string;
  videos: Array<{
    uri: string;
    title: string;
    description: string;
    duration: number;
    embed: boolean;
  }>;
};

export type MasterImage = {
  type: string;
  uri: string;
  resource_url: string;
  uri150: string;
  width: number;
  height: number;
};
