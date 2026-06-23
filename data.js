/* =======================================================================
   青六窯 — 網站資料檔
   -----------------------------------------------------------------------
   ★ 你只需要編輯這個檔案，index.html 完全不用動。
   ★ 等 YouTube 影片上傳後，把網址填進對應的 "" 引號中間即可。

   欄位說明：
     instagram ........ 首頁的 Instagram 連結
     intro ............ 「作家介紹」影片（每種語言一支）
     works[].url ...... 每件「作品介紹」影片（每種語言一支）

   語言代碼：JA=日本語  ZH=中文  KO=한국어  EN=English
   ※ 留空 "" 的連結，網頁上會自動顯示「準備中」，不會壞掉。
   ======================================================================= */

const SITE_DATA = {
  siteTitle: "清六窯",
  tagline: "佐賀・有田｜白磁の窯元\n昭和41年開窯\n白磁の曲線美を受け継ぎ、今へ\n中村清吾の制作と\n窯の日々を家族の視点で綴っています",

  // ★ 首頁的 Instagram 連結（晚點貼）
  instagram: "",

  artists: [
    /* ===================== 中村清吾（器皿・全10件） ===================== */
    {
      id: "seigo",
      name: {
        JA: "中村清吾",
        ZH: "中村清吾",
        KO: "나카무라 세이고",
        EN: "Nakamura Seigo"
      },

      // ★ 作家介紹影片（四語各一支）
      intro: {
        JA: "",
        ZH: "",
        KO: "",
        EN: ""
      },

      // ★ 作品介紹（共 10 件，名稱已填好，只需補 url）
      works: [
        {
          no: 1,
          name: { JA: "白磁壺Ⅰ", ZH: "白瓷罐Ⅰ", KO: "백자 항아리 Ⅰ", EN: "White Porcelain Jar Ⅰ" },
          url:  { JA: "", ZH: "", KO: "", EN: "" }
        },
        {
          no: 2,
          name: { JA: "白磁壺Ⅱ", ZH: "白瓷罐Ⅱ", KO: "백자 항아리 Ⅱ", EN: "White Porcelain Jar Ⅱ" },
          url:  { JA: "", ZH: "", KO: "", EN: "" }
        },
        {
          no: 3,
          name: { JA: "白磁香炉", ZH: "白瓷香炉", KO: "백자 향로", EN: "White Porcelain Incense Burner" },
          url:  { JA: "", ZH: "", KO: "", EN: "" }
        },
        {
          no: 4,
          name: { JA: "白磁花入", ZH: "白瓷花瓶", KO: "백자 화병", EN: "White Porcelain Flower Vessel" },
          url:  { JA: "", ZH: "", KO: "", EN: "" }
        },
        {
          no: 5,
          name: { JA: "白磁珈琲碗", ZH: "白瓷咖啡杯", KO: "백자 커피잔", EN: "White Porcelain Coffee Cup" },
          url:  { JA: "", ZH: "", KO: "", EN: "" }
        },
        {
          no: 6,
          name: { JA: "白磁紅茶碗", ZH: "白瓷红茶杯", KO: "백자 홍차잔", EN: "White Porcelain Teacup" },
          url:  { JA: "", ZH: "", KO: "", EN: "" }
        },
        {
          no: 7,
          name: { JA: "白磁茶器", ZH: "白瓷茶具", KO: "백자 다기 세트", EN: "White Porcelain Tea Vessel" },
          url:  { JA: "", ZH: "", KO: "", EN: "" }
        },
        {
          no: 8,
          name: { JA: "白磁酒器セット", ZH: "白瓷酒具套装", KO: "백자 주기(술기) 세트", EN: "Set of White Porcelain Sake Vessels" },
          url:  { JA: "", ZH: "", KO: "", EN: "" }
        },
        {
          no: 9,
          name: { JA: "白磁松竹梅三角湯呑み(小)", ZH: "白瓷松竹梅三角小汤吞（松竹梅纹）", KO: "백자 송죽매 삼각 찻잔 (소)", EN: "White Porcelain Triangular Yunomi Teacup, Sho-Chiku-Bai design (Small)" },
          url:  { JA: "", ZH: "", KO: "", EN: "" }
        },
        {
          no: 10,
          name: { JA: "白磁松竹梅三角湯呑み(大)", ZH: "白瓷松竹梅三角大汤吞（松竹梅纹）", KO: "백자 송죽매 삼각 찻잔 (대)", EN: "White Porcelain Triangular Yunomi Teacup, Sho-Chiku-Bai design (Large)" },
          url:  { JA: "", ZH: "", KO: "", EN: "" }
        }
      ]
    },

    /* ===================== 中村美穂（飾品・全6件） ===================== */
    {
      id: "miho",
      name: {
        JA: "中村美穂",
        ZH: "中村美穂",
        KO: "나카무라 미호",
        EN: "Nakamura Miho"
      },

      intro: {
        JA: "",
        ZH: "",
        KO: "",
        EN: ""
      },

      works: [
        {
          no: 1,
          name: { JA: "白の軌跡 ピアス", ZH: "白之轨迹 耳环", KO: "하얀 궤적 귀걸이(피어스)", EN: "Traces of White Earrings" },
          url:  { JA: "", ZH: "", KO: "", EN: "" }
        },
        {
          no: 2,
          name: { JA: "白扇 ピアス", ZH: "白扇 耳环", KO: "백선(흰 부채) 귀걸이(피어스)", EN: "White Fan Earrings" },
          url:  { JA: "", ZH: "", KO: "", EN: "" }
        },
        {
          no: 3,
          name: { JA: "白扇 イヤリング", ZH: "白扇 夹式耳环", KO: "백선(흰 부채) 이어링(클립식)", EN: "White Fan Ear Clips" },
          url:  { JA: "", ZH: "", KO: "", EN: "" }
        },
        {
          no: 4,
          name: { JA: "白扇 ネックレス", ZH: "白扇 项链", KO: "백선(흰 부채) 목걸이", EN: "White Fan Necklace" },
          url:  { JA: "", ZH: "", KO: "", EN: "" }
        },
        {
          no: 5,
          name: { JA: "飛翔 ブローチ Ⅰ", ZH: "飞翔 胸针 Ⅰ", KO: "비상 브로치 Ⅰ", EN: "Soaring Bird Brooch Ⅰ" },
          url:  { JA: "", ZH: "", KO: "", EN: "" }
        },
        {
          no: 6,
          name: { JA: "飛翔 ブローチ Ⅱ", ZH: "飞翔 胸针 Ⅱ", KO: "비상 브로치 Ⅱ", EN: "Soaring Bird Brooch Ⅱ" },
          url:  { JA: "", ZH: "", KO: "", EN: "" }
        }
      ]
    }
  ]
};
