
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
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
            Get In Touch
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-6">
            Let's Discuss Your AI Journey
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Ready to transform your business with AI? Have questions about implementation? Let's start a conversation about how I can help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-purple-400" />
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <p className="text-slate-300">infinitywebshub@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-purple-400" />
                  <div>
                    <h3 className="text-white font-medium">Response Time</h3>
                    <p className="text-slate-300">Within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-purple-400" />
                  <div>
                    <h3 className="text-white font-medium">Service Area</h3>
                    <p className="text-slate-300">Global (Remote Consulting)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Premium Coaching</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    1:1 strategic AI consulting with regular calls and ongoing chat support.
                  </p>
                  <div className="text-2xl font-bold text-purple-400">$497/month</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Strategic AI planning sessions</li>
                    <li>• Unlimited chat support</li>
                    <li>• Implementation guidance</li>
                    <li>• 100% satisfaction guarantee</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>© 2024 Infinity AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
