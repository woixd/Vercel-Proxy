# Vercel API & Web Proxy

这是一个基于 Node.js 的轻量级代理服务，支持部署到 Vercel 平台，适合快速抓取网页数据或中转请求。

## ✨ 功能

- 支持 HTTP GET 请求
- 支持传入 `url` 参数进行代理
- 可选 Token 认证（通过 Vercel 环境变量设置）
- 可部署到 Vercel，支持 Web 和 API 双用途

## 🚀 使用方式

### 1. 参数说明

- `url`: 要代理访问的目标地址（必填）
- `token`: 可选认证 Token（如果启用了认证）

### 2. 示例

**不限制 Token：**

```
https://your-vercel-app.vercel.app/?url=https://example.com
```

**启用 Token 认证：**

在 Vercel 中设置环境变量：

```
PROXY_TOKENS=abc123,xyz456
```

请求方式：

```
https://your-vercel-app.vercel.app/?url=https://example.com&token=abc123
```

### 3. 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/your-username/vercel-api-web-proxy)

---

## 📁 项目结构

```
.
├── index.js
├── vercel.json
└── README.md
```

## 🛠 后续可拓展功能

- 支持 POST 请求
- Header/Cookie 透传
- 限速/防盗链
- 支持自定义 CORS 策略

欢迎提出建议！