import { DiscordLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted py-12 text-muted-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="space-y-2">
          <h4 className="text-lg font-medium">Permitech</h4>
          <nav className="grid gap-2">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-medium">Resources</h4>
          <nav className="grid gap-2">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Documentation
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              FAQ
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-medium">Legal</h4>
          <nav className="grid gap-2">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Cookie Policy
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-medium">Connect</h4>
          <nav className="grid gap-2">
            <Link
              href="#"
              className="flex items-center gap-2 text-sm hover:underline"
              prefetch={false}
            >
              <LinkedInLogoIcon className="h-5 w-5" />
              LinkedIn
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-sm hover:underline"
              prefetch={false}
            >
              <DiscordLogoIcon className="h-5 w-5" />
              Discord
            </Link>
          </nav>
        </div>
      </div>
      <div className="mt-8 border-t pt-8 text-center text-sm">
        <p>&copy; 2024 Permitech. All rights reserved.</p>
      </div>
    </footer>
  );
}
