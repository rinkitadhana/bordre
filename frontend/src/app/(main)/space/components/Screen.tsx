"use client"
import React from "react"
import { useSocket } from "@/context/socket"
import usePeer from "@/hooks/usePeer";
import useMediaStream from "@/hooks/useMediaStream";
import Player from "./Player";

const Screen = () => {
  const socket = useSocket();
  const {peer, myId} = usePeer();
  const {stream} = useMediaStream();
  return (
    <div className="flex h-full gap-2">
      <div className="bg-background rounded-xl h-full w-full flex justify-center items-center border border-primary-border relative">
        <Player 
          playerId={myId}
          url={stream}
          muted
          playing
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-4 left-4 bg-primary-hover px-3 py-1.5 rounded-lg text-foreground text-sm">
          You
        </div>
      </div>
      <div className="bg-background rounded-xl h-full w-full flex justify-center items-center border border-primary-border relative">
        <video 
          id="user-2" 
          autoPlay 
          playsInline
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-4 left-4 bg-primary-hover px-3 py-1.5 rounded-lg text-foreground text-sm">
          Remote User
        </div>
      </div>
    </div>
  )
}

export default Screen
