
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star, Users, Target, TrendingUp } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="text-white font-bold text-xl">Infinity AI</div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:text-purple-200">About</Button>
          <Button variant="ghost" className="text-white hover:text-purple-200">Services</Button>
          <Button variant="ghost" className="text-white hover:text-purple-200">Contact</Button>
        </div>
      </nav>

      {/* Hero Section - Premium Coaching */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-purple-600/20 text-purple-200 border-purple-500/30">
            Premium AI Consulting
          </Badge>
          
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-white mb-2">Premium Coaching</CardTitle>
              <CardDescription className="text-2xl font-bold text-purple-400">
                $497 / month
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3 text-left">
                <div className="flex items-center gap-3 text-slate-200">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Work 1:1 with me to strategize and implement AI solutions</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Regular calls to guide your AI projects and answer questions</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Ongoing support via chat for timely assistance</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>100% refund guaranteed if you're not satisfied with the service</span>
                </div>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-6">
                Join Waiting List
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            I will help you build and implement AI in your business
          </h2>
          <p className="text-slate-300 text-center text-lg mb-12 max-w-3xl mx-auto">
            Here, with me, I'll be your AI to help you build + implement AI solutions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Chat</CardTitle>
                <CardDescription className="text-slate-300">
                  Strategic AI consulting right in your inbox. Ask me anything about AI implementation.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Target className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">1:1 Coaching Calls</CardTitle>
                <CardDescription className="text-slate-300">
                  We'll hop on a call 2-3x per month to strategize and create your AI solutions.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Implementation</CardTitle>
                <CardDescription className="text-slate-300">
                  Together we'll build and deploy AI solutions that transform your business.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <ContactForm />
      <Testimonials />
      <FAQ />
      <Pricing />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>© 2024 Infinity AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
