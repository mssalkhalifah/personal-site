import Description from "@/components/profile/description";
import Profile from "@/components/profile/profile";

export default function Page() {
  return (
    <div className="flex w-1/2 flex-col">
      <Profile />
      <Description />
    </div>
  );
}
