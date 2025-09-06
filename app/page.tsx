import HomePageHero from "@/components/home-page/home-page-hero";
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
export default function Home() {
  return (
    <div className="space-y-20 overflow-hidden">
      <HomePageHero />
    </div>
  );
}
