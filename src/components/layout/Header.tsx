import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Calendar,
  Gift,
  Building2,
  PartyPopper,
  Menu,
  X,
  Palette,
  ClipboardList,
  Users,
} from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">Ascent Events</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Events</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px] grid-cols-2">
                      <NavigationMenuLink className="flex items-center space-x-2 p-2 hover:bg-muted rounded-md">
                        <PartyPopper className="h-5 w-5" />
                        <div>
                          <div className="font-medium">Birthdays</div>
                          <p className="text-sm text-muted-foreground">
                            Celebrate your special day
                          </p>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center space-x-2 p-2 hover:bg-muted rounded-md">
                        <Gift className="h-5 w-5" />
                        <div>
                          <div className="font-medium">Weddings</div>
                          <p className="text-sm text-muted-foreground">
                            Your perfect wedding
                          </p>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center space-x-2 p-2 hover:bg-muted rounded-md">
                        <Building2 className="h-5 w-5" />
                        <div>
                          <div className="font-medium">Corporate</div>
                          <p className="text-sm text-muted-foreground">
                            Professional events
                          </p>
                        </div>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      <NavigationMenuLink className="flex items-center space-x-2 p-2 hover:bg-muted rounded-md">
                        <Palette className="h-5 w-5" />
                        <div>
                          <div className="font-medium">Decor</div>
                          <p className="text-sm text-muted-foreground">
                            Custom event decoration
                          </p>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center space-x-2 p-2 hover:bg-muted rounded-md">
                        <ClipboardList className="h-5 w-5" />
                        <div>
                          <div className="font-medium">Planning</div>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive event planning
                          </p>
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="flex items-center space-x-2 p-2 hover:bg-muted rounded-md">
                        <Users className="h-5 w-5" />
                        <div>
                          <div className="font-medium">Coordination</div>
                          <p className="text-sm text-muted-foreground">
                            Full event coordination services
                          </p>
                        </div>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={scrollToContact}>
              Contact
            </Button>
            <Button onClick={scrollToContact}>Book Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              Events
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Services
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Contact
            </Button>
            <Button className="w-full" onClick={scrollToContact}>
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
