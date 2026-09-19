export type Interview = {
  slug: string;
  title: string;
  subtitle: string;
  interviewee: string;
  locations: string;
  cover: string;
  date: string;
  category: string;
  questions: { category: string; question: string; answer: string }[];
  highlights: { title: string; text: string }[];
};

export const demoInterview: Interview = {
  slug: "japan-working-holiday-survival",
  title: "極限雪景與獨自生存的磨練：日本打工度假現場紀錄",
  subtitle: "深入採訪受訪者 A 小姐的跨國紀實：北海道知床流冰漫步、代辦護照拼音錯誤危機，以及在九州飯店獨自面對日語實戰的九個月生存故事。",
  interviewee: "受訪者：A 小姐",
  locations: "北海道／九州・飯店與餐飲",
  cover: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
  date: "2026-09-19",
  category: "日本打工度假",
  questions: [
    {
      category: "出發動機與追星",
      question: "當初報名日本打工度假的最主要動機是什麼呢？",
      answer: "最主要就是想看雪跟滑雪！因為以前從來沒有去過那麼冷的地方。第二個是因為我很喜歡聽音樂，第一站選北海道，所以順便抽了一堆日本演唱會，就是去看雪、滑雪還有追星！"
    },
    {
      category: "找工作與代辦雷點",
      question: "當初的工作與住宿是如何尋找的？過程中有遇到什麼雷點嗎？",
      answer: "第一份北海道飯店工作是透過台灣代辦對接日本派遣公司，整體媒合不錯，但被雷到了！代辦把我的英文護照拼音弄錯了，導致日本郵局提款卡無法領取被退回三重總部，卡了好久薪水差點發不出來！後來第二份九州飯店餐廳外場，我就直接從派遣公司網站自己挑。為了省去租房前期的龐大開銷，我兩份工作都堅決找『包吃包住』的職缺。"
    },
    {
      category: "文化體驗與個人收穫",
      question: "在文化感受與個人心態上，這一年帶給你最大的收穫是什麼呢？",
      answer: "文化部分，九州飯店的大浴場與泡完湯喝冰牛奶的儀式感讓我深深愛上！還有在九州食堂遇到一位日本姐姐，得知我是台灣人後拉著我的手說「非常感謝台灣311大地震對日本的幫助」，離職時還送了我一堆禮物。最大的收穫是「學會一個人生活」，因為全公司只有我一個外國人，讓我的獨立能力與日語實戰力飛躍提升！"
    },
    {
      category: "給後輩的核心建議",
      question: "最後，給未來的打工度假後輩，你有什麼最核心的建議與推薦的話？",
      answer: "多帶一點錢！建議戶頭準備約 30 萬日幣加 4 萬台幣緊急預備金。錢帶夠才不用為了生存無休止加班。還有既然都出國了，就放開胸懷去體驗，快樂最重要！"
    }
  ],
  highlights: [
    { title: "出發動機", text: "北海道賞雪滑雪，以及抽日本音樂演唱會門票。" },
    { title: "雷點警示", text: "代辦護照英文拼音填寫出錯，導致郵局開戶退件延誤發薪。" },
    { title: "極限體驗", text: "知床流冰漫步，穿防寒衣漂浮在零下海面冰層。" },
    { title: "關鍵建議", text: "帶足資金（約 30 萬日幣＋4 萬台幣）；首選包吃包住職缺減輕壓力。" }
  ]
};