import { BlogPost } from '../types/blog.interface';

export const blogData: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Natural Light Photography",
    publishDate: "2024-02-20",
    content: `Natural light is often considered the holy grail of photography, and for good reason. 
    When used correctly, it can create stunning, authentic images that artificial lighting simply cannot replicate...`,
    featuredImage: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d",
    category: "Photography Tips",
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Professional photographer with 15 years of experience"
    },
    tags: ["natural light", "photography tips", "composition"]
  },
  // ... Additional 4 blog posts
];