import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <form className="max-w-lg mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Textarea id="message" placeholder="Your message" rows={4} />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-tl-full"></div>
    </section>
  )
}

export default Contact

