import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  Users,
  DollarSign,
  MapPinned,
  Phone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { ContactFormData, contactFormSchema } from "@/lib/validations/contact";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Get tomorrow's date in YYYY-MM-DD format
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    trigger,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: undefined,
      eventDate: "",
      guestCount: undefined,
      budget: undefined,
      venue: "",
      message: "",
    },
  });

  const formatPhoneNumber = async (value: string) => {
    const phoneNumber = value.replace(/\D/g, "");
    const truncated = phoneNumber.slice(0, 10);

    let formatted = truncated;
    if (truncated.length <= 3) {
      formatted = truncated;
    } else if (truncated.length <= 6) {
      formatted = `(${truncated.slice(0, 3)}) ${truncated.slice(3)}`;
    } else {
      formatted = `(${truncated.slice(0, 3)}) ${truncated.slice(
        3,
        6
      )}-${truncated.slice(6)}`;
    }

    setValue("phone", formatted);

    if (truncated.length === 10) {
      await trigger("phone");
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formatPhoneNumber(e.target.value);
  };

  const sanitizeData = (data: string) =>
    data
      .replace(/\r(?!\n)/g, "\r\n")
      .replace(/\n(?!\r)/g, "\r\n")
      .trim();

  const sanitizeForm = (form: HTMLFormElement) => {
    Array.from(form.elements).forEach((el: any) => {
      if (el.value) {
        el.value = sanitizeData(el.value);
      }
    });
  };

  const onSubmit = async (data: ContactFormData) => {
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      sanitizeForm(formRef.current);
      await emailjs.sendForm(
        "service_zjw0t9t",
        "template_w994oud",
        formRef.current,
        "j8Pwclj8JSITr_IcG"
      );

      setSubmitted(true);
      reset();

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-8 shadow-lg glass-effect border-0 relative overflow-hidden">
      {submitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Thank You!
            </h3>
            <p className="text-gray-600">We'll be in touch with you shortly.</p>
          </div>
        </motion.div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Full Name
            </label>
            <input
              {...register("name")}
              className={`w-full px-4 py-3 rounded-lg bg-white/50 border focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all duration-200 ${
                errors.name ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Email</label>
            <input
              {...register("email")}
              type="email"
              className={`w-full px-4 py-3 rounded-lg bg-white/50 border focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all duration-200 ${
                errors.email ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Phone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                {...register("phone")}
                onChange={handlePhoneChange}
                className={`w-full pl-12 pr-4 py-3 rounded-lg bg-white/50 border focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all duration-200 ${
                  errors.phone ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="(123) 456-7890"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Event Type
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                {...register("eventType")}
                className={`w-full pl-12 pr-4 py-3 rounded-lg bg-white/50 border focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all duration-200 appearance-none ${
                  errors.eventType ? "border-red-500" : "border-gray-200"
                }`}
              >
                <option value="">Select event type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="other">Other</option>
              </select>
            </div>
            {errors.eventType && (
              <p className="text-red-500 text-sm">{errors.eventType.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Event Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                {...register("eventDate")}
                type="date"
                min={minDate}
                className={`w-full pl-12 pr-4 py-3 rounded-lg bg-white/50 border focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all duration-200 ${
                  errors.eventDate ? "border-red-500" : "border-gray-200"
                }`}
              />
            </div>
            {errors.eventDate && (
              <p className="text-red-500 text-sm">{errors.eventDate.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Guest Count
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                {...register("guestCount")}
                type="number"
                min="1"
                max="10000"
                className={`w-full pl-12 pr-4 py-3 rounded-lg bg-white/50 border focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all duration-200 ${
                  errors.guestCount ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="Number of guests"
              />
            </div>
            {errors.guestCount && (
              <p className="text-red-500 text-sm">
                {errors.guestCount.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Budget Range
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                {...register("budget")}
                className={`w-full pl-12 pr-4 py-3 rounded-lg bg-white/50 border focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all duration-200 appearance-none ${
                  errors.budget ? "border-red-500" : "border-gray-200"
                }`}
              >
                <option value="">Select budget range</option>
                <option value="2500-5000">$2,500 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000-20000">$10,000 - $20,000</option>
                <option value="20000-50000">$20,000 - $50,000</option>
                <option value="50000-100000">$50,000 - $100,000</option>
                <option value="100000+">$100,000+</option>
              </select>
            </div>
            {errors.budget && (
              <p className="text-red-500 text-sm">{errors.budget.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">
              Venue Location
            </label>
            <div className="relative">
              <MapPinned className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                {...register("venue")}
                className={`w-full pl-12 pr-4 py-3 rounded-lg bg-white/50 border focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all duration-200 ${
                  errors.venue ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="City, State or Venue Name"
              />
            </div>
            {errors.venue && (
              <p className="text-red-500 text-sm">{errors.venue.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900">
            Additional Details
          </label>
          <textarea
            {...register("message")}
            rows={4}
            className={`w-full px-4 py-3 rounded-lg bg-white/50 border focus:ring-2 focus:ring-primary-400/20 focus:border-primary-400 transition-all duration-200 ${
              errors.message ? "border-red-500" : "border-gray-200"
            }`}
            placeholder="Share your vision and any specific requirements..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-6 text-lg font-medium rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white transition-all duration-300 relative overflow-hidden group"
        >
          {isSubmitting ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center"
            >
              <div className="w-6 h-6 border-3 border-t-white border-white/30 rounded-full animate-spin mr-2" />
              Submitting...
            </motion.div>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Submit Inquiry
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </Button>
      </form>
    </Card>
  );
}
