import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "GLOBAL INSIGHTS｜海外人物專題",
  description: "海外人物、旅居生活與真實故事的深度專題網站。"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body>
        <header style={{position:"sticky",top:0,zIndex:20,background:"rgba(255,255,255,.95)",borderBottom:"1px solid #e5e7eb"}}>
          <div className="container" style={{height:72,display:"flex",alignItems:"center",justifyContent:"space-between",gap:20}}>
            <Link href="/" className="serif" style={{fontSize:26,fontWeight:900}}>
              GLOBAL <span style={{color:"var(--red)"}}>INSIGHTS</span>
            </Link>
            <nav style={{display:"flex",gap:22,fontSize:14,fontWeight:700}}>
              <Link href="/">首頁</Link>
              <Link href="/interviews">人物專訪</Link>
              <Link href="/about">關於我們</Link>
              <Link href="/admin">管理後台</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer style={{marginTop:80,background:"#0f172a",color:"#cbd5e1",padding:"40px 0"}}>
          <div className="container">
            <div className="serif" style={{fontSize:20,fontWeight:900,color:"white"}}>GLOBAL INSIGHTS</div>
            <p style={{fontSize:13}}>海外人物專題・深度故事・真實生活</p>
          </div>
        </footer>
      </body>
    </html>
  );
}