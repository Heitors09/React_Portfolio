import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="flex flex-col font-Merriweather text-white">
      404 Not Found
      <Link to="/">Home</Link>
    </div>
  );
}
