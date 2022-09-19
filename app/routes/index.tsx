import { Link } from "@remix-run/react";

export default function Index() {
    return (
        <div className="flex justify-center">
            <div className="prose lg:prose-xl py-10">
            <h1>Welcome to My Dummy Blog</h1>
                <div className="flex justify-center">
                    <Link className="text-right bg-black text-white text-xl border border-gray-500 px-4 py-3 rounded no-underline hover:text-decorition-0 animate-bounce" to="/blog">Go To Blog Page</Link>
                </div>
            </div>
        </div>
    );
  }
  