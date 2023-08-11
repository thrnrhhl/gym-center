import { HeaderLink, IconLogo } from "../../shared/ui/";
import { Button } from "../../shared/ui/shadcn/ui/button";

export function Header() {
    return (
        <header className="flex justify-between items-center py-[24px] container">
            <div className="flex-1">
                <IconLogo />
            </div>
            <div className="flex items-center gap-[24px]">
                <nav className="flex gap-[16px]">
                    <HeaderLink name="Home" />
                    <HeaderLink name="Program" />
                    <HeaderLink name="Pricing" />
                    <HeaderLink name="Community" />
                </nav>
                <div className="flex items-center gap-[12px]">
                    <Button variant="outline" className="border border-[#fff] text-[#fff] bg-[none] px-[28px] rounded-[10px]">Login</Button>
                    <Button variant="default" className="bg-[#097FD9] text-[#fff] px-[28px] rounded-[10px] font-[600]">Register</Button>
                </div>
            </div>
        </header>
    );
}