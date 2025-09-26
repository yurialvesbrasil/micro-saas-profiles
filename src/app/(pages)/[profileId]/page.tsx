import ProjectCard from "@/app/componets/commons/project-card";
import TotalVisits from "@/app/componets/commons/total-visits";
import UserCard from "@/app/componets/commons/user-card";
import Link from "next/link";
import NewProject from "./new-project";
import { getProfileData } from "@/app/server/get-profile-data";
import { notFound } from "next/navigation";
import { auth } from "@/app/lib/auth";


export default async function ProfilePage({
    params,
}: {
    params: Promise<{ profileId: string }>;
}) {
    
    const { profileId } = await params;

    const profileData = await getProfileData(profileId);

    if (!profileData) return notFound();

    // TODO: get projects

    const session = await auth();

    const isOwner = profileData.userId === session?.user?.id;

    // TODO: Adicionar page view

    // Se o usuario não estiver mais no trial, nao deixar ver o projeto. Redirecionar para upgrade

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
                 {isOwner && <NewProject profileId={profileId} />}
            </div>
            <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
                <TotalVisits />
            </div>
        </main>
    );
}