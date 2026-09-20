const WHATSAPP = "5531992229606";
const IMAGE_FALLBACKS = {
  hero: "https://cdn.dooca.store/165603/products/whatsapp-image-2026-03-02-at-150345_450x600%2Bcrop_center.jpeg?v=1772474978&webp=0",
  result: "https://cdn.dooca.store/165603/products/whatsapp-image-2026-03-02-at-144336_450x600%2Bcrop_center.jpeg?v=1772473638&webp=0",
};

const profiles = {
  classica: {
    name: "Clássica Atemporal",
    short: "Clássica",
    description: "Você busca elegância que atravesse o tempo. Seu vestido ideal tem proporções equilibradas, acabamento impecável e detalhes que continuam sofisticados em qualquer fotografia.",
    silhouette: "Linha A, evasê estruturado ou princesa de volume controlado.",
    details: "Cetim, mikado, decote limpo, véu longo e pontos de renda bem posicionados.",
    fitting: "Compare caimento e construção. Em você, a diferença está menos no excesso e mais na precisão.",
    neckline: "Decote reto, coração suave, ombro a ombro ou canoa com desenho preciso.",
    movement: "Estrutura com leveza: a saia deve sustentar a forma sem limitar seus passos.",
    accessories: "Véu longo, joias pontuais e acabamento elegante, sem competir com o vestido.",
    attention: "Evite reunir muitas tendências na mesma produção. Um detalhe impecável costuma ter mais força.",
  },
  romantica: {
    name: "Romântica Delicada",
    short: "Romântica",
    description: "Seu olhar é sensível aos detalhes e à atmosfera. O vestido que traduz você combina movimento, textura e elementos que tornam a entrada na cerimônia leve e emocionante.",
    silhouette: "Linha A fluida, princesa leve ou corpo ajustado com saia suave.",
    details: "Rendas, flores tridimensionais, tule, mangas delicadas e véu com acabamento.",
    fitting: "Observe como os detalhes conversam com seu rosto e seu movimento, não apenas como ficam no cabide.",
    neckline: "Coração, V suave, ilusão ou ombro a ombro com acabamento delicado.",
    movement: "Tecidos leves, camadas de tule e saias que respondem com suavidade ao caminhar.",
    accessories: "Véu com renda, flores artesanais e pontos de luz de aparência sutil.",
    attention: "Cuide para que a soma de renda, aplicações e acessórios preserve a leveza que você procura.",
  },
  contemporanea: {
    name: "Contemporânea Essencial",
    short: "Contemporânea",
    description: "Você prefere escolhas intencionais e uma beleza sem ruído. Linhas limpas, materiais nobres e um detalhe de design marcante dizem mais sobre você do que muitos adornos.",
    silhouette: "Coluna, sereia limpa, evasê minimalista ou construção assimétrica.",
    details: "Crepe, zibeline ou cetim liso, drapeados, recortes e acessórios arquitetônicos.",
    fitting: "Teste o vestido em movimento. A aparente simplicidade exige caimento e acabamento muito precisos.",
    neckline: "Reto, assimétrico, halter ou recortes limpos com desenho arquitetônico.",
    movement: "Caimento contínuo e tecidos que acompanham o corpo sem perder a linha do design.",
    accessories: "Brincos esculturais, véu liso ou uma peça única de design marcante.",
    attention: "Em propostas minimalistas, ajuste, tecido e acabamento ficam em evidência. Observe cada detalhe.",
  },
  marcante: {
    name: "Marcante Autoral",
    short: "Marcante",
    description: "Você quer presença e personalidade. Seu vestido ideal não precisa seguir expectativas: ele deve criar uma imagem memorável e fazer você se reconhecer de imediato.",
    silhouette: "Sereia, princesa de impacto, volumes esculturais ou proposta transformável.",
    details: "Bordados, brilho sofisticado, aplicações, capas, mangas ou elementos de alta moda.",
    fitting: "Leve suas referências, mas permita experimentar algo inesperado. Seu melhor vestido pode estar fora da primeira ideia.",
    neckline: "Profundo, tomara que caia estruturado, assimétrico ou com construção escultural.",
    movement: "Volume, cauda ou sobreposição transformável que crie presença também em movimento.",
    accessories: "Capa, luvas, mangas removíveis ou joias de impacto escolhidas com intenção.",
    attention: "Defina um protagonista. Quando vestido e acessórios disputam atenção, a sua presença pode se perder.",
  },
};

