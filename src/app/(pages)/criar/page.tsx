import TextInput from "@/app/componets/ui/text-input";
import { Rocket } from "lucide-react";
import Button from "@/app/componets/ui/button";
import Header from "@/app/componets/landing-page/header";
import CreateLinkForm from "./create-link-form";

export default function CreatePage() {
    return (
        <>
            <Header />
            <main className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
                <div className="flex items-center gap-4">
                    <h1 className="text-4xl font-bold text-white">Escolha seu link</h1>
                    <Rocket className="size-10" />
                </div>
                <CreateLinkForm />
            </main>
        </>
    );
}