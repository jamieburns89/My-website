import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  date: z.string().min(1, "Event date is required"),
  message: z.string().min(10, "Please tell us a bit about your event"),
});

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      date: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Inquiry Sent",
      description: "Thank you for reaching out. Jamie will be in touch shortly.",
    });
    form.reset();
  }

  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        {/* Subtle botanical background */}
        <div className="absolute right-0 top-0 opacity-[0.03] pointer-events-none w-1/2 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48cGF0aCBkPSJNIDEwMCwgMjAwIEMgMTAwLCAxMDAgMjAwLCA1MCAzMDAsIDEwMCBDIDQwMCwgMTUwIDMwMCwgMzAwIDIwMCwgMzAwIEMgMTAwLCAzMDAgMTAwLCAyMDAgMTAwLCAyMDAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] bg-no-repeat bg-right-top bg-contain"></div>

        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-5xl mb-6">Inquire</h1>
              <p className="text-muted-foreground font-serif italic text-xl mb-12">
                We take on a limited number of events each year to ensure the highest level of service. Please fill out the form to begin the conversation.
              </p>
              
              <div className="space-y-6 text-sm tracking-widest uppercase">
                <div>
                  <p className="text-muted-foreground mb-1">Email</p>
                  <a href="mailto:hello@jamiemichelleevents.com" className="hover:text-muted-foreground transition-colors">hello@jamiemichelleevents.com</a>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Studio</p>
                  <p>New York & Austin</p>
                  <p>Available Worldwide</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-xs text-muted-foreground">Full Name</FormLabel>
                        <FormControl>
                          <Input className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-lg font-serif" {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-xs text-muted-foreground">Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-lg font-serif" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-xs text-muted-foreground">Proposed Event Date</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Fall 2025" className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-lg font-serif" {...field} data-testid="input-date" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase tracking-widest text-xs text-muted-foreground">Tell us about your vision</FormLabel>
                        <FormControl>
                          <Textarea className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent text-lg font-serif min-h-[120px] resize-none" {...field} data-testid="input-message" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full uppercase tracking-[0.2em] py-6 text-sm" data-testid="button-submit">
                    Send Inquiry
                  </Button>
                </form>
              </Form>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
