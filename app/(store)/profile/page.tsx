"use client";
import { useUser } from "@/app/context/UserContext";
import { UserType } from "@/app/types";
import Profile from "@/app/ui/profile/profile";

export default function Page() {
  const {user} = useUser();
  return <Profile user={user as UserType}/>
}