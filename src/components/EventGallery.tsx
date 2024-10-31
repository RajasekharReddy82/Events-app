import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

const events = [
  {
    id: 1,
    title: "Elegant Garden Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
    description: "A breathtaking garden wedding ceremony with elegant floral arrangements and romantic lighting."
  },
  {
    id: 2,
    title: "Corporate Summit 2024",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
    description: "Annual corporate summit featuring keynote speakers and networking events."
  },
  {
    id: 3,
    title: "Luxury Birthday Gala",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
    description: "An extravagant birthday celebration with custom decorations and gourmet catering."
  },
  {
    id: 4,
    title: "Beachside Wedding",
    image: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop&q=80",
    description: "A romantic beachside wedding ceremony at sunset with ocean views."
  },
  {
    id: 5,
    title: "Tech Conference 2024",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80",
    description: "Leading technology conference with interactive workshops and exhibitions."
  },
  {
    id: 6,
    title: "Anniversary Celebration",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80",
    description: "Golden anniversary celebration with family and friends."
  }
];

export function EventGallery() {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-4">Event Gallery</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explore our portfolio of meticulously crafted events that showcase our dedication to creating unforgettable experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <Card 
            key={event.id}
            className="cursor-pointer group overflow-hidden hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedEvent(event)}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 line-clamp-2">{event.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-4xl">
          <DialogTitle>{selectedEvent?.title}</DialogTitle>
          {selectedEvent && (
            <div className="mt-4">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="mt-6 text-gray-600 leading-relaxed">{selectedEvent.description}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}