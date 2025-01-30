export interface User {
  username: string;
  isAuthenticated: boolean;
}

export interface Device {
  id: string;
  name: string;
  type: 'light' | 'ac' | 'door' | 'camera';
  status: boolean;
  room: string;
  power?: number;
}

export interface Room {
  id: string;
  name: string;
  devices: Device[];
  temperature: number;
  humidity: number;
  airQuality: number;
}