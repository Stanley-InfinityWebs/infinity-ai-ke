
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, MessageSquare, Target, TrendingUp, Brain, Zap, Shield } from "lucide-react";

const Services = () => {
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
            AI Services
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-6">
            Comprehensive AI Solutions for Your Business
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            From strategy to implementation, I provide end-to-end AI services that transform how your business operates and competes.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What I Offer
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">1:1 AI Consulting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Strategic AI consulting right in your inbox. Get expert guidance on AI implementation, tool selection, and optimization strategies.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-200">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Unlimited chat support</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Strategic AI roadmapping</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Tool recommendations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Target className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Strategy Sessions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Regular video calls to strategize and create your AI solutions. We'll work together to identify opportunities and plan implementation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-200">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">2-3 calls per month</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Custom AI strategy development</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Implementation planning</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Implementation Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Hands-on support to build and deploy AI solutions that transform your business operations and drive measurable results.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-200">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Custom AI solution development</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Integration support</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Performance optimization</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Brain className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">AI Workflow Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Automate repetitive tasks and streamline business processes with intelligent AI workflows that save time and reduce errors.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Custom AI Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Development of bespoke AI tools and applications tailored to your specific business needs and industry requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">AI Auditing & Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Comprehensive analysis of existing AI implementations with recommendations for improvement and optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join the waiting list for premium AI coaching and start your transformation today.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
            <a href="/contact">Get Started Today</a>
          </Button>
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

export default Services;
