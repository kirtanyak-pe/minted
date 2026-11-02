/*
 * The preview around the prototype (styles: preview.css) — the Lemonn app's preview layout: the phone on a dotted stage
 * with the prototype's settings as a floating card beside it, and a panel listing every screen flow by flow (Light /
 * Dark, Phone / All flows). Runs after app.js and only drives it from outside — the hidden #list buttons, the settings card's
 * Appearance buttons, authSkipNow() — so the screens and their interactions stay exactly as exported.
 * ?one=sNN opens a single screen without any chrome (the All flows tiles). The sign-in steps aren't screens (app.js draws
 * them in #auth); they open through authShow() and are listed as au-* ids.
 */
(() => {
  // Sign-in steps: [panel id, name, app.js step]
  const AUTH = [['au-splash', 'Splash', 'splash'], ['au-login', 'Sign in', 'login'], ['au-tnc', 'Terms & consent', 'tnc'],
    ['au-otp', 'OTP', 'otp2'], ['au-bio', 'Biometrics', 'bio'], ['au-pin', 'PIN · returning user', 'pin']]
  const FLOWS = [
    ['Login', AUTH.map((a) => a[0])],
    ['Home', ['s01']],
    ['Search', ['s02']],
    ['Market', ['s03']],
    ['Stock & ETF', ['s04', 's12']],
    ['Orders', ['s05', 's13', 's14', 's15', 's06', 's16']],
    ['Portfolio', ['s07', 's17', 's08']],
    ['Wallet', ['s09', 's20', 's18', 's19']],
    ['Profile', ['s10']],
    ['Futures', ['s22']],
    ['Options', ['s23']],
  ]
  const $ = (s, el = document) => el.querySelector(s)
  const root = document.documentElement
  const listBtn = (id) => $(`#list button[data-to="${id}"]`)
  const open = (id) => {
    const a = AUTH.find((x) => x[0] === id)
    if (a && window.authShow) { authShow(a[2]); return }
    if (window.authSkipNow) authSkipNow()
    const b = listBtn(id)
    if (b) { b.click(); return }
    // Not in the prototype's page list (e.g. Orderpad · SIP): open a listed screen that links to it, then follow the link.
    const link = [...document.querySelectorAll(`.screen [data-to="${id}"]`)].find((l) => listBtn(l.closest('.screen').id))
    if (link) { listBtn(link.closest('.screen').id).click(); link.click() }
  }

  const one = new URLSearchParams(location.search).get('one')
  if (one) {
    root.classList.add('pv-one')
    // No splash / sign-in: the prototype starts it a moment after loading, so it's switched off before then.
    window.authStart = (done) => { if (done) done(); open(one) }
    setTimeout(() => open(one), 0)
    return
  }
  root.classList.add('pv')

  // Screen names come from the prototype's own page list.
  const names = {}
  document.querySelectorAll('#list button[data-to]').forEach((b) => {
    names[b.dataset.to] = [...b.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join('').trim()
  })
  document.querySelectorAll('#device .screen[data-name]').forEach((s) => { if (!names[s.id]) names[s.id] = s.dataset.name })
  AUTH.forEach(([id, n]) => { names[id] = n })
  const listed = new Set(FLOWS.flatMap((f) => f[1]))
  const rest = Object.keys(names).filter((id) => !listed.has(id))
  const flows = FLOWS.map(([n, ids]) => [n, ids.filter((id) => names[id])]).filter((f) => f[1].length)
  if (rest.length) flows.push(['More', rest])

  // ---- Stage: the phone + the settings card ----
  const stage = document.createElement('main')
  stage.className = 'pv-stage'
  const wrap = $('#wrap'), phone = $('#phone'), settings = $('#settings')
  document.body.insertBefore(stage, wrap)
  stage.append(wrap, settings)

  let all // the All flows view, built the first time it opens

  // ---- Panel ----
  const chev = '<span class="pv-chev"><svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>'
  const sun = '<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="currentColor"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
  const moon = '<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="currentColor"/></svg>'
  const panel = document.createElement('aside')
  panel.className = 'pv-panel'
  panel.setAttribute('aria-label', 'Flows and screens')
  panel.innerHTML = `
    <header class="pv-head">
      <div><h1 class="pv-title">Minted</h1><p class="pv-desc">Every flow of Minted — US stocks, ETFs and perps.</p></div>
      <div class="pv-seg pv-modes" role="radiogroup" aria-label="Mode">
        <button type="button" role="radio" aria-label="Light" data-mode="light">${sun}</button>
        <button type="button" role="radio" aria-label="Dark" data-mode="dark">${moon}</button>
      </div>
    </header>
    <div class="pv-seg pv-views" role="radiogroup" aria-label="View">
      <button type="button" role="radio" data-view="phone">Phone</button>
      <button type="button" role="radio" data-view="all">All flows</button>
    </div>
    <nav class="pv-list">${flows.map(([n, ids], i) => `
      <div class="pv-group">
        <button type="button" class="pv-flow" aria-expanded="false" aria-controls="pv-f${i}"><span>${n}</span><span class="pv-count">${ids.length}</span>${chev}</button>
        <ul class="pv-screens" id="pv-f${i}" hidden>${ids.map((id, j) => `
          <li><button type="button" class="pv-item" data-id="${id}"><span class="pv-num">${String(j + 1).padStart(2, '0')}</span><span>${names[id]}</span></button></li>`).join('')}
        </ul>
      </div>`).join('')}
    </nav>`
  document.body.insertBefore(panel, stage.nextSibling)

  panel.addEventListener('click', (e) => {
    const f = e.target.closest('.pv-flow')
    if (f) {
      const on = f.getAttribute('aria-expanded') !== 'true'
      f.setAttribute('aria-expanded', on)
      $('#' + f.getAttribute('aria-controls')).hidden = !on
      return
    }
    const it = e.target.closest('.pv-item')
    if (it) { setView('phone'); open(it.dataset.id); return }
    const m = e.target.closest('button[data-mode]')
    if (m) { const a = $(`#modes [data-appearance="${m.dataset.mode}"]`); if (a) a.click(); return }
    const v = e.target.closest('button[data-view]')
    if (v) setView(v.dataset.view)
  })

  // The current screen: the sign-in step on show, else the screen marked .on (watched through the page list's .on). Its flow opens.
  const auth = $('#auth')
  const current = () => {
    const on = $('#device .screen.on')
    const step = auth && !auth.hidden && AUTH.find((x) => x[2] === auth.dataset.s || (x[0] === 'au-otp' && auth.dataset.s === 'otp'))
    const id = step ? step[0] : on && on.id
    panel.querySelectorAll('.pv-item').forEach((b) => {
      if (b.dataset.id === id) {
        b.setAttribute('aria-current', 'page')
        const f = b.closest('.pv-group').querySelector('.pv-flow')
        if (f.getAttribute('aria-expanded') !== 'true') f.click()
      } else b.removeAttribute('aria-current')
    })
  }
  new MutationObserver(current).observe($('#list'), { subtree: true, attributes: true, attributeFilter: ['class'] })
  if (auth) new MutationObserver(current).observe(auth, { attributes: true, attributeFilter: ['hidden', 'data-s'] })
  current()

  const mode = () => {
    panel.querySelectorAll('[data-mode]').forEach((b) => b.setAttribute('aria-checked', b.dataset.mode === (root.dataset.mode || 'dark')))
    // The All flows tiles follow (they read the mode from the address).
    if (all) all.querySelectorAll('.pv-shot').forEach((s) => { $('iframe', s).src = `?one=${s.dataset.id}${location.hash}` })
  }
  new MutationObserver(mode).observe(root, { attributes: true, attributeFilter: ['data-mode'] })
  mode()

  // ---- All flows: one live tile per screen, built the first time it's opened ----
  function setView(v) {
    root.dataset.view = v
    panel.querySelectorAll('[data-view]').forEach((b) => b.setAttribute('aria-checked', b.dataset.view === v))
    if (v === 'all' && !all) {
      all = document.createElement('div')
      all.className = 'pv-all'
      all.innerHTML = flows.map(([n, ids]) => `<section><h2>${n}</h2><div class="pv-row">${ids.map((id, j) => `
        <button type="button" class="pv-shot" data-id="${id}"><span class="pv-shot-frame"><iframe loading="lazy" tabindex="-1" title="${names[id]}" src="?one=${id}${location.hash}"></iframe></span>${String(j + 1).padStart(2, '0')} · ${names[id]}</button>`).join('')}</div></section>`).join('')
      all.addEventListener('click', (e) => { const s = e.target.closest('.pv-shot'); if (s) { setView('phone'); open(s.dataset.id) } })
      stage.append(all)
    }
    if (all) all.hidden = v !== 'all'
  }
  setView('phone')

  // ---- App mode: on a phone (and in the Android app), the app itself, full screen — no frame, no stage, no panel ----
  // Installed full screen (manifest display: fullscreen, or ?fullscreen) the phone's own bars are hidden, so the
  // mockup's status bar and gesture pill stay. Otherwise the phone's real bars show and the mockup's 24px status bar is
  // cut off the top. The screens fill the width and are as tall as the window (--pv-app-h, in the screens' 360-wide
  // units): scrolling areas and bottom sheets follow the height, and the pinned bottom layer (.fixed.bottom: navbar,
  // CTAs) moves by the difference from 800 (--pv-app-shift). The browser's bar takes the screen's colour.
  const SB = 24
  const fullscreen = new URLSearchParams(location.search).has('fullscreen') || matchMedia('(display-mode: fullscreen)').matches
  root.classList.toggle('pv-full', fullscreen)
  let tint = $('meta[name="theme-color"]')
  if (!tint) { tint = document.createElement('meta'); tint.name = 'theme-color'; document.head.append(tint) }
  const screenColor = () => {
    const s = $('.screen.on')
    const c = s && getComputedStyle(s).backgroundColor
    const bg = c && c !== 'rgba(0, 0, 0, 0)' ? c : getComputedStyle(root).getPropertyValue('--bg').trim()
    root.style.setProperty('--pv-app-bg', bg)
    if (tint.content !== bg) tint.content = bg
  }
  new MutationObserver(screenColor).observe($('#device'), { subtree: true, attributes: true, attributeFilter: ['class'] })
  new MutationObserver(screenColor).observe(root, { attributes: true, attributeFilter: ['data-mode', 'data-brand'] })
  screenColor()

  // The phone's back (browser back, Android's system back) steps back through the screens instead of leaving the page
  // or closing the app: while a screen other than Home shows (and sign-in, which owns the keys, doesn't), one history
  // entry sits on top for back to take, and taking it sends the prototype its own back (Escape → go('back'); its
  // stack is private to app.js).
  let held = false, dropping = false
  const backSync = () => {
    const s = $('.screen.on'), auth = $('#auth')
    const deep = root.classList.contains('pv-app') && !!s && s.id !== 's01' && !(auth && !auth.hidden)
    if (deep && !held) { history.pushState({ pvBack: 1 }, ''); held = true }
    else if (!deep && held) { held = false; dropping = true; history.back() }
  }
  addEventListener('popstate', () => {
    if (dropping) { dropping = false; return }
    held = false
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    backSync()
  })
  new MutationObserver(backSync).observe($('#device'), { subtree: true, attributes: true, attributeFilter: ['class', 'hidden'] })
  backSync()

  function appFit() {
    const top = fullscreen ? 0 : SB
    let k = innerWidth / 360
    let h = innerHeight / k + top
    // Far shorter than the design (a wide window): the whole 800-tall screen, scaled to the height, instead.
    if (h < 700) { h = 800; k = innerHeight / (h - top) }
    phone.style.transform = `scale(${k})`
    wrap.style.width = 360 * k + 'px'
    wrap.style.height = (h - top) * k + 'px'
    root.style.setProperty('--pv-app-h', h + 'px')
    root.style.setProperty('--pv-app-shift', h - 800 + 'px')
    root.style.setProperty('--pv-app-x', Math.max(0, (innerWidth - 360 * k) / 2) + 'px')
    root.style.setProperty('--pv-app-y', Math.max(0, (innerHeight - (h - top) * k) / 2) + 'px')
    settings.style.maxHeight = ''
  }

  // ---- Fit: the phone scales to the stage (the prototype's fit() sized it to the window; this replaces it) ----
  const PW = 384, PH = 824
  function pvFit() {
    const app = innerWidth <= 700
    root.classList.toggle('pv-app', app)
    if (app) { appFit(); return }
    const cs = getComputedStyle(stage)
    const w = stage.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) - (settings.offsetWidth ? settings.offsetWidth + 24 : 0)
    const h = stage.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom)
    const k = Math.min(1, w / PW, h / PH)
    phone.style.transform = `scale(${k})`
    wrap.style.width = PW * k + 'px'
    wrap.style.height = PH * k + 'px'
    settings.style.maxHeight = h + 'px'
  }
  window.fit = pvFit
  addEventListener('resize', pvFit)
  new ResizeObserver(pvFit).observe(stage)
  pvFit()

  // Auto update (user, 2026-11-01): the build bakes its id into the page (<meta name="build-id">) and publishes it as
  // version.json (vite.config.ts, versionFile). Every minute, and when the tab comes back, fetch version.json past every
  // cache; if it differs from this page's own id, clear Cache Storage and reload at ?reload=<id> — a new address the
  // browser has no cached copy of — keeping the hash (screen and theme). Comparing against the baked id means a page
  // served from an old cache still notices. One try per id (sessionStorage), so a lagging CDN can't loop. Off on
  // localhost (Vite reloads itself), in dev (no build id) and inside the All flows tiles (the top page reloads them).
  {
    const MARK = 'reload'
    const TRIED = 'auto-update:tried'
    const url = new URL(location.href)
    if (url.searchParams.has(MARK)) {
      url.searchParams.delete(MARK)
      history.replaceState(history.state, '', url.href)
    }
    const own = document.querySelector('meta[name="build-id"]')?.content
    if (own && self === top && !/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)) {
      let pressing = false
      addEventListener('pointerdown', () => { pressing = true }, true)
      addEventListener('pointerup', () => { pressing = false }, true)
      addEventListener('pointercancel', () => { pressing = false }, true)
      const tried = (v) => { try { return sessionStorage.getItem(TRIED) === v } catch (e) { return false } }
      const reloadFresh = async (v) => {
        try { sessionStorage.setItem(TRIED, v) } catch (e) {}
        try { if ('caches' in window) await Promise.all((await caches.keys()).map((k) => caches.delete(k))) } catch (e) {}
        const next = new URL(location.href)
        next.searchParams.set(MARK, v)
        location.replace(next.href)
      }
      const check = async () => {
        if (document.visibilityState !== 'visible' || pressing) return
        try {
          const r = await fetch(new URL('version.json?t=' + Date.now(), document.baseURI), { cache: 'no-store' })
          if (!r.ok) return
          const v = (await r.json()).version
          if (v && v !== own && !tried(v)) await reloadFresh(v)
        } catch (e) {}
      }
      check()
      setInterval(check, 60000)
      document.addEventListener('visibilitychange', check)
    }
  }
})()
