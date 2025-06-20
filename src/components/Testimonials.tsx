
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Why should you work with me?
        </h2>
        
        <div className="grid gap-8 max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-200 text-lg leading-relaxed mb-4">
                    "I approached this AI expert software looking serious foundational technology improvement, and they've proven to be incredibly knowledgeable and delivered exceptional results. Their methodical workflow for the past few years shows serious commitment and expertise. The strategic insights and custom solutions have dramatically improved our business analytics."
                  </p>
                  <p className="text-slate-400">
                    "I've successfully delivered countless AI integrations + and automate more than you'd think through our workflow and custom-built solutions."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              DRIVE AI Success: Our Framework for Intelligent Automation
            </h3>
            <div className="grid md:grid-cols-5 gap-4 text-center">
              {[
                { letter: "D", title: "Discover", desc: "Assess business needs intelligently, transforming processes and optimizing artificial operations" },
                { letter: "R", title: "Research", desc: "Every AI demand research excellence" },
                { letter: "I", title: "Implement", desc: "Connect to solutions" },
                { letter: "V", title: "Validate", desc: "Analyze The Life Cycle" },
                { letter: "E", title: "Evolve", desc: "Continuous AI refinement" }
              ].map((item, index) => (
                <Card key={index} className="bg-slate-800/30 border-slate-700 p-4">
                  <CardContent className="p-0 text-center">
                    <div className="h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                      {item.letter}
                    </div>
                    <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
