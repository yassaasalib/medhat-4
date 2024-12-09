import { BlogPost } from '../../types/blog.interface';

export const blogData: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Natural Light Photography",
    publishDate: "2024-02-20",
    content: `Natural light is often considered the holy grail of photography, and for good reason. 
    When used correctly, it can create stunning, authentic images that artificial lighting simply cannot replicate. 
    In this guide, we'll explore the best techniques for working with natural light, including:
    
    - Understanding the golden hour
    - Managing harsh midday sun
    - Using reflectors effectively
    - Finding the perfect window light
    
    Whether you're a beginner or seasoned professional, mastering natural light will transform your photography.`,
    featuredImage: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d",
    category: "Photography Tips",
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Professional photographer with 15 years of experience"
    },
    tags: ["natural light", "photography tips", "composition"]
  },
  {
    id: 2,
    title: "Essential Gear for Wedding Photography",
    publishDate: "2024-02-15",
    content: `Wedding photography requires not just skill but also the right equipment. 
    This comprehensive guide covers everything you need in your kit:
    
    - Camera bodies and backup equipment
    - Essential lenses for different moments
    - Lighting equipment for receptions
    - Memory cards and storage solutions
    
    Being prepared is key to capturing every precious moment of the big day.`,
    featuredImage: "https://images.unsplash.com/photo-1537633552985-df8429e8048b",
    category: "Wedding Photography",
    author: {
      name: "Sarah Williams",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "Award-winning wedding photographer"
    },
    tags: ["wedding photography", "camera gear", "professional tips"]
  },
  {
    id: 3,
    title: "Mastering Portrait Composition",
    publishDate: "2024-02-10",
    content: `Learn the fundamental rules of portrait composition that will elevate your photography:
    
    - Rule of thirds in portraiture
    - Leading lines and framing
    - Creating depth in your images
    - Working with different poses
    
    Understanding these principles will help you create more compelling and professional portraits.`,
    featuredImage: "https://images.unsplash.com/photo-1511405946472-c98d382d9f7a",
    category: "Portrait Photography",
    author: {
      name: "David Thompson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      bio: "Portrait specialist and photography educator"
    },
    tags: ["portrait photography", "composition", "professional techniques"]
  },
  {
    id: 4,
    title: "Advanced Post-Processing Techniques",
    publishDate: "2024-02-05",
    content: `Take your editing skills to the next level with these advanced post-processing techniques:
    
    - Color grading for mood
    - Advanced skin retouching
    - Creating dramatic black and whites
    - Working with layers and masks
    
    Learn how to enhance your images while maintaining a natural look.`,
    featuredImage: "https://images.unsplash.com/photo-1461344577544-4e5dc9487184",
    category: "Post-Processing",
    author: {
      name: "Emma Rodriguez",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      bio: "Digital artist and photography post-processing expert"
    },
    tags: ["post-processing", "editing", "lightroom", "photoshop"]
  },
  {
    id: 5,
    title: "Building a Photography Business",
    publishDate: "2024-01-30",
    content: `Starting and growing a successful photography business requires more than just taking great photos:
    
    - Developing your brand
    - Pricing your services
    - Marketing strategies
    - Client communication
    
    Learn the business side of photography to turn your passion into a profitable career.`,
    featuredImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    category: "Business",
    author: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "Photography business consultant and educator"
    },
    tags: ["business", "marketing", "photography business", "entrepreneurship"]
  }
];