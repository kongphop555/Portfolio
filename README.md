# Portfolio — Kongphop

เว็บ portfolio หน้าเดียวแบบเลื่อนยาว ใช้เท็มเพลต **Living Green — Sylva** (ThreeUI) เป็น Hero

## โครงสร้างโฟลเดอร์

```
Portfolio/
├── index.html                  ← วางโค้ดจากแท็บ "Code" ของ ThreeUI ตรงนี้ (ทั้งไฟล์)
├── inner-green-assets/
│   └── three.min.js            ← Three.js r149 (โค้ด Sylva เรียกไฟล์นี้)
├── docs/
│   └── sylva-SKILL.md          ← คู่มือจาก ThreeUI เก็บไว้ให้ Claude Code อ่านประกอบ
└── README.md
```

## ทำไมใช้ Three.js r149

โค้ด Sylva ใช้ `renderer.outputEncoding`, `THREE.sRGBEncoding` และ `#include <encodings_fragment>`
ซึ่งถูกเปลี่ยนชื่อหรือลบไปใน Three.js เวอร์ชันใหม่ (r152+) ถ้าอัปเกรดแล้วฉาก 3D จะพัง **ห้ามอัปเกรด**

## แท็บไหนใช้ทำอะไร (ThreeUI)

| แท็บ | คืออะไร | ใช้ไหม |
|---|---|---|
| **Code** | หน้า HTML ทั้งหน้า (CSS + JS + shader) | **ใช้** → `index.html` |
| **Skill.md** | คู่มือสำหรับ AI agent | เก็บไว้ที่ `docs/` เป็นข้อมูลอ้างอิง |
| **Usage** | ตัวอย่าง React ที่ต้องติดตั้งแพ็กเกจ `@designcodeio/threeui` | ไม่ใช้ (เรามีโค้ดเต็มแล้ว) |

> `sylva-SKILL.md` ไม่ได้วางไว้ใน `.claude/skills/` โดยตั้งใจ เพราะมีข้อห้ามว่า "ห้ามแก้ไขเท็มเพลต"
> ถ้าเปิดเป็น skill จริง Claude Code จะไม่ยอมต่อ section ใหม่ให้

## วิธีรัน

เปิดด้วย VS Code extension **Live Server** (คลิกขวาที่ `index.html` → Open with Live Server)
หรือรันคำสั่ง `npx serve .` ใน Terminal

## ขั้นต่อไป (สั่ง Claude Code)

1. `git init` แล้ว commit เท็มเพลตต้นฉบับไว้ก่อน
2. ใช้ Plan mode (Shift+Tab) แล้วพิมพ์:

```
index.html คือเท็มเพลต Sylva (ThreeUI) ดูข้อมูลประกอบได้ที่ docs/sylva-SKILL.md
ผมอยากให้เป็น Hero ของเว็บ portfolio หน้าเดียวที่เลื่อนลงได้ยาว โดยใช้ธีมเดียวกับ Sylva

ขั้นที่ 1 (ยังไม่แก้โค้ด):
- สรุป design tokens จาก :root และ CSS (สี, ฟอนต์ Lexend, หน่วย --u, easing)
- อธิบายว่าส่วนไหนผูกกับ .hero (canvas, parallax, pointer) ที่จะได้รับผลกระทบเมื่อเลื่อนหน้า
- เสนอวิธีต่อ section ใหม่ใต้ <main class="hero"> และทำรอยต่อจาก Hero

ขั้นที่ 2 (หลังผมอนุมัติ):
- ห้ามแก้ shader, ฉาก 3D และอนิเมชันของ Hero
- เปลี่ยนแค่ข้อความใน Hero ให้เป็นของผม และให้ลิงก์ใน dock ชี้ไปที่ section ต่างๆ
- เพิ่ม section: About, Skills, Projects, Experience, Contact โดยใช้ tokens เดิมเท่านั้น
- หยุดเรนเดอร์ Three.js เมื่อ Hero หลุดจากจอ (IntersectionObserver) เพื่อประหยัดแรงเครื่อง
```
