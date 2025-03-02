import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react"

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center bg-stone-200 min-w-screen max-w-screen min-h-screen max-h-screen">
        <div className="bg-white p-16 border-2 border-stone-200 rounded-2xl space-y-12">
            <div className="space-y-4">
                <img src="/logo.svg" className="justify-self-center w-16 h-16"/>
                <h1 className="font-bold text-4xl -tracking-wide text-center">JumpLink</h1>   
            </div>
            <div className="flex">
                <input type="text" className="w-full bg-gray-50 p-2.5 border-3 border-gray-300 text-gray-900 text-base focus:outline-none focus:border-blue-500" />
                <Link aria-label="Try Redirecting" to="/example.com" className="flex items-center justify-center font-medium px-4 no-underline text-white text-base bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                    <ExternalLink size={24} />
                </Link>
            </div>
        </div>
    </div>
  );
};

export default LandingPage;