const steps = [
  { type: "intro" },
  { type: "contact", kicker: "Antes de começar", title: "Conte um pouco sobre você", subtitle: "Seu resultado será personalizado e poderá seguir para a consultora caso você queira agendar uma experiência na Vila La Vie." },
  { type: "wedding", kicker: "O grande dia", title: "Como será o cenário do seu casamento?", subtitle: "Esses detalhes ajudam a transformar inspiração em uma escolha que funciona no local, no horário e na estação." },
  { id: "feeling", type: "choice", kicker: "A sensação", title: "Quando você entrar na cerimônia, o que quer transmitir?", options: [
    { title: "Elegância atemporal", text: "Sofisticada, equilibrada e inesquecível sem depender de tendências.", points: {classica:3, contemporanea:1} },
    { title: "Leveza e emoção", text: "Delicada, luminosa e com detalhes que despertam encanto.", points: {romantica:3, classica:1} },
    { title: "Personalidade e presença", text: "Uma imagem impactante, autoral e impossível de ignorar.", points: {marcante:3, romantica:1} },
    { title: "Modernidade essencial", text: "Linhas limpas, design preciso e uma beleza muito atual.", points: {contemporanea:3, marcante:1} },
  ]},
  { id: "references", type: "choice", kicker: "Suas referências", title: "Qual imagem mais se aproxima do seu repertório?", options: [
    { title: "Casamentos clássicos", text: "Arquitetura histórica, cerimônia formal e fotografias atemporais.", points: {classica:3, romantica:1} },
    { title: "Jardins e natureza", text: "Texturas orgânicas, luz natural e movimento suave.", points: {romantica:3, contemporanea:1} },
    { title: "Editorial de moda", text: "Silhuetas fortes, atitude e detalhes inesperados.", points: {marcante:3, contemporanea:1} },
    { title: "Design e arquitetura", text: "Ambientes modernos, composição limpa e estética refinada.", points: {contemporanea:3, classica:1} },
  ]},
  { id: "silhouette", type: "choice", kicker: "A silhueta", title: "Qual construção desperta sua curiosidade primeiro?", options: [
    { title: "Linha A ou princesa", text: "Cintura definida e saia com presença equilibrada.", points: {classica:2, romantica:2} },
    { title: "Sereia ou ajustado", text: "Curvas valorizadas e uma entrada de forte presença.", points: {marcante:3, contemporanea:1} },
    { title: "Reto ou minimalista", text: "Forma limpa, fluida e sofisticada.", points: {contemporanea:3, classica:1} },
    { title: "Quero experimentar", text: "Prefiro descobrir no corpo antes de definir um formato.", points: {romantica:1, classica:1, contemporanea:1, marcante:1} },
  ]},
  { id: "details", type: "choice", kicker: "Os detalhes", title: "O que faz você se aproximar para olhar um vestido?", options: [
    { title: "Renda e flores", text: "Textura delicada, aplicações e acabamento artesanal.", points: {romantica:3, classica:1} },
    { title: "Tecido e caimento", text: "A qualidade aparece na construção e no movimento.", points: {classica:2, contemporanea:2} },
    { title: "Bordado e brilho", text: "Luz, profundidade e um trabalho visual marcante.", points: {marcante:3, romantica:1} },
    { title: "Recortes e design", text: "Uma solução inesperada, precisa e arquitetônica.", points: {contemporanea:3, marcante:1} },
  ]},
  { id: "priority", type: "choice", kicker: "Sua prioridade", title: "O que precisa acontecer para você dizer “é este”?", options: [
    { title: "Eu me sentir elegante", text: "Quero olhar as fotos daqui a muitos anos e continuar amando.", points: {classica:3, contemporanea:1} },
    { title: "Eu me emocionar", text: "O vestido precisa tocar algo em mim, antes de qualquer regra.", points: {romantica:3, classica:1} },
    { title: "Eu me sentir poderosa", text: "Quero que a minha presença seja percebida desde a entrada.", points: {marcante:3, contemporanea:1} },
    { title: "Eu me reconhecer", text: "Nada de personagem: quero uma versão elevada de quem eu sou.", points: {contemporanea:2, romantica:1, marcante:1} },
  ]},
  { type: "planning", kicker: "Para sua curadoria", title: "Como você imagina a escolha do vestido?", subtitle: "Estas informações ajudam a consultora a preparar referências e orientar seu atendimento, sem compromisso." },
  { type: "result" },
];

