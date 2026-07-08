/* =======================================================================
   清六窯 — 網站資料檔
   -----------------------------------------------------------------------
   ★ 你只需要編輯這個檔案，index.html 完全不用動。
   ★ 等 YouTube 影片上傳後，把網址填進對應的 "" 引號中間即可。

   欄位說明：
     instagram ........ 首頁的 Instagram 連結
     intro ............ 「作家介紹」影片（每種語言一支）
     works[].url ...... 每件「作品介紹」影片（每種語言一支）

   語言代碼：JA=日本語  ZH=中文  KO=한국어  EN=English
   ※ 留空 "" 的連結，網頁上會自動顯示「準備中」，不會壞掉。

   更新狀態（2026-07-07）：
     ・作品影片：中村清吾 No.1–10、中村美穂 No.1–6，四語（JA/ZH/KO/EN）已全部填入
     ・作家介紹：中村清吾、中村美穂 四語皆已填入
     ・中村清吾 No.9（JA）：YouTube 端曾處理中，連結已先行放入
   ======================================================================= */

const SITE_DATA = {
  siteTitle: "清六窯",
  tagline: "佐賀・有田｜白磁の窯元\n昭和41年開窯\n白磁の曲線美を受け継ぎ、今へ\n中村清吾の制作と\n窯の日々を家族の視点で綴っています",

  // ★ 首頁的外部連結
  instagram: "https://www.instagram.com/seirokugama/",
  website: "https://seirokugama.jp/",

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
        JA: "https://www.youtube.com/shorts/UwzD42PRmNM",
        ZH: "https://www.youtube.com/shorts/XBcLm_ch8Ak",
        KO: "https://www.youtube.com/shorts/voyJlgiU9Qs",
        EN: "https://www.youtube.com/shorts/Uhe_ZQj72pE"
      },

      // ★ 作品介紹（共 10 件，No.1–9 已填，No.10 待補）
      works: [
        {
          no: 1,
          name: { JA: "白磁壺Ⅰ", ZH: "白瓷罐Ⅰ", KO: "백자 항아리 Ⅰ", EN: "White Porcelain Jar Ⅰ" },
          url:  {
            JA: "https://www.youtube.com/watch?v=4efv65Jea2E",
            ZH: "https://www.youtube.com/watch?v=SiOr-Eigh50",
            KO: "https://www.youtube.com/watch?v=_tOZU6AG1zY",
            EN: "https://www.youtube.com/watch?v=gVnUpgwR_RA"
          }
        },
        {
          no: 2,
          name: { JA: "白磁壺Ⅱ", ZH: "白瓷罐Ⅱ", KO: "백자 항아리 Ⅱ", EN: "White Porcelain Jar Ⅱ" },
          url:  {
            JA: "https://www.youtube.com/shorts/94DIzd24iSE",
            ZH: "https://www.youtube.com/shorts/FLJezuWNXco",
            KO: "https://www.youtube.com/shorts/fCUvCQPYIH4",
            EN: "https://www.youtube.com/shorts/wM6OUCSSMJw"
          }
        },
        {
          no: 3,
          name: { JA: "白磁香炉", ZH: "白瓷香炉", KO: "백자 향로", EN: "White Porcelain Incense Burner" },
          url:  {
            JA: "https://www.youtube.com/watch?v=YCM84VPItTA",
            ZH: "https://www.youtube.com/watch?v=YbWQ74Ht3UQ",
            KO: "https://www.youtube.com/watch?v=AX-Ezf9eOnk",
            EN: "https://www.youtube.com/watch?v=1NYlqu0RnX4"
          }
        },
        {
          no: 4,
          name: { JA: "白磁花入", ZH: "白瓷花瓶", KO: "백자 화병", EN: "White Porcelain Flower Vessel" },
          url:  {
            JA: "https://www.youtube.com/shorts/z7f36YuCtAY",
            ZH: "https://www.youtube.com/shorts/UdNuGmTRdvU",
            KO: "https://www.youtube.com/shorts/q98Ud6u1fwQ",
            EN: "https://www.youtube.com/shorts/0UknpA4yMUE"
          }
        },
        {
          no: 5,
          name: { JA: "白磁珈琲碗", ZH: "白瓷咖啡杯", KO: "백자 커피잔", EN: "White Porcelain Coffee Cup" },
          url:  {
            JA: "https://www.youtube.com/shorts/Vi32BJtXIEc",
            ZH: "https://www.youtube.com/shorts/Cqj8MA57PBg",
            KO: "https://www.youtube.com/shorts/Ux27-ecYJCk",
            EN: "https://www.youtube.com/shorts/zx9IE-8iD6U"
          }
        },
        {
          no: 6,
          name: { JA: "白磁紅茶碗", ZH: "白瓷红茶杯", KO: "백자 홍차잔", EN: "White Porcelain Teacup" },
          url:  {
            JA: "https://www.youtube.com/shorts/j-0WIedLiuo",
            ZH: "https://www.youtube.com/shorts/heas4RyDEo8",
            KO: "https://www.youtube.com/shorts/aoYWbP-y-1s",
            EN: "https://www.youtube.com/shorts/ry6iQHTLFBg"
          }
        },
        {
          no: 7,
          name: { JA: "白磁茶器", ZH: "白瓷茶具", KO: "백자 다기 세트", EN: "White Porcelain Tea Vessel" },
          url:  {
            JA: "https://www.youtube.com/watch?v=OsY7i3LokQM",
            ZH: "https://www.youtube.com/watch?v=ExyiMJgvFhs",
            KO: "https://www.youtube.com/watch?v=1NW5BPwjHQ0",
            EN: "https://www.youtube.com/watch?v=2GOqg-4zqDU"
          }
        },
        {
          no: 8,
          name: { JA: "白磁酒器セット", ZH: "白瓷酒具套装", KO: "백자 주기(술기) 세트", EN: "Set of White Porcelain Sake Vessels" },
          url:  {
            JA: "https://www.youtube.com/watch?v=6hStTbpSrTo",
            ZH: "https://www.youtube.com/watch?v=mwjNgF_u6ro",
            KO: "https://www.youtube.com/watch?v=dosxZB5zFOw",
            EN: "https://www.youtube.com/watch?v=MbVkaE59uzE"
          }
        },
        {
          no: 9,
          name: { JA: "白磁松竹梅三角湯呑み(小)", ZH: "白瓷松竹梅三角小汤吞（松竹梅纹）", KO: "백자 송죽매 삼각 찻잔 (소)", EN: "White Porcelain Triangular Yunomi Teacup, Sho-Chiku-Bai design (Small)" },
          url:  {
            JA: "https://www.youtube.com/watch?v=VCAf7H03_dQ",
            ZH: "https://www.youtube.com/watch?v=SK--gfXUtIU",
            KO: "https://www.youtube.com/watch?v=Eq05qnysx4U",
            EN: "https://www.youtube.com/watch?v=P8Jb2dh2i5I"
          }
        },
        {
          no: 10,
          name: { JA: "白磁松竹梅三角湯呑み(大)", ZH: "白瓷松竹梅三角大汤吞（松竹梅纹）", KO: "백자 송죽매 삼각 찻잔 (대)", EN: "White Porcelain Triangular Yunomi Teacup, Sho-Chiku-Bai design (Large)" },
          url:  {
            JA: "https://www.youtube.com/watch?v=E3rlkb3U-5Q",
            ZH: "https://www.youtube.com/watch?v=iUd12vReTKc",
            KO: "https://www.youtube.com/watch?v=492Z_fOw3Uo",
            EN: "https://www.youtube.com/watch?v=ScT3-GlnOFQ"
          }
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

      // ★ 作家介紹影片（四語各一支）
      intro: {
        JA: "https://www.youtube.com/shorts/-s2OlGmAYg0",
        ZH: "https://www.youtube.com/shorts/hmQdsHQbJu4",
        KO: "https://www.youtube.com/shorts/5ntyfrdlwyI",
        EN: "https://www.youtube.com/shorts/7DmALjk5j6A"
      },

      works: [
        {
          no: 1,
          name: { JA: "白の軌跡 ピアス", ZH: "白之轨迹 耳环", KO: "하얀 궤적 귀걸이(피어스)", EN: "Traces of White Earrings" },
          url:  {
            JA: "https://www.youtube.com/shorts/ykS9pThKd7c",
            ZH: "https://www.youtube.com/shorts/sLHFAwhfdTA",
            KO: "https://www.youtube.com/shorts/mVMaWBf-YmM",
            EN: "https://www.youtube.com/shorts/cOFkKP4FgQw"
          }
        },
        {
          no: 2,
          name: { JA: "白扇 ピアス", ZH: "白扇 耳环", KO: "백선(흰 부채) 귀걸이(피어스)", EN: "White Fan Earrings" },
          url:  {
            JA: "https://www.youtube.com/shorts/F5MJIjO-Y0o",
            ZH: "https://www.youtube.com/shorts/qPDt0OEltfA",
            KO: "https://www.youtube.com/shorts/luNAdeHRTCQ",
            EN: "https://www.youtube.com/shorts/8OG_RZSnWA4"
          }
        },
        {
          no: 3,
          name: { JA: "白扇 イヤリング", ZH: "白扇 夹式耳环", KO: "백선(흰 부채) 이어링(클립식)", EN: "White Fan Ear Clips" },
          url:  {
            JA: "https://www.youtube.com/shorts/-BA8QYCKkoI",
            ZH: "https://www.youtube.com/shorts/FCZaJVm39oY",
            KO: "https://www.youtube.com/shorts/vcwGATkF2Qc",
            EN: "https://www.youtube.com/shorts/fAa6WPSTcpc"
          }
        },
        {
          no: 4,
          name: { JA: "白扇 ネックレス", ZH: "白扇 项链", KO: "백선(흰 부채) 목걸이", EN: "White Fan Necklace" },
          url:  {
            JA: "https://www.youtube.com/shorts/NtVnM-KHr5A",
            ZH: "https://www.youtube.com/shorts/lOMXmIjlAtA",
            KO: "https://www.youtube.com/shorts/5mzQ6L8HFZQ",
            EN: "https://www.youtube.com/shorts/PF1xz-ivC0g"
          }
        },
        {
          no: 5,
          name: { JA: "飛翔 ブローチ Ⅰ", ZH: "飞翔 胸针 Ⅰ", KO: "비상 브로치 Ⅰ", EN: "Soaring Bird Brooch Ⅰ" },
          url:  {
            JA: "https://www.youtube.com/shorts/LG-jePK1nAw",
            ZH: "https://www.youtube.com/shorts/93asWYUx4Lo",
            KO: "https://www.youtube.com/shorts/7RgyRYIiHHc",
            EN: "https://www.youtube.com/shorts/tr2OYn_PjNU"
          }
        },
        {
          no: 6,
          name: { JA: "飛翔 ブローチ Ⅱ", ZH: "飞翔 胸针 Ⅱ", KO: "비상 브로치 Ⅱ", EN: "Soaring Bird Brooch Ⅱ" },
          url:  {
            JA: "https://www.youtube.com/shorts/Xfp-0jc45qU",
            ZH: "https://www.youtube.com/shorts/BywTGIaIr4E",
            KO: "https://www.youtube.com/shorts/N7I5UBui_74",
            EN: "https://www.youtube.com/shorts/hF2_Sum5FmY"
          }
        }
      ]
    }
  ]
};
