import React, { useState } from "react"
import Back from "@/components/Back"
import Logo from "@/components/Logo"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import { Lock, LockOpen, UserPlus } from "lucide-react"
import DateTimeDisplay from "@/utils/Date"
import Controls from "./Controls"
import { LuUsers } from "react-icons/lu"
import { IoChatbubbleOutline } from "react-icons/io5"
import { BsInfoLg } from "react-icons/bs"

const SpaceWrapper = ({ children }: { children: React.ReactNode }) => {
  const [hidden, setHidden] = useState(false)

  return (
    <section className=" bg-secondary h-screen flex items-center p-2 ">
      <div className="relative flex-grow flex flex-col items-center justify-center h-screen">
        <header
          className={`w-full p-2 pl-0 ${
            hidden ? "absolute top-0 z-50 group h-14" : ""
          }`}
        >
          {hidden && (
            <div className="h-3 w-full absolute top-0 left-0 group-hover:cursor-pointer" />
          )}
          <div
            className={`
          flex items-center justify-between  p-2.5 w-full
          transition-all duration-300 ease-in-out
          ${
            hidden
              ? "transform -translate-y-[calc(100%+8px)] group-hover:translate-y-0 bg-background rounded-t-xl border border-primary-border "
              : "rounded-xl border border-primary-border bg-background  "
          }
        `}
          >
            <div className="flex items-center gap-2">
              <Back />
              <Logo />
              <div className="h-5 border-l border-primary-border px-1" />
              <div className=" text-secondary-text font-medium text-sm">
                Gruz's Space
              </div>
            </div>
            <div className=" flex gap-2 items-center">
              <div className="flex items-center gap-2 py-[0.57rem] px-3 rounded-md hover:bg-primary-hover/80 transition-all duration-200 bg-primary-hover cursor-pointer select-none">
                <UserPlus size={17} />
                <span className="font-medium text-[15px] leading-tight">
                  Invite
                </span>
              </div>
              <div
                title={hidden ? "Lock" : "Unlock"}
                onClick={() => setHidden(!hidden)}
                className="flex items-center p-2.5 rounded-md hover:bg-primary-hover/80 transition-all duration-200 bg-primary-hover cursor-pointer select-none"
              >
                {hidden ? <LockOpen size={17} /> : <Lock size={17} />}
              </div>
            </div>
          </div>
        </header>
        <div
          className={` w-full h-full ${hidden ? "p-2 pl-0" : "px-2 pb-2 pl-0"}`}
        >
          {children}
        </div>
        <div className="fixed bottom-0 w-full h-24 group">
          <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-200 ease-in-out fixed bottom-6 left-6 items-center gap-2 flex">
            <DateTimeDisplay />
            <div className="h-5 border-r border-primary-border px-1" />
            <div>YUMNSK-KSM</div>
          </div>
          <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-200 ease-in-out absolute bottom-6 left-1/2 transform -translate-x-1/2 flex">
            <Controls />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-full gap-2">
        <div className=" flex flex-col justify-center items-center border border-primary-border h-full w-[200px] rounded-xl bg-background">
          space
        </div>
        <div className="bg-background p-2 w-[70px] rounded-xl h-full flex flex-col justify-between items-center border border-primary-border">
          <div className="py-2">
            <ThemeSwitcher scrolled={false} />
          </div>
          <div className="flex flex-col gap-2">
            <button className="p-2 w-full text-lg flex flex-col gap-0.5 justify-center items-center rounded-md hover:bg-primary-hover/80 transition-all duration-200 bg-primary-hover cursor-pointer select-none">
              <BsInfoLg />
              <span className="text-xs text-secondary-text">Info</span>
            </button>
            <button className="p-2 w-full text-lg flex flex-col gap-0.5 justify-center items-center rounded-md hover:bg-primary-hover/80 transition-all duration-200 cursor-pointer select-none">
              <LuUsers />
              <span className="text-xs text-secondary-text">Users</span>
            </button>
            <button className="p-2 w-full text-lg flex flex-col gap-0.5 justify-center items-center rounded-md hover:bg-primary-hover/80 transition-all duration-200 cursor-pointer select-none">
              <IoChatbubbleOutline />
              <span className="text-xs text-secondary-text">Chat</span>
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default SpaceWrapper
