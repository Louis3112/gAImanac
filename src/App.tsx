import gAImanacIcon from "./assets/gAImanac_logo.svg";
import profilePict from "./assets/profile_pict.svg";
import aiIcon from "./assets/ai_star.svg";
import { PanelRight, MessageSquare, CircleHelp, Settings, LogOut, Info, Send, Trash } from 'lucide-react';
import { Button } from "./components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const App = () => {
  return (
    <div className="min-h-screen flex text-white bg-zinc-800">

      {/* Left Sidebar */}
      <aside className="w-[280px] h-screen p-6 flex flex-col space-y-6 justify-between bg-zinc-950">
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between w-full">
          {/* g AImanac logo and name */}
          <div className="flex gap-3">
            <img src={gAImanacIcon} alt="gAImanac Icon" className="w-6 h-6"/>
            <h1 className="text-xl text-white">gAImanac</h1>
          </div>
          {/* Sidebar button */}
          <Button className="cursor-pointer" variant={"ghost"} size={"sm"}>
            <PanelRight className="opacity-60"/>
          </Button>
        </div>
        
        {/* Navbar */}
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

          <div className="flex justify-between mt-4 pt-4 border-t border-zinc-700">
            <a href="#" className="text-sm text-white mt-1">Log out</a>
            <Button className="cursor-pointer" variant={"ghost"}>
              <LogOut/>
            </Button>
          </div>
        </div>
      </aside>

      <main id="main-content" className="flex-1 flex items-center justify-center">
        <div className="w-full min-w-sm max-w-4xl rounded-xl p-6 shadow-lg space-y-14 bg-zinc-900">
          
          {/* Chatbot Header */}
          <div id="chat-header" className="flex flex-col gap-0">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">AI Chat</h2>
            <div className="flex items-center gap-4">
              <Button variant={"ghost"} className="cursor-pointer bg-zinc-700">
                <Info className="opacity-60"/>
              </Button>
              <Avatar>
                <AvatarImage src={profilePict} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <hr className="border-zinc-700 mt-4 w-full" />
        </div>
          
          {/* Chatbot Body */}
          <div id="chat-body" className="space-y-6">

            {/* User Message */}
            <div className="flex items-start justify-start gap-3">
            <Avatar className="self-end">
                <AvatarImage src={profilePict} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="p-4 rounded-lg bg-zinc-800 max-w-2xl">
                <p className="font-bold text-white mb-2">You</p>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea non sequi quaerat, dolor velit aspernatur ut facilis quia iusto veniam recusandae reiciendis deserunt, accusamus exercitationem blanditiis. Ducimus vitae dolorem sunt aut culpa sequi esse quidem ipsam sapiente suscipit eveniet ut officia animi autem nisi inventore ea quo blanditiis voluptatibus repudiandae, tempora magni voluptatum! Vitae, cum expedita atque, minima asperiores dolorem nemo impedit possimus quas animi, dolores eos aliquid optio perspiciatis modi odit rem! Beatae quam nisi ab, nesciunt amet repellendus quae hic laboriosam corrupti et iusto? Dicta ipsum dolorum alias recusandae? Deserunt, sit impedit explicabo optio nisi veniam fugit ducimus.</p>
              </div>
            </div>
          </div>

            {/* Bot Message */}
            <div className="flex items-start justify-start gap-3">
              <img src={gAImanacIcon} alt="gAImanac Icon" className="self-end w-8 h-8" />
              <div className="p-4 rounded-lg bg-blue-900 max-w-2xl">
                <p className="font-bold text-white mb-2">gAImanac</p>
                <p className="text-sm">Welcome Adventurer, what can I do for you?</p>
              </div>
            </div>

          {/* Chatbot Footer */}
          <div id="chat-footer" className="pt-4 border-t border-zinc-700">
            <form action="#" className="flex items-center gap-3">
              <input type="text" placeholder="Start prompting, and we do the rest👌" className="flex-1 p-3 rounded-lg bg-zinc-800 text-white text-sm placeholder-opacity-50" required />
              <Button className="cursor-pointer bg-blue-900 rounded-lg hover:bg-blue-700 transition">
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

      {/* Right Sidebar */}
      <aside className="w-[280px] h-screen p-6 flex flex-col space-y-8 justify-between bg-zinc-900">
        
        <div>
          {/* Sidebar Header */}
          <div className="flex justify-between mt-2">
            <h1 className="text-xl text-white">History</h1>
            <div className="px-3 py-1 rounded-md bg-zinc-800 text-white text-sm">
              <p>3/25</p> {/* current/ max list */}
            </div>
          </div> 
          <hr className="border-zinc-700 mt-5 w-full"/>
        </div>
        
        {/* List History */}
        <ul className="flex flex-col grow space-y-4">
          <li className="flex">
            {/* Square */}
            <label className="absolute w-6 h-6 border-2 rounded-sm cursor-pointer border-zinc-600 ">
              <input type="checkbox" className="peer hidden" />
              <div className="w-full h-full hover:bg-zinc-600 peer-checked:bg-white transition"></div>
            </label>
            
            {/* Name game and question */}
            <div className="flex flex-col text-white ml-10">
              <h3 className="text-base font-normal">The Witcher 3</h3>
              <p className="text-sm text-zinc-400 mt-2">
                How to get the best sword named “aerodnight” from blood and wine dlc?
              </p>
            </div>
          </li>

          <li className="flex">
            {/* Square */}
            <label className="absolute w-6 h-6 border-2 rounded-sm cursor-pointer border-zinc-600 ">
              <input type="checkbox" className="peer hidden" />
              <div className="w-full h-full hover:bg-zinc-600  peer-checked:bg-white transition"></div>
            </label>
            
            {/* Name game and question */}
            <div className="flex flex-col text-white ml-10">
              <h3 className="text-base font-normal">Red Dead Redemption 2</h3>
              <p className="text-sm text-zinc-400 mt-2">
               Who is Arthur Morgan from RDR 2?
              </p>
            </div>
          </li>

          <li className="flex">
            {/* Square */}
            <label className="absolute w-6 h-6 border-2 rounded-sm cursor-pointer border-zinc-600 ">
              <input type="checkbox" className="peer hidden" />
              <div className="w-full h-full hover:bg-zinc-600 peer-checked:bg-white transition"></div>
            </label>
            
            {/* Name game and question */}
            <div className="flex flex-col text-white ml-10">
              <h3 className="text-base font-normal">GTA VI</h3>
              <p className="text-sm text-zinc-400 mt-2">
               Is there any chance CJ came back as playable character on GTA VI?
              </p>
            </div>
          </li>
        </ul>

        <div className="flex justify-center">
          <Button className="cursor-pointer w-full bg-zinc-800" variant={"ghost"}>
            <Trash/>
            <p>Clear History</p>
          </Button>
        </div>
        
      </aside>
    </div>
  );
};

export default App;
