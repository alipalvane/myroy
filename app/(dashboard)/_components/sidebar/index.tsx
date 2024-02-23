import { List } from "./list";
import { NewButton } from "./new-button";

export const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-brand h-full w-[60px] flex flex-col p-3 gap-y-4 text-white">
      <List/>
      <NewButton/>
    </aside>
  );
};

