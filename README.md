# 🌐 通用内容代理服务器 (Vercel 版本)

这是一个零配置部署在 [Vercel](https://vercel.com/) 的动态内容代理服务，支持代理任意网页和 API 数据。

---

## 🚀 部署方法（推荐）

1. Fork 本仓库或下载代码上传到你的 GitHub。
2. 登录 [Vercel](https://vercel.com/) 并新建项目，绑定你的 GitHub 仓库。
3. 一键部署，无需配置。

---

## 🔗 使用方法

格式：

https://your-vercel-app.vercel.app/?url=https://example.com


示例：

https://my-proxy.vercel.app/?url=https://api.github.com

---

## ❓常见问题

### 1. 访问报错 500？

确保目标 URL 支持被外部服务器请求（无防爬、无验证码验证），并且 URL 是完整的 `https://` 开头地址。

### 2. 可以自定义功能限制吗？

可以！你可以根据需求自行添加如下功能（可选）：

- ✅ Token 校验（通过 Vercel 环境变量）
- ✅ 限制特定域名访问
- ✅ 缓存静态内容

---

## 🧰 技术栈

- Node.js + Express 风格函数
- Vercel Serverless Function
- node-fetch

---

## 🔐 安全说明（默认不开启认证）

为了简单，当前版本不做任何访问限制。**如部署在公共地址，请注意不要滥用**，必要时添加 Token 校验：

```js
const validTokens = (process.env.TOKENS || '').split(',');

const token = req.query.token;
if (process.env.TOKENS && !validTokens.includes(token)) {
  res.status(403).send('Invalid token');
  return;
}
并在 Vercel 设置中添加环境变量：

TOKENS=your-secret-token-1,your-secret-token-2
