"use client";

import dynamic from "next/dynamic";

const Profile3D = dynamic(() => import("@/components/profile-3d"), {
  ssr: false,
});

export default Profile3D;