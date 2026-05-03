import ProfileSidebar from "@/app/ui/profile/sidebar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row mx-auto max-w-7xl mt-4 px-2 lg:px-4 gap-2">
      <div className="bg-white w-full rounded p-4">
        <ProfileSidebar />
      </div>
      <div className="bg-white min-w-3/4 rounded p-4">{children}</div>
    </div>
  );
}
