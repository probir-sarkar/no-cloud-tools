import Link from "next/link";
import { Heart, Coffee, Star, Twitter, Mail } from "lucide-react";
import { Button } from "@heroui/button";
import { GithubIcon, TwitterIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-divider bg-muted/50">
      <div className="container max-w-7xl py-8 md:py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">PDF Tools</h3>
            <p className="text-sm text-muted-foreground">
              Open-source, offline-first tools for PDF and image processing. No
              data leaves your browser.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <Link
                href="https://twitter.com/pdftools"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/pdftools/pdftools"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="h-4 w-4" />
              </Link>
              <Link
                href="mailto:hello@pdftools.dev"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">PDF Tools</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/tools/pdf-to-image"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                PDF to Image
              </Link>
              <Link
                href="/tools/merge-pdfs"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Merge PDFs
              </Link>
              <Link
                href="/tools/split-pdf"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Split PDF
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Image Tools</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/tools/compress-image"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Compress Image
              </Link>
              <Link
                href="/tools/resize-image"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Resize Image
              </Link>
              <Link
                href="/tools/convert-image"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Convert Image
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Resources</h4>
            <div className="space-y-2 text-sm">
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/privacy"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="https://github.com/pdftools/pdftools"
                className="block text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </Link>
              <Link
                href="https://github.com/pdftools/pdftools/issues"
                className="block text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Report Issues
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-divider">
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold">Support This Project</h4>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              PDF Tools is free and open-source. Help us keep it running and add
              new features by sponsoring the project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="sm">
                <Link
                  href="https://github.com/sponsors/pdftools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Heart className="h-4 w-4 text-red-500" />
                  Sponsor on GitHub
                </Link>
              </Button>
              <Button size="sm">
                <Link
                  href="https://buymeacoffee.com/pdftools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Coffee className="h-4 w-4" />
                  Buy us a coffee
                </Link>
              </Button>
              <Button size="sm">
                <Link
                  href="https://github.com/pdftools/pdftools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Star className="h-4 w-4" />
                  Star on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-divider flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-muted-foreground">
            <span>© 2025 PDF Tools. All rights reserved.</span>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for the community</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/pdftools/pdftools"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Open Source</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
