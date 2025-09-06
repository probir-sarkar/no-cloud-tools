import {
  FileImage,
  FilePlus,
  Scissors,
  Minimize2,
  Maximize2,
  RefreshCw,
} from "lucide-react";

export const Categories = {
  PDF: "PDF",
  IMAGE: "Image",
} as const;

export type Category = (typeof Categories)[keyof typeof Categories];

export type Tool = {
  id: string;
  title: string;
  href: string;
  icon: React.ElementType;
  category: Category;
  description: string;
};

export const tools: Tool[] = [
  {
    id: "pdf-to-image",
    title: "PDF to Image",
    href: "/tools/pdf-to-image",
    icon: FileImage,
    category: Categories.PDF,
    description: "Convert PDF pages to images",
  },
  {
    id: "merge-pdfs",
    title: "Merge PDFs",
    href: "/tools/merge-pdfs",
    icon: FilePlus,
    category: Categories.PDF,
    description: "Combine multiple PDFs",
  },
  {
    id: "split-pdf",
    title: "Split PDF",
    href: "/tools/split-pdf",
    icon: Scissors,
    category: Categories.PDF,
    description: "Extract pages from PDF",
  },
  {
    id: "compress-image",
    title: "Compress Image",
    href: "/tools/compress-image",
    icon: Minimize2,
    category: Categories.IMAGE,
    description: "Reduce image file size",
  },
  {
    id: "resize-image",
    title: "Resize Image",
    href: "/tools/resize-image",
    icon: Maximize2,
    category: Categories.IMAGE,
    description: "Change image dimensions",
  },
  {
    id: "convert-image",
    title: "Convert Image",
    href: "/tools/convert-image",
    icon: RefreshCw,
    category: Categories.IMAGE,
    description: "Convert between formats",
  },
];

export const pdfTools = tools.filter(
  (tool) => tool.category === Categories.PDF
);
export const imageTools = tools.filter(
  (tool) => tool.category === Categories.IMAGE
);
