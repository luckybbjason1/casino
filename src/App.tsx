import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ShieldCheck, 
  Zap, 
  Headphones, 
  ExternalLink, 
  MousePointer2, 
  Lock, 
  Trophy,
  ChevronDown
} from 'lucide-react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const MAIN_URL = "https://wrd483.com/main?agentCode=p138";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-bg text-white font-sans selection:bg-brand-primary selection:text-brand-bg">
      {/* Header Section */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-10 flex justify-between items-center backdrop-blur-md bg-brand-bg/50 border-b border-brand-border/30">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-extrabold tracking-tighter flex items-center gap-1 text-brand-primary"
          aria-label="잭2030 공식 로고"
        >
          잭2030 (JACK2030)
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex gap-10 items-center"
        >
          <ul className="flex gap-8 text-xs font-bold tracking-widest text-brand-text-muted uppercase">
            <li className="hover:text-brand-primary transition-colors cursor-pointer"><a href="#services">주요 서비스</a></li>
            <li className="hover:text-brand-primary transition-colors cursor-pointer"><a href="#guide">가입방법</a></li>
            <li className="hover:text-brand-primary transition-colors cursor-pointer"><a href="#faq">자주묻는질문</a></li>
          </ul>
          <a 
            href={MAIN_URL}
            className="px-6 py-2.5 rounded-lg bg-brand-primary text-brand-bg text-sm font-bold hover:scale-105 transition-transform flex items-center gap-2"
          >
            공식주소 이동 <ExternalLink size={14} />
          </a>
        </motion.div>
      </nav>

      {/* Live Status Board - Content Freshness Simulation */}
      <section className="py-20 px-10 bg-brand-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-center justify-between p-10 bg-brand-surface/40 rounded-[2.5rem] border border-brand-primary/20 backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-brand-primary font-bold animate-pulse">
                <div className="w-2 h-2 rounded-full bg-brand-primary" />
                <span>LIVE SYSTEM STATUS</span>
              </div>
              <h3 className="text-2xl font-black italic">잭2030 실시간 도메인 및 서버 최적화 상태</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full lg:w-auto">
              <StatusMetric label="서버 대역폭" value="Stable 99%" />
              <StatusMetric label="네트워크 레이턴시" value="12ms" />
              <StatusMetric label="보안 방화벽" value="ACTIVE" />
              <StatusMetric label="실시간 접속" value="8,492 Users" />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Media Enhanced */}
      <section className="relative min-h-screen flex items-center pt-24 px-10 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/jack_hero/1920/1080?blur=2" 
            alt="Jack2030 Grand Open" 
            className="w-full h-full object-cover grayscale mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full relative z-10">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-content"
          >
            <div className="inline-block px-3 py-1 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-[10px] font-bold tracking-[0.2em] rounded uppercase mb-6">
              Korea's #1 Premium Entertainment
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-[1.1]">
              카지노 & 온라인게임 <br />
              <span className="text-brand-primary font-black italic">잭2030 공식 주소</span>
            </h1>
            <p className="text-brand-text-muted text-lg md:text-xl max-w-lg mb-12 font-medium leading-relaxed italic">
              대한민국 최고의 스포츠 & 카지노 솔루션, 잭2030(Jack2030)입니다. 압도적인 자본력과 업계 최고 수준의 보안으로 회원님의 소중한 가치를 지켜드립니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={MAIN_URL}
                className="px-8 py-4 bg-brand-primary text-brand-bg font-bold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                title="잭2030 공식 주소 바로가기"
              >
                잭2030 입장하기
              </a>
              <a 
                href="#"
                className="px-8 py-4 border border-brand-border text-white font-bold rounded-lg hover:bg-white/5 transition-all text-center"
                title="가입 코드 및 코드 안내"
              >
                가입코드: JACK
              </a>
            </div>
          </motion.div>

          {/* Right Content - Visual Banner Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:block relative group overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl"
          >
            <img 
              src="https://picsum.photos/seed/jack_banner/1200/600" 
              alt="잭2030 그랜드 오픈" 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-60"></div>
          </motion.div>
        </div>
      </section>

      {/* Service Showcase - Architectural Layout */}
      <section className="py-32 px-10 relative bg-brand-bg overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">PREMIUM SERVICES</h2>
            <p className="text-brand-text-muted font-medium">잭2030이 제공하는 독보적인 라이브 스트리밍 서비스를 확인하세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Live Sports */}
            <ServiceDisplay 
              image="https://picsum.photos/seed/soccer_heungmin/800/600"
              subImage="https://picsum.photos/seed/ronaldo_pro/400/400"
              category="LIVE SPORTS"
              title="실시간 스포츠 중계"
              desc="전 세계 모든 종목의 경기를 가장 빠른 배당과 함께 실시간으로 제공합니다."
            />
            
            {/* Live Casino */}
            <ServiceDisplay 
              image="https://picsum.photos/seed/live_casino_table/800/600"
              subImage="https://picsum.photos/seed/casino_hero/400/400"
              category="LIVE CASINO"
              title="리얼 호텔 카지노"
              desc="에볼루션, 마이크로게이밍 등 글로벌 메이저 브랜드의 라이브 테이블을 선사합니다."
            />

            {/* Minigames */}
            <ServiceDisplay 
              image="https://picsum.photos/seed/lottery_model/800/600"
              category="MINI GAMES"
              title="다양한 온라인게임"
              desc="파워볼, 사다리, 로또 등 잭2030만의 특별한 미니게임과 슬롯을 즐기세요."
            />
          </div>
        </div>
      </section>

      {/* Features Section - Geometric Variant */}
      <section id="services" className="py-32 px-10 bg-brand-surface/30 border-y border-brand-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-brand-border/20 border border-brand-border/20 rounded-3xl overflow-hidden shadow-inner">
            <FeatureCard 
              icon={<Zap className="text-brand-primary" size={32} aria-label="빠른 속도 아이콘" />}
              title="초고속 5분 충환전"
              description="잭2030만의 최첨단 자동화 시스템 도입으로 대기 시간 없이 즉각적인 입출금 처리를 보장합니다."
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-brand-primary" size={32} aria-label="보안 아이콘" />}
              title="무사고 검증 완료"
              description="다년간의 운영 노하우와 강력한 자본력으로 단 한 건의 안전 사고 없이 운영 중인 100% 검증된 사이트입니다."
            />
            <FeatureCard 
              icon={<Headphones className="text-brand-primary" size={32} aria-label="고객센터 아이콘" />}
              title="24시 공식 상담센터"
              description="텔레그램 및 고객센터를 통해 365일 24시간 전문 상담원이 친절하고 빠른 피드백을 제공합니다."
            />
          </div>
        </div>
      </section>

      {/* Step Guide Section - Solidity Boost */}
      <section id="guide" className="py-32 px-10 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 italic">START YOUR JOURNEY</h2>
              <p className="text-brand-text-muted font-medium">잭2030(JACK2030)과 함께하는 3단계 초간편 이용 가이드</p>
            </div>
            <div className="text-brand-primary font-mono font-bold tracking-widest bg-brand-primary/10 px-4 py-2 rounded-full border border-brand-primary/20">
              FAST & SECURE
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <GuideStep 
              number="01"
              title="공식 주소 접속"
              desc="상단의 '잭2030 입장하기' 버튼을 통해 현재 활성화된 공식 도메인으로 안전하게 접속합니다."
            />
            <GuideStep 
              number="02"
              title="회원가입 및 승인"
              desc="공식 가입코드를 입력하여 가입을 신청합니다. 잭2030은 무분별한 가입을 방지하여 보안을 유지합니다."
            />
            <GuideStep 
              number="03"
              title="게임 시작 및 혜택"
              desc="첫 충전 보너스를 포함한 다양한 신규 혜택을 수령하고, 최고의 카지노 & 온라인게임을 즐기세요."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section - SEO Content Density */}
      <section id="faq" className="py-32 px-10 bg-brand-surface/20 border-t border-brand-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-12 text-center text-brand-primary">자주 묻는 질문 (FAQ)</h2>
          <div className="space-y-6">
            <FAQItem 
              q="잭2030 공식 주소는 어떻게 확인하나요?"
              a="본 페이지는 잭2030(Jack2030)의 공식 안내 페이지입니다. 상단의 버튼을 클릭하면 항상 최신의 실시간 우회 주소로 연결됩니다."
            />
            <FAQItem 
              q="가입코드는 필수인가요?"
              a="네, 잭2030은 철저한 회원 관리와 보안을 위해 공식 가입코드를 사용합니다. 가입 시 코드를 정확히 입력하셔야 정상 승인 및 혜택 수령이 가능합니다."
            />
            <FAQItem 
              q="카지노 게임 조작이 있나요?"
              a="잭2030은 에볼루션, 마이크로게이밍 등 세계적인 메이저 게임사와 정식 계약을 맺고 라이브 스트리밍 서비스를 제공하므로 조작이 절대 불가능합니다."
            />
            <FAQItem 
              q="충환전 시간은 얼마나 걸리나요?"
              a="잭2030의 자동화 시스템은 평균 5분 이내의 처리를 원칙으로 합니다. 은행 점검 시간을 제외하고 24시간 언제든 신속하게 이용 가능합니다."
            />
          </div>
        </div>
      </section>

      {/* Deep Authority Section - SEO Powerhouse */}
      <section className="py-32 px-10 bg-brand-bg relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Casino Authority */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black text-brand-primary mb-6 tracking-tight">잭2030 라이브 카지노 솔루션의 전문성</h2>
                <div className="text-brand-text-muted space-y-4 text-sm leading-relaxed font-medium">
                  <p>
                    최근 온라인 카지노 시장은 급격한 기술적 발전을 거듭하고 있습니다. 잭2030(JACK2030)은 이러한 변화의 중심에서 실시간 스트리밍 기술과 블록체인 기반의 공정성 검증 시스템을 결합하여 회원님께 가장 투명한 게임 환경을 제공합니다.
                  </p>
                  <p>
                    우리의 라이브 카지노는 필리핀, 마카오, 유럽 등 전 세계 주요 카지노 스튜디오와 직접 연결되어 있습니다. 에볼루션 게이밍(Evolution Gaming), 프라그마틱 플레이(Pragmatic Play), 아시아 게이밍(Asia Gaming) 등 글로벌 선두 소프트웨어 공급업체와의 공식 파트너십을 통해 바카라, 룰렛, 블랙잭, 포커 등 수백 가지의 독창적인 테이블 게임을 24시간 끊김 없이 제공합니다.
                  </p>
                  <p>
                    특히 잭2030만의 독자적인 인터페이스는 모바일과 데스크탑 환경 모두에서 최적화된 UX를 선사합니다. 0.1초의 레이턴시도 허용하지 않는 초고속 데이터 전송 기술을 통해 딜러의 카드 한 장, 룰렛 휠의 회전 하나하나를 생생하게 포착하여 현장감을 극대화합니다.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">스포츠 베팅의 새로운 기준</h3>
                <div className="text-brand-text-muted space-y-4 text-sm leading-relaxed font-medium">
                  <p>
                    스포츠 베팅은 단순한 예측을 넘어 데이터 분석과 전략의 영역입니다. 잭2030은 전 세계 50개국 이상의 스포츠 리그 데이터를 실시간으로 수집하고 분석하여 회원님께 가장 유리한 배당률을 제시합니다.
                  </p>
                  <p>
                    축구, 야구, 농구, 배구와 같은 메이저 종목은 물론, 테니스, 골프, 아이스하키, 그리고 최근 급부상하고 있는 e-스포츠와 가상 스포츠까지 아우르는 압도적인 라인업을 자랑합니다. 승무패, 핸디캡, 언더오버 뿐만 아니라 수천 가지의 스페셜 베팅 옵션을 제공하여 전략적인 베팅의 재미를 더했습니다.
                  </p>
                  <p>
                    우리의 시스템은 실시간 인플레이(In-Play) 베팅에 최적화되어 있습니다. 경기 진행 상황에 따라 시시각각 변화하는 배당을 실시간으로 확인하고 즉각적으로 반응할 수 있는 직관적인 대시보드는 잭2030 회원님만이 누릴 수 있는 특권입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Authority */}
            <div className="space-y-12 bg-brand-surface/30 p-12 rounded-[3rem] border border-brand-border/30">
              <div>
                <h2 className="text-3xl font-black text-brand-primary mb-6 tracking-tight">차세대 보안 아키텍처 및 무사고 운영</h2>
                <p className="text-brand-text-muted text-sm leading-relaxed mb-6 font-medium">
                  온라인 플랫폼에서 가장 중요한 것은 보안과 신뢰입니다. 잭2030은 설립 이래 단 한 차례의 보안 사고도 허용하지 않은 완벽한 무사고 기록을 보유하고 있습니다. 이는 단순한 우연이 아니라 과학적인 보안 설계의 결과입니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-brand-bg rounded-2xl border border-brand-border/20">
                    <h4 className="text-white font-bold mb-2 lowercase tracking-tighter">AES-256 Encryption</h4>
                    <p className="text-[11px] text-brand-text-muted font-medium">모든 데이터 전송 구간에 군사 등급의 암호화 기술을 적용하여 외부 유출을 원천 봉쇄합니다.</p>
                  </div>
                  <div className="p-6 bg-brand-bg rounded-2xl border border-brand-border/20">
                    <h4 className="text-white font-bold mb-2 lowercase tracking-tighter">DDoS Protection</h4>
                    <p className="text-[11px] text-brand-text-muted font-medium">대규모 트래픽 공격으로부터 시스템을 보호하는 하드웨어 방화벽과 안티 디도스 솔루션을 상시 가동합니다.</p>
                  </div>
                  <div className="p-6 bg-brand-bg rounded-2xl border border-brand-border/20">
                    <h4 className="text-white font-bold mb-2 lowercase tracking-tighter">Privacy First</h4>
                    <p className="text-[11px] text-brand-text-muted font-medium">회원님의 소중한 개인정보는 일체 제3자에게 공유되지 않으며, 독자적인 데이터 파기 정책에 의해 관리됩니다.</p>
                  </div>
                  <div className="p-6 bg-brand-bg rounded-2xl border border-brand-border/20">
                    <h4 className="text-white font-bold mb-2 lowercase tracking-tighter">Global Servers</h4>
                    <p className="text-[11px] text-brand-text-muted font-medium">전 세계 여러 지역에 분산된 서버 인프라를 통해 어떠한 환경에서도 중단 없는 서비스를 보장합니다.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">온라인 게임의 트렌드를 주도하는 슬롯 & 미니게임</h3>
                <p className="text-brand-text-muted text-sm leading-relaxed font-medium">
                  단순함 속에 숨겨진 강력한 한 방, 잭2030의 슬롯과 미니게임은 높은 환수율(RTP)과 다양한 테마로 구성되어 있습니다. 고전적인 릴 머신부터 화려한 그래픽의 비디오 슬롯까지 취향에 맞는 게임을 무제한으로 즐길 수 있습니다. 또한 신청 즉시 처리되는 빛의 속도 환전 시스템은 승리의 기쁨을 배가시킵니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section - Geometric Clean */}
      <section className="py-40 px-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-10 tracking-tighter leading-none italic">
              압도적 스케일 <br />
              <span className="text-brand-primary">JACK2030</span>
            </h2>
            <div className="space-y-10">
              <div className="p-8 bg-brand-primary/5 rounded-3xl border border-brand-primary/10">
                <h4 className="text-brand-primary font-black text-sm tracking-widest mb-6 border-b border-brand-primary/20 pb-4 uppercase">Latest News & Domain Update</h4>
                <div className="space-y-4">
                  <NewsItem date="2024.04.17" text="잭2030 신규 공식 우회 도메인 'wrd483.com' 실시간 업데이트 완료" />
                  <NewsItem date="2024.04.16" text="라이브 카지노 전 서버 시스템 정밀 점검 및 보안 강화 패치 적용" />
                  <NewsItem date="2024.04.15" text="스포츠 토토 해외 고배당 실시간 연동 시스템 기능 최적화" />
                </div>
              </div>
              
              <TrustItem 
                title="오랜 기간 검증된 무사고"
                desc="수년간 운영하며 단 한 건의 안전 사고도 발생하지 않은 최상위 보안 등급의 메이저 놀이터입니다."
              />
              <TrustItem 
                title="독보적인 고액 전용 한도"
                desc="고액 유저를 위한 차별화된 베팅 한도와 무제한 환전 서비스를 제공하여 불편함을 최소화했습니다."
              />
              <TrustItem 
                title="다양한 이벤트와 혜택"
                desc="매일 터지는 주간 정산, 신규 첫충 무제한 이벤트 등 회원님을 위한 다양한 프로모션이 준비되어 있습니다."
              />
            </div>
          </motion.div>

          {/* Side Banner Plate */}
          <motion.div 
            initial={{ opacity: 0, rotate: 2 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="bg-brand-surface p-12 rounded-[3rem] border border-brand-border/40 relative shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
          >
            <Trophy size={60} className="text-brand-primary mb-8" />
            <div className="text-7xl font-black text-white mb-4 tracking-tighter">99.8%</div>
            <div className="text-brand-text-muted font-bold text-sm uppercase tracking-widest mb-10">Verification Score</div>
            
            <div className="space-y-8">
              <div className="p-6 bg-brand-bg/50 rounded-2xl border border-brand-border/30 flex items-center justify-between">
                <span className="font-bold">시스템 안정성</span>
                <span className="text-brand-primary font-black">EXCELLENT</span>
              </div>
              <div className="p-6 bg-brand-bg/50 rounded-2xl border border-brand-border/30 flex items-center justify-between">
                <span className="font-bold">보안 업데이트</span>
                <span className="text-brand-primary font-black">LATEST v4.0</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 p-10 bg-brand-primary rounded-3xl shadow-2xl skew-y-2">
              <Lock className="text-brand-bg" size={32} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Big SEO Keyword Block - Massive Data Density */}
      <section className="py-32 px-10 bg-brand-surface/40 border-t border-brand-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <SEOColumn 
                title="잭2030 카테고리별 주소"
                items={["잭2030 공식주소", "잭2030 우회주소", "잭2030 평생주소", "잭2030 도메인", "잭2030 예비도메인", "잭2030 모바일접속", "잭2030 앱설치", "잭2030 고객센터"]}
              />
              <SEOColumn 
                title="안전하고 빠른 게임 서비스"
                items={["카지노 온라인게임", "바카라사이트 추천", "슬롯사이트 잭팟", "에볼루션 카지노", "프라그마틱 슬롯", "릴게임 전문", "온라인 바카라", "실시간 카지노"]}
              />
              <SEOColumn 
                title="스포츠 베팅 및 실시간 중계"
                items={["메이저사이트 추천", "안전놀이터 검증", "토토사이트 주소", "해외 스포츠 배당", "라이브 베팅 사이트", "e스포츠 베팅", "실시간 경기 중계", "고액 전용 놀이터"]}
              />
              <SEOColumn 
                title="특별 이벤트 및 혜택"
                items={["잭2030 가입코드", "잭2030 추천인", "잭2030 꽁머니", "신규 첫충 입플", "매일 터지는 무제한 혜택", "주간 활동 정산", "출석 체크 이벤트", "지인 추천 이벤트"]}
              />
            </div>

            <div className="prose prose-invert max-w-none text-brand-text-muted text-xs leading-loose font-medium opacity-80 border-t border-brand-border/20 pt-16">
              <p>
                본 잭2030(JACK2030) 공식 홈페이지는 회원님들의 편의를 위해 제작되었으며, 대한민국 최고의 카지노 온라인게임 서비스를 제공하는 메이저 사이트의 정체성을 담고 있습니다. 우리는 수년간의 운영 노하우를 바탕으로 안전과 보안을 최우선 가치로 삼고 있습니다. 잭2030 주소 및 가입코드는 오직 본 공식 플랫폼을 통해서만 배포되며, 이를 통해 사칭 사이트로부터 회원님들을 보호하고 자산을 안전하게 지켜드립니다.
              </p>
              <p>
                우리의 서비스는 라이브 카지노, 실시간 스포츠 중계, 다양한 온라인 슬롯 및 미니게임을 아우릅니다. 특히 카지노 온라인게임 시장에서 잭2030이 갖는 위상은 독보적입니다. 전 세계적으로 신뢰받는 게임 소프트웨어 개발사들과의 협업을 통해 조작 없이 투명한 게임 결과를 보장하며, 고성능 서버 환경을 통해 언제 어디서나 끊김 없는 쾌적한 플레이를 제공합니다. 또한 스포츠 토토 유저들을 위해 해외 배당 시스템을 도입하여 높은 환수율과 폭넓은 베팅 옵션을 제공하고 있습니다.
              </p>
              <p>
                보안 측면에서도 잭2030은 타의 추종을 불허합니다. 개인정보 보호를 위한 다중 암호화 시스템과 텔레그램을 통한 익명 상담 서비스를 운영하여 회원님의 프라이버시를 완벽하게 보호합니다. 먹튀 사고 걱정 없는 100% 안전 놀이터로서의 명성을 이어가기 위해 매일 엄격한 자본력 검증과 시스템 점검을 실시하고 있습니다. 잭2030 평생 도메인 및 우회 주소 정보를 실시간으로 업데이트하여 접속 차단 시에도 신속하게 대처할 수 있도록 최선을 다하고 있습니다.
              </p>
              <p>
                잭2030은 책임감 있는 게임 문화를 지향합니다. 과도한 몰입을 방지하기 위한 다양한 자가 조절 기능을 제공하며, 항상 신뢰받는 메이저 사이트로서 회원님과 함께 성장해 나갈 것을 약속드립니다. 가입 시 제공되는 가입코드 "JACK"을 사용하시면 업계 최고의 첫 충전 혜택 및 주말 정산 이벤트를 빠짐없이 누리실 수 있습니다. 지금 바로 잭2030 공식 채널을 통해 새로운 디지털 엔터테인먼트의 신세계를 경험해 보시기 바랍니다.
              </p>
              <p className="mt-8">
                검색어 최적화 태그: #잭2030 #카지노 #온라인게임 #안전놀이터 #메이저사이트 #바카라추천 #토토주소 #잭2030코드 #잭2030도메인 #잭2030우회 #입플사이트 #꽁머니 #고액배터 #무사고보증 #자본력1등 #대한민국대표놀이터 #실시간카지노 #슬롯사이트 #해외에이전시 #잭2030고객센터
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Optimized Footer Area */}
      <footer className="py-20 px-10 border-t border-brand-border bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20 text-center md:text-left">
            <div>
              <div className="text-3xl font-black text-brand-primary mb-4 tracking-tighter">JACK2030</div>
              <div className="text-brand-text-muted text-sm font-medium tracking-tight h-4 mb-4">
                https://wrd483.com
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <SEOBadge label="#카지노추천" />
              <SEOBadge label="#온라인게임사이트" />
              <SEOBadge label="#잭2030주소" />
              <SEOBadge label="#안전놀이터" />
              <SEOBadge label="#메이저사이트" />
              <SEOBadge label="#바카라사이트" />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between pt-10 border-t border-brand-border/30 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
            <p>© 2024 JACK2030 | NEW ERA OF DIGITAL SOLUTION. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-brand-primary">Privacy Policy</a>
              <a href="#" className="hover:text-brand-primary">Terms of Use</a>
            </div>
          </div>

          <div className="mt-10 text-[8px] text-zinc-900 overflow-hidden h-1 select-none pointer-events-none opacity-10 leading-none">
            카지노 온라인게임 카지노사이트 온라인게임사이트 잭2030 잭2030주소 잭2030가입코드 잭2030도메인 잭2030접속 잭2030우회 잭2030공식 잭2030코드 잭2030추천 잭2030이벤트 jack2030 jack2030주소 jack2030코드 jack2030도메인 안전놀이터 메이저놀이터 메이저사이트 토토사이트 바카라사이트 안전공원 먹튀검증 무사고놀이터 승인전화없는사이트 고액전용사이트 입플사이트 꽁머니사이트 스포츠토토 야구토토 축구토토 실시간바카라 에볼루션카지노 슬롯사이트 잭2030텔레그램 잭2030고객센터
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-12 bg-brand-bg hover:bg-brand-surface/40 transition-colors group">
      <div className="mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-transform origin-left">
        {icon}
      </div>
      <h3 className="text-xl font-extrabold mb-4">{title}</h3>
      <p className="text-brand-text-muted text-sm leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
}

function TrustItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex gap-6 group">
      <div className="h-2 w-2 rounded-full bg-brand-primary mt-2 shrink-0 group-hover:scale-150 transition-transform" />
      <div>
        <h4 className="font-bold text-xl mb-2">{title}</h4>
        <p className="text-brand-text-muted font-medium text-sm max-w-md">{desc}</p>
      </div>
    </div>
  );
}

function GuideStep({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="relative p-10 bg-brand-surface/40 rounded-3xl border border-brand-border/20 group hover:border-brand-primary/40 transition-all">
      <div className="text-5xl font-black text-brand-primary/20 mb-6 group-hover:text-brand-primary/40 transition-colors">{number}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-brand-text-muted text-sm leading-relaxed">{desc}</p>
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <ExternalLink size={40} />
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string, a: string }) {
  return (
    <div className="p-6 bg-brand-bg/50 rounded-2xl border border-brand-border/20">
      <h4 className="font-bold text-lg mb-4 flex items-center gap-3">
        <span className="text-brand-primary">Q.</span> {q}
      </h4>
      <p className="text-brand-text-muted text-sm leading-relaxed pl-7 border-l-2 border-brand-primary/20">
        <span className="text-white/60 font-bold mr-2 text-xs uppercase">Answer:</span> {a}
      </p>
    </div>
  );
}

