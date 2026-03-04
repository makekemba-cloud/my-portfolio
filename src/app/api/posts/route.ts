import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') || '10';
    const offset = searchParams.get('offset') || '0';

    const { data, error, count } = await supabase
      .from('posts')
      .select('*', { count: 'exact' })
      .eq('published', true)
      .order('created_at', { ascending: false })
      .range(parseInt(offset), parseInt(offset) + parseInt(limit) - 1);

    if (error) throw error;

    return NextResponse.json(
      { posts: data, total: count },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get posts error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1];
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { title, excerpt, content, category, published } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content required' },
        { status: 400 }
      );
    }

    // Decode token to get user ID (implement JWT verification)
    // For now, use a placeholder
    const slug = title.toLowerCase().replace(/\s+/g, '-');

    const { data, error } = await supabase
      .from('posts')
      .insert([
        {
          title,
          slug,
          excerpt: excerpt || content.substring(0, 150),
          content,
          category: category || 'General',
          author_id: 'user-id-from-token', // Replace with actual user ID
          published: published || false,
        },
      ])
      .select();

    if (error) throw error;

    return NextResponse.json(
      { message: 'Post created', post: data[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create post error:', error);
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}