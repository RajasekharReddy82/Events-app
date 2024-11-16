export interface Event {
  id: string;
  title: string;
  type: EventType;
  date: string;
  description: string;
  price: number;
  imageUrl: string;
}

export type EventType = 'wedding' | 'birthday' | 'corporate' | 'anniversary';

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Booking {
  id: string;
  userId: string;
  eventType: EventType;
  date: string;
  services: string[];
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  paymentStatus: 'pending' | 'partial' | 'completed';
}