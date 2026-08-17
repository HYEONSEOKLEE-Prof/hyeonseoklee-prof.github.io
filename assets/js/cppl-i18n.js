(function () {
  "use strict";

  var STORAGE_KEY = "cppl-language";
  var dictionary = {
    "Home":"홈",
    "Research":"연구",
    "Professor":"교수",
    "Members":"구성원",
    "Publications":"논문",
    "News & Events":"소식 및 행사",
    "Opportunities":"참여 안내",
    "Email":"이메일",
    "Join CPPL":"연구실 지원",
    "Crop Physiology & Phenomics Laboratory · Chungnam National University":"작물생리·표현체학 연구실 · 충남대학교",
    "© 2026 CPPL · Department of Crop Science, Chungnam National University":"© 2026 CPPL · 충남대학교 식물자원학과",

    "CPPL · Chungnam National University":"CPPL · 충남대학교",
    "Crop Physiology & Phenomics Laboratory":"작물생리·표현체학 연구실",
    "Chungnam National University":"충남대학교",
    "We investigate crop growth, development, and environmental responses and translate physiological understanding into quantitative phenotyping, crop models, and climate-smart production technologies.":"작물의 생장·발달과 환경 반응을 연구하고, 생리학적 이해를 정량적 표현형 분석, 작물 모형 및 기후스마트 생산기술로 확장합니다.",
    "Research Areas":"연구 분야",
    "Crop Physiology":"작물생리학",
    "Climate-Smart Crop Production":"기후스마트 작물생산",
    "Digital Phenomics & Modeling":"디지털 표현체학 및 모델링",
    "Satellite-Based Crop Monitoring & Modeling":"위성 기반 작물 모니터링 및 모델링",
    "Phenology, photosynthesis, carbon metabolism, and environmental responses":"생물계절, 광합성, 탄소대사 및 환경 반응",
    "Climate stress, biostimulants, resource efficiency, and ratoon multi-harvest systems":"기후 스트레스, 생물자극제, 자원이용 효율 및 재생벼 다회수확 체계",
    "Imaging, sensors, artificial intelligence, and crop modeling":"영상, 센서, 인공지능 및 작물 모델링",
    "Remote sensing, crop models, growth monitoring, and yield prediction":"원격탐사, 작물 모형, 생육 모니터링 및 수량 예측",
    "Emerging Research · Space Agriculture":"신규 연구 · 우주농업",
    "Explore Research →":"연구 살펴보기 →",
    "Research vision, approaches, and current themes":"연구 비전, 접근법 및 주요 주제",
    "Meet the CPPL Team →":"CPPL 구성원 보기 →",
    "Graduate students and undergraduate researchers":"대학원생 및 학부연구생",
    "Join CPPL →":"CPPL 지원하기 →",
    "Graduate and undergraduate research opportunities":"대학원 및 학부 연구 참여 기회",

    "Research at CPPL":"CPPL 연구",
    "From Crop Ecophysiology to Predictive and Deployable AgTech":"작물생태생리학에서 예측·현장적용형 농업기술까지",
    "We connect crop physiology with phenomics, crop modeling, remote sensing, and deployable production technologies.":"작물생리학을 표현체학, 작물 모델링, 원격탐사 및 현장 적용형 생산기술과 연결합니다.",
    "Research Vision":"연구 비전",
    "Investigate how crops perceive and respond to environmental conditions throughout their life cycle, from vegetative growth to heading, grain filling, and harvest.":"영양생장부터 출수, 등숙, 수확에 이르는 전 생육기간 동안 작물이 환경을 인지하고 반응하는 과정을 연구합니다.",
    "Translate physiological and ecological mechanisms into quantitative indicators, predictive models, and crop production technologies.":"생리·생태적 기작을 정량 지표, 예측 모형 및 작물생산 기술로 전환합니다.",
    "Integrated Research Approach":"통합 연구 접근",
    "Field experimentation, physiological analysis, and molecular, transcriptomic, and metabolic profiling":"포장시험, 생리 분석 및 분자·전사체·대사체 프로파일링",
    "Digital phenotyping using ground-based sensors, imaging platforms, drones, and satellite data":"지상 센서, 영상 플랫폼, 드론 및 위성자료를 활용한 디지털 표현형 분석",
    "Integration of crop models, remote sensing, and artificial intelligence":"작물 모형, 원격탐사 및 인공지능의 통합",
    "Development of climate-smart and resource-efficient crop production technologies":"기후스마트·자원효율형 작물생산 기술 개발",
    "Core Research Areas":"핵심 연구 분야",
    "Environmental regulation of crop phenology and yield formation":"환경에 따른 작물 생물계절과 수량 형성 조절",
    "Photosynthetic and carbon-metabolic responses to environmental variation":"환경 변이에 대한 광합성 및 탄소대사 반응",
    "Physiological and molecular responses across crop developmental stages":"작물 발달단계별 생리·분자 반응",
    "Heat, low-light, drought, flooding, ozone, and related climate stresses":"고온, 저일조, 가뭄, 침수, 오존 및 관련 기후 스트레스",
    "Biostimulant-based stress mitigation and treatment optimization":"생물자극제 기반 스트레스 저감 및 처리 최적화",
    "Resource-efficient production and ratoon-based multi-harvest strategies":"자원효율형 생산 및 재생벼 기반 다회수확 전략",
    "Image- and sensor-based indicators of crop growth and development":"영상·센서 기반 작물 생장 및 발달 지표",
    "Crop-model integration for phenology, growth, and productivity prediction":"생물계절·생육·생산성 예측을 위한 작물 모형 통합",
    "Artificial-intelligence-assisted data integration and decision support":"인공지능 기반 데이터 통합 및 의사결정 지원",
    "Satellite-based monitoring of crop growth and field variability":"위성 기반 작물 생육 및 포장 변이 모니터링",
    "Integration of remote sensing and crop models":"원격탐사와 작물 모형의 통합",
    "Regional growth and yield prediction":"지역 단위 생육 및 수량 예측",
    "Selected Research Highlights":"주요 연구 사례",
    "Photo-thermal regulation, carbon metabolism, and transcriptomic responses in rice.":"벼의 광·온도 조절, 탄소대사 및 전사체 반응.",
    "Environmental stress physiology and biostimulant-based resilience strategies.":"환경 스트레스 생리와 생물자극제 기반 회복력 향상 전략.",
    "Imaging, phenotyping, and data-driven models for crop growth and yield.":"작물 생육과 수량을 위한 영상·표현형 분석 및 데이터 기반 모형.",
    "Climate indicators, regional monitoring, and scenario-based yield prediction.":"기후지표, 지역 모니터링 및 시나리오 기반 수량 예측.",
    "Related publications →":"관련 논문 →",
    "Long-term expansion toward crop production research for space and closed environments, building on crop physiology, resource efficiency, phenomics, and multi-harvest concepts.":"작물생리, 자원이용 효율, 표현체학 및 다회수확 개념을 바탕으로 우주·폐쇄환경 작물생산 연구로 장기 확장합니다.",

    "Principal Investigator":"연구책임자",
    "Assistant Professor · Department of Crop Science":"조교수 · 식물자원학과",
    "My research focuses on crop physiological ecology and climate-smart crop production, integrating physiological responses, phenomics, crop modeling, remote sensing, and stress-mitigation technologies.":"작물 생태생리와 기후스마트 작물생산을 중심으로 생리 반응, 표현체학, 작물 모델링, 원격탐사 및 스트레스 저감 기술을 통합하여 연구합니다.",
    "Google Scholar":"구글 스칼라",
    "Research Interests":"연구 관심 분야",
    "Crop physiology and phenology":"작물생리 및 생물계절",
    "Climate-smart crop production":"기후스마트 작물생산",
    "Digital phenomics and crop modeling":"디지털 표현체학 및 작물 모델링",
    "Satellite-based crop monitoring and yield prediction":"위성 기반 작물 모니터링 및 수량 예측",
    "Biostimulant-based stress mitigation":"생물자극제 기반 스트레스 저감",
    "Emerging research in space agriculture":"우주농업 신규 연구",
    "Professional Experience":"주요 경력",
    "Assistant Professor":"조교수",
    "Research Scientist":"농업연구사",
    ", Chungnam National University (Sep 2025–Present)":", 충남대학교 (2025년 9월–현재)",
    ", National Institute of Crop Science, Rural Development Administration (Aug 2014–Aug 2025)":", 농촌진흥청 국립식량과학원 (2014년 8월–2025년 8월)",
    "Professional Service & Leadership":"학술활동 및 리더십",
    "Chair, Food Crops Division":"식량작물분과장",
    "Editorial Board Member":"편집위원",
    "Administrative Secretary":"편집간사",
    ", AIRISE Project Group, Rural Development Administration (Jun 2026–Present)":", 농촌진흥청 AIRISE 사업단 (2026년 6월–현재)",
    ", BMC Plant Biology (Feb 2026–Present)":", BMC Plant Biology (2026년 2월–현재)",
    ", The Korean Journal of Crop Science (Sep 2024–Present)":", 한국작물학회지 (2024년 9월–현재)",
    "Research Leadership":"연구 리더십",
    "Research Projects & Leadership":"연구과제 및 리더십",
    "Projects currently led or completed as principal investigator, together with selected collaborative research conducted as a participating researcher.":"연구책임자로 수행 중이거나 완료한 과제와 참여연구원으로 수행한 주요 협력연구를 정리했습니다.",
    "Current Projects":"수행 중인 과제",
    "Completed Projects":"완료 과제",
    "Collaborative Research":"협력 연구",
    "AI-Based Intelligent Field-Operation Decision-Support System for Food Crops":"AI 기반 노지 식량작물 지능형 농작업 의사결정지원 시스템 개발",
    "Development and Advancement of Agricultural-Satellite Observation Technologies for Major Crops":"농업위성을 활용한 주요 농작물 관측기술 개발 및 고도화",
    "Climate-Specific Performance Analysis of Rice Crop-Condition Forecasting Models and Strategies for Using Yield Maps":"벼 작황 예측모형의 기상조건별 성능 분석 및 수량맵 활용방안 도출",
    "Economic Impact and Optimal Supply-Rate Analysis of Government-Certified Seed":"정부보급종의 경제적 효과 및 적정 공급률 분석",
    "Research contract":"연구용역",
    "Technologies for Scaling Up Production and Improving Yield Stability of Korean Japonica Rice":"한국형 장립종 벼 규모화 및 안정성 증대 기술 개발",
    "Field Surveys and Crop-Condition Assessment to Build Big Data on Regional Rice Growth and Yield":"벼 지역별 생육 및 수량 관측 빅데이터 구축을 위한 작황조사시험 및 작황진단 시험",
    "WUR International Collaboration: Development and Implementation of a Daylength- and Temperature-Driven Growth-Stage Transition Module for ORYZA2000":"WUR 국제협력: 일장 및 온도에 따른 생육단계 전환 모듈 개발 및 ORYZA2000 도입",
    "Advanced Crop Modeling for Improved Rice Yield Forecasting Using AI, Multi-Model Ensembles, and Extreme-Climate Scenarios":"AI, 다중모델 및 이상기상 반영을 통한 쌀 생산량 예측 작물모형 고도화",
    "Assessment of Climate-Disaster Damage and Development of Disaster-Specific Mitigation Technologies for Major Food Crops, Phase II":"이상기상에 따른 주요 식량작물 피해량 조사 및 재해유형별 피해저감 기술 개발(2단계)",
    "Effects of Extreme Weather—Low Solar Radiation and High Temperature—on Rice Heading and Grain-Filling Characteristics":"특이기상(저일조·고온)에 따른 벼 출수기 변동 및 등숙 특성 구명",
    "Field Surveys and Crop-Condition Assessment for a Regional Database of Rice Growth and Yield":"벼 지역별 생육 및 수량 관측 DB 구축을 위한 작황조사시험 및 작황진단 시험",
    "Development of Models for Forecasting National Rice and Barley Production":"주요 식량작물(벼·맥류)의 국내 생산량 예측 모형 개발",
    "Assessment of Climate-Disaster Damage and Development of Disaster-Specific Mitigation Technologies for Major Food Crops, Phase I":"이상기상에 따른 주요 식량작물 피해량 조사 및 재해유형별 피해저감 기술 개발(1단계)",
    "Effects of High-Temperature-Induced Metabolic Changes on Rice Quality and Developmental-Stage Transitions":"고온조건에서 대사기작 변화가 쌀의 품질 및 벼 생육단계 변동에 미치는 영향",
    "Korea–UAE Joint Research: Integrated Technologies for Sustainable Rice Cultivation in Desert Environments":"한–UAE 국제공동연구: 사막환경에서 지속 가능한 벼 재배 종합기술 개발",
    "Food-Crop Production under Agrivoltaic Systems: Environmental Assessment and Cultivation-Method Development":"영농형 태양광발전시설 하부 식량작물 생산·환경 분석 및 재배법 개발",
    "Effects of Lodging Severity on Grain Yield and Quality in Major Cereal Crops":"주요 식량작물의 등숙기 강우 정도별 종실 수량 및 품질변이 분석",
    "Temperature and Photoperiod Effects on Heading-Date Variation in Major Rice Cultivars":"주요 벼 재배품종의 온도와 일장에 따른 출수기 변이 연구",
    "Functional Food Components and Productivity Improvement in Domestically Bred Oat Cultivars for Dementia Prevention":"국내 육성 귀리 이용 항치매 식품 기능성 성분 및 생산성 향상 연구",
    "Characterization of Weather-Disaster Damage and Establishment of Damage Thresholds for Major Food Crops: Rice Lodging":"식량작물 주요 기상재해 피해양상 및 피해기준 설정(벼 침관수)",
    "Effects of High Temperature at Different Growth Stages on Barley Yield and Grain Quality":"맥류 생육시기별 고온이 수량 및 품질에 미치는 영향",
    "Collaborative research on sparse-transplanting rice cultivation, floury rice cultivation, and direct-seeded rice production technologies":"드문모 심기 벼, 가루쌀 벼 및 벼 직파 재배기술 협력연구",
    "Participating researcher":"참여연구원",
    "Additional":"기타",

    "Our Team":"우리 연구팀",
    "People at CPPL":"CPPL 구성원",
    "CPPL brings together graduate students and undergraduate researchers working across crop physiology, climate-smart production, phenomics, modeling, and remote sensing.":"CPPL은 작물생리, 기후스마트 생산, 표현체학, 모델링 및 원격탐사를 함께 연구하는 대학원생과 학부연구생으로 구성됩니다.",
    "Ph.D. Students":"박사과정",
    "Ph.D. Student":"박사과정",
    "M.S. Students":"석사과정",
    "M.S. Student":"석사과정",
    "B.S.–M.S. Integrated Program":"학·석사 연계과정",
    "B.S.–M.S. Integrated Program Student":"학·석사 연계과정",
    "Integrated Program":"연계과정",
    "Undergraduate Researchers":"학부연구생",
    "Undergraduate Researcher":"학부연구생",
    "Prospective M.S.":"석사과정 진학 예정",
    "Part-time":"시간제",
    "Members on Leave & Alumni":"휴학 및 졸업 구성원",
    "Military Service":"군복무",
    "On Leave":"휴학",
    "Former Undergraduate Researcher":"전 학부연구생",
    "Alumni":"졸업생",

    "Research news, publications, conference activities, field campaigns, seminars, awards, and laboratory events from CPPL.":"CPPL의 연구 소식, 논문, 학술대회 활동, 포장조사, 세미나, 수상 및 연구실 행사를 전합니다.",
    "CPPL News & Events":"CPPL 소식 및 행사",
    "New laboratory activities and research updates will be added here.":"새로운 연구실 활동과 연구 소식을 이곳에 추가할 예정입니다.",

    "Join CPPL":"CPPL과 함께하기",
    "We welcome motivated students interested in crop physiology, climate-smart crop production, phenomics, crop modeling, remote sensing, and related interdisciplinary research.":"작물생리, 기후스마트 작물생산, 표현체학, 작물 모델링, 원격탐사 및 관련 융합연구에 관심 있는 열정적인 학생을 환영합니다.",
    "Graduate Students":"대학원생",
    "M.S. and Ph.D. applicants can develop research topics connecting crop physiology with quantitative phenotyping and predictive approaches.":"석·박사과정 지원자는 작물생리와 정량적 표현형 분석 및 예측 접근법을 연결하는 연구주제를 발전시킬 수 있습니다.",
    "Undergraduate students can participate in laboratory, controlled-environment, field, and data-analysis research activities.":"학부생은 실험실, 환경제어, 포장 및 데이터 분석 연구에 참여할 수 있습니다.",
    "Climate stress and biostimulants":"기후 스트레스 및 생물자극제",
    "How to Apply":"지원 방법",
    "Please send a brief introduction, your curriculum vitae, and a short description of your research interests. Prospective students are welcome to ask about current projects and available positions.":"간단한 자기소개, 이력서 및 연구 관심 분야에 대한 짧은 설명을 보내주세요. 현재 수행 과제와 참여 가능한 연구기회에 관한 문의도 환영합니다.",

    "You can also find my articles on":"논문은 다음에서도 확인할 수 있습니다:",
    "my Google Scholar profile":"구글 스칼라 프로필",
    "Books":"저서",
    "Journal Articles":"학술 논문",
    "Conference Papers":"학술대회 논문"
  };

  var originalNodes = new WeakMap();

  function translatedValue(value, language) {
    var trimmed = value.trim();
    if (!trimmed || !dictionary[trimmed] || language !== "ko") return value;
    return value.replace(trimmed, dictionary[trimmed]);
  }

  function applyLanguage(language) {
    var lang = language === "ko" ? "ko" : "en";
    document.documentElement.lang = lang;

    var roots = document.querySelectorAll(".masthead, main, .page__footer, footer");
    roots.forEach(function (root) {
      var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      var node;
      while ((node = walker.nextNode())) {
        if (node.parentElement && node.parentElement.closest(".cppl-lang-toggle, script, style, noscript, textarea, pre, code")) continue;
        if (!originalNodes.has(node)) originalNodes.set(node, node.nodeValue);
        var english = originalNodes.get(node);
        node.nodeValue = translatedValue(english, lang);
      }
    });

    var menuButton = document.querySelector(".greedy-nav > button");
    if (menuButton) menuButton.setAttribute("aria-label", lang === "ko" ? "메뉴 열기" : "Open navigation menu");

    document.querySelectorAll(".cppl-lang-toggle").forEach(function (button) {
      button.textContent = lang === "ko" ? "EN" : "한국어";
      button.setAttribute("aria-label", lang === "ko" ? "Switch to English" : "한국어로 보기");
      button.setAttribute("aria-pressed", lang === "ko" ? "true" : "false");
    });

    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (error) {}
  }

  function currentLanguage() {
    try { return window.localStorage.getItem(STORAGE_KEY) === "ko" ? "ko" : "en"; }
    catch (error) { return "en"; }
  }

  function initialize() {
    var language = currentLanguage();
    applyLanguage(language);
    document.addEventListener("click", function (event) {
      var button = event.target.closest(".cppl-lang-toggle");
      if (!button) return;
      event.preventDefault();
      applyLanguage(document.documentElement.lang === "ko" ? "en" : "ko");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
}());
