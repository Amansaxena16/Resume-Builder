import Navbar from "../navbar/Navbar.jsx";
import { Button } from "@/components/ui/button"
import { MoveRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "../card/Card.jsx";
import { useUser } from "@clerk/clerk-react";

function Home() {
  const { isSignedIn, isLoaded } = useUser(); // Check if the user is signed in
  const targetPath = isSignedIn && isLoaded ? "/resume" : "/signIn";

  return (
    <>
      <div className="navbar">
        <Navbar/>

        <div className="py-12">
          <h1 className="text-center text-lg font-semibold"><Button>New</Button> Way to Build Resume </h1>
        </div>

        {/* main heading */}
        <div className="text-center">
          <h1 className="text-8xl font-bold">Build Your Resume <span className="text-[#FF7A00]">With AI</span> </h1>
          <h1 className="py-4 text-2xl text-slate-500">Effortlessly Craft a Standout Resume with Our AI-Powered Builder</h1>
        </div>

        {/* Mid get started button */}
        <div className="text-center py-6">
          <Link to={targetPath}>
            <Button>Get Started</Button>
          </Link>
        </div>

      {/* How it work div start from here */}
      <div className="text-center pt-4">
        <h1 className="text-3xl font-bold">How it Work?</h1>
      </div>

      <div className="flex">

            {/* card 1 */}
            <Card
                title="Instant Resume Generation" 
                content="Craft your resume effortlessly with our AI-powered tool that quickly gathers your input and creates a professional resume in just a few clicks. " 
            />

            {/* Card 2 */}
            <Card 
                title="Real-Time Preview" 
                content="Get real-time feedback and content suggestions as you build your resume. Our AI helps craft strong bullet points, refine job descriptions, and recommend keywords to boost your chances with recruiters and ATS." 
            />

            {/* Card 3 */}
            <Card 
                title="Share & Start Accepting" 
                content="Easily share your AI-generated resume with employers or recruiters using a unique link. Start accepting job offers and interview requests directly through our platform, streamlining your application process." 
            />
            </div>
      {/* end here */}

      {/* last get started button */}
      <div className="text-center py-6">
          <Link to={targetPath}>
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