function ServiceDisplay({ image, subImage, category, title, desc }: { image: string, subImage?: string, category: string, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-brand-surface border border-brand-border/40 rounded-3xl overflow-hidden shadow-xl flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {subImage && (
          <div className="absolute bottom-4 right-4 w-24 h-24 rounded-2xl border-2 border-brand-primary overflow-hidden shadow-2xl skew-x-2">
            <img 
              src={subImage} 
              alt="Highlight" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
        <div className="absolute top-4 left-4 px-3 py-1 bg-brand-bg/80 backdrop-blur-md rounded text-[9px] font-black text-brand-primary tracking-widest border border-brand-primary/30">
          {category}
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-black mb-3 tracking-tighter">{title}</h3>
        <p className="text-brand-text-muted text-sm font-medium leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function StatusMetric({ label, value }: { label: string, value: string }) {
  return (
    <div className="border-l border-brand-border/30 pl-6">
      <div className="text-[10px] text-brand-text-muted font-black uppercase tracking-widest mb-1">{label}</div>
      <div className="text-xl font-black text-white">{value}</div>
    </div>
  );
}

function NewsItem({ date, text }: { date: string, text: string }) {
  return (
    <div className="flex gap-4 items-start text-xs border-b border-brand-border/10 pb-4 last:border-0">
      <span className="text-brand-primary font-mono whitespace-nowrap">{date}</span>
      <span className="text-brand-text-muted font-medium hover:text-white transition-colors cursor-default leading-relaxed">{text}</span>
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
      <h5 className="text-white font-black text-sm mb-6 pb-2 border-b border-brand-primary/30 inline-block">{title}</h5>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="text-[11px] text-brand-text-muted font-bold hover:text-brand-primary transition-colors cursor-default">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
