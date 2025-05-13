## 🌐 [中文](https://github.com/fssxg/Vercel-Proxy/blob/main/README_%E4%B8%AD%E6%96%87.md)/[EN](https://github.com/fssxg/Vercel-Proxy/blob/main/README.md)

---

# Vercel 通用代理服务 (支持 API / Web)

这是一个基于 Vercel 的轻量级代理服务，可用于绕过 CORS 限制、访问远程资源、API 转发等常见场景。

---

## ✨ 功能特点

- ✅ 支持网页 / API / 任意 URL 的代理请求
- ✅ 简洁 URL 格式：`/?url=https://example.com`
- ✅ 自动转发内容类型（Content-Type）
- ✅ 无需服务器，部署在 Vercel 即可
- ✅ 默认支持最大 100MB（Vercel限制）

---

## 🚀 一键部署（推荐）

点击下方按钮自动部署到你的 Vercel 账户中：

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/import?s=https://github.com/fssxg/vercel-proxy)



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

## 🧠 常见问题

### Q: 这个项目可以干嘛？

- API接口
- 请求接口时避免 CORS 限制
- 远程读取 JSON、HTML、图片等内容
- 静态内容加速


### Q: 有限制吗？

- Vercel 的默认响应大小限制是 100MB，超出无法使用。
- 对于超大文件或下载任务，建议使用 [Cloudflare-Workers-Proxy](https://github.com/fssxg/Cloudflare-Workers-Proxy)。

---

## ❤️ 开源许可

MIT License - 免费 / 修改 / 扩展。  
如果你喜欢这个项目，欢迎点 ⭐Star 支持！
