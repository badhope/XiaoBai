/**
 * 课程库数据
 * 独立的课程存储，所有专业的课程都从这里引用
 */

import { Course, CourseLibrary } from '../../types/subject';

/**
 * 公共基础课程库
 * 这些课程被多个专业共享
 */
const commonCourses: Course[] = [
  {
    id: 'course-ds-001',
    name: '数据结构',
    code: 'DS001',
    summary: '计算机科学的基石，研究数据的组织、存储和操作',
    description: '数据结构是计算机存储、组织数据的方式。良好的数据结构可以提高程序运行效率。本课程涵盖线性表、栈、队列、树、图、哈希表等经典数据结构，以及相关的算法实现。',
    estimatedHours: 64,
    credits: 4,
    recommendedSemester: 2,
    difficulty: 'intermediate',
    tags: ['编程基础', '算法', '核心课程', '考研重点'],
    categories: ['computer-science', 'software-engineering', 'ai'],
    prerequisites: ['course-prog-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-algo-001',
    name: '算法分析与设计',
    code: 'ALGO001',
    summary: '学习如何设计高效算法并分析其复杂度',
    description: '算法是解决问题的步骤和方法。本课程教授算法设计的基本策略（贪心、分治、动态规划、回溯等）和复杂度分析技术，培养算法思维能力。',
    estimatedHours: 48,
    credits: 3,
    recommendedSemester: 3,
    difficulty: 'intermediate',
    tags: ['算法', '核心课程', '考研重点', '竞赛必备'],
    categories: ['computer-science', 'software-engineering', 'ai', 'math'],
    prerequisites: ['course-ds-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-prog-001',
    name: '程序设计基础',
    code: 'PROG001',
    summary: '编程入门，掌握程序设计的基本思想和方法',
    description: '本课程是编程的入门课程，涵盖变量、数据类型、控制结构、函数、数组、指针等基本概念，培养计算思维和问题求解能力。',
    estimatedHours: 64,
    credits: 4,
    recommendedSemester: 1,
    difficulty: 'beginner',
    tags: ['编程基础', '入门必修', '所有专业'],
    categories: ['computer-science', 'software-engineering', 'ai', 'math'],
    prerequisites: [],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-os-001',
    name: '操作系统',
    code: 'OS001',
    summary: '理解计算机系统的核心软件，管理硬件资源',
    description: '操作系统是计算机系统的核心系统软件。本课程讲解进程管理、内存管理、文件系统、设备管理等核心概念，以及操作系统的实现原理。',
    estimatedHours: 64,
    credits: 4,
    recommendedSemester: 4,
    difficulty: 'intermediate',
    tags: ['系统基础', '核心课程', '考研重点'],
    categories: ['computer-science', 'software-engineering'],
    prerequisites: ['course-ca-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-ca-001',
    name: '计算机组成原理',
    code: 'CA001',
    summary: '探索计算机硬件的工作原理和内部结构',
    description: '计算机组成原理研究计算机硬件系统的组成、工作原理和设计方法。课程涵盖运算器、控制器、存储器、输入输出系统等核心部件。',
    estimatedHours: 64,
    credits: 4,
    recommendedSemester: 3,
    difficulty: 'intermediate',
    tags: ['硬件基础', '核心课程', '考研重点'],
    categories: ['computer-science', 'software-engineering'],
    prerequisites: ['course-prog-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-db-001',
    name: '数据库系统',
    code: 'DB001',
    summary: '学习数据管理技术，掌握 SQL 和数据库设计',
    description: '数据库系统是存储和管理数据的软件系统。本课程讲解关系数据库理论、SQL 语言、数据库设计、事务处理、并发控制等核心内容。',
    estimatedHours: 48,
    credits: 3,
    recommendedSemester: 4,
    difficulty: 'intermediate',
    tags: ['数据管理', '核心课程', '实用技能'],
    categories: ['computer-science', 'software-engineering', 'mis'],
    prerequisites: ['course-ds-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-se-001',
    name: '软件工程导论',
    code: 'SE001',
    summary: '用工程化方法开发和维护软件系统',
    description: '软件工程是将工程化方法应用于软件开发。本课程介绍软件生命周期、需求分析、系统设计、编码规范、测试方法、项目管理等核心内容。',
    estimatedHours: 48,
    credits: 3,
    recommendedSemester: 3,
    difficulty: 'intermediate',
    tags: ['工程实践', '核心课程', '团队协作'],
    categories: ['computer-science', 'software-engineering'],
    prerequisites: ['course-prog-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-cn-001',
    name: '计算机网络',
    code: 'CN001',
    summary: '理解网络协议和互联网的工作原理',
    description: '计算机网络是现代信息社会的基础设施。本课程讲解网络体系结构、物理层、数据链路层、网络层、传输层、应用层等核心协议和原理。',
    estimatedHours: 48,
    credits: 3,
    recommendedSemester: 4,
    difficulty: 'intermediate',
    tags: ['网络基础', '核心课程', '考研重点'],
    categories: ['computer-science', 'software-engineering', 'network-security'],
    prerequisites: ['course-prog-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
];

/**
 * 计算机类专业课程
 */
const computerScienceCourses: Course[] = [
  {
    id: 'course-ml-001',
    name: '机器学习',
    code: 'ML001',
    summary: '让计算机从数据中学习规律和模式',
    description: '机器学习是人工智能的核心领域。本课程讲解监督学习、无监督学习、强化学习等基本范式，以及线性回归、逻辑回归、决策树、SVM、聚类等经典算法。',
    estimatedHours: 64,
    credits: 4,
    recommendedSemester: 5,
    difficulty: 'advanced',
    tags: ['人工智能', '热门课程', '数据科学'],
    categories: ['ai', 'data-science'],
    prerequisites: ['course-algo-001', 'course-prob-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-dl-001',
    name: '深度学习',
    code: 'DL001',
    summary: '神经网络与深度学习方法',
    description: '深度学习是机器学习的重要分支。本课程讲解神经网络基础、CNN、RNN、Transformer 等深度模型，以及在视觉、语言等领域的应用。',
    estimatedHours: 64,
    credits: 4,
    recommendedSemester: 6,
    difficulty: 'advanced',
    tags: ['人工智能', '深度学习', '热门课程'],
    categories: ['ai', 'data-science'],
    prerequisites: ['course-ml-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-cv-001',
    name: '计算机视觉',
    code: 'CV001',
    summary: '让计算机看懂图像和视频',
    description: '计算机视觉研究如何让计算机理解和处理视觉信息。课程涵盖图像处理、特征提取、目标检测、图像分割、三维视觉等内容。',
    estimatedHours: 48,
    credits: 3,
    recommendedSemester: 6,
    difficulty: 'advanced',
    tags: ['人工智能', '计算机视觉', '热门课程'],
    categories: ['ai'],
    prerequisites: ['course-dl-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-nlp-001',
    name: '自然语言处理',
    code: 'NLP001',
    summary: '让计算机理解和生成人类语言',
    description: '自然语言处理研究计算机与人类语言之间的交互。课程包括分词、句法分析、语义理解、情感分析、机器翻译、对话系统等内容。',
    estimatedHours: 48,
    credits: 3,
    recommendedSemester: 6,
    difficulty: 'advanced',
    tags: ['人工智能', '自然语言处理', '热门课程'],
    categories: ['ai'],
    prerequisites: ['course-dl-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-sec-001',
    name: '网络空间安全',
    code: 'SEC001',
    summary: '保护计算机系统和网络免受攻击',
    description: '网络空间安全研究如何保护信息系统免受未经授权的访问、攻击和破坏。课程涵盖密码学、网络安全、系统安全、软件安全等内容。',
    estimatedHours: 48,
    credits: 3,
    recommendedSemester: 5,
    difficulty: 'advanced',
    tags: ['网络安全', '信息安全', '重要课程'],
    categories: ['network-security'],
    prerequisites: ['course-cn-001', 'course-os-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
];

/**
 * 管理学专业课程
 */
const managementCourses: Course[] = [
  {
    id: 'course-mgmt-001',
    name: '管理学原理',
    code: 'MGMT001',
    summary: '管理的基本理论和方法',
    description: '管理学原理是管理学科的基础课程。课程介绍管理的基本概念、管理思想发展史、计划、组织、领导、控制等管理职能，以及现代管理理论。',
    estimatedHours: 48,
    credits: 3,
    recommendedSemester: 1,
    difficulty: 'beginner',
    tags: ['管理基础', '入门必修', '所有管理专业'],
    categories: ['management', 'business-admin', 'public-admin'],
    prerequisites: [],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-micro-001',
    name: '微观经济学',
    code: 'MICRO001',
    summary: '研究个体经济单位的经济行为',
    description: '微观经济学研究消费者、厂商等个体经济单位的决策行为。课程包括供求理论、消费者理论、生产者理论、市场结构、要素市场等。',
    estimatedHours: 48,
    credits: 3,
    recommendedSemester: 2,
    difficulty: 'intermediate',
    tags: ['经济学基础', '核心课程', '考研重点'],
    categories: ['economics', 'business-admin'],
    prerequisites: [],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-macro-001',
    name: '宏观经济学',
    code: 'MACRO001',
    summary: '研究整体经济运行规律',
    description: '宏观经济学研究国民经济的整体运行。课程包括国民收入核算、经济增长理论、经济周期、失业与通货膨胀、财政政策与货币政策等。',
    estimatedHours: 48,
    credits: 3,
    recommendedSemester: 2,
    difficulty: 'intermediate',
    tags: ['经济学基础', '核心课程', '考研重点'],
    categories: ['economics', 'business-admin'],
    prerequisites: ['course-micro-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-acct-001',
    name: '会计学原理',
    code: 'ACCT001',
    summary: '会计的基础理论和基本技能',
    description: '会计学原理是会计学科的入门课程。课程介绍会计的基本概念、会计要素、会计等式、复式记账、会计凭证、会计账簿、会计报表等。',
    estimatedHours: 48,
    credits: 3,
    recommendedSemester: 3,
    difficulty: 'beginner',
    tags: ['会计基础', '核心课程', '实用技能'],
    categories: ['business-admin', 'accounting'],
    prerequisites: [],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-fm-001',
    name: '财务管理',
    code: 'FM001',
    summary: '企业资金的筹集、投放和分配',
    description: '财务管理研究企业财务活动的管理。课程包括财务分析、投资决策、融资决策、营运资金管理、股利政策、财务计划与控制等。',
    estimatedHours: 48,
    credits: 3,
    recommendedSemester: 4,
    difficulty: 'intermediate',
    tags: ['财务管理', '核心课程', '实用技能'],
    categories: ['business-admin', 'accounting'],
    prerequisites: ['course-acct-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-mkt-001',
    name: '市场营销学',
    code: 'MKT001',
    summary: '创造、传递和沟通顾客价值',
    description: '市场营销学研究如何识别、创造和传递顾客价值。课程包括市场分析、消费者行为、市场细分、产品策略、定价策略、渠道策略、促销策略等。',
    estimatedHours: 48,
    credits: 3,
    recommendedSemester: 4,
    difficulty: 'intermediate',
    tags: ['市场营销', '核心课程', '实用技能'],
    categories: ['business-admin'],
    prerequisites: ['course-mgmt-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-or-001',
    name: '运筹学',
    code: 'OR001',
    summary: '用数学方法优化管理决策',
    description: '运筹学是应用数学方法解决管理问题的学科。课程包括线性规划、整数规划、动态规划、图论、排队论、存储论等优化方法。',
    estimatedHours: 64,
    credits: 4,
    recommendedSemester: 2,
    difficulty: 'intermediate',
    tags: ['优化方法', '数学工具', '考研重点'],
    categories: ['mis', 'management'],
    prerequisites: [],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-mis-001',
    name: '管理信息系统',
    code: 'MIS001',
    summary: '信息技术支持管理决策',
    description: '管理信息系统研究如何利用信息技术支持组织的管理和决策。课程包括信息系统基础、系统分析与设计、数据库管理、企业资源规划等。',
    estimatedHours: 48,
    credits: 3,
    recommendedSemester: 3,
    difficulty: 'intermediate',
    tags: ['信息系统', '核心课程', '技术应用'],
    categories: ['mis', 'management'],
    prerequisites: ['course-mgmt-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
];

/**
 * 数学专业课程
 */
const mathCourses: Course[] = [
  {
    id: 'course-ma-001',
    name: '数学分析',
    code: 'MA001',
    summary: '数学专业的核心基础课程',
    description: '数学分析是数学专业最重要的基础课。课程包括极限理论、一元微积分、多元微积分、无穷级数、含参变量积分等，为后续课程奠定基础。',
    estimatedHours: 192,
    credits: 12,
    recommendedSemester: 1,
    difficulty: 'advanced',
    tags: ['数学基础', '核心课程', '考研重点'],
    categories: ['math', 'statistics'],
    prerequisites: [],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-la-001',
    name: '高等代数',
    code: 'LA001',
    summary: '研究代数结构和线性空间',
    description: '高等代数是数学专业的基础课程。课程包括多项式理论、行列式、矩阵、线性方程组、二次型、线性空间、线性变换、欧氏空间等。',
    estimatedHours: 128,
    credits: 8,
    recommendedSemester: 1,
    difficulty: 'advanced',
    tags: ['代数基础', '核心课程', '考研重点'],
    categories: ['math'],
    prerequisites: [],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-geo-001',
    name: '解析几何',
    code: 'GEO001',
    summary: '用代数方法研究几何问题',
    description: '解析几何研究平面和空间的几何图形。课程包括向量代数、平面与直线、二次曲线与二次曲面、坐标变换等。',
    estimatedHours: 64,
    credits: 4,
    recommendedSemester: 2,
    difficulty: 'intermediate',
    tags: ['几何基础', '核心课程'],
    categories: ['math'],
    prerequisites: [],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-ode-001',
    name: '常微分方程',
    code: 'ODE001',
    summary: '研究含有未知函数及其导数的方程',
    description: '常微分方程是描述变化规律的重要工具。课程包括一阶微分方程、高阶线性方程、线性方程组、稳定性理论、边值问题等。',
    estimatedHours: 64,
    credits: 4,
    recommendedSemester: 3,
    difficulty: 'intermediate',
    tags: ['微分方程', '核心课程'],
    categories: ['math'],
    prerequisites: ['course-ma-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-prob-001',
    name: '概率论与数理统计',
    code: 'PROB001',
    summary: '研究随机现象的统计规律',
    description: '概率论与数理统计研究随机现象。课程包括概率空间、随机变量、数字特征、大数定律、中心极限定理、参数估计、假设检验等。',
    estimatedHours: 80,
    credits: 5,
    recommendedSemester: 3,
    difficulty: 'intermediate',
    tags: ['概率统计', '核心课程', '考研重点'],
    categories: ['math', 'statistics', 'data-science'],
    prerequisites: ['course-ma-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-na-001',
    name: '数值分析',
    code: 'NA001',
    summary: '用计算机求解数学问题的数值方法',
    description: '数值分析研究数学问题的数值解法。课程包括误差分析、插值法、数值积分、微分方程数值解、矩阵计算等。',
    estimatedHours: 64,
    credits: 4,
    recommendedSemester: 4,
    difficulty: 'advanced',
    tags: ['计算方法', '核心课程', '编程应用'],
    categories: ['math', 'computational-math'],
    prerequisites: ['course-ma-001', 'course-la-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-dm-001',
    name: '离散数学',
    code: 'DM001',
    summary: '研究离散量的结构和关系',
    description: '离散数学是计算机科学的数学基础。课程包括集合论、数理逻辑、代数结构、图论、组合数学等。',
    estimatedHours: 64,
    credits: 4,
    recommendedSemester: 3,
    difficulty: 'intermediate',
    tags: ['离散数学', '计算机基础', '核心课程'],
    categories: ['math', 'computer-science'],
    prerequisites: [],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
  {
    id: 'course-stat-001',
    name: '统计学原理',
    code: 'STAT001',
    summary: '统计学的基础理论和方法',
    description: '统计学原理是统计学专业的入门课程。课程包括统计调查、统计整理、统计指标、抽样推断、相关与回归分析等。',
    estimatedHours: 64,
    credits: 4,
    recommendedSemester: 3,
    difficulty: 'beginner',
    tags: ['统计基础', '核心课程'],
    categories: ['statistics'],
    prerequisites: ['course-prob-001'],
    articles: [],
    metadata: {
      referencedByCount: 0,
      createdAt: '2024-01-01',
      updatedAt: '2024-01-01',
    },
  },
];

/**
 * 合并所有课程
 */
const allCourses: Course[] = [
  ...commonCourses,
  ...computerScienceCourses,
  ...managementCourses,
  ...mathCourses,
];

/**
 * 构建课程库索引
 */
function buildCourseLibrary(): CourseLibrary {
  const library: CourseLibrary = {
    courses: allCourses,
    index: {
      byId: {},
      byCode: {},
      byTag: {},
    },
  };

  // 构建索引
  allCourses.forEach((course) => {
    // ID 索引
    library.index.byId[course.id] = course;

    // 代码索引
    if (course.code) {
      library.index.byCode[course.code] = course;
    }

    // 标签索引
    if (course.tags) {
      course.tags.forEach((tag) => {
        const normalizedTag = tag.toLowerCase();
        if (!library.index.byTag[normalizedTag]) {
          library.index.byTag[normalizedTag] = [];
        }
        library.index.byTag[normalizedTag].push(course);
      });
    }
  });

  return library;
}

/**
 * 导出课程库
 */
export const courseLibrary = buildCourseLibrary();

/**
 * 导出分类课程
 */
export {
  commonCourses,
  computerScienceCourses,
  managementCourses,
  mathCourses,
};
