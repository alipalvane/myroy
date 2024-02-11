import { Button } from "@/components/ui/button"
import Image from "next/image"
export const EmptyBoards = ()=>{
    return(
        <div className="h-full flex flex-col items-center justify-center">
            <Image src="/empty-boards.png" height={150} width={150} alt="empty"/>
            <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
            <p className="text-muted-foreground text-sm mt-2">start by creating a board...!</p>
            <div className="mt-6">
                <Button size="lg">
                    Create board
                </Button>
            </div>
        </div>
    )
}