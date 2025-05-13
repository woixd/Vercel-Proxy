[中文](https://github.com/fssxg/Vercel-Proxy/blob/main/README_%E4%B8%AD%E6%96%87.md)/[EN](https://github.com/fssxg/Vercel-Proxy/blob/main/README.md)

# 🌐 Vercel Universal Proxy Service (Supports API / Web)

This is a lightweight proxy service based on Vercel, which can be used to bypass CORS restrictions, access remote resources, forward APIs, and other common scenarios.

---

## ✨ Features

- ✅ Supports proxying requests for web pages / APIs / any URLs  
- ✅ Simple URL format: `/?url=https://example.com`  
- ✅ Automatically forwards content-type  
- ✅ No server required, deploy directly on Vercel  
- ✅ Supports up to 100MB by default (Vercel limitation)  

---

## 🚀 One-Click Deployment (Recommended)

Click the button below to automatically deploy to your Vercel account:

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/import?s=https://github.com/fssxg/vercel-proxy)



---

## 🛠 How to Use

Once deployed, you can access the proxy interface using the following format:

```
https://your-vercel-app.vercel.app/?url=https://example.com
```

Replace `https://example.com` with the URL you want to request. It supports common APIs, web pages, JSON, and other resources.

### Example:

```
https://your-vercel-app.vercel.app/?url=https://api.github.com
```

---

## 🧠 Frequently Asked Questions

### Q: What can this project be used for?

- API interfaces  
- Avoiding CORS restrictions when requesting interfaces  
- Remotely fetching JSON, HTML, images, etc.  
- Accelerating static content  

### Q: Are there any limitations?

- Vercel's default response size limit is 100MB. Anything larger cannot be used.  
- For very large files or download tasks, it is recommended to use [Cloudflare-Workers-Proxy](https://github.com/fssxg/Cloudflare-Workers-Proxy).

---

## ❤️ Open Source License

MIT License – free to use / modify / extend.  
If you like this project, feel free to ⭐Star it in support!