const state = { current: 0, answers: {} };
const app = document.querySelector("#app");

function esc(value="") { return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c])); }
function digits(value="") { return String(value).replace(/\D/g,""); }
function validPhone(value) { let d=digits(value); if(d.startsWith("55")&&d.length===13)d=d.slice(2); return /^[1-9]{2}9\d{8}$/.test(d); }
function formatPhone(value) { let d=digits(value).slice(0,11); if(d.length>2)d=`(${d.slice(0,2)}) ${d.slice(2)}`; if(digits(d).length>7)d=`${d.slice(0,10)}-${d.slice(10,14)}`; return d; }
function formatDate(value) { if(!value)return "A definir"; const [year,month,day]=value.split("-"); return `${day}/${month}/${year}`; }
function image(local, fallback, alt) { return `<img src="./${local}" data-asset-fallback="./assets/${local}" data-remote-fallback="${fallback}" alt="${alt}" referrerpolicy="no-referrer">`; }
function brand() { return `<span class="brand"><span class="brand-mark">V</span><span class="brand-name">VILA <i>la</i> VIE</span></span>`; }
function header() { return `<header class="topbar">${brand()}<span class="topbar-note">Curadoria de estilo para o seu grande dia</span></header>`; }

function renderIntro() {
  app.innerHTML = `<section class="intro"><div class="intro-photo">${image("noiva-vestido-1.jpg",IMAGE_FALLBACKS.hero,"Noiva usando vestido Vila La Vie")}<span class="photo-caption">Coleção Vila La Vie</span></div><div class="intro-panel">${brand()}<div class="intro-copy"><p class="kicker">Diagnóstico de estilo da noiva</p><h1>O vestido que se parece com você.</h1><p class="intro-lead">Descubra qual direção de estilo traduz sua personalidade, o cenário do casamento e a forma como você deseja se sentir no grande dia.</p><div class="intro-meta"><span>Resultado personalizado</span><span>Curadoria Vila La Vie</span><span>3 minutos</span></div><button class="primary" data-next>Descobrir meu perfil →</button></div><p class="intro-foot">Mais de 7.000 noivas vestidas. Atendimento com horário reservado no Belvedere, Belo Horizonte.</p></div></section>`;
}

function progress() { return Math.min(100, Math.round(Math.max(0,state.current-1)/(steps.length-3)*100)); }
function aside() { return `<aside class="quiz-aside">${image("noiva-vestido-2.jpg",IMAGE_FALLBACKS.result,"Vestido de noiva Vila La Vie")}<div class="aside-copy"><span>Vila La Vie</span><p>Curadoria para transformar referência em presença.</p></div></aside>`; }
function frame(content) { const pct=progress(); return `<div class="quiz-shell">${header()}<div class="quiz-layout"><section class="quiz-main"><div class="quiz-inner"><div class="progress-line"><span>Seu vestido, sua essência</span><span>${pct}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>${content}</div></section>${aside()}</div></div>`; }

