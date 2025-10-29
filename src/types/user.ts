export interface UserData {
  id: string;
  name: string;
  email: string;
  address?: string;
  phone?: string;
  createdAt: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  address: string;
  phone?: string;
}