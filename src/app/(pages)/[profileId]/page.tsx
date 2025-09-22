import ProjectCard from "@/app/componets/commons/project-card";
import TotalVisits from "@/app/componets/commons/total-visits";
import UserCard from "@/app/componets/commons/user-card";
import Button from "@/app/componets/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";


export default async function ProfilePage({
    params,
}: {
    params: Promise<{ profileId: string }>;
}) {
    
    const { profileId } = await params;

    return (
        <main className="relative h-full flex p-20 overflow-hidden mt-12 ">
            <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-background-tertiary">
                <span>Você está usando a versão trial.</span>
                <Link className="text-accent-green font-bold" href={`/${profileId}/upgrade`}>
                    Faça o upgrade agora!
                </Link>
            </div>
            <div className="w-1/2 flex justify-center h-min">
                <UserCard />
            </div>
            <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <Button className="w-[340px] h-[132px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center hover:border hover:border-dashed border-border-secondary">
                    <Plus className="size-10 text-accent-green" />
                    <span>Novo projeto</span>
                </Button>
            </div>
            <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
                <TotalVisits />
            </div>
        </main>
    );
}