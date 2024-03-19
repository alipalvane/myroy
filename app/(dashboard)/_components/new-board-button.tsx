"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}
export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const router = useRouter()
  const { mutate, pending } = useApiMutation(api.board.create);
  const onClick = () => {
    mutate({
      orgId: orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created successfully");
        router.push(`/board/${id}`)
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };

  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-brand rounded-lg hover:bg-violet-800 flex flex-col items-center justify-center py-6 transition-opacity",
        (pending || disabled) && "opacity-75 hover:bg-brand cursor-not-allowed"
      )}
    >
      <div />
      <Plus className="w-12 h-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">New Board</p>
    </button>
  );
};