function renderContact(step) {
  const a=state.answers.contact||{};
  app.innerHTML=frame(`<p class="question-kicker">${step.kicker}</p><h1 class="question-title">${step.title}</h1><p class="question-subtitle">${step.subtitle}</p><div class="form-grid"><div class="field full"><label for="name">Seu nome</label><input id="name" autocomplete="name" value="${esc(a.name)}" placeholder="Como podemos chamar você?"></div><div class="field"><label for="phone">WhatsApp</label><input id="phone" inputmode="tel" autocomplete="tel" value="${esc(a.phone)}" placeholder="(31) 99999-9999"><p class="field-error" id="contact-error" hidden>Informe seu nome e um WhatsApp válido.</p></div><div class="field"><label for="email">E-mail <span style="font-weight:400;color:var(--muted)">(opcional)</span></label><input id="email" type="email" value="${esc(a.email)}" placeholder="voce@email.com"></div></div><div class="actions"><button class="back" data-back>← Voltar</button><button class="primary" data-contact>Continuar →</button></div>`);
  const phone=document.querySelector("#phone"); phone.addEventListener("input",()=>phone.value=formatPhone(phone.value));
}

function renderWedding(step) {
  const a=state.answers.wedding||{};
  app.innerHTML=frame(`<p class="question-kicker">${step.kicker}</p><h1 class="question-title">${step.title}</h1><p class="question-subtitle">${step.subtitle}</p><div class="form-grid"><div class="field"><label for="date">Data do casamento</label><input id="date" type="date" value="${esc(a.date)}"></div><div class="field"><label for="city">Cidade da cerimônia</label><input id="city" value="${esc(a.city)}" placeholder="Ex.: Belo Horizonte"></div><div class="field"><label for="period">Horário predominante</label><select id="period"><option value="">Selecione</option>${["Manhã","Tarde","Fim de tarde","Noite","Ainda não defini"].map(x=>`<option ${a.period===x?"selected":""}>${x}</option>`).join("")}</select></div><div class="field"><label for="venue">Tipo de espaço</label><select id="venue"><option value="">Selecione</option>${["Igreja e salão","Fazenda ou jardim","Praia","Espaço contemporâneo","Cerimônia intimista","Ainda não defini"].map(x=>`<option ${a.venue===x?"selected":""}>${x}</option>`).join("")}</select><p class="field-error" id="wedding-error" hidden>Preencha a data, a cidade e o cenário do casamento.</p></div></div><div class="actions"><button class="back" data-back>← Voltar</button><button class="primary" data-wedding>Continuar →</button></div>`);
}

function renderChoice(step) {
  const selected=state.answers[step.id];
  app.innerHTML=frame(`<p class="question-kicker">${step.kicker}</p><h1 class="question-title">${step.title}</h1><div class="options">${step.options.map((o,i)=>`<button class="option ${selected?.index===i?"selected":""}" data-choice="${i}"><strong>${esc(o.title)}</strong><span>${esc(o.text)}</span></button>`).join("")}</div><div class="actions"><button class="back" data-back>← Voltar</button></div>`);
}

function renderPlanning(step) {
  const a=state.answers.planning||{};
  app.innerHTML=frame(`<p class="question-kicker">${step.kicker}</p><h1 class="question-title">${step.title}</h1><p class="question-subtitle">${step.subtitle}</p><div class="form-grid"><div class="field"><label for="service">O que você considera?</label><select id="service"><option value="">Selecione</option>${["Aluguel","Compra","Sob medida","Quero orientação"].map(x=>`<option ${a.service===x?"selected":""}>${x}</option>`).join("")}</select></div><div class="field"><label for="budget">Investimento planejado</label><select id="budget"><option value="">Selecione</option>${["Até R$ 5 mil","De R$ 5 mil a R$ 8 mil","De R$ 8 mil a R$ 15 mil","Acima de R$ 15 mil","Quero conhecer as possibilidades"].map(x=>`<option ${a.budget===x?"selected":""}>${x}</option>`).join("")}</select></div><div class="field"><label for="size">Numeração aproximada</label><input id="size" value="${esc(a.size)}" placeholder="Ex.: 42 ou ainda não sei"></div><div class="field"><label for="availability">Melhor momento para atendimento</label><select id="availability"><option value="">Selecione</option>${["Dias úteis pela manhã","Dias úteis à tarde","Dias úteis no início da noite","Sábado","Tenho flexibilidade"].map(x=>`<option ${a.availability===x?"selected":""}>${x}</option>`).join("")}</select><p class="field-error" id="planning-error" hidden>Complete as quatro informações para ver seu resultado.</p></div></div><div class="actions"><button class="back" data-back>← Voltar</button><button class="primary" data-planning>Ver meu perfil →</button></div>`);
}

