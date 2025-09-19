import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "LLM Cost Optimization: Complete Guide to Reducing AI Expenses by 80% in 2025",
    excerpt: "Discover proven strategies and techniques to significantly reduce your AI operational costs while maintaining performance.",
    author: "Álvaro Insignares",
    date: "2025-01-15",
    category: "Cost Optimization",
    featured: true,
    readTime: "12 min read"
  },
  {
    id: 2,
    title: "API First Approach: Building Scalable AI Systems",
    excerpt: "Learn how an API-first strategy can accelerate your AI development and integration processes.",
    author: "KoombeaAI Team",
    date: "2025-01-10",
    category: "Development",
    featured: false,
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Chief AI Officer: The Strategic Role Driving Digital Transformation",
    excerpt: "Understanding the emerging role of Chief AI Officers and their impact on organizational AI adoption.",
    author: "KoombeaAI Team",
    date: "2025-01-05",
    category: "Strategy",
    featured: false,
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "AI ROI: Measuring the Return on Artificial Intelligence Investments",
    excerpt: "Comprehensive framework for calculating and maximizing ROI from your AI initiatives.",
    author: "KoombeaAI Team",
    date: "2024-12-20",
    category: "Business",
    featured: false,
    readTime: "15 min read"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="section bg-gradient-to-b from-background via-background/50 to-background">
      <div className="container max-w-6xl">
        <h2 className="text-headline mb-6 text-center">
          Blog Posts About <span className="gradient-text">AI That Drive Innovation</span>
        </h2>
        
        <p className="text-lead mb-16 max-w-4xl mx-auto text-center">
          Explore KoombeaAI's expert insights on artificial intelligence — from strategy and custom development 
          to integration, data, and ethics. Our blog posts about AI are designed to help businesses lead the 
          way in digital transformation.
        </p>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/3 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">New</span>
                  <span className="text-sm text-muted-foreground">{blogPosts[0].category}</span>
                </div>
                <CardTitle className="text-3xl mb-4 leading-tight">{blogPosts[0].title}</CardTitle>
                <CardDescription className="text-lg mb-6">{blogPosts[0].excerpt}</CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Button className="btn-primary">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/3 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-8">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-60"></div>
              </div>
            </div>
          </Card>
        </div>

        {/* Explore Our Content */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-12">
            Explore Our <span className="gradient-text">Content</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Stay Updated with <span className="gradient-text">AI Insights</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get the latest insights on AI development, strategy, and implementation delivered directly to your inbox.
          </p>
          <Button className="btn-primary">
            Subscribe to Our Newsletter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;