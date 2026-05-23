# 广州耀威包装有限公司 - 企业官网

## 项目概述

耀威包装企业官网重建项目，采用现代化技术栈构建，解决原网站被黑问题，提供更安全、美观、高效的企业展示平台。

## 技术栈

- **Astro** - 静态站点生成器，极速加载
- **TailwindCSS** - 实用优先的 CSS 框架
- **TypeScript** - 类型安全
- **Content Collections** - Markdown 内容管理

## 项目结构

```
yaowei-website/
├── src/
│   ├── content/          # 内容集合 (Markdown)
│   │   ├── products/     # 产品数据
│   │   └── news/         # 新闻数据
│   ├── pages/            # 页面路由
│   │   ├── index.astro           # 中文首页
│   │   ├── about.astro           # 关于我们
│   │   ├── contact.astro         # 联系我们
│   │   ├── news.astro            # 新闻列表
│   │   ├── news/[slug].astro     # 新闻详情
│   │   ├── honors.astro          # 资质荣誉
│   │   ├── products/
│   │   │   ├── index.astro       # 产品列表
│   │   │   └── [slug].astro      # 产品详情
│   │   ├── en/                   # 英文页面
│   │   │   ├── index.astro
│   │   │   ├── about.astro
│   │   │   ├── contact.astro
│   │   │   ├── news.astro
│   │   │   ├── news/[slug].astro
│   │   │   ├── products/
│   │   │   │   ├── index.astro
│   │   │   │   └── [slug].astro
│   │   │   └── honors.astro
│   │   ├── 404.astro             # 404 页面
│   │   └── sitemap.xml.ts        # Sitemap
│   ├── components/       # 可复用组件
│   │   └── FloatingContact.astro # 悬浮联系按钮
│   ├── layouts/          # 页面布局
│   └── i18n/             # 多语言配置
└── public/               # 静态资源
```

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 内容管理

### 添加产品

在 `src/content/products/` 下创建 `.md` 文件：

```markdown
---
title: "产品名称"
category: "pe"  # pe, pet, cap, pp, new
description: "产品描述"
image: "/images/products/xxx.jpg"
specifications:
  capacity: "100mL"
  material: "PE"
featured: true
order: 1
---

产品详细内容（支持 Markdown）
```

### 添加新闻

在 `src/content/news/` 下创建 `.md` 文件：

```markdown
---
title: "新闻标题"
date: 2025-05-23
category: "公司新闻"  # 技术文章, 公司新闻, 行业动态, 展会信息
excerpt: "新闻摘要"
featured: true
---

新闻正文（支持 Markdown）
```

## 已实现功能

- [x] 响应式设计 (移动端优先)
- [x] 中英双语支持
- [x] 现代化 UI 设计
- [x] SEO 优化 (meta tags, Open Graph, 结构化数据, canonical, hreflang)
- [x] 在线询盘表单
- [x] 产品展示 (列表 + 详情 + 分类筛选)
- [x] 新闻中心 (列表 + 详情)
- [x] 资质荣誉展示
- [x] Content Collections 内容管理
- [x] 双工厂地图 (新和/鳌头) + 导航链接 (高德/百度/腾讯)
- [x] Sitemap.xml 自动生成
- [x] Robots.txt
- [x] 404 页面
- [x] 悬浮联系按钮 (电话/WhatsApp/微信)
- [x] 返回顶部按钮
- [x] 完整英文页面
- [ ] 产品图片资源 (需替换占位符)
- [ ] 工厂视频嵌入
- [ ] 询盘邮件通知
- [ ] 部署上线

## 部署

### Vercel 部署 (推荐)

1. 访问 [vercel.com](https://vercel.com)
2. 导入 `uykb/yaowei-web` 仓库
3. 设置:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. 点击 **Deploy**
5. 绑定自定义域名 `gzyaowei.cn`

## 联系方式

- 电话: 13710080413
- 手机: 13710082243
- 地址: 广州市白云区钟落潭镇广从九路1019号