function calculate() {
  const scores={classica:0,romantica:0,contemporanea:0,marcante:0};
  steps.filter(s=>s.type==="choice").forEach(s=>{const a=state.answers[s.id]; if(!a)return; Object.entries(a.points).forEach(([k,v])=>scores[k]+=v);});
  const total=Object.values(scores).reduce((a,b)=>a+b,0)||1;
  const percentages=Object.fromEntries(Object.entries(scores).map(([k,v])=>[k,Math.round(v/total*100)]));
  const order=Object.keys(scores).sort((a,b)=>scores[b]-scores[a]);
  return {scores,percentages,primary:order[0],secondary:order[1]};
}

function scenarioInsight(wedding) {
  const venue = {
    "Igreja e salão": "Uma cerimônia formal comporta cauda, véu e tecidos estruturados. Confirme apenas se a recepção pede uma solução mais leve para circular e dançar.",
    "Fazenda ou jardim": "Movimento, conforto térmico e contato com o piso merecem atenção. Caudas ajustáveis e tecidos que respiram tendem a funcionar melhor.",
    "Praia": "Priorize leveza, mobilidade e materiais que mantenham beleza com vento e umidade. O acabamento da barra faz diferença.",
    "Espaço contemporâneo": "Linhas limpas, volumes esculturais e detalhes de design conversam especialmente bem com esse cenário.",
    "Cerimônia intimista": "A proximidade dos convidados valoriza acabamento, textura e detalhes vistos de perto. Elegância não depende de volume.",
    "Ainda não defini": "Comece pelo que faz você se reconhecer. Quando o espaço estiver definido, a curadoria pode ajustar volume, cauda e materiais.",
  }[wedding.venue];
  const light = wedding.period === "Noite"
    ? "À noite, textura, brilho controlado e contraste aparecem com mais intensidade sob a iluminação."
    : wedding.period === "Manhã" || wedding.period === "Tarde" || wedding.period === "Fim de tarde"
      ? "Na luz natural, tecido, transparência e acabamento ficam mais evidentes; observe o vestido perto de uma janela."
      : "Quando o horário for definido, vale revisar transparências, brilho e peso visual sob a iluminação escolhida.";
  return `${venue || "O cenário ajuda a calibrar volume, tecido e mobilidade."} ${light}`;
}

