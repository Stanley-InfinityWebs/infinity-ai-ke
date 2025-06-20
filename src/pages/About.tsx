
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Target, Lightbulb, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="text-white font-bold text-xl">Infinity AI</div>
        <div className="flex items-center gap-4">
          <a href="/" className="text-white hover:text-purple-200">Home</a>
          <a href="/about" className="text-white hover:text-purple-200">About</a>
          <a href="/services" className="text-white hover:text-purple-200">Services</a>
          <a href="/contact" className="text-white hover:text-purple-200">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-purple-600/20 text-purple-200 border-purple-500/30">
            About Infinity AI
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-6">
            Transforming Businesses with AI Solutions
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            I'm passionate about helping businesses harness the power of artificial intelligence to streamline operations, boost productivity, and drive innovation.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">My Mission</h2>
              <p className="text-slate-300 text-lg mb-6">
                I believe that AI shouldn't be reserved for tech giants. Every business, regardless of size, should have access to intelligent solutions that can transform their operations and accelerate growth.
              </p>
              <p className="text-slate-300 text-lg">
                Through personalized consulting and hands-on implementation, I help businesses identify AI opportunities, develop custom solutions, and successfully integrate them into their existing workflows.
              </p>
            </div>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <User className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  With years of experience in AI development and business consulting, I provide strategic guidance tailored to your unique challenges and goals.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Target className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Strategic Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Every AI implementation starts with understanding your business goals and identifying the highest-impact opportunities for automation and intelligence.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Innovation Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  I stay at the forefront of AI technology, ensuring you benefit from the latest breakthroughs and best practices in artificial intelligence.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Award className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  My clients have seen significant improvements in efficiency, cost reduction, and competitive advantage through strategic AI implementation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>© 2024 Infinity AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
