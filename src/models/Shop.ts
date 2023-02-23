export interface Shop {
  id: string,
  name: string,
  logo_image: string | null,
  name_kana: string | null,
  address: string,
  station_name: string,
  ktai_coupon: number,
  genre: Genre,
  catch: string,
  capacity: number | null,
  access: string,
  urls: Urls,
  photo: Photo,
  open: string | null,
  close: string | null,
  wifi: string | null,
  tatami: string | null,
  card: string | null,
  non_smoking: string | null,
  
}

export interface Genre {
  code: string | null,
  name: string,
  catch: string,
}

export interface Urls {
  pc: string,
}

export interface Photo {
  pc: Pc,
}

export interface Pc {
  l: string,
  m: string,
  s: string,
}