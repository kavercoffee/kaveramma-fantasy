import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, Clock, ChevronRight, User, Tag } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Blog() {
  // Sample blog posts - in production, these would come from the database
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Fantasy Cricket: A Beginner's Guide",
      excerpt: "New to fantasy cricket? This comprehensive guide covers everything you need to know to start building winning teams and understanding player statistics.",
      category: "Guides",
      author: "Kaveramma Team",
      date: "December 15, 2024",
      readTime: "8 min read",
      image: "🏏"
    },
    {
      id: 2,
      title: "How to Choose the Perfect Captain for Your Fantasy Team",
      excerpt: "Your captain choice can make or break your fantasy team. Learn the strategies and factors to consider when selecting your captain and vice-captain.",
      category: "Strategy",
      author: "Kaveramma Team",
      date: "December 12, 2024",
      readTime: "6 min read",
      image: "👑"
    },
    {
      id: 3,
      title: "Understanding Cricket Statistics for Better Team Selection",
      excerpt: "Dive deep into cricket statistics like strike rate, economy rate, and average. Learn how to use these numbers to make informed player selections.",
      category: "Education",
      author: "Kaveramma Team",
      date: "December 10, 2024",
      readTime: "10 min read",
      image: "📊"
    },
    {
      id: 4,
      title: "T20 vs ODI vs Test: Fantasy Strategy Differences",
      excerpt: "Different cricket formats require different fantasy strategies. Understand how to adjust your team selection based on the match format.",
      category: "Strategy",
      author: "Kaveramma Team",
      date: "December 8, 2024",
      readTime: "7 min read",
      image: "🎯"
    },
    {
      id: 5,
      title: "The Importance of Pitch and Weather in Fantasy Cricket",
      excerpt: "Pitch conditions and weather can significantly impact player performance. Learn how to factor these into your team selection decisions.",
      category: "Tips",
      author: "Kaveramma Team",
      date: "December 5, 2024",
      readTime: "5 min read",
      image: "🌤️"
    },
    {
      id: 6,
      title: "Common Mistakes to Avoid in Fantasy Cricket",
      excerpt: "Even experienced players make these mistakes. Learn what to avoid to improve your fantasy cricket performance and climb the leaderboard.",
      category: "Tips",
      author: "Kaveramma Team",
      date: "December 3, 2024",
      readTime: "6 min read",
      image: "⚠️"
    }
  ];

  const categories = ["All", "Guides", "Strategy", "Education", "Tips", "News"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border/50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg">KAVERAMMA</div>
                <div className="text-xs text-muted-foreground -mt-0.5">Fantasy Cricket</div>
              </div>
            </a>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/login"><Button variant="ghost">Login</Button></Link>
            <Link href="/register"><Button className="bg-gradient-to-r from-primary to-primary/90 text-white">Get Started</Button></Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/20">
          <div className="container">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-border/50 rounded-full shadow-sm mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Learn & Improve</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Fantasy Cricket <span className="bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Tips, strategies, and insights to help you become a better fantasy cricket player. 
                Learn from experts and improve your game.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-6 bg-white border-b border-border/50">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    i === 0 
                      ? 'bg-primary text-white' 
                      : 'bg-slate-100 text-muted-foreground hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Image Placeholder */}
                    <div className="h-40 bg-gradient-to-br from-primary/10 to-green-500/10 flex items-center justify-center">
                      <span className="text-6xl">{post.image}</span>
                    </div>
                    
                    <div className="p-5">
                      {/* Category */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                          {post.category}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h2 className="font-bold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </h2>
                      
                      {/* Excerpt */}
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-10">
                <Button variant="outline" size="lg">
                  Load More Articles
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 bg-slate-50">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6">
                Get the latest fantasy cricket tips and strategies delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button className="bg-gradient-to-r from-primary to-green-600 text-white px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"><span className="text-white font-bold">K</span></div>
              <div><div className="font-bold">KAVERAMMA</div><div className="text-xs text-white/60">Fantasy Cricket</div></div>
            </div>
            <p className="text-sm text-white/40">© 2024 Kaveramma Fantasy Cricket</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
