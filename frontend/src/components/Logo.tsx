import Image from "next/image"
import React from "react"

const Logo = () => {
  return <div className="flex items-center gap-2">
    <Image
      src="/img/logo/logo.png"
      className="size-7"
      alt="bordre"
      width={40}
      height={40}
    />
    <h1 className="text-xl font-semibold">bordre</h1>
  </div>
}

export default Logo
