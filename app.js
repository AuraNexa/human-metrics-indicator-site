const categories = [
  { id: "all", label: "全部", short: "All" },
  { id: "general", label: "普通人基础", short: "Base" },
  { id: "practice", label: "修行与心性", short: "Practice" },
  { id: "child", label: "孩子教育", short: "Child" },
  { id: "relationship", label: "婚恋关系", short: "Love" },
  { id: "work", label: "职场用人", short: "Work" },
  { id: "school", label: "学校风险", short: "School" },
  { id: "system", label: "资料总纲", short: "System" },
];

const indicatorPacks = [
  {
    id: "public-basic-one",
    category: "general",
    code: "HM-BASE-001",
    title: "基础指标 1 公开说明",
    count: 12,
    source: "03_基础指标1_公开版指标详细说明.pdf",
    audience: "公开阅读 / 日常自查",
    summary:
      "对外解释各项基础指标的大致含义，强调只代表当下状态，适合做公开阅读页。",
    tags: ["公开版", "免责清晰", "公开说明"],
    groups: [
      { name: "正向指标", note: "正心、正念、正行等，数值越高代表正向状态越明显。" },
      { name: "负向指标", note: "用于观察当下偏差、阻力或风险，不做永久定性。" },
      { name: "阅读说明", note: "统一解释当下状态、非预测、非专业建议的边界。" },
    ],
    indicators: [
      createIndicator("BASE-01", "正心", "正向", "观察当下内在出发点是否更偏向善意、真实、负责。", "容易受私心、恐惧或执念影响。", "更容易从合理、善意、真实的方向处理事情。", "先复盘动机，再决定行动。"),
      createIndicator("BASE-02", "正念", "正向", "观察当下念头是否清明、正向、不过度偏执。", "念头容易乱、偏、重，影响判断。", "能较快回到清醒和正向观察。", "减少刺激源，记录反复出现的念头。"),
      createIndicator("BASE-03", "正行", "正向", "观察想法之外，是否有真实、持续、合适的行动。", "想得好但不行动，或行动断断续续。", "能把认知落实为稳定动作。", "把目标拆成每天可完成的小动作。"),
      createIndicator("BASE-04", "浩然正气", "正向", "观察一个人给人的整体正向、坦荡、可靠感。", "容易显得缩、虚、飘或不够正。", "整体气场更稳定、干净、有担当。", "从守信、承担和少说虚话开始修。"),
    ],
  },
  {
    id: "ordinary-status",
    category: "general",
    code: "HM-GEN-017",
    title: "普通人基础状态指标",
    count: 17,
    source: "普通人基础指标_对外详细版.pdf",
    audience: "普通用户 / 近期状态观察",
    summary:
      "从气运、身体、睡眠、情绪、压力、头脑、行动、人气等角度，看一个人当下和近期状态。",
    tags: ["对外说明", "近期状态", "低门槛"],
    groups: [
      { name: "身体与恢复", note: "身体疲劳度、睡眠恢复度、能量水平。" },
      { name: "情绪与压力", note: "情绪稳定度、焦虑感、怒火值、怨气值、压力值。" },
      { name: "行动与关系", note: "头脑清晰度、行动力、沟通、人气、小人、贵人。" },
    ],
    indicators: [
      createIndicator("GEN-01", "最近气运值", "观察", "观察近期做事是偏顺、普通，还是容易受阻。", "事情容易卡住，机会和配合不明显。", "事情较容易推进，也更容易遇到帮助。", "只做近期参考，不延伸为命运判断。"),
      createIndicator("GEN-02", "睡眠恢复度", "正向", "观察睡眠是否真正帮助身体和精神恢复。", "睡了也累，醒来疲惫，白天状态差。", "睡醒后恢复感较好，白天更稳定。", "先修作息，不用意志力硬扛所有问题。"),
      createIndicator("GEN-03", "情绪稳定度", "正向", "观察当下是否容易崩溃、发火、烦躁或冲动。", "容易被小事带走，事后容易后悔。", "遇事相对能稳住，不急着做破坏性反应。", "重大决定尽量避开情绪高峰。"),
      createIndicator("GEN-04", "压力值", "反向", "观察生活、工作、金钱、家庭和责任带来的现实压力强度。", "压力低，现实负荷相对可控。", "压力高，容易感觉事情压身。", "先排序和减负，不要同时处理全部压力源。"),
    ],
  },
  {
    id: "practice-daily",
    category: "practice",
    code: "HM-PRAC-DAY",
    title: "修行者基础指标日常自查",
    count: 18,
    source: "A_修行者基础指标日常自查_简明版.pdf / B_修行者基础指标日常自查_详细说明版.pdf",
    audience: "修行者 / 学员日常复盘",
    summary:
      "用于帮助修行者看见当下心性、行为、稳定度和修正方向，适合做周期自查。",
    tags: ["日常自查", "周期复盘", "修正计划"],
    groups: [
      { name: "内在方向", note: "正心、正念、清明度、诚意。" },
      { name: "行为落地", note: "正行、持续度、复盘修正。" },
      { name: "状态稳定", note: "情绪、能量、外界干扰下的稳定程度。" },
    ],
    indicators: [
      createIndicator("PRAC-01", "正念正心", "正向", "合看念头和出发点是否端正、清明、少偏差。", "想法多但散，容易被情绪和执念牵着走。", "念头、动机和表达更容易保持一致。", "每天固定做一次念头复盘。"),
      createIndicator("PRAC-02", "正行落实", "正向", "观察认知有没有真正落到行动。", "听懂很多，但实际改变少。", "能持续把规则落实到小事。", "少立大愿，多设当天动作。"),
      createIndicator("PRAC-03", "长期稳定度", "正向", "观察状态是否在一段时间内稳定，而不是大起大落。", "分数波动大，容易受环境、人和情绪影响。", "能在不同场景下保持基本稳定。", "记录触发波动的固定场景。"),
      createIndicator("PRAC-04", "修正意愿", "正向", "观察被指出问题后，是否愿意看见并调整。", "容易辩解、要面子、拖延修正。", "能较快回到问题本身。", "先承认事实，再谈原因。"),
    ],
  },
  {
    id: "five-poisons",
    category: "practice",
    code: "HM-POISON-009",
    title: "五毒四心指标体系",
    count: 9,
    source: "五毒四心指标体系完整说明",
    audience: "深度阅读 / 心性风险理解",
    summary:
      "五毒是深层污染源，四心是在人际、身份、利益和比较中的外在显化。",
    tags: ["深度版", "心性风险", "修行阻力"],
    groups: [
      { name: "五毒", note: "贪、嗔、痴、慢、疑，观察较深层的心性污染源。" },
      { name: "四心", note: "嫉妒心、虚荣心、分别心、攀比心，观察外在显化。" },
      { name: "组合风险", note: "单项只能说明角度，组合才有解释力。" },
    ],
    indicators: [
      createIndicator("POI-01", "贪", "反向", "对人、事、物、结果或身份产生过度索取和不愿放下。", "欲望存在但不明显牵引行为。", "被想要控制，得不到就痛苦或焦虑。", "先分清正常目标和失去分寸的执着。"),
      createIndicator("POI-02", "嗔", "反向", "观察愤怒、怨恨、攻击和破坏性反应。", "火气低，能较快放下刺激。", "容易爆、怨、攻击或长期记仇。", "先降反应速度，再谈沟通。"),
      createIndicator("POI-03", "慢", "反向", "观察优越感、看不起人和不愿受教。", "能看见别人长处，愿意学习。", "容易自大、自满、轻视提醒。", "主动找一个自己不如人的点。"),
      createIndicator("POI-04", "攀比心", "反向", "通过比较别人来确认自己价值，进而影响情绪和选择。", "比较轻，能回到自己的节奏。", "越比越乱，容易嫉妒、焦虑或冒进。", "把比较对象改成昨天的自己。"),
    ],
  },
  {
    id: "child-learning",
    category: "child",
    code: "HM-CHD-LEARN-014",
    title: "孩子学习素质基础指标",
    count: 14,
    source: "孩子学习素质基础指标详细说明",
    audience: "父母 / 咨询人员 / 服务人员",
    summary:
      "判断孩子是否具备常规知识学习、课堂学习、考试学习的基础底盘，避免只盯成绩。",
    tags: ["学习底盘", "父母沟通", "详细说明"],
    groups: [
      { name: "吸收能力", note: "理解能力、记忆力、应用能力。" },
      { name: "学习状态", note: "兴趣、主动性、专注、坐得住。" },
      { name: "思维与修正", note: "逻辑、推理、归纳、分析、发现问题、自我修正、抗压。" },
    ],
    indicators: [
      createIndicator("LEARN-01", "理解能力", "正向", "观察孩子能不能听懂知识、题目和老师真正表达的意思。", "听了但抓不到重点，容易误解题意。", "能较快理解概念、要求和因果。", "先确认听懂，再增加训练量。"),
      createIndicator("LEARN-02", "记忆力", "正向", "观察孩子能不能记住关键知识、步骤和经验。", "学过容易忘，复习成本高。", "能较稳定保留并调用知识。", "用短周期重复替代一次性硬背。"),
      createIndicator("LEARN-03", "应用能力", "正向", "观察学到的知识能不能转化到题目和现实场景。", "会背不会用，换题就卡。", "能把知识迁移到新题型。", "让孩子讲出使用条件，而不是只背答案。"),
      createIndicator("LEARN-04", "抗压能力", "正向", "观察考试、批评、难题下是否还能保持基本学习功能。", "一压就乱，容易放弃或崩溃。", "遇到压力仍能一步步处理。", "训练从低压力场景开始。"),
    ],
  },
  {
    id: "homework",
    category: "child",
    code: "HM-CHD-HW-104",
    title: "小孩子写作业指标",
    count: 104,
    source: "小孩子写作业指标标准说明",
    audience: "家长阅读 / 标准说明",
    summary:
      "从作业负荷、会不会、专注启动、情绪压力、家长干预和结果损耗看作业问题。",
    tags: ["12 大类", "家长能看懂", "标准交付"],
    groups: [
      { name: "任务本身", note: "作业负荷与时间压力、知识掌握。" },
      { name: "孩子反应", note: "专注启动、拖延、情绪压力、防御抗拒、自信受损。" },
      { name: "家庭系统", note: "家长干预、家庭环境、独立性和结果损耗。" },
    ],
    indicators: [
      createIndicator("HW-01", "作业负荷", "观察", "观察作业量、难度和时间是否超过孩子承载能力。", "负荷较轻，孩子有余力。", "负荷过重，容易把不会和不想写混在一起。", "先确认任务是否合理，再谈习惯。"),
      createIndicator("HW-02", "专注启动", "正向", "观察孩子能不能进入写作业状态。", "坐下很久也进不去，容易摸、拖、走神。", "能较快启动并维持一段时间。", "固定启动仪式，降低开始难度。"),
      createIndicator("HW-03", "心理防御", "反向", "观察孩子是否已经不只是不会写，而是在逃避、对抗、防御。", "防御轻，仍可沟通。", "明显抗拒，一提作业就紧张或爆发。", "先降低威胁感，再处理任务。"),
      createIndicator("HW-04", "家长干预放大", "反向", "观察家长陪写、催促、批评是否把问题放大。", "干预适度，能帮助孩子独立。", "干预过密，孩子更焦虑或依赖。", "把陪写改成边界清楚的支持。"),
    ],
  },
  {
    id: "family-relationship",
    category: "child",
    code: "HM-CHD-FAM-029",
    title: "孩子家庭关系指标",
    count: 29,
    source: "孩子家庭关系指标体系 29 项详细说明",
    audience: "亲子关系查阅 / 家庭观察",
    summary:
      "站在孩子角度，看家庭关系是在滋养孩子，还是在控制、压迫、消耗、伤害孩子。",
    tags: ["孩子视角", "亲子关系", "详细说明"],
    groups: [
      { name: "关系滋养", note: "被爱感、家庭安全感、被理解感、亲子信任度。" },
      { name: "关系压力", note: "情绪压迫、家庭控制、父母施压、委屈和怨气。" },
      { name: "应激反应", note: "逃离倾向、接触抵触、家庭相处焦虑。" },
    ],
    indicators: [
      createIndicator("FAM-01", "被爱感", "正向", "观察孩子是否真实感觉自己被爱，而不是只被照顾。", "照顾存在，但孩子没有明显被爱体验。", "孩子能在具体场景中感到被在意。", "多问孩子什么时候能感觉到爱。"),
      createIndicator("FAM-02", "家庭安全感", "正向", "观察家是否让孩子觉得安全、可停靠、可说真话。", "家庭像压力场，孩子容易防御。", "孩子愿意回家、表达和求助。", "先降低恐吓、羞辱和突然爆发。"),
      createIndicator("FAM-03", "父母施压度", "反向", "观察父母期待、规划和要求带来的压力负荷。", "压力轻，孩子有选择和试错空间。", "压力过重，亲子关系变成绩效管理。", "降低要求密度，恢复成长节奏。"),
      createIndicator("FAM-04", "逃离倾向", "反向", "观察孩子是否想远离家庭、减少接触或心理切断。", "仍有修复期待。", "关系已进入恶化风险区。", "先做安全评估，不用孝顺话术压孩子。"),
    ],
  },
  {
    id: "school-risk",
    category: "school",
    code: "HM-SCH-093",
    title: "小孩子学校生活与校园风险",
    count: 93,
    source: "学校生活与校园风险指标标准说明",
    audience: "家长 / 校园风险排查",
    summary:
      "看见孩子在学校里的真实处境：适应、课堂、同学、老师、霸凌、坏影响、早恋和家校信息。",
    tags: ["12 大类", "校园风险", "家长需求"],
    groups: [
      { name: "学校适应", note: "上学安全感、抗拒度、校园归属感、孤独感。" },
      { name: "校园关系", note: "同学关系、老师支持、霸凌风险、被欺负后的恢复。" },
      { name: "风险与介入", note: "不良同伴、异性关系、心理压力、自我保护、父母介入。" },
    ],
    indicators: [
      createIndicator("SCH-01", "上学安全感", "正向", "观察孩子去学校时内心是否觉得安全。", "想到学校就紧张或害怕。", "去学校没有明显威胁感。", "区分普通不想上学和环境威胁。"),
      createIndicator("SCH-02", "校园孤独感", "反向", "观察孩子在学校是否孤单、没人理解、没人陪。", "有基本同伴和归属。", "长期孤立或缺少支持。", "先确认孩子有没有真实连接对象。"),
      createIndicator("SCH-03", "霸凌风险", "反向", "观察孩子是否存在被欺负、排挤、威胁或羞辱风险。", "风险较低，冲突可处理。", "风险高，需优先安全介入。", "先保留事实证据，再推进沟通。"),
      createIndicator("SCH-04", "放学后情绪崩溃度", "反向", "观察放学回家后是否容易爆发、沉默、哭闹。", "回家后能自然恢复。", "学校正在持续消耗孩子。", "把回家后的反应视为学校信息。"),
    ],
  },
  {
    id: "female-boyfriend-screen",
    category: "relationship",
    code: "HM-REL-F-025",
    title: "女性选择男友 25 项前置筛查",
    count: 25,
    source: "女性选择男友 25 项前置筛查说明",
    audience: "女性婚恋选择 / 咨询辅助",
    summary:
      "用较少指标判断一个男人值不值得继续投入感情、时间、金钱和婚恋期待。",
    tags: ["前置筛查", "安全边界", "关系观察"],
    groups: [
      { name: "感情真实", note: "爱意真实度、情感投入、主动投入、不善言辞。" },
      { name: "长期目的", note: "交往意图、认真程度、长期关系意愿、结婚导向。" },
      { name: "安全风险", note: "诚实、责任、尊重、忠诚、债务赌博、分手报复。" },
    ],
    indicators: [
      createIndicator("REL-F-01", "爱意真实度", "观察", "观察对方是否真的有感情，而不是嘴上热情、内心空洞。", "感情投入弱，更多是口头或短期兴趣。", "能通过持续行动看见真实在意。", "看连续行为，不只听表达。"),
      createIndicator("REL-F-02", "承诺兑现率", "正向", "观察说过的话、答应的事实际能不能做到。", "常画饼、拖延或忘记承诺。", "承诺谨慎，答应后能落实。", "把承诺落到具体时间和动作。"),
      createIndicator("REL-F-03", "忠诚边界", "正向", "观察是否暧昧、多线、前任不清或异性关系混乱。", "边界混乱，容易让关系不安全。", "边界清楚，能给关系稳定感。", "不替对方合理化长期混乱。"),
      createIndicator("REL-F-04", "分手报复风险", "反向", "观察分手后是否可能威胁、纠缠、散播隐私或伤害。", "分开也能保持基本边界。", "存在纠缠、威胁或报复倾向。", "安全优先，必要时寻求现实支持。"),
    ],
  },
  {
    id: "male-read-interest",
    category: "relationship",
    code: "HM-REL-M-026",
    title: "男生判断女生是否愿意持续交往",
    count: 26,
    source: "男生判断女生是否愿意持续交往_26项动态基础指标.docx",
    audience: "追求期 / 暧昧期 / 恋爱前期",
    summary:
      "前 6 项看女生当前态度，后 20 项看男生前期表现如何影响关系走向。",
    tags: ["动态指标", "追求期", "非跪舔"],
    groups: [
      { name: "女生当前状态", note: "好感、满意、交往意愿、重视、结婚意向、主动值。" },
      { name: "男生影响项", note: "情绪稳定、懂她、责任、主心骨、边界、兑现行动。" },
      { name: "动态判断", note: "前 6 项会随互动体验、环境和外界评价变化。" },
    ],
    indicators: [
      createIndicator("REL-M-01", "交往意愿", "观察", "观察女生是否愿意继续了解、见面和推进关系。", "礼貌应付，不愿推进或持续回避。", "愿意给机会，关系有继续空间。", "看回应质量，不只看回复速度。"),
      createIndicator("REL-M-02", "主动值", "观察", "观察女生是否主动联系、关心、安排或推动互动。", "主动少，但需区分慢热和无好感。", "会主动创造接触和表达在意。", "结合好感与回应，不孤立判断。"),
      createIndicator("REL-M-03", "情绪稳定", "正向", "观察男生在相处中能否稳定接住情绪，而不是失控或冷处理。", "容易爆、消失、讲道理压人。", "能先接住情绪，再处理问题。", "先稳定语气，再表达观点。"),
      createIndicator("REL-M-04", "行动兑现", "正向", "观察说过的安排、承诺和关心是否真的落地。", "说得多、做得少，信任下降。", "行动持续，女生更容易安心。", "少承诺，承诺后必须完成。"),
    ],
  },
  {
    id: "management-pro",
    category: "work",
    code: "HM-MGT-421",
    title: "管理人员评价指标体系 Pro",
    count: 536,
    source: "management_evaluation_indicators_pro_v3_2.docx",
    audience: "选人 / 用人 / 防风险 / 管理画像",
    summary:
      "421 项主指标加 115 项高危反向指标，用于按层级、岗位和业务阶段抽取。",
    tags: ["管理者画像", "高危反向", "指标池"],
    groups: [
      { name: "德性底盘", note: "心性、良知、正直、诚实、守信、敬畏。" },
      { name: "成事能力", note: "学习认知、洞察、执行、决策、危机应对、组织建设。" },
      { name: "专项能力", note: "销售、财务、合规、技术、产品、供应链、品牌、公关。" },
    ],
    indicators: [
      createIndicator("MGT-01", "心术端正", "正向", "观察做事出发点是为了成事，还是算计、谋私、害人。", "动机不稳，能力越强风险越大。", "拿到资源后更容易让组织变强。", "关键岗位先看底线，再看能力。"),
      createIndicator("MGT-02", "学习转化能力", "正向", "观察能否把知识转化成方法、流程、动作和结果。", "学了很多但不改变工作方式。", "能快速形成可复用方法。", "看复盘产物，不只听学习态度。"),
      createIndicator("MGT-03", "用人能力", "正向", "观察能否识人、放人、带人、留人，并让团队变强。", "自己能干但团队起不来。", "能让优秀下属冒出来。", "看团队结果和人才留存。"),
      createIndicator("MGT-04", "权力私用风险", "反向", "观察是否把岗位、资源、权限变成个人山头或提款机。", "权限边界清楚。", "容易形成组织风险和合规风险。", "关键权限必须配合日志和复核。"),
    ],
  },
  {
    id: "employee-simple",
    category: "work",
    code: "HM-EMP-012",
    title: "员工隐性指标",
    count: 12,
    source: "员工隐性指标_老板一眼看懂版.docx",
    audience: "老板快速判断 / 入职后风险",
    summary:
      "不只看表面表现，而是帮助老板先判断能不能用、放哪里、要防什么。",
    tags: ["老板一眼看懂", "用人语言", "风险判断"],
    groups: [
      { name: "能不能用", note: "先看底线、稳定和可信任度。" },
      { name: "放在哪里", note: "看岗位适配、沟通方式和承载能力。" },
      { name: "要防什么", note: "看隐性风险、反向指标和一票否决项。" },
    ],
    indicators: [
      createIndicator("EMP-01", "可信任度", "正向", "观察交代事情后是否让人放心。", "需要反复盯，信息不透明。", "越合作越放心。", "先给小任务验证稳定性。"),
      createIndicator("EMP-02", "岗位适配度", "正向", "观察能力、性格和岗位要求是否匹配。", "努力但不适合当前位置。", "能力使用方向清楚。", "不要只凭态度放错位置。"),
      createIndicator("EMP-03", "隐性消耗度", "反向", "观察是否制造沟通、情绪、人际或流程消耗。", "配合成本低。", "表面能干但让团队变累。", "把消耗点写成具体场景。"),
      createIndicator("EMP-04", "一票否决风险", "反向", "观察是否存在诚信、泄密、破坏、严重失控等底线问题。", "底线风险低。", "不是小缺点，需要直接拦截。", "底线项不要用培养心态处理。"),
    ],
  },
  {
    id: "person-total-pool",
    category: "system",
    code: "HM-PERSON-V02",
    title: "评价一个人的总指标体系",
    count: 525,
    source: "评价一个人的总指标体系_V0.2_完整总指标池.docx",
    audience: "识人 / 用人 / 关系观察",
    summary:
      "28 个横向模块构成完整总指标池，适合作为所有场景目录的上游母库。",
    tags: ["母库", "28 类", "完整结构"],
    groups: [
      { name: "内在与认知", note: "心性、人品、自我认知、智慧、事实识别、主心骨。" },
      { name: "行动与关系", note: "情绪、自律、执行、成长、人情世故、合作、信任风险。" },
      { name: "人生场景", note: "事业、管理、家庭、亲密关系、子女教育、修行、能量状态。" },
    ],
    indicators: [
      createIndicator("POOL-01", "内在心性", "母类", "作为个人判断的底层模块，影响其他能力如何被使用。", "心性底盘弱，能力可能反向放大风险。", "心性稳定时，能力更容易用于成事。", "对外查阅时可拆成普通人版、员工版、修行人版。"),
      createIndicator("POOL-02", "事实识别", "母类", "观察能不能分清事实、解释、情绪和幻想。", "容易被话术、情绪或偏见带偏。", "能抓住事实和证据。", "所有关系判断都应先过事实层。"),
      createIndicator("POOL-03", "关系合作", "母类", "观察在合作、亲密、人际和团队中的稳定性。", "容易纠缠、误判或破坏合作。", "边界清楚，合作成本低。", "按场景抽取，不做大而全打分。"),
      createIndicator("POOL-04", "修行专项", "母类", "为修行人保留专项指标，如心性、能量、状态和行为落地。", "容易只听道理不落地。", "能持续修正并稳定行动。", "和日常自查指标联动。"),
    ],
  },
  {
    id: "human-manual",
    category: "system",
    code: "HM-MANUAL",
    title: "人类说明书资料总纲",
    count: 9,
    source: "人类说明书资料总纲",
    audience: "资料总览 / 理念说明",
    summary:
      "从看见真相、认知重构、指标化检查、规则学习，到修正训练、身心灵处理和法界认知。",
    tags: ["资料定位", "总纲", "阅读入口"],
    groups: [
      { name: "看见真相", note: "解释痛苦、关系、家庭、修行和命运背后的运行逻辑。" },
      { name: "指标化检查", note: "把问题拆出来，看见真实状态、短板和修正方向。" },
      { name: "修正与训练", note: "把规则落实到表达、选择、情绪、关系、习惯和行动中。" },
    ],
    indicators: [
      createIndicator("MAN-01", "看见真相", "阶段", "先让人看到过去没有看到的真相。", "只停留在安慰，问题结构看不清。", "能看见自己反复卡住的底层逻辑。", "可作为理解资料库理念的入口。"),
      createIndicator("MAN-02", "认知重构", "阶段", "用新的思维模型替换旧认知、旧判断和旧关系模式。", "知道痛苦但仍用旧模型处理。", "判断方式开始改变。", "用实际问题和指标详情支撑。"),
      createIndicator("MAN-03", "指标化检查", "阶段", "通过指标系统看见真实状态、问题结构和短板。", "只能凭感觉判断自己。", "知道自己现在在哪里、缺什么。", "网站核心内容围绕这一项展开。"),
      createIndicator("MAN-04", "规则学习", "阶段", "理解问题背后的运行规则。", "只看结果，不知道为什么重复出错。", "能从规则层面找到修正方向。", "把每个指标都连接到规则解释。"),
    ],
  },
];

