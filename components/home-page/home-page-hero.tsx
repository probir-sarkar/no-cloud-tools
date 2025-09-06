import { Badge } from "@heroui/badge";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import {
  FileImage,
  FilePlus,
  Scissors,
  Minimize2,
  Maximize2,
  RefreshCw,
  Shield,
  Zap,
  Download,
  FileText,
  ImageIcon,
  Star,
  Users,
  Heart,
  Coffee,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
const HomePageHero = () => {
  return (
    <section className="container py-16 md:py-24 text-center space-y-8 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-yellow-400/20 to-red-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto relative">
        <Chip
          variant="shadow"
          size="lg"
          startContent={<Sparkles size={16} className=" mx-1" />}
          color="primary"
          className=""
        >
          Open Source • Privacy First • Offline Ready
        </Chip>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent animate-fade-in">
          Free PDF & Image Tools
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-delay">
          Professional-grade PDF and image processing tools that work entirely
          in your browser. No uploads, no tracking, no compromises.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-delay-2">
        <Button size="md" color="primary" endContent={<ArrowRight size={18} />}>
          <Link href="#tools">Get Started Free</Link>
        </Button>
        <Button
          variant="bordered"
          size="md"
          endContent={
            <Star
              size={18}
              className="group-hover:fill-yellow-400 group-hover:text-yellow-400 transition-colors"
            />
          }
        >
          <Link
            href="https://github.com/pdftools/pdftools"
            target="_blank"
            rel="noopener noreferrer"
          >
            Star on GitHub
          </Link>
        </Button>
      </div>

      <div className="pt-12 space-y-6">
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-green-200/50">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <Users className="w-4 h-4 text-green-600" />
            <span className="font-medium text-green-700">50,000+ Users</span>
          </div>
          <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200/50">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="font-medium text-blue-700">100% Private</span>
          </div>
          <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-200/50">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <Star className="w-4 h-4 text-purple-600" />
            <span className="font-medium text-purple-700">Open Source</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="light"
            size="sm"
            className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 group transition-all duration-300"
            startContent={
              <Heart
                size={16}
                className=" group-hover:fill-pink-500 group-hover:scale-110 transition-all"
              />
            }
          >
            <Link
              href="https://github.com/sponsors/pdftools"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sponsor this project
            </Link>
          </Button>
          <Button
            variant="light"
            size="sm"
            className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 group transition-all duration-300"
            startContent={
              <Coffee
                size={16}
                className=" group-hover:scale-110 transition-transform duration-300"
              />
            }
          >
            <Link
              href="https://buymeacoffee.com/pdftools"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy us a coffee
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
