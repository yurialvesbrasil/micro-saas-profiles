import { Github, Instagram, Linkedin, Plus, Twitter } from "lucide-react";
import Button from "../ui/button";
import Image from "next/image";

export default function UserCard() {
    const icons = [Github, Instagram, Linkedin, Twitter, Plus];

    return (
        <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
            <Image
                src="/perfil.jpg"
                alt="André Dev"
                width={192}
                height={192}
                className="rounded-full object-cover w-full h-full"
            />

            <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-2">
                    <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
                        André Dev
                    </h3>
                </div>
                <p className="opacity-40">"Eu faço produtos para a Internet"</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <span className="uppercase text-xs font-medium">Links</span>

                <div className="flex gap-3 mt-4">
                    {icons.map((Icon, index) => (
                        <Button
                            key={index.toString()}
                            className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
                        >
                            <Icon />
                        </Button>
                    ))}
                </div>

                <div className="flex flex-col gap-3 w-full h-[172px]  items-center mt-4">
                    <Button className="w-full">Confira meu template SaaS
                    </Button>

                    <Button className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E] w-fit">
                        <Plus />
                    </Button>
                </div>
            </div>
        </div>

    );
}