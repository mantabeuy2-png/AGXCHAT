export interface FeatureItem {
  id: string;
  title: string;
  category: 'chat' | 'ai' | 'commerce' | 'support';
  description: string;
  highlightBadge?: string;
  iconName: string;
  details: string[];
}

export interface ComparisonRow {
  feature: string;
  agxChat: string | boolean;
  competitors: string | boolean;
  highlight?: boolean;
}

export interface CourierOption {
  id: string;
  name: string;
  service: string;
  fee: number;
  etd: string;
  popular?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'customer' | 'ai_draft' | 'ai_direct' | 'agent';
  text: string;
  timestamp: string;
  status?: 'pending_approval' | 'sent';
  attachment?: {
    type: 'invoice' | 'qris' | 'shipping' | 'image';
    title: string;
    amount?: number;
    meta?: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
