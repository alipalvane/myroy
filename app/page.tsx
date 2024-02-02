import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>This is just for client</div>
      <div>
        <UserButton/>
      </div>
    </div>
  );
}
