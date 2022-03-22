export interface UntappdUserResponse {
  response: {
    user: UntappdUser;
  };
}

export interface UntappdUser {
  uid: number;
  id: number;
  user_name: string;
  first_name: string;
  last_name: string;
  user_avatar: string;
  user_avatar_hd: string;
  user_cover_photo: string;
  user_cover_photo_offset: number;
  is_private: number;
  location: string;
  url: string;
  bio: string;
  is_supporter: number;
  relationship: string;
  untappd_url: string;
  account_type: string;
  stats: Stats;
  recent_brews: RecentBrews;
  media: Media;
  contact: UserContact;
  date_joined: string;
  settings: Settings;
}

export interface UserContact {
  foursquare: number;
  twitter: string;
  facebook: number;
}

export interface Media {
  count: number;
  items: MediaItems;
}

export interface MediaItems {
  photo_id: number;
  photo: Photo;
  created_at: string;
  checkin_id: number;
  user: ItemsUser;
  beer: Beer;
  brewery: Brewery;
  venue: unknown[];
}

export interface Beer {
  bid: number;
  beer_name: string;
  beer_label: string;
  beer_abv: number;
  beer_style: string;
  beer_description: string;
  auth_rating: number;
  wish_list: boolean;
}

export interface Brewery {
  brewery_id: number;
  brewery_name: string;
  brewery_slug: string;
  brewery_label: string;
  country_name: string;
  contact: BreweryContact;
  location: Location;
  brewery_active: number;
}

export interface BreweryContact {
  twitter: string;
  facebook: string;
  instagram: string;
  url: string;
}

export interface Location {
  brewery_city: string;
  brewery_state: string;
  lat: number;
  lng: number;
}

export interface Photo {
  photo_img_sm: string;
  photo_img_md: string;
  photo_img_lg: string;
  photo_img_og: string;
}

export interface ItemsUser {
  uid: number;
  user_name: string;
  location: string;
  bio: string;
  first_name: string;
  last_name: string;
  user_avatar: string;
  account_type: string;
  url: string;
}

export interface RecentBrews {
  count: number;
  items: RecentBrewsItems;
}

export interface RecentBrewsItems {
  beer: Beer;
  brewery: Brewery;
}

export interface Settings {
  badge: Badge;
  checkin: Checkin;
  navigation: Navigation;
  email_address: string;
}

export interface Badge {
  badges_to_facebook: number;
  badges_to_twitter: number;
}

export interface Checkin {
  checkin_to_facebook: number;
  checkin_to_twitter: number;
  checkin_to_foursquare: number;
}

export interface Navigation {
  default_to_checkin: number;
}

export interface Stats {
  total_badges: number;
  total_friends: number;
  total_checkins: number;
  total_beers: number;
  total_created_beers: number;
  total_followings: number;
  total_photos: number;
}
