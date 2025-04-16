import gAImanacIcon from "./assets/gAImanac_logo.svg";
import profilePict from "./assets/profile_pict.svg";
import aiIcon from "./assets/ai_star.svg";
import { PanelRight, MessageSquare, CircleHelp, Settings, LogOut, Info, Send } from 'lucide-react';
import { Button } from "./components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const App = () => {
  return (
    <div className="min-h-screen flex text-white bg-[#09090B]">

      {/* Left Sidebar */}
      <aside className="w-[280px] h-screen p-6 flex flex-col space-y-6 justify-between bg-[#09090B]">
        <div className="flex items-center justify-between w-full">

          {/* gAImanac logo and name */}
          <div className="flex gap-3">
            <img src={gAImanacIcon} alt="gAImanac Icon" className="w-6 h-6"/>
            <h1 className="text-xl text-white">gAImanac</h1>
          </div>

          {/* sidebar button */}
          <Button className="cursor-pointer" variant={"ghost"} size={"sm"}>
            <PanelRight className="opacity-60"/>
          </Button>

        </div>
        
        {/* navbar */}
        <nav className="flex flex-col grow items-start space-y-2 mx-4">
          
          {/* AI Chat */}
          <Button variant={"ghost"} size={"default"}>
            <a href="#" className="flex items-center gap-3">
            <MessageSquare/>
            <span className="text-md font-normal">AI Chat</span>
            </a>
          </Button> 

          {/* Updates & FAQ */}
          <Button variant={"ghost"} size={"default"}>
            <a href="#" className="flex items-center gap-3">
            <CircleHelp/>
            <span className="text-md font-normal">Updates & FAQ</span>
            </a>
          </Button> 

          {/* Updates & FAQ */}
          <Button variant={"ghost"} size={"default"}>
            <a href="#" className="flex items-center gap-3">
            <Settings/>
            <span className="text-md font-normal">Settings</span>
            </a>
          </Button> 
          
        </nav>

          {/* Upgrade Plan */}
        <div className="">
          <div className="bg-gradient-to-r from-blue-950 to-blue-800 text-white p-4 rounded-xl ">
            <img src={aiIcon} alt="AI Icon" className="mb-2" />
            <h3 className="text-md mb-1">Upgrade Plan</h3>
            <p className="text-xs opacity-70 mb-5">More access to the best models</p>
            <div className="flex items-center justify-between">
              <p className="text-xs">Rp 250.000 / month</p>
              <Button className="cursor-pointer bg-white text-black hover:bg-green-800 hover:text-white">Get</Button>
            </div>
          </div>

          <div className="flex justify-between mt-4 pt-4 border-t border-[#2e2e32]">
            <a href="#" className="text-sm text-white mt-1">Log out</a>
            <Button className="cursor-pointer" variant={"ghost"}>
              <LogOut/>
            </Button>
          </div>
        </div>
      </aside>

      <main id="main-content" className="flex-1 flex items-center justify-center">
        <div className="w-full min-w-sm max-w-4xl rounded-xl p-6 shadow-lg space-y-14 bg-[#1F1F24]">
          
          {/* Chatbot Header */}
          <div id="chat-header" className="flex flex-col gap-0">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">AI Chat</h2>
            <div className="flex items-center gap-4">
              <Button variant={"ghost"} className="cursor-pointer">
                <Info/>
              </Button>
              <Avatar>
                <AvatarImage src={profilePict} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <hr className="border-[#3F3F46] mt-4 w-full" />
        </div>
          
          {/* Chatbot Body */}
          <div id="chat-body" className="space-y-6">

            {/* User Message */}
            <div className="flex items-start justify-start gap-3">
            <Avatar className="self-end">
                <AvatarImage src={profilePict} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="p-4 rounded-lg bg-[#27272A] max-w-2xl">
                <p className="font-bold text-white mb-2">You</p>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea non sequi quaerat, dolor velit aspernatur ut facilis quia iusto veniam recusandae reiciendis deserunt, accusamus exercitationem blanditiis. Ducimus vitae dolorem sunt aut culpa sequi esse quidem ipsam sapiente suscipit eveniet ut officia animi autem nisi inventore ea quo blanditiis voluptatibus repudiandae, tempora magni voluptatum! Vitae, cum expedita atque, minima asperiores dolorem nemo impedit possimus quas animi, dolores eos aliquid optio perspiciatis modi odit rem! Beatae quam nisi ab, nesciunt amet repellendus quae hic laboriosam corrupti et iusto? Dicta ipsum dolorum alias recusandae? Deserunt, sit impedit explicabo optio nisi veniam fugit ducimus.</p>
              </div>
            </div>
          </div>

            {/* Bot Message */}
            <div className="flex items-start justify-start gap-3">
              <img src={gAImanacIcon} alt="gAImanac Icon" className="self-end w-8 h-8" />
              <div className="p-4 rounded-lg bg-[#1C398E] max-w-2xl">
                <p className="font-bold text-white mb-2">gAImanac</p>
                <p className="text-sm">Welcome Adventurer, what can I do for you?</p>
              </div>
            </div>

          {/* Chatbot Footer */}
          <div id="chat-footer" className="pt-4 border-t border-[#2e2e32]">
            <form action="#" className="flex items-center gap-3">
              <input type="text" placeholder="Start prompting, and we do the rest👌" className="flex-1 p-3 rounded-lg bg-[#27272A] text-white text-sm placeholder-opacity-50" required />
              <Button className="cursor-pointer bg-[#1C398E] rounded-lg hover:bg-[#3055e0] transition">
                <Send/>
              </Button>
            </form>

            <div className="flex justify-center">
              <div className="mt-3 text-xs text-white opacity-50">
                <span className="font-medium">gAlmanac</span> can make mistakes. Check Important
                <a href="#" className="text-blue-600 underline ml-1 hover:text-white">info here.</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Left Sidebar */}
      <aside className="w-[280px] h-screen p-6 flex flex-col space-y-8 justify-between bg-[#09090B]">
        <div className="flex items-center justify-between w-full">

          {/* gAImanac logo and name */}
          <div className="flex gap-3">
            <img src={gAImanacIcon} alt="gAImanac Icon" className="w-6 h-6"/>
            <h1 className="text-xl text-white">gAImanac</h1>
          </div>
          {/* sidebar button */}
          <button><span className="material-symbols-outlined mt-2 opacity-40 rounded-lg justify-end">dock_to_right</span></button>
        </div>
        
        {/* navbar */}
        <nav className="flex flex-col grow items-start space-y-4 mx-4">
          {/* AI Chat */}
          <a href="#" className="flex items-center gap-3 mb-1 hover:text-[#1C398E] transition">
          <span className="material-symbols-outlined text-lg">chat_bubble</span>
          <span className="text-md">AI Chat</span>
          </a>
          {/* Updates & FAQ */}
          <a href="#" className="flex items-center gap-3 text-md mb-8 hover:text-[#1C398E] transition">
          <span className="material-symbols-outlined text-lg">help</span>
          <span className="text-md">Updates & FAQ</span>
          </a>
          {/* Settings */}
          <a href="#" className="flex items-center gap-3 text-md mb-2 hover:text-[#1C398E] transition">
          <span className="material-symbols-outlined text-lg">settings</span>
          <span className="text-md ">Settings</span>
          </a>
        </nav>

          {/* Upgrade Plan */}
        <div className="">
          <div className="bg-gradient-to-r from-blue-950 to-blue-800 text-white p-4 rounded-xl ">
            <img src={aiIcon} alt="AI Icon" className="mb-2" />
            <h3 className="text-md mb-1">Upgrade Plan</h3>
            <p className="text-xs opacity-70 mb-5">More access to the best models</p>
            <div className="flex items-center justify-between">
              <p className="text-xs">Rp 250.000 / month</p>
              <button className="text-[#09090B] font-medium text-sm px-4 py-1 rounded-md bg-white">Get</button>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#2e2e32]">
            <a href="#" className="flex justify-between ">
            <span className="text-sm text-white">Log out</span>
            <span className="material-symbols-outlined ">logout</span>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default App;
