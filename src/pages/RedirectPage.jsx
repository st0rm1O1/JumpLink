import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoaderCircle } from "lucide-react";

const RedirectPage = () => {
  let { slug } = useParams();

  useEffect(() => {
    if (slug) {
      setTimeout(() => {
        window.location.href = `//${slug}`;
      }, 2000);
    }
  }, [slug]);

  return (
    <div className="flex items-center justify-center bg-stone-200 min-w-screen max-w-screen min-h-screen max-h-screen">
        <div className="bg-white p-14 border-2 border-stone-200 rounded-2xl space-y-8 text-center">
            <div className="flex items-center justify-center">
                <LoaderCircle className="animate-spin w-14 h-14 text-stone-600" />
            </div>
            <div className="text-lg font-medium">
                <h2>Redirecting to <code>{slug}</code></h2>
            </div>
        </div>
    </div>
  );
};

export default RedirectPage;
