import GoogleButton from "@/components/GoogleButton";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Signin = async () => {
  const providers = await getProviders();
  return (
    <div className="flex justify-center space-x-7 mt-20">
      <Image
        className="hidden object-cover rotate-6 md:inline-flex md:w-2/4"
        src="https://www.v-user.com/images/web-blog/pages/instagram-sign-up/instagram-sign-in-banner.webp"
        alt="instagram logo"
        width={400}
        height={400}
      />
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <Image
              className="w-32 object-cover "
              src="https://seeklogo.com/images/I/instagram-logo-7596E83E98-seeklogo.com.png"
              alt="instagram logo"
              width={200}
              height={200}
            />
            <p className="text-sm italic my-10 text-center">
              This app is created for learning purposes
            </p>
            <GoogleButton provider={provider} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Signin;
