
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Pricing</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-white">One-off Call</CardTitle>
              <CardDescription className="text-3xl font-bold text-purple-400 mt-2">
                $97
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-200">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>1 hour call to discuss your AI challenges or opportunities</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Perfect if you're stuck on a specific AI project</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>One-time investment you're confident will save time</span>
                </div>
              </div>
              <Button className="w-full bg-slate-600 hover:bg-slate-700 text-white">
                Book One-off Call
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 border-purple-500/50 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </span>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-white">Monthly Coaching</CardTitle>
              <CardDescription className="text-3xl font-bold text-purple-400 mt-2">
                $497 / month
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-200">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Work 1:1 with me to strategize and implement AI solutions</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Regular calls to work through AI projects together</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Ongoing support via chat for quick questions</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>100% refund guarantee</span>
                </div>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Join Waiting List
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