const state = {
  category: "all",
  query: "",
  selectedPackId: null,
  activeIndicatorKey: null,
  selectedIndicators: new Map(),
  activePathId: "child-homework",
};

const readingPaths = [
  {
    id: "child-homework",
    label: "孩子写作业卡住",
    title: "孩子写作业为什么卡住",
    summary: "先分清是任务过重、学习底盘不足、家庭压力放大，还是学校处境正在消耗孩子。",
    focus: ["作业任务", "学习底盘", "家庭压力", "学校处境"],
    steps: [
      { code: "HM-CHD-HW-104", title: "小孩子写作业指标", note: "先看作业量、难度、启动、拖延、情绪和家长干预。", href: "./library.html?category=child" },
      { code: "HM-CHD-LEARN-014", title: "孩子学习素质基础指标", note: "再看理解、记忆、应用、专注和抗压这类学习底盘。", href: "./library.html?category=child" },
      { code: "HM-CHD-FAM-029", title: "孩子家庭关系指标", note: "判断家庭关系是否正在把学习问题放大。", href: "./library.html?category=child" },
      { code: "HM-SCH-093", title: "学校生活与校园风险", note: "最后确认学校环境、同伴关系和安全感。", href: "./library.html?category=school" },
    ],
  },
  {
    id: "relationship-decision",
    label: "关系是否继续",
    title: "一段关系是否值得继续投入",
    summary: "先看事实行为，再看长期意愿和安全边界，避免只靠当下情绪判断。",
    focus: ["事实行为", "长期意图", "忠诚边界", "安全风险"],
    steps: [
      { code: "REL-M-01", title: "交往意愿", note: "先看对方是否愿意继续了解、见面和推进关系。", href: "./library.html?category=relationship" },
      { code: "REL-F-02", title: "承诺兑现率", note: "看说过的话、答应的事能不能落地。", href: "./library.html?category=relationship" },
      { code: "REL-F-03", title: "忠诚边界", note: "确认暧昧、多线、前任和异性关系是否清楚。", href: "./library.html?category=relationship" },
      { code: "REL-F-04", title: "分手报复风险", note: "安全风险优先于浪漫想象。", href: "./library.html?category=relationship" },
    ],
  },
  {
    id: "employee-fit",
    label: "员工能不能用",
    title: "员工能不能用、放哪里、要防什么",
    summary: "先看底线和可信任度，再看岗位适配与隐性消耗，最后看是否需要进入管理者画像。",
    focus: ["底线风险", "可信任度", "岗位适配", "团队消耗"],
    steps: [
      { code: "EMP-01", title: "可信任度", note: "从小任务、反馈稳定性和信息透明度开始看。", href: "./library.html?category=work" },
      { code: "EMP-02", title: "岗位适配度", note: "判断能力、性格和岗位要求是否匹配。", href: "./library.html?category=work" },
      { code: "EMP-03", title: "隐性消耗度", note: "观察是否制造沟通、情绪、人际或流程消耗。", href: "./library.html?category=work" },
      { code: "HM-MGT-421", title: "管理人员评价指标体系", note: "若涉及管理岗，再看权力、用人、决策和组织风险。", href: "./library.html?category=work" },
    ],
  },
  {
    id: "practice-wave",
    label: "修行状态波动",
    title: "修行状态为什么忽高忽低",
    summary: "把心、念、行拆开看，再回到长期稳定度和五毒四心风险，不用单次状态否定自己。",
    focus: ["正心正念", "行动落实", "长期稳定", "心性风险"],
    steps: [
      { code: "PRAC-01", title: "正念正心", note: "先看念头和出发点是否端正、清明、少偏差。", href: "./library.html?category=practice" },
      { code: "PRAC-02", title: "正行落实", note: "再看有没有把认知落到真实行动。", href: "./library.html?category=practice" },
      { code: "PRAC-03", title: "长期稳定度", note: "记录哪些场景最容易引发波动。", href: "./library.html?category=practice" },
      { code: "HM-POISON-009", title: "五毒四心指标体系", note: "最后看更深层的贪、嗔、痴、慢、疑和外在显化。", href: "./library.html?category=practice" },
    ],
  },
  {
    id: "recent-state",
    label: "近期状态复盘",
    title: "最近状态不稳，先从哪里看",
    summary: "先看身体恢复、睡眠、压力和情绪，再判断是否需要进入修行、关系或职场目录。",
    focus: ["睡眠恢复", "压力", "情绪", "行动力"],
    steps: [
      { code: "GEN-02", title: "睡眠恢复度", note: "先确认身体和精神有没有真正恢复。", href: "./library.html?category=general" },
      { code: "GEN-04", title: "压力值", note: "看现实负荷是否超过可承载范围。", href: "./library.html?category=general" },
      { code: "GEN-03", title: "情绪稳定度", note: "把情绪高峰和重大决定分开。", href: "./library.html?category=general" },
      { code: "HM-PRAC-DAY", title: "修行者基础指标日常自查", note: "如果反复波动，再回到心、念、行做周期复看。", href: "./library.html?category=practice" },
    ],
  },
];

