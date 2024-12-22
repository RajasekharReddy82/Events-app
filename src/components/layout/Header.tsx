import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronRight,
  Phone,
} from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 bg-white border-b")}>
      {/* Premium Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 via-transparent to-primary-600/5" />

        {/* Animated Shapes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-200/10 rounded-full blur-3xl" />
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary-300/10 rounded-full blur-3xl" />
        </motion.div>

        {/* Animated Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-200 to-transparent"
        />
      </div>

      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="relative z-50">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium transition-colors duration-300 text-gray-700 hover:text-primary-600">
                    Events
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                      {[
                        {
                          icon: <PartyPopper className="h-5 w-5" />,
                          title: "Birthdays",
                          description: "Celebrate your special day",
                          color: "from-pink-500 to-rose-500",
                        },
                        {
                          icon: <Gift className="h-5 w-5" />,
                          title: "Weddings",
                          description: "Your perfect wedding",
                          color: "from-violet-500 to-purple-500",
                        },
                        {
                          icon: <Building2 className="h-5 w-5" />,
                          title: "Corporate",
                          description: "Professional events",
                          color: "from-blue-500 to-cyan-500",
                        },
                        {
                          icon: <Calendar className="h-5 w-5" />,
                          title: "Special Events",
                          description: "Custom celebrations",
                          color: "from-amber-500 to-orange-500",
                        },
                      ].map((item, index) => (
                        <NavigationMenuLink
                          key={index}
                          className="group relative flex flex-col justify-between overflow-hidden rounded-lg border p-3 hover:shadow-md transition-all duration-300"
                        >
                          <div
                            className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                            style={{
                              backgroundImage: `linear-gradient(to right, var(--${item.color}))`,
                            }}
                          />
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gray-100 group-hover:scale-110 transition-transform duration-300">
                              {item.icon}
                            </div>
                            <div>
                              <div className="font-medium">{item.title}</div>
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </div>
                          <ChevronRight className="absolute bottom-3 right-3 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium transition-colors duration-300 text-gray-700 hover:text-primary-600">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px]">
                      {[
                        {
                          icon: <Palette className="h-5 w-5" />,
                          title: "Decor",
                          description: "Custom event decoration",
                          color: "from-emerald-500 to-teal-500",
                        },
                        {
                          icon: <ClipboardList className="h-5 w-5" />,
                          title: "Planning",
                          description: "Comprehensive event planning",
                          color: "from-indigo-500 to-blue-500",
                        },
                        {
                          icon: <Users className="h-5 w-5" />,
                          title: "Coordination",
                          description: "Full event coordination services",
                          color: "from-fuchsia-500 to-pink-500",
                        },
                      ].map((item, index) => (
                        <NavigationMenuLink
                          key={index}
                          className="group relative flex items-center gap-4 rounded-lg border p-3 hover:shadow-md transition-all duration-300"
                        >
                          <div
                            className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                            style={{
                              backgroundImage: `linear-gradient(to right, var(--${item.color}))`,
                            }}
                          />
                          <div className="p-2 rounded-lg bg-gray-100 group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </div>
                          <div>
                            <div className="font-medium">{item.title}</div>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                          <ChevronRight className="absolute right-3 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu> */}

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={scrollToContact}
                className="font-medium transition-colors duration-300 text-gray-700 hover:text-primary-600"
              >
                Contact
              </Button>
              <Button
                onClick={scrollToContact}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-gray-900" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-gray-900" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg lg:hidden h-[60px]"
          >
            <div className="container mx-auto px-4 pt-20 pb-10 bg-white">
              <div className="space-y-3">
                {/* <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Events
                  </h3>
                  {[
                    { icon: <PartyPopper />, label: "Birthdays" },
                    { icon: <Gift />, label: "Weddings" },
                    { icon: <Building2 />, label: "Corporate" },
                    { icon: <Calendar />, label: "Special Events" },
                  ].map((item, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start text-lg font-medium"
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.label}
                    </Button>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Services
                  </h3>
                  {[
                    { icon: <Palette />, label: "Decor" },
                    { icon: <ClipboardList />, label: "Planning" },
                    { icon: <Users />, label: "Coordination" },
                  ].map((item, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start text-lg font-medium"
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.label}
                    </Button>
                  ))}
                </div> */}

                <Button
                  variant="outline"
                  className="w-full justify-center"
                  onClick={scrollToContact}
                >
                  Contact
                </Button>
                <Button className="w-full" onClick={scrollToContact}>
                  Book Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
