import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { defineClientConfig } from "vuepress/client";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Wynncraft中文攻略",
  description: "Wynncraft中文攻略",

  theme,
  
  head: [
    // ...

    // 导入相应链接
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Noto+Sans+SC&display=swap",
        rel: "stylesheet",
      },
    ],
    
    ['link', { rel: 'Minecraft', href: '/assets/font/Minecraft.ttf' }],
  ],
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      autoSuggestions: false,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
  /*plugins: [
    oml2dPlugin({
      // 在这里配置选项
      menus: {
        // 在这里配置
        disable:true,

      },
      
      models: [
        {
          path: 'https://raw.githubusercontent.com/EternityTQ/WynncraftCNguide/main/src/.vuepress/public/09kohane_unit/09kohane_unit.model3.json',
          scale: 0.12,
          position: [-10, 90],
          volume: 0.1,
          showHitAreaFrames:true,
          
          motionPreloadStrategy: "Start",
          stageStyle: {
            width: 350
          },
          
        }
      ]
    })

    //  ...other plugins
  ],*/

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
