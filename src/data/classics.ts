/**
 * 经典著作与翻译：通信学科十二篇奠基论文的中文精读译注。
 * 全书 PDF 与单篇译注放在 public/files/classics/ 下；
 * 本站不托管原文 PDF，原文统一通过 DOI 前往出版机构获取。
 */

export const classicBook = {
  title: '通信学科奠基论文·中文精读译注本',
  subtitle: '十二篇改变通信史的开山之作',
  description:
    '从 Shannon 1948 到 Marzetta 2010，按原文章节顺序逐节译述模型、假设、推导主线、定理与算法；每章附文献档案、摘要全译、结果与影响、术语对照与译者注，公式全部用 LaTeX 重排。',
  file: '/files/classics/通信学科奠基论文_中文精读译注本.pdf',
  pages: 97,
  updated: '2026-11-07',
};

/**
 * 按发表年份排列。
 * translation：中文译注单行本；fullText 表示译述是否依据原文全文。
 * fullText 为 false 的篇目，章首均明确标注「据公开摘要与领域共识译述」。
 */
export const classicPapers = [
  {
    id: 'shannon1948',
    year: 1948,
    shortTitle: '通信的数学理论',
    zhTitle: '通信的数学理论',
    enTitle: 'A Mathematical Theory of Communication',
    authors: 'Claude E. Shannon',
    venue: 'Bell System Technical Journal, 27(3): 379–423; 27(4): 623–656',
    doi: '10.1002/j.1538-7305.1948.tb01338.x',
    field: '信息论',
    summary:
      '通信第一次被写成可计算的数学对象：熵度量不确定性，容量刻画可靠传输的上限，噪声信道编码定理宣告「任意小差错」可以做到。信息论由此从工程经验变成一门学科。',
    translation: '/files/classics/translations/shannon1948-zh.pdf',
    pages: 6,
    fullText: true,
  },
  {
    id: 'hamming1950',
    year: 1950,
    shortTitle: '检错与纠错码',
    zhTitle: '检错与纠错码',
    enTitle: 'Error Detecting and Error Correcting Codes',
    authors: 'Richard W. Hamming',
    venue: 'Bell System Technical Journal, 29(2): 147–160',
    doi: '10.1002/j.1538-7305.1950.tb00463.x',
    field: '编码理论',
    summary:
      '从「计算机不能出一个错」出发，用奇偶校验位构造出可定位并纠正单个错误的码；以汉明距离与纠错球给出统一几何模型，并证明 (7,4) 码的完备性。代数编码由此开端。',
    translation: '/files/classics/translations/hamming1950-zh.pdf',
    pages: 6,
    fullText: true,
  },
  {
    id: 'gallager1962',
    year: 1962,
    shortTitle: '低密度奇偶校验码',
    zhTitle: '低密度奇偶校验码',
    enTitle: 'Low-Density Parity-Check Codes',
    authors: 'Robert G. Gallager',
    venue: 'IRE Transactions on Information Theory, IT-8(1): 21–28（1963 年 MIT Press 专著版）',
    doi: '10.1109/TIT.1962.1057683',
    field: '信道编码',
    summary:
      '用稀疏奇偶校验矩阵定义一类线性码，证明最小距离随码长线性增长，并给出比特翻转与概率译码两种迭代算法——后者正是置信传播的前身。沉寂三十余年后成为 5G、Wi-Fi 与深空通信的主流码。',
    translation: '/files/classics/translations/gallager1962-zh.pdf',
    pages: 5,
    fullText: true,
  },
  {
    id: 'chang1966',
    year: 1966,
    shortTitle: '带限正交信号与多载波',
    zhTitle: '带限正交信号与多载波数据传输',
    enTitle: 'Synthesis of Band-Limited Orthogonal Signals for Multichannel Data Transmission',
    authors: 'Robert W. Chang',
    venue: 'Bell System Technical Journal, 45(10): 1775–1796',
    doi: '10.1002/j.1538-7305.1966.tb02435.x',
    field: '多载波',
    summary:
      '提出正交复用原理：N 路等间隔载波在带限介质上并行传输，只要滤波器幅度满足奇/偶对称条件，就能同时消除信道间干扰与码间干扰，且相位失真不影响正交性。这是 OFDM 的直系思想源头之一。',
    translation: '/files/classics/translations/chang1966-zh.pdf',
    pages: 8,
    fullText: true,
  },
  {
    id: 'viterbi1967',
    year: 1967,
    shortTitle: '卷积码与维特比算法',
    zhTitle: '卷积码的差错界与渐近最优译码',
    enTitle: 'Error Bounds for Convolutional Codes and an Asymptotically Optimum Decoding Algorithm',
    authors: 'Andrew J. Viterbi',
    venue: 'IEEE Transactions on Information Theory, IT-13(2): 260–269',
    doi: '10.1109/TIT.1967.1054010',
    field: '信道编码',
    summary:
      '以约束长度为参数给出卷积码误码率上下界，并提出固定复杂度的非顺序译码算法；当码率高于 R₀ 时该算法渐近最优。今天它以「维特比算法」之名进入几乎每一部数字通信设备。',
    translation: '/files/classics/translations/viterbi1967-zh.pdf',
    pages: 8,
    fullText: false,
  },
  {
    id: 'kleinrock1975',
    year: 1975,
    shortTitle: 'CSMA 随机接入',
    zhTitle: '无线信道中的分组交换与 CSMA',
    enTitle:
      'Packet Switching in Radio Channels: Part I—Carrier Sense Multiple-Access Modes and Their Throughput-Delay Characteristics',
    authors: 'Leonard Kleinrock, Fouad A. Tobagi',
    venue: 'IEEE Transactions on Communications, COM-23(12): 1400–1416',
    doi: '10.1109/TCOM.1975.1092768',
    field: '随机接入',
    summary:
      '把终端字节流切成分组，在共享无线信道上突发发送；发送前先侦听信道以降低冲突。论文给出非坚持、1-坚持与 p-坚持 CSMA 的吞吐量-时延分析，证明其显著优于 ALOHA，奠定了现代随机接入的理论基础。',
    translation: '/files/classics/translations/kleinrock1975-zh.pdf',
    pages: 7,
    fullText: false,
  },
  {
    id: 'berrou1993',
    year: 1993,
    shortTitle: 'Turbo 码',
    zhTitle: '逼近香农极限的 Turbo 码',
    enTitle: 'Near Shannon Limit Error-Correcting Coding and Decoding: Turbo-codes',
    authors: 'Claude Berrou, Alain Glavieux, Punya Thitimajshima',
    venue: "Proc. IEEE International Conference on Communications (ICC '93), Geneva, 2: 1064–1070",
    doi: '10.1109/ICC.1993.397441',
    field: '信道编码',
    summary:
      '两个递归系统卷积码经交织器并行级联，接收端以软输入软输出迭代交换外信息。码率 1/2、块长 65536 时，BER 10⁻⁵ 距香农限仅约 0.5 dB；「Turbo 原理」此后重塑了编码与检测。',
    translation: '/files/classics/translations/berrou1993-zh.pdf',
    pages: 8,
    fullText: false,
  },
  {
    id: 'foschini1996',
    year: 1996,
    shortTitle: 'BLAST 分层空时',
    zhTitle: '分层空时架构与 BLAST',
    enTitle:
      'Layered Space-Time Architecture for Wireless Communication in a Fading Environment When Using Multi-Element Antennas',
    authors: 'Gerard J. Foschini',
    venue: 'Bell Labs Technical Journal, 1(2): 41–59',
    doi: '10.1002/bltj.2015',
    field: 'MIMO',
    summary:
      '证明 Rayleigh 衰落中 (n,n) 多天线系统的容量随天线数线性增长；n=8、1% 中断、21 dB 时可达 42 b/s/Hz。论文给出把比特流分层、逐层零化抵消的 BLAST 架构，用一维编译码器拼出逼近容量的空时系统。',
    translation: '/files/classics/translations/foschini1996-zh.pdf',
    pages: 7,
    fullText: true,
  },
  {
    id: 'telatar1999',
    year: 1999,
    shortTitle: '多天线信道容量',
    zhTitle: '多天线高斯信道的容量',
    enTitle: 'Capacity of Multi-antenna Gaussian Channels',
    authors: 'I. Emre Telatar',
    venue: 'European Transactions on Telecommunications, 10(6): 585–596（1995 贝尔实验室技术备忘录）',
    doi: '10.1002/ett.4460100604',
    field: 'MIMO',
    summary:
      '建立 t×r 多天线高斯信道的统一容量理论：确定信道经 SVD 化为并行标量子信道并注水；遍历衰落信道的最优输入为等功率圆对称复高斯，容量由 Wishart 特征值分布给出；非遍历情形则以中断容量刻画。',
    translation: '/files/classics/translations/telatar1999-zh.pdf',
    pages: 9,
    fullText: true,
  },
  {
    id: 'ahlswede2000',
    year: 2000,
    shortTitle: '网络编码',
    zhTitle: '网络信息流与网络编码',
    enTitle: 'Network Information Flow',
    authors: 'Rudolf Ahlswede, Ning Cai, Shuo-Yen Robert Li, Raymond W. Yeung',
    venue: 'IEEE Transactions on Information Theory, 46(4): 1204–1216',
    doi: '10.1109/18.850663',
    field: '网络编码',
    summary:
      '把信息传输从点对点信道推广到多源多宿网络，证明单源多播的可达速率区域由割集界完全刻画——网络版的「最大流-最小割定理」。反直觉的是，最大流一般不能靠路由达到，中间节点必须编码；网络编码由此成为独立领域。',
    translation: '/files/classics/translations/ahlswede2000-zh.pdf',
    pages: 7,
    fullText: false,
  },
  {
    id: 'arikan2009',
    year: 2009,
    shortTitle: '极化码',
    zhTitle: '信道极化与极化码',
    enTitle:
      'Channel Polarization: A Method for Constructing Capacity-Achieving Codes for Symmetric Binary-Input Memoryless Channels',
    authors: 'Erdal Arıkan',
    venue: 'IEEE Transactions on Information Theory, 55(7): 3051–3073',
    doi: '10.1109/TIT.2009.2021379',
    field: '信道编码',
    summary:
      '把 N 个相同信道合并再分裂，令子信道容量两极分化；只在近无噪子信道上发送信息，即得以 O(N log N) 编译码、显式构造并可达容量的极化码。香农存在性定理之后六十年的构造性目标由此完成，并成为 5G 控制信道标准。',
    translation: '/files/classics/translations/arikan2009-zh.pdf',
    pages: 6,
    fullText: true,
  },
  {
    id: 'marzetta2010',
    year: 2010,
    shortTitle: 'Massive MIMO',
    zhTitle: '大规模 MIMO 的渐近范式',
    enTitle: 'Noncooperative Cellular Wireless with Unlimited Numbers of Base Station Antennas',
    authors: 'Thomas L. Marzetta',
    venue: 'IEEE Transactions on Wireless Communications, 9(11): 3590–3600',
    doi: '10.1109/TWC.2010.092810.091092',
    field: 'Massive MIMO',
    summary:
      '当天线数趋于无穷，用户信道渐近正交，噪声与快衰落消失，最大比处理渐近最优；吞吐随 log M 增长，或终端功率按 1/M 下降。唯一不消失的损伤是多小区导频污染——它划定了 Massive MIMO 范式的边界。',
    translation: '/files/classics/translations/marzetta2010-zh.pdf',
    pages: 8,
    fullText: false,
  },
];
