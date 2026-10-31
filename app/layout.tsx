import type { Metadata } from "next";import "./globals.css";
export const metadata:Metadata={title:"Kareer360 | Psychometric Assessment",description:"Explore learning preferences, interests and possible career directions."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
