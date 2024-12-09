export interface BlogPost {
  id: number;
  title: string;
  publishDate: string;
  content: string;
  featuredImage: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  tags: string[];
}