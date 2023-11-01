import React, {useState} from "react";

import { Route,Routes } from "react-router-dom";

import { Home,Profile,FriendsList,FriendChat,Events,EventDetails,CommunityChat,Communities } from "./pages";

import { NavBar } from "./components";

export default function App() 
{
  const [showNavBar,setShowNavBar] = useState(true);

  return (
    <div className="h-screen">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/friends" element={<FriendsList />} />
      <Route path="/friends/chat" element={<FriendChat />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/details" element={<EventDetails />} />
      <Route path="/communities" element={<CommunityChat />} />
      <Route path="/community/chat" element={<Communities />} />
    </Routes>

    {showNavBar && <NavBar />}

    </div>
  )
}
