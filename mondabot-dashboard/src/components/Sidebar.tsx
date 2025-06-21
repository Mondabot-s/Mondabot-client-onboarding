"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Home,
  FileText,
  Target,
  Settings,
  ClipboardCheck,
  Rocket,
  BarChart2,
  Library,
  LucideIcon,
} from "lucide-react";

interface NavLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

const mainNavLinks = [
  { href: "#overview", label: "Overview", icon: Home },
];

const onboardingLinks = [
  { href: "#discovery", label: "1. Discovery", icon: FileText },
  { href: "#strategy", label: "2. Strategy", icon: Target },
  { href: "#setup", label: "3. Setup", icon: Settings },
  { href: "#testing", label: "4. Testing", icon: ClipboardCheck },
  { href: "#launch", label: "5. Launch", icon: Rocket },
  { href: "#reporting", label: "6. Reporting", icon: BarChart2 },
];

const resourcesLinks = [
  { href: "#library", label: "Library", icon: Library },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'discovery', 'strategy', 'setup', 'testing', 'launch', 'reporting', 'library'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const renderLink = (link: NavLink, index: number) => {
    const Icon = link.icon;
    const sectionId = link.href.replace('#', '');
    const isActive = activeSection === sectionId;
    return (
      <a
        key={index}
        href={link.href}
        onClick={(e) => handleSmoothScroll(e, link.href)}
        className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-100 ease-in-out cursor-pointer ${
          isActive
            ? "bg-[#CC1174] text-white shadow-md"
            : "text-text-secondary hover:bg-[#CC1174] hover:text-white"
        }`}
      >
        <Icon className="w-5 h-5 mr-3" />
        <span>{link.label}</span>
      </a>
    );
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-gray-200 flex flex-col p-4 overflow-y-auto sidebar-background">
      <div className="py-2 mb-4 flex items-center justify-center">
        <Image src="/icon.png" alt="Mondabot Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold text-primary ml-2">
          ClientOnboard
        </h1>
      </div>
      <nav className="flex flex-col space-y-1">
        <h2 className="px-4 pt-2 pb-1 text-xs font-semibold text-text-secondary uppercase tracking-wider">
          Main Dashboard
        </h2>
        {mainNavLinks.map(renderLink)}
      </nav>
      <nav className="flex flex-col space-y-1 mt-4">
        <h2 className="px-4 pt-2 pb-1 text-xs font-semibold text-text-secondary uppercase tracking-wider">
          Onboarding Process
        </h2>
        {onboardingLinks.map(renderLink)}
      </nav>
      <nav className="flex flex-col space-y-1 mt-4">
        <h2 className="px-4 pt-2 pb-1 text-xs font-semibold text-text-secondary uppercase tracking-wider">
          Resources
        </h2>
        {resourcesLinks.map(renderLink)}
      </nav>
    </aside>
  );
} 