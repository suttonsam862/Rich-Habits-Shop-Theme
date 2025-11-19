
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  tag?: string;
}

export interface Team {
  id: string;
  name: string;
  location: string;
  image: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: 'Tournament' | 'Camp' | 'Dual';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export type PageType = 'home' | 'shop' | 'product' | 'teams' | 'team-store' | 'events' | 'past-events' | 'about' | 'contact' | 'custom' | 'ai-lab';
