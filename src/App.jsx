import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Quiz from "./pages/Quiz.jsx";
import WrongBook from "./pages/WrongBook.jsx";
import Stats from "./pages/Stats.jsx";
import Settings from "./pages/Settings.jsx";

const TABS = [
  { to: "/", label: "首頁", icon: "🏠" },
  { to: "/wrong", label: "錯題本", icon: "✏️" },
  { to: "/stats", label: "統計", icon: "📊" },
  { to: "/settings", label: "設定", icon: "⚙️" },
];

function BottomNav() {
  const { pathname } = useLocation();
  if (pathname.startsWith("/quiz")) return null;
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white/90 backdrop-blur dark:border-gray-800 dark:bg-gray-900/90">
      <div className="mx-auto flex max-w-xl">
        {TABS.map((t) => {
          const active =
            t.to === "/" ? pathname === "/" : pathname.startsWith(t.to);
          return (
            <Link
              key={t.to}
              to={t.to}
              className={`flex flex-1 flex-col items-center gap-0.5 py-2 text-xs ${
                active
                  ? "text-brand-600 dark:text-brand-500"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              <span className="text-xl">{t.icon}</span>
              <span>{t.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <div className="mx-auto min-h-full max-w-xl pb-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:mode" element={<Quiz />} />
        <Route path="/quiz/:mode/:param" element={<Quiz />} />
        <Route path="/wrong" element={<WrongBook />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <BottomNav />
    </div>
  );
}
