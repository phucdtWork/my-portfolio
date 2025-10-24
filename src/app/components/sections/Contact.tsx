"use client";

import { Send } from "lucide-react";
import Button from "../ui/Button";
import { FaEnvelope, FaPhone, FaMapMarked } from "react-icons/fa";
import { useAnimation } from "@/hooks/useAnimation";
import emailjs from "emailjs-com";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [loading, setLoading] = useState(false);

  const animationTitle = useAnimation<HTMLDivElement>({
    animationType: "fade-up",
    duration: 600,
    delay: 100,
    threshold: 0.2,
    triggerOnce: false,
  });

  const animationForm = useAnimation<HTMLDivElement>({
    animationType: "fade-up",
    duration: 600,
    delay: 200,
    threshold: 0.2,
    triggerOnce: false,
  });

  const animationEmail = useAnimation<HTMLDivElement>({
    animationType: "fade-right",
    duration: 600,
    delay: 300,
    threshold: 0.2,
    triggerOnce: false,
  });

  const animationPhone = useAnimation<HTMLDivElement>({
    animationType: "fade-up",
    duration: 600,
    delay: 400,
    threshold: 0.2,
    triggerOnce: false,
  });

  const animationLocation = useAnimation<HTMLDivElement>({
    animationType: "fade-left",
    duration: 600,
    delay: 500,
    threshold: 0.2,
    triggerOnce: false,
  });

  const contactInfo = [
    {
      icon: <FaEnvelope size={20} color="var(--accent)" />,
      title: "Email",
      detail: "phucdt.work@gmail.com",
      animation: animationEmail,
    },
    {
      icon: <FaPhone size={20} color="var(--accent)" />,
      title: "Phone",
      detail: "+84 374887203",
      animation: animationPhone,
    },
    {
      icon: <FaMapMarked size={20} color="var(--accent)" />,
      title: "Location",
      detail: "Can Tho - HCM, Vietnam",
      animation: animationLocation,
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials missing:", {
        serviceId: !!serviceId,
        templateId: !!templateId,
        publicKey: !!publicKey,
      });
      toast.error(
        "Email configuration is missing. Please contact the administrator."
      );
      return;
    }

    setLoading(true);

    // Lưu reference của form trước khi async
    const form = e.currentTarget;

    // Lấy thời gian hiện tại
    const now = new Date();
    const formattedTime = now.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    // Tạo form data với thêm trường time
    const formData = new FormData(form);
    const templateParams = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      message: formData.get("message"),
      time: formattedTime,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          toast.success(
            "Email sent successfully! We will get back to you soon.",
            {
              duration: 4000,
            }
          );
          form.reset();
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast.error(
            `Failed to send email: ${
              error.text || error.message || "Unknown error"
            }`,
            {
              duration: 5000,
            }
          );
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact">
      <h2
        className="section-title"
        ref={animationTitle.ref}
        style={animationTitle.style}
      >
        Get In Touch
      </h2>

      <div className="contact-container max-w-[800px] m-auto">
        <div
          ref={animationForm.ref}
          style={animationForm.style}
          className="bg-[var(--bg-card)] p-8 rounded-xl border border-solid border-[var(--border)]"
        >
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-[var(--text-primary)] font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Your name"
                required
                className="w-full p-3.5 bg-(--bg-secondary) border border-solid border-(--border) rounded-lg text-(--text-primary) transition-all duration-300 focus:outline-none focus:border-[var(--accent)]"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-(--text-primary) font-medium"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="your.email@example.com"
                required
                className="w-full p-3.5 bg-[var(--bg-secondary)] border border-solid border-[var(--border)] rounded-lg text-[var(--text-primary)] transition-all duration-300 focus:outline-none focus:border-[var(--accent)]"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-[var(--text-primary)] font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                required
                className="resize-y min-h-[150px] w-full p-3.5 bg-(--bg-secondary) border border-solid border-(--border) rounded-lg text-[var(--text-primary)] transition-all duration-300 focus:outline-none focus:border-[var(--accent)]"
              />
            </div>

            <Button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
              style={{ width: "100%" }}
              icon={<Send size={20} color="currentColor" />}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-8">
          {contactInfo.map((info, index) => (
            <div
              ref={info.animation.ref}
              style={info.animation.style}
              className="flex items-center gap-4 p-6 bg-(--bg-card) rounded-lg border border-(--border) border-solid"
              key={index}
            >
              <div>
                <div className="flex gap-1 items-center">
                  {info.icon}
                  <span className="ml-1.5 text-[var(--text-secondary)]">
                    {info.title}
                  </span>
                </div>
                <p>{info.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
}

export default Contact;
