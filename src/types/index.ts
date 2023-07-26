export type Auth = {
  access_token: string;
  refresh_token: string;
  expire_in: number;
};
export type AuthState = {
  auth: Auth;
};

export type address = {
  country: string;
  city: string;
  street: string;
  house: number;
  corps: number;
  building: number;
  level: number;
  flat: number;
  office: number;
};

export type event = {
  id: number;
  name: string;
  description: string;
  max_users: number;
  date_start: string;
  date_end: string;
  reg_deadline: string;
  address: address;
  category_id: number;
};

export type profile = {
  username: string;
  avatar: string;
  first_name: string;
  last_name: string;
  middle_name: string;
};

export type category = {
  id: number;
  name: string;
};

export type tour = {
  id: number;
  name: string;
  description: string;
  max_users: number;
  date_start: string;
  date_end: string;
  reg_deadline: string;
  address: address;
  category_id: number;
  events: number[] | null;
};
