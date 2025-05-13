# 🌐 Vercel 通用代理服务 (支持 API / Web)

这是一个基于 Vercel 的轻量级代理服务，可用于绕过 CORS 限制、访问远程资源、API 转发等常见场景。

---

## ✨ 功能特点

- ✅ 支持网页 / 接口 / 任意 URL 的代理请求
- ✅ 不需要 Token，开箱即用
- ✅ 简洁 URL 格式：`/?url=https://example.com`
- ✅ 自动转发内容类型（Content-Type）
- ✅ 无需服务器，部署在 Vercel 即可
- ✅ 默认支持最大 100MB（由 Vercel 平台自动限制）

---

## 🚀 一键部署（推荐）

点击下方按钮自动部署到你的 Vercel 账户中：

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/import?s=https://github.com/your-username/your-repo)

> ✅ **建议**：将项目 Fork 到自己的 GitHub，然后再部署。

---

## 🛠 使用方法

部署完成后，即可通过以下格式访问代理接口：

```
https://your-vercel-app.vercel.app/?url=https://example.com
```

将 `https://example.com` 替换为你想要请求的地址即可。支持常见 API、网页、JSON 等资源。

### 示例：

```
https://your-vercel-app.vercel.app/?url=https://api.github.com
```

---

## 🔧 进阶配置（可选）

- 项目基于 Vercel Serverless Function，支持自定义逻辑。
- 若需添加 Token 校验、大小限制、日志等功能，可扩展 `api/index.js`。

---

## 📦 项目结构

```
.
├── api
│   └── index.js       # 核心代理逻辑
├── vercel.json        # Vercel 路由配置（用于简化为根路径 /）
└── README.md          # 使用说明（当前文件）
```

---

## 🧠 常见问题

### Q: 这个项目可以干嘛？

- 请求接口时避免 CORS 限制
- 远程读取 JSON、HTML、图片等内容
- 把别人的 API 转发到你自己的前端里使用

### Q: 有限制吗？

- Vercel 的默认响应大小限制是 100MB，超出无法使用。
- 对于超大文件或下载任务，建议使用 VPS 自建代理。

---

## ❤️ 开源许可

MIT License - 免费商用 / 修改 / 扩展。
如果你喜欢这个项目，欢迎点 ⭐Star 支持！

---