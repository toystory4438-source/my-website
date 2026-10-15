// 로스팅 단계 데이터
const roasts = [
  { name: "라이트 로스트", notes: "꽃향기와 과일 같은 산미가 또렷해요.", accent: "#d9b863" },
  { name: "미디엄 라이트", notes: "복숭아, 오렌지처럼 상큼하고 단맛이 올라와요.", accent: "#c08a3a" },
  { name: "미디엄 로스트", notes: "카라멜과 견과류, 균형 잡힌 맛이에요.", accent: "#a8742f" },
  { name: "미디엄 다크", notes: "초콜릿 향이 나고 산미는 줄어들어요.", accent: "#6f4a2a" },
  { name: "다크 로스트", notes: "스모키하고 묵직한 쌉싸름함이 남아요.", accent: "#3a2416" }
];

const range  = document.getElementById("roast-range");
const nameEl = document.getElementById("roast-name");
const noteEl = document.getElementById("roast-notes");

function update() {
  const r = roasts[Number(range.value)];
  nameEl.textContent = r.name;
  noteEl.textContent = r.notes;
  document.documentElement.style.setProperty("--accent", r.accent);
}

range.addEventListener("input", update);
update();
