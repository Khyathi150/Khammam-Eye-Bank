import { siteConfig } from '@/config/site';

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${siteConfig.apiBaseUrl}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body?.detail ?? `Request failed with status ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export const api = {
  submitContact: (payload: ContactPayload) =>
    request<{ success: boolean; id: number }>('/contact', {
      method: 'POST',
      body: JSON.stringify(payload)
    }),
  getNews: () => request<{ id: number; title: string; summary: string; published_at: string }[]>('/news'),
  getPartners: () => request<{ id: number; name: string; category: string }[]>('/partners')
};
