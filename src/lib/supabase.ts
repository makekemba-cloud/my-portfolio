import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// TypeScript Types for your portfolio
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  published: boolean;
  created_at: string;
  updated_at: string;
  author: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
  read: boolean;
}

export interface User {
  id: string;
  email: string;
  created_at: string;
}

// Helper functions for common operations
export const blogAPI = {
  async getPosts() {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as BlogPost[];
  },

  async getPost(slug: string) {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .single();
    
    if (error) throw error;
    return data as BlogPost;
  },

  async createPost(post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([post])
      .select()
      .single();
    
    if (error) throw error;
    return data as BlogPost;
  },

  async updatePost(id: string, updates: Partial<BlogPost>) {
    const { data, error } = await supabase
      .from('blog_posts')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data as BlogPost;
  },

  async deletePost(id: string) {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },
};

export const contactAPI = {
  async getMessages() {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as ContactMessage[];
  },

  async createMessage(message: Omit<ContactMessage, 'id' | 'created_at' | 'read'>) {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([{ ...message, read: false }])
      .select()
      .single();
    
    if (error) throw error;
    return data as ContactMessage;
  },

  async markAsRead(id: string) {
    const { data, error } = await supabase
      .from('contact_messages')
      .update({ read: true })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data as ContactMessage;
  },

  async deleteMessage(id: string) {
    const { error } = await supabase
      .from('contact_messages')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },
};

export const storageAPI = {
  async uploadCV(file: File) {
    const fileName = `cv-${Date.now()}.pdf`;
    const { data, error } = await supabase.storage
      .from('portfolio-storage')
      .upload(`cv/${fileName}`, file);
    
    if (error) throw error;
    return data;
  },

  async getSignedUrl(path: string) {
    const { data, error } = await supabase.storage
      .from('portfolio-storage')
      .createSignedUrl(path, 3600);
    
    if (error) throw error;
    return data.signedUrl;
  },
};