function createIndicator(code, name, polarity, definition, low, high, improve) {
  return { code, name, polarity, definition, low, high, improve };
}

function byId(id) {
  return document.getElementById(id);
}

function matchesPack(pack) {
  const query = state.query.trim().toLowerCase();
  const inCategory = state.category === "all" || pack.category === state.category;
  if (!inCategory) return false;
  if (!query) return true;

  const haystack = [
    pack.code,
    pack.title,
    pack.summary,
    pack.source,
    pack.audience,
    pack.tags.join(" "),
    pack.groups.map((group) => `${group.name} ${group.note}`).join(" "),
    pack.indicators.map((indicator) => `${indicator.name} ${indicator.definition}`).join(" "),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function currentPacks() {
  return indicatorPacks.filter(matchesPack);
}

function categoryLabel(categoryId) {
  return categories.find((item) => item.id === categoryId)?.label || "综合资料";
}

function accessLabel(pack) {
  const text = `${pack.audience} ${pack.tags.join(" ")}`;
  if (text.includes("详细")) return "结构参考";
  if (text.includes("公开")) return "公开阅读";
  return "场景阅读";
}

function readingGuideFor(pack) {
  const guides = {
    general: {
      scene: "适合先看一个人的近期状态、能量、压力和行动倾向，再决定是否需要继续追细项。",
      order: "先读身体、睡眠、情绪和压力，再读行动、人际和近期阻力。不要一开始就盯单个高低点。",
      caution: "不要把近期状态当成长期命运，也不要用一个波动值解释所有问题。",
      next: "如果发现压力或情绪明显，再转到修行与心性、家庭关系或职场目录继续看。",
    },
    practice: {
      scene: "适合修行者做周期复看，判断想法、心性、行动和稳定度是否在同一个方向上。",
      order: "先看正心、正念，再看正行落实，最后看波动、复盘和修正意愿。",
      caution: "不要只看自己想得好不好，更要看有没有持续行动；也不要用低分羞辱自己。",
      next: "读完后可把 3 个最明显的短板写成一周修正计划，再回到基础状态目录复看。",
    },
    child: {
      scene: "适合父母理解孩子学习、家庭关系和学校处境，避免只用成绩或情绪下判断。",
      order: "先看孩子是否听懂、记住、会用，再看专注、主动性、抗压和家庭学校环境。",
      caution: "不要拿指标给孩子贴标签，也不要把一次状态当成能力上限。",
      next: "学习底盘读完后，建议继续看家庭关系、学校风险和写作业目录。",
    },
    relationship: {
      scene: "适合在暧昧、交往、婚恋选择前，看清关系投入、边界、长期意愿和安全风险。",
      order: "先看事实行为，再看关系意图，最后看安全边界和长期匹配。先证据，后感受。",
      caution: "不要用指标替自己审判别人，也不要为了证明喜欢或不喜欢而挑选性阅读。",
      next: "读完关系目录后，可回到普通人基础状态和总指标池，看对方的稳定性与底层风险。",
    },
    work: {
      scene: "适合老板、管理者或合作方在识人用人时，看一个人能不能用、放哪里、要防什么。",
      order: "先看底线和可信任度，再看岗位适配、协作成本和关键风险，最后看专项能力。",
      caution: "不要只凭单次面试或单项能力做决定，底线风险要优先于才华。",
      next: "若涉及管理岗，继续看管理人员评价指标；若涉及普通岗位，先把员工隐性指标读透。",
    },
    school: {
      scene: "适合家长从孩子视角理解学校生活，而不是只听成绩、老师反馈或表面情绪。",
      order: "先看安全感和适应，再看同学、老师、霸凌风险，最后看父母是否需要介入。",
      caution: "不要把孩子不说话理解成没事，也不要用恐吓式追问获取信息。",
      next: "学校风险读完后，建议继续看家庭关系和写作业目录，判断压力是否互相放大。",
    },
    system: {
      scene: "适合先理解整套指标资料如何拆问题、建目录、做边界，再进入具体场景。",
      order: "先读资料总纲，再看个人总指标池，最后按孩子、婚恋、职场或修行场景抽取。",
      caution: "不要把总纲当成直接结论；总纲是地图，具体判断仍要回到场景和代表指标。",
      next: "读完总纲后，建议选择一个真实问题进入对应目录，而不是一次看完所有内容。",
    },
  };

  return guides[pack.category] || guides.general;
}

function relatedPacksFor(pack) {
  const sameCategory = indicatorPacks.filter((item) => item.category === pack.category && item.id !== pack.id);
  const systemPacks = indicatorPacks.filter((item) => item.category === "system" && item.id !== pack.id);
  return [...sameCategory, ...systemPacks].slice(0, 3);
}

function readStoredJson(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeStoredJson(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    return false;
  }
  return true;
}

function rememberPack(pack) {
  if (!pack) return;
  const recent = readStoredJson("hmRecentPacks", []);
  const next = [pack.id, ...recent.filter((id) => id !== pack.id)].slice(0, 5);
  writeStoredJson("hmRecentPacks", next);
}

function recentPacksFor(pack) {
  const recentIds = readStoredJson("hmRecentPacks", []);
  return recentIds
    .filter((id) => id !== pack.id)
    .map((id) => indicatorPacks.find((item) => item.id === id))
    .filter(Boolean)
    .slice(0, 3);
}

function renderPathBuilder() {
  const list = byId("pathQuestionList");
  const result = byId("pathResult");
  if (!list || !result) return;

  const activePath = readingPaths.find((item) => item.id === state.activePathId) || readingPaths[0];
  list.innerHTML = readingPaths
    .map(
      (path) => `
        <button class="path-question ${path.id === activePath.id ? "is-active" : ""}" type="button" data-path="${path.id}">
          ${path.label}
        </button>
      `
    )
    .join("");

  result.innerHTML = `
    <div class="path-result-head">
      <p class="detail-eyebrow">当前阅读路径</p>
      <h3>${activePath.title}</h3>
      <p>${activePath.summary}</p>
      <div class="path-focus">
        ${activePath.focus.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </div>
    <ol class="path-steps">
      ${activePath.steps
        .map(
          (step, index) => `
            <li>
              <span>${String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>${step.title}</strong>
                <small>${step.code}</small>
                <p>${step.note}</p>
                <a href="${step.href}">进入相关目录</a>
              </div>
            </li>
          `
        )
        .join("")}
    </ol>
  `;
}

function setupPathBuilder() {
  const list = byId("pathQuestionList");
  if (!list) return;
  renderPathBuilder();
  list.addEventListener("click", (event) => {
    const button = event.target.closest("[data-path]");
    if (!button) return;
    state.activePathId = button.dataset.path;
    renderPathBuilder();
  });
}

function renderCategories() {
  const host = byId("categoryList");
  host.innerHTML = categories
    .map((category) => {
      const count =
        category.id === "all"
          ? indicatorPacks.length
          : indicatorPacks.filter((pack) => pack.category === category.id).length;
      return `
        <button class="category-button ${state.category === category.id ? "is-active" : ""}" type="button" data-category="${category.id}">
          <strong>${category.label}</strong>
          <span>${count}</span>
        </button>
      `;
    })
    .join("");
}

function renderPacks() {
  const packs = currentPacks();
  byId("resultCount").textContent = String(packs.length);
  const host = byId("packGrid");
  host.innerHTML = packs
    .map((pack, index) => {
      const category = categories.find((item) => item.id === pack.category);
      return `
        <button class="pack-card ${state.selectedPackId === pack.id ? "is-active" : ""}" type="button" data-pack="${pack.id}">
          <div class="pack-meta">
            <span class="pack-number">${String(index + 1).padStart(2, "0")}</span>
            <span class="pack-code">${pack.code}</span>
            <span>${category ? category.label : ""} / ${pack.count} 项</span>
          </div>
          <h3>${pack.title}</h3>
          <p>${pack.summary}</p>
          <div class="pack-tags">
            ${pack.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </button>
      `;
    })
    .join("");

  if (!packs.length) {
    host.innerHTML = `
      <div class="pack-card empty-pack-card">
        <div class="pack-meta">
          <span class="pack-number">00</span>
          <span>未匹配</span>
        </div>
        <h3>没有找到匹配内容</h3>
        <p>换一个关键词试试，例如“孩子”“正行”“风险”“婚恋”“管理”。</p>
      </div>
    `;
  }
}

function renderDetail(pack, indicator = null) {
  const host = byId("detailPanel");
  if (!pack) {
    host.innerHTML = `
      <p class="detail-eyebrow">当前目录</p>
      <p class="empty-title">选择一个指标目录</p>
      <p class="empty-copy">点击任意目录条目，即可查看结构、适用场景、代表指标和表达边界。</p>
    `;
    return;
  }

  const activeIndicator = indicator || pack.indicators[0];
  const guide = readingGuideFor(pack);
  const relatedPacks = relatedPacksFor(pack);
  const recentPacks = recentPacksFor(pack);
  state.activeIndicatorKey = `${pack.id}:${activeIndicator.code}`;
  host.innerHTML = `
    <p class="detail-eyebrow">当前目录</p>
    <p class="detail-meta-line">
      <span>${pack.code}</span>
      <span>${pack.count} 项</span>
      <span>${pack.audience}</span>
      <button class="copy-code-button" type="button" data-copy-code="${pack.code}">复制编号</button>
    </p>
    <h3>${pack.title}</h3>
    <p>${pack.summary}</p>

    <div class="detail-facts" aria-label="资料信息">
      <div>
        <span>所属方向</span>
        <strong>${categoryLabel(pack.category)}</strong>
      </div>
      <div>
        <span>阅读状态</span>
        <strong>${accessLabel(pack)}</strong>
      </div>
      <div>
        <span>资料来源</span>
        <strong>${pack.source}</strong>
      </div>
      <div>
        <span>更新日期</span>
        <strong>2026-05-31</strong>
      </div>
    </div>

    <p class="detail-subtitle">阅读方式</p>
    <div class="detail-reading-guide">
      <div>
        <strong>适用场景</strong>
        <span>${guide.scene}</span>
      </div>
      <div>
        <strong>阅读顺序</strong>
        <span>${guide.order}</span>
      </div>
      <div>
        <strong>避免误用</strong>
        <span>${guide.caution}</span>
      </div>
    </div>

    <p class="detail-subtitle">结构</p>
    <div class="detail-groups">
      ${pack.groups
        .map(
          (group) => `
          <div class="group-row">
            <strong>${group.name}</strong>
            <span>${group.note}</span>
          </div>
        `
        )
        .join("")}
    </div>

    <p class="detail-subtitle">代表指标</p>
    <div class="indicator-list" aria-label="代表指标">
      ${pack.indicators
        .map(
          (item) => `
          <button class="indicator-row ${item.code === activeIndicator.code ? "is-active" : ""}" type="button" data-indicator="${item.code}">
            <strong>${item.name}</strong>
            <span>${item.code} · ${item.polarity}</span>
          </button>
        `
        )
        .join("")}
    </div>

    <div class="indicator-detail">
      <p class="detail-eyebrow">当前指标</p>
      <p class="detail-meta-line">
        <span>${activeIndicator.code}</span>
        <span>${activeIndicator.polarity}</span>
      </p>
      <h3>${activeIndicator.name}</h3>
      <dl>
        <div>
          <dt>含义</dt>
          <dd>${activeIndicator.definition}</dd>
        </div>
        <div>
          <dt>低分或低风险侧</dt>
          <dd>${activeIndicator.low}</dd>
        </div>
        <div>
          <dt>高分或高风险侧</dt>
          <dd>${activeIndicator.high}</dd>
        </div>
        <div>
          <dt>调整建议</dt>
          <dd>${activeIndicator.improve}</dd>
        </div>
      </dl>
      <a class="add-button" href="./custom.html">
        按专题继续查
      </a>
    </div>

    <p class="detail-subtitle">继续阅读</p>
    <p class="detail-next-copy">${guide.next}</p>
    <div class="related-pack-list" aria-label="相关目录">
      ${relatedPacks
        .map(
          (item) => `
          <button class="related-pack-button" type="button" data-related-pack="${item.id}">
            <strong>${item.title}</strong>
            <span>${item.code} · ${item.count} 项</span>
          </button>
        `
        )
        .join("")}
    </div>
    ${
      recentPacks.length
        ? `
          <p class="detail-subtitle">最近阅读</p>
          <div class="related-pack-list" aria-label="最近阅读目录">
            ${recentPacks
              .map(
                (item) => `
                <button class="related-pack-button" type="button" data-related-pack="${item.id}">
                  <strong>${item.title}</strong>
                  <span>${item.code} · ${item.count} 项</span>
                </button>
              `
              )
              .join("")}
          </div>
        `
        : ""
    }
  `;
  rememberPack(pack);
}

function renderComposer() {
  if (!byId("selectedCount")) return;
  const count = state.selectedIndicators.size;
  byId("selectedCount").textContent = String(count);
  const status = byId("composerStatus");
  const hint = byId("composerHint");
  const list = byId("selectedIndicators");

  if (count === 0) {
    status.textContent = "还没有加入阅读清单";
    hint.textContent = "可以先按一个真实问题，挑出至少 15 项相关指标，形成一条阅读线索。";
    list.innerHTML = "";
    return;
  }

  if (count < 15) {
    status.textContent = `还差 ${15 - count} 项可形成完整查阅路径`;
    hint.textContent = "建议至少覆盖 15 项，避免只看单个角度。";
  } else {
    status.textContent = "已形成完整查阅路径";
    hint.textContent = "这一组可以用来复看同一个真实问题。";
  }

  list.innerHTML = Array.from(state.selectedIndicators.values())
    .map((item) => `<span>${item.name}</span>`)
    .join("");
}

function selectPack(packId) {
  const pack = indicatorPacks.find((item) => item.id === packId);
  if (!pack) return;
  state.selectedPackId = pack.id;
  renderPacks();
  renderDetail(pack);
}

function selectCategory(categoryId) {
  state.category = categoryId;
  const packs = currentPacks();
  state.selectedPackId = packs[0] ? packs[0].id : null;
  renderCategories();
  renderPacks();
  renderDetail(packs[0] || null);
}

function setupEvents() {
  byId("categoryList")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    selectCategory(button.dataset.category);
  });

  byId("packGrid")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-pack]");
    if (!button) return;
    selectPack(button.dataset.pack);
  });

  byId("detailPanel")?.addEventListener("click", (event) => {
    const copyButton = event.target.closest("[data-copy-code]");
    if (copyButton) {
      const original = copyButton.textContent;
      const code = copyButton.dataset.copyCode;
      const done = () => {
        copyButton.textContent = "已复制";
        window.setTimeout(() => {
          copyButton.textContent = original;
        }, 1400);
      };
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(code).then(done, done);
      } else {
        done();
      }
      return;
    }

    const indicatorButton = event.target.closest("[data-indicator]");
    if (indicatorButton) {
      const pack = indicatorPacks.find((item) => item.id === state.selectedPackId);
      const indicator = pack?.indicators.find((item) => item.code === indicatorButton.dataset.indicator);
      if (pack && indicator) renderDetail(pack, indicator);
      return;
    }

    const relatedButton = event.target.closest("[data-related-pack]");
    if (relatedButton) {
      selectPack(relatedButton.dataset.relatedPack);
      byId("detailPanel")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const addButton = event.target.closest("[data-add-indicator]");
    if (addButton) {
      const pack = indicatorPacks.find((item) => item.id === state.selectedPackId);
      const indicator = pack?.indicators.find((item) => item.code === addButton.dataset.addIndicator);
      if (!pack || !indicator) return;
      const key = `${pack.id}:${indicator.code}`;
      state.selectedIndicators.set(key, {
        name: indicator.name,
        code: indicator.code,
        pack: pack.title,
      });
      renderComposer();
    }
  });

  byId("searchInput")?.addEventListener("input", (event) => {
    state.query = event.target.value;
    const packs = currentPacks();
    state.selectedPackId = packs[0] ? packs[0].id : null;
    renderPacks();
    renderDetail(packs[0] || null);
  });

  document.querySelectorAll("[data-jump]").forEach((node) => {
    node.addEventListener("click", () => {
      selectCategory(node.dataset.jump);
      byId("library").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setupReveals() {
  const items = document.querySelectorAll(
    ".hero-copy, .hero-art, .page-visual, .knowledge-index-visual, .knowledge-index-copy, .index-link, .question-list a, .page-hero, .section-heading, .library-sidebar, .library-main, .composer-board, .path-result, .sample-index-card, .sample-side, .sample-doc, .topic-list article, .notice-section article, .schema-grid article, .version-grid article, .timeline li"
  );

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  items.forEach((item, index) => {
    item.classList.add("reveal");
    item.style.setProperty("--reveal-delay", `${Math.min(index * 45, 260)}ms`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}

function setupReadingTools() {
  if (document.querySelector(".reader-tools")) return;

  const clampScale = (value) => Math.min(1.08, Math.max(0.94, value));
  const storedScale = Number(window.localStorage?.getItem("hmReaderScale") || "1");
  let readerScale = Number.isFinite(storedScale) ? clampScale(storedScale) : 1;

  const applyScale = () => {
    document.documentElement.style.fontSize = `${Math.round(readerScale * 100)}%`;
    try {
      window.localStorage.setItem("hmReaderScale", String(readerScale));
    } catch {
      return false;
    }
    return true;
  };

  applyScale();

  const tools = document.createElement("div");
  tools.className = "reader-tools";
  tools.setAttribute("aria-label", "阅读辅助");
  tools.innerHTML = `
    <button type="button" data-reader-size="-0.04">字小</button>
    <button type="button" data-reader-size="0.04">字大</button>
    <button type="button" data-back-top>顶部</button>
  `;
  document.body.appendChild(tools);

  tools.addEventListener("click", (event) => {
    const sizeButton = event.target.closest("[data-reader-size]");
    if (sizeButton) {
      readerScale = clampScale(readerScale + Number(sizeButton.dataset.readerSize));
      applyScale();
      return;
    }

    if (event.target.closest("[data-back-top]")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

function initLibrary() {
  if (!byId("categoryList")) return;
  const params = new URLSearchParams(window.location.search);
  const requestedCategory = params.get("category");
  state.category = categories.some((category) => category.id === requestedCategory)
    ? requestedCategory
    : "all";
  state.selectedPackId = indicatorPacks[0].id;
  renderCategories();
  renderPacks();
  const packs = currentPacks();
  state.selectedPackId = packs[0] ? packs[0].id : null;
  renderPacks();
  renderDetail(packs[0] || null);
  renderComposer();
  setupEvents();
}

function init() {
  setupReveals();
  setupPathBuilder();
  setupReadingTools();
  initLibrary();
}

init();
