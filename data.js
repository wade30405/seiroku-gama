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

   更新狀態（2026-07-06）：
     ・作品影片：中村清吾 No.1–10、中村美穂 No.1–6 已全部填入
     ・作家介紹：中村清吾、中村美穂 四語皆已填入
     ・中村清吾 No.9（JA）：YouTube 端仍處理中，連結已先行放入
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
            ZH: "https://www.youtube.com/watch?v=K48nKAjEq84",
            KO: "https://www.youtube.com/watch?v=-JFymFtOh3g",
            EN: "https://www.youtube.com/watch?v=gVnUpgwR_RA"
          }
        },
        {
          no: 2,
          name: { JA: "白磁壺Ⅱ", ZH: "白瓷罐Ⅱ", KO: "백자 항아리 Ⅱ", EN: "White Porcelain Jar Ⅱ" },
          url:  {
            JA: "https://www.youtube.com/shorts/94DIzd24iSE",
            ZH: "https://www.youtube.com/watch?v=EftF08J3nto",
            KO: "https://www.youtube.com/watch?v=K2RqaC4eXRg",
            EN: "https://www.youtube.com/shorts/wM6OUCSSMJw"
          }
        },
        {
          no: 3,
          name: { JA: "白磁香炉", ZH: "白瓷香炉", KO: "백자 향로", EN: "White Porcelain Incense Burner" },
          url:  {
            JA: "https://www.youtube.com/watch?v=YCM84VPItTA",
            ZH: "https://www.youtube.com/watch?v=gqSDdNtAoJs",
            KO: "https://www.youtube.com/watch?v=kmjokRhGwVc",
            EN: "https://www.youtube.com/watch?v=1NYlqu0RnX4"
          }
        },
        {
          no: 4,
          name: { JA: "白磁花入", ZH: "白瓷花瓶", KO: "백자 화병", EN: "White Porcelain Flower Vessel" },
          url:  {
            JA: "https://www.youtube.com/shorts/z7f36YuCtAY",
            ZH: "https://www.youtube.com/shorts/7dRZdDaPJnY",
            KO: "https://www.youtube.com/shorts/H3d4sQQKo7U",
            EN: "https://www.youtube.com/shorts/0UknpA4yMUE"
          }
        },
        {
          no: 5,
          name: { JA: "白磁珈琲碗", ZH: "白瓷咖啡杯", KO: "백자 커피잔", EN: "White Porcelain Coffee Cup" },
          url:  {
            JA: "https://www.youtube.com/shorts/Vi32BJtXIEc",
            ZH: "https://www.youtube.com/shorts/vrCUkdXxU0s",
            KO: "https://www.youtube.com/shorts/1wDfaWHR3jY",
            EN: "https://www.youtube.com/shorts/zx9IE-8iD6U"
          }
        },
        {
          no: 6,
          name: { JA: "白磁紅茶碗", ZH: "白瓷红茶杯", KO: "백자 홍차잔", EN: "White Porcelain Teacup" },
          url:  {
            JA: "https://www.youtube.com/shorts/j-0WIedLiuo",
            ZH: "https://www.youtube.com/shorts/Wboum1chJP8",
            KO: "https://www.youtube.com/shorts/veW1E6IbQTk",
            EN: "https://www.youtube.com/shorts/ry6iQHTLFBg"
          }
        },
        {
          no: 7,
          name: { JA: "白磁茶器", ZH: "白瓷茶具", KO: "백자 다기 세트", EN: "White Porcelain Tea Vessel" },
          url:  {
            JA: "https://www.youtube.com/watch?v=OsY7i3LokQM",
            ZH: "https://www.youtube.com/watch?v=NNSY-wSbVck",
            KO: "https://www.youtube.com/watch?v=drh9-OUpKsM",
            EN: "https://www.youtube.com/watch?v=2GOqg-4zqDU"
          }
        },
        {
          no: 8,
          name: { JA: "白磁酒器セット", ZH: "白瓷酒具套装", KO: "백자 주기(술기) 세트", EN: "Set of White Porcelain Sake Vessels" },
          url:  {
            JA: "https://www.youtube.com/watch?v=6hStTbpSrTo",
            ZH: "https://www.youtube.com/watch?v=9JFCz1x3la0",
            KO: "https://www.youtube.com/watch?v=MFqPtz5NIRA",
            EN: "https://www.youtube.com/watch?v=MbVkaE59uzE"
          }
        },
        {
          no: 9,
          name: { JA: "白磁松竹梅三角湯呑み(小)", ZH: "白瓷松竹梅三角小汤吞（松竹梅纹）", KO: "백자 송죽매 삼각 찻잔 (소)", EN: "White Porcelain Triangular Yunomi Teacup, Sho-Chiku-Bai design (Small)" },
          url:  {
            JA: "https://www.youtube.com/watch?v=VCAf7H03_dQ",
            ZH: "https://www.youtube.com/watch?v=cpGlREz82-o",
            KO: "https://www.youtube.com/watch?v=U-uF0eDJz20",
            EN: "https://www.youtube.com/watch?v=P8Jb2dh2i5I"
          }
        },
        {
          no: 10,
          name: { JA: "白磁松竹梅三角湯呑み(大)", ZH: "白瓷松竹梅三角大汤吞（松竹梅纹）", KO: "백자 송죽매 삼각 찻잔 (대)", EN: "White Porcelain Triangular Yunomi Teacup, Sho-Chiku-Bai design (Large)" },
          url:  {
            JA: "https://www.youtube.com/watch?v=E3rlkb3U-5Q",
            ZH: "https://www.youtube.com/watch?v=k4bfiEyY5c8",
            KO: "https://www.youtube.com/watch?v=n1fG_sYKUdA",
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
            JA: "https://www.youtube.com/shorts/c4cTKwRTx7M",
            ZH: "https://www.youtube.com/shorts/KTbjaRhvJNI",
            KO: "https://www.youtube.com/shorts/WGzEiqpvOZ8",
            EN: "https://www.youtube.com/shorts/9gQQRfhkihY"
          }
        },
        {
          no: 2,
          name: { JA: "白扇 ピアス", ZH: "白扇 耳环", KO: "백선(흰 부채) 귀걸이(피어스)", EN: "White Fan Earrings" },
          url:  {
            JA: "https://www.youtube.com/shorts/UNVY4p4k_Vk",
            ZH: "https://www.youtube.com/shorts/tlqd2N67JYQ",
            KO: "https://www.youtube.com/shorts/r8WChzDOvvg",
            EN: "https://www.youtube.com/shorts/vsN26gT8csk"
          }
        },
        {
          no: 3,
          name: { JA: "白扇 イヤリング", ZH: "白扇 夹式耳环", KO: "백선(흰 부채) 이어링(클립식)", EN: "White Fan Ear Clips" },
          url:  {
            JA: "https://www.youtube.com/shorts/FbDnJhYAMkA",
            ZH: "https://www.youtube.com/shorts/tpdH_JzC_Ms",
            KO: "https://www.youtube.com/shorts/xtQHwh2Sk0s",
            EN: "https://www.youtube.com/shorts/swOs-_Tgl2Y"
          }
        },
        {
          no: 4,
          name: { JA: "白扇 ネックレス", ZH: "白扇 项链", KO: "백선(흰 부채) 목걸이", EN: "White Fan Necklace" },
          url:  {
            JA: "https://www.youtube.com/shorts/L7eibYERp_s",
            ZH: "https://www.youtube.com/shorts/qBChWVu09Yw",
            KO: "https://www.youtube.com/shorts/LzUS6WLEnG8",
            EN: "https://www.youtube.com/shorts/rfq4IfrUvPc"
          }
        },
        {
          no: 5,
          name: { JA: "飛翔 ブローチ Ⅰ", ZH: "飞翔 胸针 Ⅰ", KO: "비상 브로치 Ⅰ", EN: "Soaring Bird Brooch Ⅰ" },
          url:  {
            JA: "https://www.youtube.com/shorts/vL100xV2elw",
            ZH: "https://www.youtube.com/shorts/mqBum79SS60",
            KO: "https://www.youtube.com/shorts/h_BfsiqB0fM",
            EN: "https://www.youtube.com/shorts/Tu9IKJTw-HQ"
          }
        },
        {
          no: 6,
          name: { JA: "飛翔 ブローチ Ⅱ", ZH: "飞翔 胸针 Ⅱ", KO: "비상 브로치 Ⅱ", EN: "Soaring Bird Brooch Ⅱ" },
          url:  {
            JA: "https://www.youtube.com/shorts/qIcP-ft2gsE",
            ZH: "https://www.youtube.com/shorts/Tr2Zm6Z6JhY",
            KO: "https://www.youtube.com/shorts/2BPb_ON6ZQE",
            EN: "https://www.youtube.com/shorts/UgycVdZT0iQ"
          }
        }
      ]
    }
  ]
};
