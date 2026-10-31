import Link from "next/link";
import { Logo } from "./components/Logo";

export default function NotFound(){return <main className="noise grid min-h-screen place-items-center bg-ink p-6 text-white"><div className="max-w-lg text-center"><div className="flex justify-center"><Logo/></div><p className="mt-10 text-sm font-bold uppercase tracking-[.25em] text-signal">Page not found</p><h1 className="mt-3 text-5xl font-black">This route does not exist.</h1><p className="mt-5 text-muted">Return to the assessment home page to begin or restore your saved progress.</p><Link href="/" className="focus-ring mt-8 inline-flex rounded-full bg-signal px-7 py-4 font-black text-black">Go to home</Link></div></main>}
