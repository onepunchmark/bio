# bio[index.html](https://github.com/user-attachments/files/30148973/index.html)
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="One Punch Mark – Anime-News, deutsche Synchros, Empfehlungen und exklusive Rabatte." />
  <title>One Punch Mark</title>
  <style>
    :root {
      --bg: #0b0b10;
      --card: rgba(20, 20, 30, 0.78);
      --text: #ffffff;
      --muted: #b7b7c6;
      --accent: #7c3aed;
      --accent-2: #ff7a00;
      --border: rgba(255,255,255,0.12);
      --shadow: 0 18px 50px rgba(0,0,0,.45);
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      min-height: 100vh;
      font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at 20% 10%, rgba(124,58,237,.28), transparent 30%),
        radial-gradient(circle at 85% 20%, rgba(255,122,0,.18), transparent 26%),
        linear-gradient(180deg, #0a0a0e 0%, #11111a 100%);
      display: flex;
      justify-content: center;
      padding: 28px 16px 48px;
    }

    .wrap {
      width: 100%;
      max-width: 470px;
    }

    .hero {
      text-align: center;
      margin-bottom: 22px;
    }

    .avatar {
      width: 108px;
      height: 108px;
      margin: 0 auto 14px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-size: 44px;
      font-weight: 900;
      background:
        linear-gradient(135deg, rgba(124,58,237,.95), rgba(255,122,0,.95));
      border: 4px solid rgba(255,255,255,.9);
      box-shadow: 0 0 0 7px rgba(255,255,255,.06), var(--shadow);
    }

    h1 {
      margin: 0;
      font-size: 31px;
      line-height: 1.1;
      letter-spacing: -0.8px;
    }

    .handle {
      margin-top: 7px;
      color: var(--muted);
      font-size: 14px;
    }

    .tagline {
      margin: 14px auto 0;
      max-width: 390px;
      color: #ececf5;
      font-size: 16px;
      line-height: 1.55;
    }

    .card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 22px;
      padding: 18px;
      margin-top: 16px;
      box-shadow: var(--shadow);
      backdrop-filter: blur(12px);
    }

    .eyebrow {
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1.4px;
      color: #d4c3ff;
      margin-bottom: 8px;
    }

    .deal-title {
      font-size: 23px;
      margin: 0 0 8px;
      line-height: 1.2;
    }

    .deal-copy {
      color: var(--muted);
      margin: 0 0 14px;
      line-height: 1.5;
      font-size: 14px;
    }

    .code {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      background: rgba(255,255,255,.06);
      border: 1px dashed rgba(255,255,255,.24);
      border-radius: 14px;
      padding: 13px 14px;
      margin-bottom: 12px;
    }

    .code strong {
      letter-spacing: 1.5px;
      font-size: 15px;
    }

    .badge {
      background: rgba(255,122,0,.15);
      color: #ffb56b;
      border: 1px solid rgba(255,122,0,.3);
      padding: 5px 9px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 800;
      white-space: nowrap;
    }

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 100%;
      min-height: 54px;
      padding: 14px 18px;
      border-radius: 16px;
      text-decoration: none;
      color: white;
      font-weight: 800;
      font-size: 16px;
      border: 1px solid rgba(255,255,255,.12);
      transition: transform .18s ease, filter .18s ease, border-color .18s ease;
      cursor: pointer;
    }

    .btn:hover {
      transform: translateY(-2px);
      filter: brightness(1.06);
      border-color: rgba(255,255,255,.25);
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--accent), #9b5cff 55%, var(--accent-2));
      box-shadow: 0 14px 28px rgba(124,58,237,.26);
    }

    .btn-dark {
      margin-top: 10px;
      background: rgba(255,255,255,.07);
    }

    .btn-dark + .btn-dark {
      margin-top: 10px;
    }

    .section-title {
      margin: 0 0 12px;
      font-size: 18px;
    }

    .small {
      color: var(--muted);
      font-size: 13px;
      line-height: 1.5;
      margin-top: 12px;
    }

    footer {
      text-align: center;
      color: #8f8fa0;
      font-size: 12px;
      margin-top: 22px;
      line-height: 1.6;
    }

    footer a {
      color: #cfcfe0;
      text-decoration: none;
      margin: 0 6px;
    }

    @media (max-width: 380px) {
      h1 { font-size: 27px; }
      .deal-title { font-size: 21px; }
      .card { padding: 16px; }
    }
  </style>
</head>
<body>
  <main class="wrap">
    <section class="hero">
      <div class="avatar">👊</div>
      <h1>One Punch Mark</h1>
      <div class="handle">@onepunchmark</div>
      <p class="tagline">
        Anime-News, deutsche Synchros und Empfehlungen — damit du nie verpasst, was wann wo läuft.
      </p>
    </section>

    <section class="card">
      <div class="eyebrow">Partner-Deal</div>
      <h2 class="deal-title">Anime-Fans sparen 15&nbsp;% bei Gamers Only</h2>
      <p class="deal-copy">
        Nutze meinen Creator-Code beim Einkauf und unterstütze gleichzeitig meinen Content.
      </p>

      <div class="code">
        <strong>ONEPUNCHMARK</strong>
        <span class="badge">15 % Rabatt</span>
      </div>

      <a class="btn btn-primary" href="#" aria-label="Gamers Only öffnen">
        🔥 Jetzt 15 % sparen
      </a>

      <p class="small">
        Transparenz: Über diesen Affiliate-Link kann ich eine Provision erhalten. Für dich wird der Einkauf dadurch nicht teurer.
      </p>
    </section>

    <section class="card">
      <h2 class="section-title">Meine Kanäle</h2>

      <a class="btn btn-dark" href="#">
        🎬 TikTok
      </a>

      <a class="btn btn-dark" href="#">
        📸 Instagram
      </a>

      <a class="btn btn-dark" href="#">
        ▶️ YouTube
      </a>
    </section>

    <section class="card">
      <div class="eyebrow">Community</div>
      <h2 class="section-title">Schön, dass du hier bist ❤️</h2>
      <p class="deal-copy" style="margin-bottom:0;">
        Ohne euch wäre das alles nicht möglich. Danke, dass ihr Teil dieser Anime-Community seid.
      </p>
    </section>

    <footer>
      <div>© 2026 One Punch Mark</div>
      <div>
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
      </div>
    </footer>
  </main>
</body>
</html>