function whatsappUrl(result) {
  const c=state.answers.contact,w=state.answers.wedding,p=state.answers.planning,profile=profiles[result.primary],secondary=profiles[result.secondary];
  const message=["Olá, Vila La Vie! Fiz o Diagnóstico do Vestido Ideal e gostaria de conversar sobre um atendimento.","",`Nome: ${c.name}`,`WhatsApp: ${c.phone}`,`Perfil principal: ${profile.name}`,`Influência secundária: ${secondary.name}`,`Casamento: ${formatDate(w.date)} | ${w.city}`,`Cenário: ${w.period} | ${w.venue}`,`Interesse: ${p.service}`,`Investimento planejado: ${p.budget}`,`Numeração aproximada: ${p.size}`,`Disponibilidade: ${p.availability}`,"","Podemos continuar por aqui?"].join("\n");
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function renderResult() {
  const result=calculate(),main=profiles[result.primary],secondary=profiles[result.secondary],c=state.answers.contact,w=state.answers.wedding,p=state.answers.planning;
  const matches=Object.keys(result.percentages).sort((a,b)=>result.percentages[b]-result.percentages[a]).map(k=>`<div class="match-row"><strong>${profiles[k].short}</strong><div class="match-track"><span style="width:${result.percentages[k]}%"></span></div><em>${result.percentages[k]}%</em></div>`).join("");
  app.innerHTML=`<div class="quiz-shell">${header()}<main class="result-page"><div class="result-wrap">
    <section class="result-hero"><div class="result-copy"><p class="kicker">Seu perfil, ${esc(c.name.split(" ")[0])}</p><h1 class="result-title">${main.name}</h1><p class="result-description">${main.description}</p><div class="secondary-profile"><span>Sua segunda influência</span><strong>${secondary.name}</strong><p>Ela pode aparecer em acessórios, textura ou em um detalhe inesperado do vestido.</p></div></div><div class="result-photo">${image("noiva-vestido-2.jpg",IMAGE_FALLBACKS.result,"Vestido Vila La Vie")}</div></section>
    <section class="result-section"><p class="section-kicker">Sua curadoria inicial</p><h2 class="section-heading">A direção que mais combina com você</h2><p class="section-lead">Seu resultado é um ponto de partida para a prova, não uma regra. O objetivo é chegar ao atendimento com boas perguntas e espaço para se surpreender.</p><div class="profile-grid"><article class="profile-card"><span>Silhuetas</span><h3>Forma e proporção</h3><p>${main.silhouette}</p></article><article class="profile-card"><span>Tecidos</span><h3>Textura e acabamento</h3><p>${main.details}</p></article><article class="profile-card"><span>Decotes</span><h3>Emoldurando o rosto</h3><p>${main.neckline}</p></article><article class="profile-card"><span>Movimento</span><h3>Do altar à festa</h3><p>${main.movement}</p></article><article class="profile-card"><span>Acessórios</span><h3>Composição final</h3><p>${main.accessories}</p></article><article class="profile-card attention-card"><span>Ponto de atenção</span><h3>Para manter sua essência</h3><p>${main.attention}</p></article></div></section>
    <section class="result-section split-section"><div><p class="section-kicker">Leitura do contexto</p><h2 class="section-heading">Seu casamento também orienta a escolha</h2><p class="section-lead">${scenarioInsight(w)}</p></div><div class="event-note"><span>${esc(w.venue)}</span><strong>${esc(w.period)}</strong><small>${esc(w.city)} · ${esc(formatDate(w.date))}</small></div></section>
    <section class="result-section"><p class="section-kicker">Seu mapa de estilo</p><h2 class="section-heading">Uma composição, não uma caixa</h2><p class="section-lead">A essência ${main.short.toLowerCase()} lidera seu resultado, com influência ${secondary.short.toLowerCase()}. Use esses percentuais como repertório para experimentar, nunca como limitação.</p><div class="match-list">${matches}</div></section>
    <section class="result-section"><p class="section-kicker">Roteiro de prova</p><h2 class="section-heading">Quatro sinais de que o vestido funciona</h2><div class="check-grid"><article><b>01</b><h3>Você se reconhece</h3><p>O vestido amplia sua presença sem transformar você em uma personagem.</p></article><article><b>02</b><h3>Seu corpo respira</h3><p>Caminhe, sente e levante os braços. Beleza e segurança precisam coexistir.</p></article><article><b>03</b><h3>O cenário conversa</h3><p>Observe luz, piso, temperatura, formalidade e o ritmo previsto para a festa.</p></article><article><b>04</b><h3>A imagem permanece</h3><p>Fotografe frente, costas e movimento. Compare como você se sente, não só modelos.</p></article></div><div class="fitting-note"><span>Na sua prova</span><p>${main.fitting}</p></div></section>
    <section class="result-section"><p class="section-kicker">Informações compartilháveis</p><h2 class="section-heading">Resumo para sua consultora</h2><div class="lead-summary"><div><span>Casamento</span><strong>${esc(formatDate(w.date))}</strong></div><div><span>Cidade</span><strong>${esc(w.city)}</strong></div><div><span>Cenário</span><strong>${esc(w.venue)} · ${esc(w.period)}</strong></div><div><span>Interesse</span><strong>${esc(p.service)}</strong></div><div><span>Investimento</span><strong>${esc(p.budget)}</strong></div><div><span>Numeração</span><strong>${esc(p.size)}</strong></div><div><span>Disponibilidade</span><strong>${esc(p.availability)}</strong></div><div><span>WhatsApp</span><strong>${esc(c.phone)}</strong></div></div></section>
    <section class="result-section"><div class="cta"><div><p class="section-kicker">Próximo passo</p><h2 class="section-heading">Viva a experiência Vila La Vie</h2><p>Envie seu perfil para uma consultora. As informações do diagnóstico já seguem organizadas para facilitar o início da sua curadoria.</p></div><div class="cta-actions"><a class="whatsapp" href="${whatsappUrl(result)}" target="_blank" rel="noopener noreferrer">Conversar pelo WhatsApp</a><button class="secondary" data-pdf>Salvar resultado em PDF</button></div></div><p class="disclaimer">O diagnóstico é uma orientação inicial de estilo e não representa reserva de horário, disponibilidade de modelo ou proposta comercial. Seus dados só seguem para a Vila La Vie quando você envia a mensagem pelo WhatsApp.</p><button class="restart" data-restart>Refazer diagnóstico</button></section>
  </div></main></div>`;
}

function render() {
  const step=steps[state.current];
  if(step.type==="intro")renderIntro();
  if(step.type==="contact")renderContact(step);
  if(step.type==="wedding")renderWedding(step);
  if(step.type==="choice")renderChoice(step);
  if(step.type==="planning")renderPlanning(step);
  if(step.type==="result")renderResult();
  bind();
}

function bind() {
  document.querySelectorAll("img[data-asset-fallback]").forEach(img=>img.addEventListener("error",()=>{if(img.dataset.assetFallback){img.src=img.dataset.assetFallback;delete img.dataset.assetFallback;return;}if(img.dataset.remoteFallback){img.src=img.dataset.remoteFallback;delete img.dataset.remoteFallback;}}));
  document.querySelector("[data-next]")?.addEventListener("click",()=>{state.current++;render();});
  document.querySelector("[data-back]")?.addEventListener("click",()=>{state.current=Math.max(0,state.current-1);render();});
  document.querySelectorAll("[data-choice]").forEach(button=>button.addEventListener("click",()=>{const step=steps[state.current],index=Number(button.dataset.choice),option=step.options[index];state.answers[step.id]={index,points:option.points,value:option.title};button.classList.add("selected");setTimeout(()=>{state.current++;render();},160);}));
  document.querySelector("[data-contact]")?.addEventListener("click",()=>{const name=document.querySelector("#name").value.trim(),phone=document.querySelector("#phone").value.trim(),email=document.querySelector("#email").value.trim();if(name.length<3||!validPhone(phone)){document.querySelector("#contact-error").hidden=false;return;}state.answers.contact={name,phone,email};state.current++;render();});
  document.querySelector("[data-wedding]")?.addEventListener("click",()=>{const data={date:document.querySelector("#date").value,city:document.querySelector("#city").value.trim(),period:document.querySelector("#period").value,venue:document.querySelector("#venue").value};if(!data.date||data.city.length<2||!data.period||!data.venue){document.querySelector("#wedding-error").hidden=false;return;}state.answers.wedding=data;state.current++;render();});
  document.querySelector("[data-planning]")?.addEventListener("click",()=>{const data={service:document.querySelector("#service").value,budget:document.querySelector("#budget").value,size:document.querySelector("#size").value.trim(),availability:document.querySelector("#availability").value};if(!data.service||!data.budget||!data.size||!data.availability){document.querySelector("#planning-error").hidden=false;return;}state.answers.planning=data;state.current++;render();});
  document.querySelector("[data-pdf]")?.addEventListener("click",()=>window.print());
  document.querySelector("[data-restart]")?.addEventListener("click",()=>{state.current=0;state.answers={};render();});
}

render();
