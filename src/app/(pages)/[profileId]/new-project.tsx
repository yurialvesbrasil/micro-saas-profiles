"use client";

import Button from "@/app/componets/ui/button";
import Modal from "@/app/componets/ui/modal";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function NewProject({ profileId }: { profileId: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button
        onClick={handleOpenModal}
        className="w-[340px] h-[132px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center hover:border hover:border-dashed border-border-secondary"
      >
        <Plus className="size-10 text-accent-green" />
        <span>Novo projeto</span>
      </Button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="border p-10">Hello World</div>
      </Modal>
    </>
  );
}