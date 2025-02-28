import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star, Phone, Mail, Instagram, Facebook, Twitter, MapPin } from "lucide-react"
import MobileMenu from "../components/mobile-menu"
import AnimatedCard from "../components/animated-card"
import ServiceCard from "../components/service-card"
import ReviewCard from "../components/review-card"
import ScrollReveal from "../components/scroll-reveal"
import BackgroundVideo from "../components/background-video"
import SmoothScroll from "../components/smooth-scroll"

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-bold text-red-600 group-hover:scale-105 transition-transform">
                SOUTHERN
              </span>
              <span className="text-2xl font-bold ml-1 group-hover:text-red-600 transition-colors">EXPERIENCE</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              {["about", "founder", "services", "reviews", "contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="hover:text-red-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 after:transition-all hover:after:w-full"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </nav>
            <MobileMenu />
          </div>
        </header>

        {/* Hero Section with Background Video */}
        <section className="relative h-screen overflow-hidden">
          <BackgroundVideo />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-text-glow">
                <span className="text-red-600">RIDERS</span> RAISERS OF THE <span className="text-red-600">STORM</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl mb-8 text-zinc-300">
                Experience the thrill of off-roading with Southern Off-roaders - where passion meets the terrain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#about"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium inline-flex items-center transition-all duration-300 transform hover:translate-x-1 hover:shadow-glow w-fit"
                >
                  Discover Our Story <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#contact"
                  className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3 rounded-md font-medium inline-flex items-center transition-all duration-300 w-fit hover:border-red-600"
                >
                  Join the Challenge
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <ScrollReveal>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                  About Southern Off-roaders
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-600"></span>
                </h2>
                <p className="text-lg leading-relaxed mb-8 text-zinc-300">
                  "My life started with a jeep." That's how Adarsh Kuthimunda describes his passion for 4x4s and
                  off-roading. While he may come across as an affable 25-year-old just out of college, he is an
                  enthusiast who is responsible for putting together the Southern Off-road Challenge – one of the
                  biggest off-road events in South India.
                </p>
                <p className="text-lg leading-relaxed mb-8 text-zinc-300">
                  Southern Off-roaders was born out of a passion for off-roading and the need to traverse agricultural
                  estates in Mangalore. What started as a necessity has grown into one of the largest off-road events in
                  Karnataka and the whole of South India, attracting over 50 entries from as far as Bangalore and
                  Kerala.
                </p>
                <p className="text-xl font-semibold text-red-600 animate-pulse">
                  Join us for an exhilarating off-road experience like no other!
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Founder Section */}
        <section id="founder" className="py-20 bg-black relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          <ScrollReveal>
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block">
                Meet Our Founder
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-600"></span>
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedCard>
                  <div className="relative h-[400px] rounded-lg overflow-hidden group">
                    <Image
                      src="/adarsh-kuthimunda.jpg"
                      alt="Adarsh Kuthimunda - Founder of Southern Off-roaders"
                      width={800}
                      height={600}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-3xl font-bold text-red-600">ADARSH KUTHIMUNDA</h3>
                      <p className="text-white text-lg">Founder & Organizer</p>
                    </div>
                  </div>
                </AnimatedCard>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-zinc-300">
                    Adarsh's enthusiasm for driving 4x4s and off-roading began in his childhood, thanks to his father.
                    "When I was in third standard, I used to drive the jeeps, because my daddy used to let me hold the
                    steering. Then jeeps went on to become a passion in my life."
                  </p>
                  <p className="text-lg leading-relaxed text-zinc-300">
                    Fast forward to 2020, Adarsh and his friends founded Southern Off-roaders. The team has participated
                    in various events, including the Mahindra Club Challenge and the Rain Forest Challenge Goa. In March
                    2022, they organized the first Southern Off-road Challenge, which became one of the largest off-road
                    events in South India.
                  </p>
                  <div className="mt-8 inline-block">
                    <Link
                      href="#contact"
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium inline-flex items-center transition-all duration-300 hover:shadow-glow"
                    >
                      Join the Challenge{" "}
                      <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <ScrollReveal>
            <div className="container mx-auto px-4 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block">
                Our Off-road Challenges
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-600"></span>
              </h2>
              <p className="text-lg text-center mb-12 text-zinc-300">
                Experience the thrill of our off-road challenges, designed for both stock and modified 4x4s.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Stock Class Challenge",
                    image: "/stock-class.jpg",
                    description: "Test your stock 4x4's capabilities on our specially designed 800-meter course.",
                  },
                  {
                    title: "Open Modified Challenge",
                    image: "/open-modified.jpg",
                    description:
                      "Push your modified 4x4 to the limit on our tougher 800-meter track with no modification limits.",
                  },
                  {
                    title: "Ladies Class",
                    image: "/ladies-class.jpg",
                    description: "A dedicated category for women off-road enthusiasts to showcase their skills.",
                  },
                  {
                    title: "90-Degree Cut Turns",
                    image: "/cut-turns.jpg",
                    description:
                      "Navigate through challenging 90-degree cut turns that test your vehicle's maneuverability.",
                  },
                  {
                    title: "Axle Articulation Pits",
                    image: "/articulation-pits.jpg",
                    description:
                      "Conquer deep pits that push your vehicle's suspension and axle articulation to the max.",
                  },
                  {
                    title: "Slush Challenges",
                    image: "/slush-challenge.jpg",
                    description:
                      "Battle through deep slush reaching up to your vehicle's bonnet in this intense challenge.",
                  },
                  {
                    title: "Timed Runs",
                    image: "/timed-runs.jpg",
                    description: "Complete the course as quickly as possible in our exciting timed challenge format.",
                  },
                  {
                    title: "Recovery Operations",
                    image: "/recovery-ops.jpg",
                    description: "Learn and practice safe recovery techniques for when the going gets tough.",
                  },
                ].map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    image={service.image}
                    description={service.description}
                    delay={index * 0.1}
                  />
                ))}
              </div>
              <div className="text-center mt-12">
                <Link
                  href="#contact"
                  className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3 rounded-md font-medium inline-flex items-center transition-all duration-300 hover:border-red-600 hover:shadow-sm"
                >
                  Inquire About Our Services
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-20 bg-black">
          <ScrollReveal>
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 relative inline-block">
                    Customer Reviews
                    <span className="absolute -bottom-2 left-0 w-20 h-1 bg-red-600"></span>
                  </h2>
                  <p className="text-zinc-400 mt-4">What our customers say about us</p>
                </div>
                <div className="mt-6 md:mt-0 flex items-center">
                  <div className="text-5xl font-bold text-red-600 animate-pulse">4.7</div>
                  <div className="ml-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${star <= 4 ? "text-yellow-500 fill-yellow-500" : "text-yellow-500"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-zinc-400">Out of 5 stars</p>
                    <p className="text-sm text-zinc-400">Based on 161 Google reviews</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Naveen Navi",
                    date: "2 days ago",
                    text: "Excellent trainer sajith sir the gym is very good quality",
                  },
                  {
                    name: "Imran Garag",
                    date: "3 weeks ago",
                    text: "The place for authentic performance mods with international standards. I got my Jimny remapped and installed Thule Roof racks; super happy with the performance.",
                  },
                  {
                    name: "WanderingSoul",
                    date: "3 weeks ago",
                    text: "Had the privilege to interact with the legendary Mr.Fazil khan himself. Faiz, who currently runs the Cars! This is THE place! Nobody like Fazil Sir.",
                  },
                  {
                    name: "Mohammed Akhil",
                    date: "2 months ago",
                    text: "Had a wonderful experience talking to the owner of FRK Racing Mr. Fazil Khan. Gained a lot of unknown knowledge about cars and the about the preferred performance upgrades.",
                  },
                  {
                    name: "Vishwas R",
                    date: "4 months ago",
                    text: "These guys do a great job, and within the timeline they commit to. Umar was extremely helpful.",
                  },
                  {
                    name: "Victor Eveleens",
                    date: "5 months ago",
                    text: "They mainly concentrate on the racing background, but will assure you to be satisfied with their work.",
                  },
                ].map((review, index) => (
                  <ReviewCard
                    key={index}
                    name={review.name}
                    date={review.date}
                    text={review.text}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <ScrollReveal>
            <div className="container mx-auto px-4 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block">
                Join the Challenge
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-600"></span>
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="bg-black p-8 rounded-lg border border-zinc-800 hover:border-red-600/50 transition-colors shadow-xl hover:shadow-red-900/20 transition-shadow duration-300">
                    <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                    <p className="text-zinc-300 mb-4">
                      Interested in participating in the Southern Off-road Challenge or have questions about our events?
                      Contact us for more information.
                    </p>

                    <div className="space-y-4 mt-8">
                      <div className="flex items-start group">
                        <div className="bg-red-600/20 p-3 rounded-full mr-4 group-hover:bg-red-600/30 transition-colors">
                          <Phone className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Adarsh Kuthimunda</h4>
                          <p className="text-zinc-400">Founder & Organizer</p>
                          <a href="tel:+919845013130" className="text-zinc-300 hover:text-red-600 transition-colors">
                            +91 98450 13130
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start group">
                        <div className="bg-red-600/20 p-3 rounded-full mr-4 group-hover:bg-red-600/30 transition-colors">
                          <Mail className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <a
                            href="mailto:southernoffroaders@gmail.com"
                            className="text-zinc-300 hover:text-red-600 transition-colors"
                          >
                            southernoffroaders@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start group">
                        <div className="bg-red-600/20 p-3 rounded-full mr-4 group-hover:bg-red-600/30 transition-colors">
                          <MapPin className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Event Location</h4>
                          <p className="text-zinc-400">Mangalore, Karnataka, India</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <form className="space-y-6 contact-form">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="form-group">
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full bg-black border border-zinc-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full bg-black border border-zinc-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                          placeholder="Your email"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full bg-black border border-zinc-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="vehicle" className="block text-sm font-medium mb-2">
                        Vehicle Type
                      </label>
                      <select
                        id="vehicle"
                        className="w-full bg-black border border-zinc-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                      >
                        <option value="">Select your vehicle type</option>
                        <option value="stock">Stock 4x4</option>
                        <option value="modified">Modified 4x4</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full bg-black border border-zinc-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                        placeholder="Tell us about your off-road experience or any questions you have"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-glow relative overflow-hidden submit-btn"
                    >
                      <span className="relative z-10">Join the Challenge</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-zinc-800 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <Link href="/" className="flex items-center group">
                  <span className="text-3xl font-bold text-red-600 group-hover:scale-105 transition-transform">
                    SOUTHERN
                  </span>
                  <span className="text-3xl font-bold ml-1 group-hover:text-red-600 transition-colors">EXPERIENCE</span>
                </Link>
                <p className="text-zinc-500 mt-2">Driven by passion for speed</p>
              </div>

              <div className="flex space-x-6">
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-red-600 transition-colors transform hover:scale-110 transition-transform"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-red-600 transition-colors transform hover:scale-110 transition-transform"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-red-600 transition-colors transform hover:scale-110 transition-transform"
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>

            <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-zinc-500 text-sm">
                Copyright © {new Date().getFullYear()} Southern Experience. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-zinc-500 hover:text-white text-sm hover:underline">
                  Terms of Service
                </Link>
                <Link href="#" className="text-zinc-500 hover:text-white text-sm hover:underline">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Back to Top Button */}
        <a
          href="#"
          className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-red-600/50 transition-all z-50 back-to-top"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </div>
    </SmoothScroll>
  )
}

