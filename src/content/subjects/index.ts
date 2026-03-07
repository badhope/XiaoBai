/**
 * 学科分类数据配置（优化版 - 引用课程库）
 * 基于中国高等教育专业目录设计
 * 参考：《普通高等学校本科专业目录（2020 年版）》
 */

import { SubjectCategory, SubjectTree } from '../../types/subject';

/**
 * 计算机大类（0809）
 * 包含计算机科学与技术、软件工程、网络空间安全等专业方向
 */
const computerScienceCategory: SubjectCategory = {
  id: 'cs-0809',
  name: '计算机大类',
  code: '0809',
  description: '涵盖计算机科学与技术、软件工程、网络空间安全、人工智能等方向，培养掌握计算机硬件、软件与应用的基本理论、知识和技能的高级专门人才',
  icon: '💻',
  tags: ['工科', '热门', '高薪'],
  difficulty: 'intermediate',
  metadata: {
    articleCount: 0,
    courseCount: 0,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
  children: [
    {
      id: 'cs-0809-01',
      name: '计算机科学与技术',
      code: '080901',
      description: '研究计算机的设计与制造，以及信息获取、表示、存储、处理、控制等的理论、原则、方法和技术',
      parentId: 'cs-0809',
      courseIds: [
        'course-prog-001',  // 程序设计基础
        'course-ds-001',    // 数据结构
        'course-algo-001',  // 算法分析与设计
        'course-ca-001',    // 计算机组成原理
        'course-os-001',    // 操作系统
        'course-cn-001',    // 计算机网络
        'course-db-001',    // 数据库系统
        'course-se-001',    // 软件工程导论
      ],
      metadata: {
        articleCount: 0,
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
      },
    },
    {
      id: 'cs-0809-02',
      name: '软件工程',
      code: '080902',
      description: '采用工程化的方法从事软件需求分析、设计、开发、测试、维护和管理，培养高素质软件工程人才',
      parentId: 'cs-0809',
      courseIds: [
        'course-prog-001',  // 程序设计基础
        'course-ds-001',    // 数据结构
        'course-algo-001',  // 算法分析与设计
        'course-ca-001',    // 计算机组成原理
        'course-os-001',    // 操作系统
        'course-se-001',    // 软件工程导论
        'course-db-001',    // 数据库系统
        'course-cn-001',    // 计算机网络
      ],
      metadata: {
        articleCount: 0,
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
      },
    },
    {
      id: 'cs-0809-03',
      name: '人工智能',
      code: '080910T',
      description: '研究智能现象的本质及用计算机模拟和实现智能的理论、方法和技术，培养人工智能领域的高级专门人才',
      parentId: 'cs-0809',
      courseIds: [
        'course-prog-001',  // 程序设计基础
        'course-ds-001',    // 数据结构
        'course-algo-001',  // 算法分析与设计
        'course-ml-001',    // 机器学习
        'course-dl-001',    // 深度学习
        'course-cv-001',    // 计算机视觉
        'course-nlp-001',   // 自然语言处理
        'course-prob-001',  // 概率论与数理统计
      ],
      metadata: {
        articleCount: 0,
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
      },
    },
  ],
};

/**
 * 管理学大类（12）
 * 包含工商管理、管理科学与工程、公共管理等专业方向
 */
const managementCategory: SubjectCategory = {
  id: 'mgmt-12',
  name: '管理学大类',
  code: '12',
  description: '研究人类管理活动的基本规律和一般方法，培养能在各类组织中从事管理工作的高级专门人才',
  icon: '📊',
  tags: ['经管', '实用', '就业广'],
  difficulty: 'beginner',
  metadata: {
    articleCount: 0,
    courseCount: 0,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
  children: [
    {
      id: 'mgmt-1201',
      name: '管理科学与工程',
      code: '1201',
      description: '研究人类管理活动的规律及应用，综合运用系统科学、管理科学、数学和经济学等方法解决管理问题',
      parentId: 'mgmt-12',
      courseIds: [
        'course-mgmt-001',  // 管理学原理
        'course-or-001',    // 运筹学
        'course-mis-001',   // 管理信息系统
        'course-micro-001', // 微观经济学
        'course-macro-001', // 宏观经济学
      ],
      metadata: {
        articleCount: 0,
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
      },
    },
    {
      id: 'mgmt-1202',
      name: '工商管理',
      code: '1202',
      description: '研究营利性组织经营活动规律以及企业管理的理论、方法与技术',
      parentId: 'mgmt-12',
      courseIds: [
        'course-mgmt-001',  // 管理学原理
        'course-micro-001', // 微观经济学
        'course-macro-001', // 宏观经济学
        'course-acct-001',  // 会计学原理
        'course-fm-001',    // 财务管理
        'course-mkt-001',   // 市场营销学
      ],
      metadata: {
        articleCount: 0,
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
      },
    },
    {
      id: 'mgmt-1204',
      name: '公共管理',
      code: '1204',
      description: '研究以政府为核心的公共组织如何有效管理公共事务、提供公共服务、实现公共利益',
      parentId: 'mgmt-12',
      courseIds: [
        'course-mgmt-001',  // 管理学原理
        'course-micro-001', // 微观经济学
        'course-macro-001', // 宏观经济学
      ],
      metadata: {
        articleCount: 0,
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
      },
    },
  ],
};

/**
 * 数学大类（0701）
 * 包含数学与应用数学、信息与计算科学等专业方向
 */
const mathematicsCategory: SubjectCategory = {
  id: 'math-0701',
  name: '数学大类',
  code: '0701',
  description: '研究数量关系和空间形式的科学，培养掌握数学科学的基本理论和方法，具有运用数学知识解决实际问题的能力',
  icon: '📐',
  tags: ['理科', '基础', '考研必备'],
  difficulty: 'advanced',
  metadata: {
    articleCount: 0,
    courseCount: 0,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
  children: [
    {
      id: 'math-0701-01',
      name: '数学与应用数学',
      code: '070101',
      description: '培养掌握数学科学的基本理论与基本方法，具有运用数学知识和使用计算机解决实际问题的能力',
      parentId: 'math-0701',
      courseIds: [
        'course-ma-001',    // 数学分析
        'course-la-001',    // 高等代数
        'course-geo-001',   // 解析几何
        'course-ode-001',   // 常微分方程
        'course-prob-001',  // 概率论与数理统计
      ],
      metadata: {
        articleCount: 0,
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
      },
    },
    {
      id: 'math-0701-02',
      name: '信息与计算科学',
      code: '070102',
      description: '培养具有良好的数学基础和数学思维能力，掌握信息科学和计算科学的基本理论和方法',
      parentId: 'math-0701',
      courseIds: [
        'course-ma-001',    // 数学分析
        'course-la-001',    // 高等代数
        'course-dm-001',    // 离散数学
        'course-na-001',    // 数值分析
        'course-ds-001',    // 数据结构（共享课程）
        'course-algo-001',  // 算法分析与设计（共享课程）
      ],
      metadata: {
        articleCount: 0,
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
      },
    },
    {
      id: 'math-0701-03',
      name: '应用统计学',
      code: '070103',
      description: '培养具有良好的数学与统计学基础，掌握统计学的基本理论和方法，能熟练运用统计分析软件',
      parentId: 'math-0701',
      courseIds: [
        'course-ma-001',    // 数学分析
        'course-la-001',    // 高等代数
        'course-prob-001',  // 概率论与数理统计
        'course-stat-001',  // 统计学原理
      ],
      metadata: {
        articleCount: 0,
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
      },
    },
  ],
};

/**
 * 导出完整的学科分类树
 */
export const subjectTree: SubjectTree = {
  categories: [computerScienceCategory, managementCategory, mathematicsCategory],
  index: {
    byId: {},
    byCode: {},
  },
};

// 构建索引
function buildIndex() {
  subjectTree.categories.forEach((category) => {
    // 索引一级分类
    subjectTree.index.byId[category.id] = category;
    if (category.code) {
      subjectTree.index.byCode[category.code] = category;
    }

    category.children.forEach((subcategory) => {
      // 索引二级分类
      subjectTree.index.byId[subcategory.id] = subcategory;
      if (subcategory.code) {
        subjectTree.index.byCode[subcategory.code] = subcategory;
      }
    });
  });
}

buildIndex();

export { computerScienceCategory, managementCategory, mathematicsCategory };
