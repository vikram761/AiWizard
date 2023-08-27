"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";
import { AiOutlineGift } from "react-icons/ai";
import { BsChatLeftText, BsCodeSlash, BsImage } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";

interface pageProps {}
const montserrat = Montserrat({
  weight: ["500", "400", "700"],
  subsets: ["latin"],
});
interface route {
  label: string;
  icon: IconType;
  href: string;
  color: string;
  bgColor: string;
}
const routes: route[] = [
  {
    label: "Dashboard",
    icon: LuLayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
  },
  {
    label: "Chat Completion",
    icon: BsChatLeftText,
    href: "/chat-completion",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Gift Generator",
    icon: AiOutlineGift,
    href: "/gift",
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
  },
  {
    label: "Image Generator",
    icon: BsImage,
    href: "/image-generator",
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
  {
    label: "Code Generator",
    icon: BsCodeSlash,
    href: "/code-generator",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
];

const Page: FC<pageProps> = ({}) => {
  return (
    <div className="w-full space-y-4 bg-white">
      <h1
        className={cn(
          "text-2xl font-bold md:text-4xl text-center",
          montserrat.className
        )}
      >
        Innovate with Artificial Intelligence.
      </h1>
      <div className="md:text-lg text-center text-muted-foreground font-light text-sm flex justify-center w-full gap-1">
        <p>Aiwizard Uses</p>
        <div className="inline">
          <TypewriterComponent
            options={{
              strings: [
                "Creative AI.",
                "OpenAI Technology.",
                "AI Innovation.",
                "Tech for Enchantment.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="px-6 md:px-20 lg:px-32 space-y-4 py-12 flex justify-center w-full h-auto flex-col items-center ">
        {routes.map((route) => (
          <Card
            className={cn(
              " border-2 border-black/5 hover:bg-black/5 lg:w-[40rem] md:w-[30rem] sm:w-4/5 w-[93%] font-medium"
            )}
            key={route.href}
          >
            <Link href={route.href}>
              <div className="flex item-center px-4 py-2 gap-4">
                <div
                  className={cn(
                    "h-10 w-10 rounded-lg text-xl flex justify-center items-center",
                    route.bgColor,
                    route.color
                  )}
                >
                  {<route.icon />}
                </div>
                <div
                  className={cn(
                    "text-md  flex items-center ",
                    montserrat.className
                  )}
                >
                  <h3>{route.label}</h3>
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;
