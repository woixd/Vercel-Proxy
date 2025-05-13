# vercel-proxy

一个可以部署在 [Vercel](https://vercel.com) 的通用 API + Web 动态代理服务。

## 🌐 功能简介

- 动态代理网页或 API 请求
- 解决 CORS 问题，适合浏览器、前端开发或工具使用
- 一键部署，支持设置 Token 授权（可选）
- 默认开放，无需 Token 即可访问

## 🚀 一键部署

点击下方按钮部署到你的 Vercel：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/fssxg/vercel-proxy)

## 📦 使用方法

### 基本访问

```
https://your-vercel-app.vercel.app/?url=https://example.com
```

### 携带 Token（如果设置了）

```
https://your-vercel-app.vercel.app/?url=https://example.com&token=your-secret-token
```

## ⚙️ 可选环境变量

| 名称 | 说明 | 示例 |
|------|------|------|
| PROXY_TOKENS | 允许的访问 token，多个用逗号分隔 | token1,abc123,xyz |

> 如果未设置该变量，则默认所有人都可以访问。

## 📄 License

MIT
