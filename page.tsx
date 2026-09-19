import Link from "next/link";
import { demoInterview } from "@/lib/article";

export default function Home() {
  return (
    <main>
      <section style={{background:"#0f172a",color:"white",padding:"90px 0"}}>
        <div className="container">
          <div style={{maxWidth:820}}>
            <div style={{color:"#fca5a5",fontWeight:800,fontSize:13,letterSpacing:2}}>海外人物專題・深度故事</div>
            <h1 className="serif" style={{fontSize:"clamp(38px,6vw,72px)",lineHeight:1.15,margin:"18px 0"}}>
              真實的人，<br/>真實的海外生活。
            </h1>
            <p style={{fontSize:18,lineHeight:1.9,color:"#cbd5e1"}}>
              GLOBAL INSIGHTS 專注記錄海外生活、打工度假與跨國人生故事。
              不只告訴你去哪裡，更記錄一個人在異國真正遇到什麼。
            </p>
          </div>
        </div>
      </section>

      <section className="container" style={{padding:"70px 0"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"end",marginBottom:24}}>
          <div>
            <div style={{color:"var(--red)",fontWeight:800,fontSize:13}}>LATEST STORY</div>
            <h2 className="serif" style={{fontSize:34,margin:"8px 0"}}>最新人物專訪</h2>
          </div>
          <Link className="btn btn-primary" href="/interviews">查看全部</Link>
        </div>

        <Link href={`/interviews/${demoInterview.slug}`} className="card" style={{display:"grid",gridTemplateColumns:"minmax(0,1.2fr) minmax(0,1fr)",overflow:"hidden"}}>
          <img src={demoInterview.cover} alt="" style={{width:"100%",height:"100%",minHeight:330,objectFit:"cover"}} />
          <div style={{padding:32}}>
            <div className="muted" style={{fontSize:12,fontWeight:800}}>{demoInterview.category} ・ {demoInterview.date}</div>
            <h3 className="serif" style={{fontSize:30,lineHeight:1.4}}>{demoInterview.title}</h3>
            <p style={{lineHeight:1.9,color:"#475569"}}>{demoInterview.subtitle}</p>
            <span style={{color:"var(--red)",fontWeight:800}}>閱讀完整專訪 →</span>
          </div>
        </Link>
      </section>
    </main>
  );
}