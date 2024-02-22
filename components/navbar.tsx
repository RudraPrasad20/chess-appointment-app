"use client"

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <Link href="/">
                <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/courses">hacking</HoveredLink>
               <HoveredLink href="/courses">web</HoveredLink>
               <HoveredLink href="/courses">app</HoveredLink>
               <HoveredLink href="/courses">data</HoveredLink>
               <HoveredLink href="/courses">ai</HoveredLink>
            </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contact">
                <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">phone</HoveredLink>
            <HoveredLink href="/contact">mail</HoveredLink>
            </div>
            </MenuItem>
        </Menu>
        </div>
  )
}

export default Navbar