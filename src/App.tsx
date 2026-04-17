import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Zap,
  Headphones,
  ExternalLink,
  Lock,
  Trophy,
  ChevronLeft,
  ChevronRight,
  Star,
  Gift,
  TrendingUp
} from 'lucide-react';

const MAIN_URL = "https://wrd483.com/main?agentCode=p138";

const BASE = import.meta.env.BASE_URL;

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-bg text-white font-sans selection:bg-brand-primary selection:text-brand-bg">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-brand-bg/70 border-b border-brand-border/30">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
          aria-label="잭2030 공식 로고"
        >
          <img src={`${BASE}images/world-logo.png`} alt="WORLD LIVE GAMES" className="w-10 h-10 rounded-lg" />
          <span className="text-xl font-extrabold tracking-tighter text-brand-primary">잭2030</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex gap-10 items-center"
        >
          <ul className="flex gap-8 text-xs font-bold tracking-widest text-brand-text-muted uppercase">
            <li className="hover:text-brand-primary transition-colors cursor-pointer"><a href="#services">서비스</a></li>
            <li className="hover:text-brand-primary transition-colors cursor-pointer"><a href="#events">이벤트</a></li>
            <li className="hover:text-brand-primary transition-colors cursor-pointer"><a href="#guide">가입방법</a></li>
            <li className="hover:text-brand-primary transition-colors cursor-pointer"><a href="#faq">FAQ</a></li>
          </ul>
          <a
            href={MAIN_URL}
            className="px-6 py-2.5 rounded-lg bg-brand-primary text-brand-bg text-sm font-bold hover:scale-105 transition-transform flex items-center gap-2"
          >
            공식주소 이동 <ExternalLink size={14} />
          </a>
        </motion.div>
      </nav>

      {/* Hero Section - Full Width Banner */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${BASE}images/hero-banner.png`}
            alt="잭2030 그랜드 오픈 - 국내 최고의 라이브 스포츠 & 카지노"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-brand-bg/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block px-3 py-1 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-[10px] font-bold tracking-[0.2em] rounded uppercase mb-6">
              Korea's #1 Premium Entertainment
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-[1.1]">
              카지노 & 온라인게임 <br />
              <span className="text-brand-primary font-black italic">잭2030 공식 주소</span>
            </h1>
            <p className="text-brand-text-muted text-lg max-w-lg mb-10 font-medium leading-relaxed">
              대한민국 최고의 스포츠 & 카지노 솔루션. 압도적인 자본력과 업계 최고 수준의 보안으로 회원님의 소중한 가치를 지켜드립니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={MAIN_URL}
                className="px-8 py-4 bg-brand-primary text-brand-bg font-bold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] text-lg"
                title="잭2030 공식 주소 바로가기"
              >
                잭2030 입장하기
              </a>
              <a
                href="#"
                className="px-8 py-4 border border-brand-border text-white font-bold rounded-lg hover:bg-white/5 transition-all text-center"
                title="가입 코드 안내"
              >
                가입코드: JACK
              </a>
            </div>
          </motion.div>

          {/* Right - WORLD Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <img
              src={`${BASE}images/world-logo.png`}
              alt="WORLD LIVE GAMES"
              className="w-72 h-72 object-contain drop-shadow-[0_0_40px_rgba(56,189,248,0.3)]"
            />
          </motion.div>
        </div>
      </section>

      {/* Live Status Board */}
      <section className="py-8 px-6 bg-brand-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between p-8 bg-brand-surface/40 rounded-2xl border border-brand-primary/20 backdrop-blur-xl">
            <div className="flex items-center gap-3 text-brand-primary font-bold">
              <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-sm tracking-widest">LIVE SYSTEM STATUS</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full lg:w-auto">
              <StatusMetric label="서버 대역폭" value="99% Stable" />
              <StatusMetric label="레이턴시" value="12ms" />
              <StatusMetric label="보안 방화벽" value="ACTIVE" />
              <StatusMetric label="실시간 접속" value="8,492" />
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider - Hero Banner Carousel */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-3">HOT EVENTS</h2>
            <p className="text-brand-text-muted font-medium">놓치면 후회할 잭2030의 특별 이벤트</p>
          </div>
          <ImageCarousel />
        </div>
      </section>

      {/* Premium Services - 3 Column with Real Images */}
      <section id="services" className="py-24 px-6 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">PREMIUM SERVICES</h2>
            <p className="text-brand-text-muted font-medium">잭2030이 제공하는 독보적인 라이브 서비스</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Live Sports */}
            <ServiceCard
              image={`${BASE}images/son-heungmin.png`}
              subImage={`${BASE}images/ronaldo.png`}
              category="LIVE SPORTS"
              title="실시간 스포츠 중계"
              desc="전 세계 모든 종목의 경기를 가장 빠른 배당과 함께 실시간으로 제공합니다."
            />

            {/* Live Casino */}
            <ServiceCard
              image={`${BASE}images/live-casino.png`}
              subImage={`${BASE}images/slots-game.png`}
              category="LIVE CASINO"
              title="리얼 호텔 카지노"
              desc="에볼루션, 마이크로게이밍 등 글로벌 메이저 브랜드의 라이브 테이블을 선사합니다."
            />

            {/* Minigames */}
            <ServiceCard
              image={`${BASE}images/lottery-models.png`}
              category="MINI GAMES"
              title="다양한 온라인게임"
              desc="파워볼, 사다리, 로또 등 잭2030만의 특별한 미니게임과 슬롯을 즐기세요."
            />
          </div>
        </div>
      </section>

      {/* Sports Highlight - Full Width Split */}
      <section className="py-24 px-6 bg-brand-surface/30 border-y border-brand-border/30 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-primary text-xs font-black tracking-[0.3em] mb-4 uppercase">World Class Athletes</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
              최고의 스포츠<br />
              <span className="text-brand-primary italic">실시간 베팅</span>
            </h2>
            <p className="text-brand-text-muted font-medium mb-8 leading-relaxed max-w-md">
              축구, 야구, 농구, 배구는 물론 e-스포츠까지. 전 세계 50개국 이상의 리그를 실시간으로 분석하여 최적의 배당률을 제시합니다.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-brand-bg/60 p-4 rounded-xl border border-brand-border/30 text-center">
                <div className="text-2xl font-black text-brand-primary">50+</div>
                <div className="text-[10px] text-brand-text-muted font-bold mt-1">리그 커버</div>
              </div>
              <div className="bg-brand-bg/60 p-4 rounded-xl border border-brand-border/30 text-center">
                <div className="text-2xl font-black text-brand-primary">0.1s</div>
                <div className="text-[10px] text-brand-text-muted font-bold mt-1">실시간 배당</div>
              </div>
              <div className="bg-brand-bg/60 p-4 rounded-xl border border-brand-border/30 text-center">
                <div className="text-2xl font-black text-brand-primary">24H</div>
                <div className="text-[10px] text-brand-text-muted font-bold mt-1">논스톱 서비스</div>
              </div>
            </div>
            <a href={MAIN_URL} className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-brand-bg font-bold rounded-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all">
              스포츠 베팅 시작 <ExternalLink size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-brand-border/30 shadow-xl">
                <img src={`${BASE}images/son-heungmin.png`} alt="손흥민" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden border border-brand-border/30 shadow-xl">
                <img src={`${BASE}images/sports-team.png`} alt="스포츠 팀" className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden border border-brand-border/30 shadow-xl">
                <img src={`${BASE}images/ronaldo.png`} alt="호날두" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden border border-brand-primary/40 shadow-xl relative">
                <img src={`${BASE}images/baseball-event.png`} alt="야구 이벤트" className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Posters - Full Width Grid */}
      <section id="events" className="py-24 px-6 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">SPECIAL EVENTS</h2>
            <p className="text-brand-text-muted font-medium">잭2030만의 파격적인 혜택을 확인하세요</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EventPoster
              image={`${BASE}images/tournament-500.jpeg`}
              title="매일 500만원 토너먼트"
              tag="참가비 ZERO"
            />
            <EventPoster
              image={`${BASE}images/baseball-event.png`}
              title="야구 시즌 이벤트"
              tag="최대 36,000원"
            />
            <EventPoster
              image={`${BASE}images/usdt-signup.png`}
              title="USDT 테더 가입혜택"
              tag="페이백 12%"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-brand-surface/30 border-y border-brand-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border/20 border border-brand-border/20 rounded-3xl overflow-hidden shadow-inner">
            <FeatureCard
              icon={<Zap className="text-brand-primary" size={32} />}
              title="초고속 5분 충환전"
              description="최첨단 자동화 시스템으로 대기 시간 없이 즉각적인 입출금 처리를 보장합니다."
            />
            <FeatureCard
              icon={<ShieldCheck className="text-brand-primary" size={32} />}
              title="무사고 검증 완료"
              description="수년간 단 한 건의 사고 없이 운영 중인 100% 검증된 메이저 사이트입니다."
            />
            <FeatureCard
              icon={<Headphones className="text-brand-primary" size={32} />}
              title="24시 공식 상담센터"
              description="365일 24시간 전문 상담원이 친절하고 빠른 피드백을 제공합니다."
            />
          </div>
        </div>
      </section>

      {/* Casino & Slots Showcase */}
      <section className="py-24 px-6 bg-brand-bg overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-brand-border/30 shadow-2xl">
              <img src={`${BASE}images/live-casino.png`} alt="라이브 카지노" className="w-full h-80 object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden border-2 border-brand-primary shadow-2xl">
              <img src={`${BASE}images/slots-game.png`} alt="슬롯 게임" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-primary text-xs font-black tracking-[0.3em] mb-4 uppercase">Live Casino & Slots</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
              리얼 호텔 카지노를<br />
              <span className="text-brand-primary italic">당신의 손 안에</span>
            </h2>
            <p className="text-brand-text-muted font-medium mb-8 leading-relaxed">
              에볼루션 게이밍, 프라그마틱 플레이, 아시아 게이밍 등 글로벌 선두 소프트웨어와 공식 파트너십. 바카라, 룰렛, 블랙잭, 포커 등 수백 가지 테이블을 24시간 제공합니다.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-bold text-brand-primary">에볼루션</span>
              <span className="px-3 py-1.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-bold text-brand-primary">프라그마틱</span>
              <span className="px-3 py-1.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-bold text-brand-primary">마이크로게이밍</span>
              <span className="px-3 py-1.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-xs font-bold text-brand-primary">아시아게이밍</span>
            </div>
            <a href={MAIN_URL} className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-brand-bg font-bold rounded-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all">
              카지노 입장 <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Step Guide */}
      <section id="guide" className="py-24 px-6 bg-brand-surface/20 border-t border-brand-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 italic">START YOUR JOURNEY</h2>
              <p className="text-brand-text-muted font-medium">잭2030과 함께하는 3단계 초간편 이용 가이드</p>
            </div>
            <div className="text-brand-primary font-mono font-bold tracking-widest bg-brand-primary/10 px-4 py-2 rounded-full border border-brand-primary/20 text-sm">
              FAST & SECURE
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GuideStep
              number="01"
              title="공식 주소 접속"
              desc="상단의 '잭2030 입장하기' 버튼을 통해 공식 도메인으로 안전하게 접속합니다."
            />
            <GuideStep
              number="02"
              title="회원가입 및 승인"
              desc="공식 가입코드 JACK을 입력하여 가입을 신청합니다."
            />
            <GuideStep
              number="03"
              title="게임 시작 및 혜택"
              desc="첫 충전 보너스를 포함한 다양한 신규 혜택을 수령하고 즐기세요."
            />
          </div>
        </div>
      </section>

      {/* Trust & Score Section */}
      <section className="py-24 px-6 bg-brand-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-10 tracking-tighter leading-none italic">
              압도적 스케일 <br />
              <span className="text-brand-primary">JACK2030</span>
            </h2>
            <div className="space-y-8">
              <div className="p-6 bg-brand-primary/5 rounded-2xl border border-brand-primary/10">
                <h4 className="text-brand-primary font-black text-sm tracking-widest mb-4 uppercase">Latest News</h4>
                <div className="space-y-3">
                  <NewsItem date="2024.04.17" text="잭2030 신규 공식 우회 도메인 실시간 업데이트 완료" />
                  <NewsItem date="2024.04.16" text="라이브 카지노 전 서버 보안 강화 패치 적용" />
                  <NewsItem date="2024.04.15" text="스포츠 토토 해외 고배당 연동 시스템 최적화" />
                </div>
              </div>

              <TrustItem title="오랜 기간 검증된 무사고" desc="수년간 단 한 건의 안전 사고도 없는 최상위 보안 등급의 메이저 놀이터입니다." />
              <TrustItem title="독보적인 고액 전용 한도" desc="고액 유저를 위한 차별화된 베팅 한도와 무제한 환전 서비스를 제공합니다." />
              <TrustItem title="다양한 이벤트와 혜택" desc="매일 터지는 주간 정산, 신규 첫충 무제한 이벤트 등 다양한 프로모션이 준비되어 있습니다." />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 2 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="bg-brand-surface p-10 rounded-[3rem] border border-brand-border/40 relative shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
          >
            <Trophy size={50} className="text-brand-primary mb-6" />
            <div className="text-7xl font-black text-white mb-3 tracking-tighter">99.8%</div>
            <div className="text-brand-text-muted font-bold text-sm uppercase tracking-widest mb-8">Verification Score</div>

            <div className="space-y-6">
              <div className="p-5 bg-brand-bg/50 rounded-2xl border border-brand-border/30 flex items-center justify-between">
                <span className="font-bold">시스템 안정성</span>
                <span className="text-brand-primary font-black">EXCELLENT</span>
              </div>
              <div className="p-5 bg-brand-bg/50 rounded-2xl border border-brand-border/30 flex items-center justify-between">
                <span className="font-bold">보안 업데이트</span>
                <span className="text-brand-primary font-black">LATEST v4.0</span>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 p-8 bg-brand-primary rounded-2xl shadow-2xl skew-y-2">
              <Lock className="text-brand-bg" size={28} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-brand-surface/20 border-t border-brand-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-12 text-center text-brand-primary">자주 묻는 질문 (FAQ)</h2>
          <div className="space-y-4">
            <FAQItem q="잭2030 공식 주소는 어떻게 확인하나요?" a="본 페이지는 잭2030의 공식 안내 페이지입니다. 상단의 버튼을 클릭하면 항상 최신의 실시간 우회 주소로 연결됩니다." />
            <FAQItem q="가입코드는 필수인가요?" a="네, 철저한 회원 관리와 보안을 위해 공식 가입코드를 사용합니다. 가입 시 코드를 정확히 입력하셔야 정상 승인 및 혜택 수령이 가능합니다." />
            <FAQItem q="카지노 게임 조작이 있나요?" a="에볼루션, 마이크로게이밍 등 세계적인 메이저 게임사와 정식 계약을 맺고 라이브 스트리밍을 제공하므로 조작이 절대 불가능합니다." />
            <FAQItem q="충환전 시간은 얼마나 걸리나요?" a="자동화 시스템은 평균 5분 이내의 처리를 원칙으로 합니다. 은행 점검 시간을 제외하고 24시간 이용 가능합니다." />
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-24 px-6 bg-brand-surface/40 border-t border-brand-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            <SEOColumn title="잭2030 카테고리별 주소" items={["잭2030 공식주소", "잭2030 우회주소", "잭2030 평생주소", "잭2030 도메인", "잭2030 예비도메인", "잭2030 모바일접속", "잭2030 앱설치", "잭2030 고객센터"]} />
            <SEOColumn title="안전하고 빠른 게임 서비스" items={["카지노 온라인게임", "바카라사이트 추천", "슬롯사이트 잭팟", "에볼루션 카지노", "프라그마틱 슬롯", "릴게임 전문", "온라인 바카라", "실시간 카지노"]} />
            <SEOColumn title="스포츠 베팅 및 실시간 중계" items={["메이저사이트 추천", "안전놀이터 검증", "토토사이트 주소", "해외 스포츠 배당", "라이브 베팅 사이트", "e스포츠 베팅", "실시간 경기 중계", "고액 전용 놀이터"]} />
            <SEOColumn title="특별 이벤트 및 혜택" items={["잭2030 가입코드", "잭2030 추천인", "잭2030 꽁머니", "신규 첫충 입플", "매일 터지는 무제한 혜택", "주간 활동 정산", "출석 체크 이벤트", "지인 추천 이벤트"]} />
          </div>

          <div className="text-brand-text-muted text-xs leading-loose font-medium opacity-80 border-t border-brand-border/20 pt-12 space-y-4">
            <p>본 잭2030(JACK2030) 공식 홈페이지는 회원님들의 편의를 위해 제작되었으며, 대한민국 최고의 카지노 온라인게임 서비스를 제공하는 메이저 사이트의 정체성을 담고 있습니다. 우리는 수년간의 운영 노하우를 바탕으로 안전과 보안을 최우선 가치로 삼고 있습니다.</p>
            <p>우리의 서비스는 라이브 카지노, 실시간 스포츠 중계, 다양한 온라인 슬롯 및 미니게임을 아우릅니다. 전 세계적으로 신뢰받는 게임 소프트웨어 개발사들과의 협업을 통해 투명한 게임 결과를 보장하며, 고성능 서버 환경을 통해 끊김 없는 쾌적한 플레이를 제공합니다.</p>
            <p>보안 측면에서도 잭2030은 타의 추종을 불허합니다. 개인정보 보호를 위한 다중 암호화 시스템과 텔레그램을 통한 익명 상담 서비스를 운영하여 회원님의 프라이버시를 완벽하게 보호합니다.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-brand-border bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-4">
              <img src={`${BASE}images/world-logo.png`} alt="WORLD LIVE GAMES" className="w-12 h-12 rounded-lg" />
              <div>
                <div className="text-2xl font-black text-brand-primary tracking-tighter">JACK2030</div>
                <div className="text-brand-text-muted text-xs font-medium">https://wrd483.com</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <SEOBadge label="#카지노추천" />
              <SEOBadge label="#온라인게임사이트" />
              <SEOBadge label="#잭2030주소" />
              <SEOBadge label="#안전놀이터" />
              <SEOBadge label="#메이저사이트" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between pt-8 border-t border-brand-border/30 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
            <p>&copy; 2024 JACK2030 | NEW ERA OF DIGITAL SOLUTION. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-brand-primary">Privacy Policy</a>
              <a href="#" className="hover:text-brand-primary">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ===== Components ===== */

function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const images = [
    { src: `${import.meta.env.BASE_URL}images/tournament-500.jpeg`, alt: '매일 500만원 토너먼트' },
    { src: `${import.meta.env.BASE_URL}images/baseball-event.png`, alt: '야구 시즌 이벤트' },
    { src: `${import.meta.env.BASE_URL}images/usdt-signup.png`, alt: 'USDT 가입 혜택' },
    { src: `${import.meta.env.BASE_URL}images/hero-banner.png`, alt: '그랜드 오픈' },
  ];

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-brand-border/30 shadow-2xl">
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((img, i) => (
            <div key={i} className="w-full flex-shrink-0">
              <img src={img.src} alt={img.alt} className="w-full h-[300px] md:h-[500px] object-contain bg-black/50" />
            </div>
          ))}
        </div>
      </div>
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-brand-bg/80 backdrop-blur-sm rounded-full border border-brand-border/40 hover:bg-brand-primary/20 transition-colors">
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-brand-bg/80 backdrop-blur-sm rounded-full border border-brand-border/40 hover:bg-brand-primary/20 transition-colors">
        <ChevronRight size={20} />
      </button>
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-brand-primary w-8' : 'bg-brand-border'}`} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ image, subImage, category, title, desc }: { image: string, subImage?: string, category: string, title: string, desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-brand-surface border border-brand-border/40 rounded-3xl overflow-hidden shadow-xl flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        {subImage && (
          <div className="absolute bottom-3 right-3 w-20 h-20 rounded-xl border-2 border-brand-primary overflow-hidden shadow-2xl">
            <img src={subImage} alt="Highlight" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="absolute top-3 left-3 px-3 py-1 bg-brand-bg/80 backdrop-blur-md rounded text-[9px] font-black text-brand-primary tracking-widest border border-brand-primary/30">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black mb-2 tracking-tighter">{title}</h3>
        <p className="text-brand-text-muted text-sm font-medium leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function EventPoster({ image, title, tag }: { image: string, title: string, tag: string }) {
  return (
    <a href={MAIN_URL} className="group block">
      <div className="rounded-2xl overflow-hidden border border-brand-border/30 shadow-xl relative">
        <img src={image} alt={title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="inline-block px-3 py-1 bg-brand-primary/90 text-brand-bg text-xs font-bold rounded mb-2">{tag}</span>
          <h3 className="text-xl font-black text-white">{title}</h3>
        </div>
      </div>
    </a>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-10 bg-brand-bg hover:bg-brand-surface/40 transition-colors group">
      <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform origin-left">{icon}</div>
      <h3 className="text-lg font-extrabold mb-3">{title}</h3>
      <p className="text-brand-text-muted text-sm leading-relaxed font-medium">{description}</p>
    </div>
  );
}

function TrustItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex gap-4 group">
      <div className="h-2 w-2 rounded-full bg-brand-primary mt-2 shrink-0 group-hover:scale-150 transition-transform" />
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-brand-text-muted font-medium text-sm max-w-md">{desc}</p>
      </div>
    </div>
  );
}

function GuideStep({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="relative p-8 bg-brand-surface/40 rounded-3xl border border-brand-border/20 group hover:border-brand-primary/40 transition-all">
      <div className="text-5xl font-black text-brand-primary/20 mb-4 group-hover:text-brand-primary/40 transition-colors">{number}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-brand-text-muted text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function FAQItem({ q, a }: { q: string, a: string }) {
  return (
    <div className="p-5 bg-brand-bg/50 rounded-2xl border border-brand-border/20">
      <h4 className="font-bold text-base mb-3 flex items-center gap-2">
        <span className="text-brand-primary">Q.</span> {q}
      </h4>
      <p className="text-brand-text-muted text-sm leading-relaxed pl-6 border-l-2 border-brand-primary/20">{a}</p>
    </div>
  );
}

function NewsItem({ date, text }: { date: string, text: string }) {
  return (
    <div className="flex gap-4 items-start text-xs border-b border-brand-border/10 pb-3 last:border-0">
      <span className="text-brand-primary font-mono whitespace-nowrap">{date}</span>
      <span className="text-brand-text-muted font-medium leading-relaxed">{text}</span>
    </div>
  );
}

function SEOBadge({ label }: { label: string }) {
  return (
    <span className="px-3 py-1.5 border border-brand-border rounded text-[10px] font-bold text-brand-text-muted tracking-widest hover:border-brand-primary hover:text-brand-primary transition-colors cursor-default">
      {label}
    </span>
  );
}

function SEOColumn({ title, items }: { title: string, items: string[] }) {
  return (
    <div>
      <h5 className="text-white font-black text-sm mb-4 pb-2 border-b border-brand-primary/30 inline-block">{title}</h5>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="text-[11px] text-brand-text-muted font-bold hover:text-brand-primary transition-colors cursor-default">{item}</li>
        ))}
      </ul>
    </div>
  );
}
