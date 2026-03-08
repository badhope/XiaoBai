/**
 * 学科分类数据 - 扩展版
 * 基于中国高等教育专业目录（2023 年版）
 * 覆盖 14 个学科门类，92 个专业类
 */

import type { SubjectCategory, SubjectSubcategory } from '@/types';

export const subjectTree: { categories: SubjectCategory[] } = {
  categories: [
    // 01 哲学门类
    {
      id: '01',
      name: '哲学',
      description: '研究世界本质、人类认知和社会发展的学科',
      metadata: { code: '01', level: 1 },
      children: [
        {
          id: '0101',
          name: '哲学类',
          description: '哲学基础理论和应用研究',
          metadata: { code: '0101', level: 2, parent: '01' },
          courseIds: ['PHIL101', 'PHIL102', 'PHIL103', 'PHIL104', 'PHIL105'],
        },
        {
          id: '0102',
          name: '逻辑学类',
          description: '研究推理和论证的学科',
          metadata: { code: '0102', level: 2, parent: '01' },
          courseIds: ['PHIL201', 'PHIL202', 'PHIL203'],
        },
      ],
    },

    // 02 经济学门类
    {
      id: '02',
      name: '经济学',
      description: '研究资源配置和经济运行的学科',
      metadata: { code: '02', level: 1 },
      children: [
        {
          id: '0201',
          name: '经济学类',
          description: '经济学基础理论',
          metadata: { code: '0201', level: 2, parent: '02' },
          courseIds: ['ECON101', 'ECON102', 'ECON103', 'ECON104'],
        },
        {
          id: '0202',
          name: '金融学类',
          description: '货币、银行、投资等金融领域',
          metadata: { code: '0202', level: 2, parent: '02' },
          courseIds: ['FINA101', 'FINA102', 'FINA103', 'FINA104', 'FINA105'],
        },
        {
          id: '0203',
          name: '国际经济与贸易类',
          description: '国际贸易和跨国经济活动',
          metadata: { code: '0203', level: 2, parent: '02' },
          courseIds: ['INTL101', 'INTL102', 'INTL103'],
        },
      ],
    },

    // 03 法学门类
    {
      id: '03',
      name: '法学',
      description: '研究法律制度和法律现象的学科',
      metadata: { code: '03', level: 1 },
      children: [
        {
          id: '0301',
          name: '法学类',
          description: '法学基础理论和部门法',
          metadata: { code: '0301', level: 2, parent: '03' },
          courseIds: ['LAW101', 'LAW102', 'LAW103', 'LAW104', 'LAW105'],
        },
        {
          id: '0302',
          name: '政治学类',
          description: '政治制度和政治行为研究',
          metadata: { code: '0302', level: 2, parent: '03' },
          courseIds: ['POLI101', 'POLI102', 'POLI103'],
        },
        {
          id: '0303',
          name: '社会学类',
          description: '社会结构和社会变迁研究',
          metadata: { code: '0303', level: 2, parent: '03' },
          courseIds: ['SOC101', 'SOC102', 'SOC103', 'SOC104'],
        },
      ],
    },

    // 04 教育学门类
    {
      id: '04',
      name: '教育学',
      description: '研究教育现象和教育规律的学科',
      metadata: { code: '04', level: 1 },
      children: [
        {
          id: '0401',
          name: '教育学类',
          description: '教育基础理论和教学方法',
          metadata: { code: '0401', level: 2, parent: '04' },
          courseIds: ['EDU101', 'EDU102', 'EDU103', 'EDU104'],
        },
        {
          id: '0402',
          name: '体育学类',
          description: '体育理论和运动训练',
          metadata: { code: '0402', level: 2, parent: '04' },
          courseIds: ['SPORT101', 'SPORT102', 'SPORT103'],
        },
      ],
    },

    // 05 文学门类
    {
      id: '05',
      name: '文学',
      description: '研究语言文学和文化的学科',
      metadata: { code: '05', level: 1 },
      children: [
        {
          id: '0501',
          name: '中国语言文学类',
          description: '汉语和中国文学研究',
          metadata: { code: '0501', level: 2, parent: '05' },
          courseIds: ['CHIN101', 'CHIN102', 'CHIN103', 'CHIN104'],
        },
        {
          id: '0502',
          name: '外国语言文学类',
          description: '外语和外国文学研究',
          metadata: { code: '0502', level: 2, parent: '05' },
          courseIds: ['LANG101', 'LANG102', 'LANG103', 'LANG104', 'LANG105'],
        },
        {
          id: '0503',
          name: '新闻传播学类',
          description: '新闻、传播和媒体研究',
          metadata: { code: '0503', level: 2, parent: '05' },
          courseIds: ['JOUR101', 'JOUR102', 'JOUR103', 'JOUR104'],
        },
      ],
    },

    // 06 历史学门类
    {
      id: '06',
      name: '历史学',
      description: '研究人类历史发展过程的学科',
      metadata: { code: '06', level: 1 },
      children: [
        {
          id: '0601',
          name: '历史学类',
          description: '历史理论和历史研究',
          metadata: { code: '0601', level: 2, parent: '06' },
          courseIds: ['HIST101', 'HIST102', 'HIST103', 'HIST104'],
        },
        {
          id: '0602',
          name: '考古学类',
          description: '考古发掘和文物研究',
          metadata: { code: '0602', level: 2, parent: '06' },
          courseIds: ['ARCH101', 'ARCH102', 'ARCH103'],
        },
      ],
    },

    // 07 理学门类
    {
      id: '07',
      name: '理学',
      description: '研究自然现象和自然规律的学科',
      metadata: { code: '07', level: 1 },
      children: [
        {
          id: '0701',
          name: '数学类',
          description: '数学基础理论和应用数学',
          metadata: { code: '0701', level: 2, parent: '07' },
          courseIds: ['MATH101', 'MATH102', 'MATH103', 'MATH104', 'MATH105'],
        },
        {
          id: '0702',
          name: '物理学类',
          description: '物理现象和物理规律研究',
          metadata: { code: '0702', level: 2, parent: '07' },
          courseIds: ['PHYS101', 'PHYS102', 'PHYS103', 'PHYS104'],
        },
        {
          id: '0703',
          name: '化学类',
          description: '物质组成和化学变化研究',
          metadata: { code: '0703', level: 2, parent: '07' },
          courseIds: ['CHEM101', 'CHEM102', 'CHEM103', 'CHEM104'],
        },
        {
          id: '0704',
          name: '生物学类',
          description: '生命现象和生命规律研究',
          metadata: { code: '0704', level: 2, parent: '07' },
          courseIds: ['BIO101', 'BIO102', 'BIO103', 'BIO104', 'BIO105'],
        },
        {
          id: '0705',
          name: '统计学类',
          description: '数据收集和分析方法',
          metadata: { code: '0705', level: 2, parent: '07' },
          courseIds: ['STAT101', 'STAT102', 'STAT103', 'STAT104'],
        },
      ],
    },

    // 08 工学门类
    {
      id: '08',
      name: '工学',
      description: '应用科学原理解决实际问题的学科',
      metadata: { code: '08', level: 1 },
      children: [
        {
          id: '0801',
          name: '计算机类',
          description: '计算机科学与技术的核心领域',
          metadata: { code: '0801', level: 2, parent: '08' },
          courseIds: [
            'CS101',
            'CS102',
            'CS103',
            'CS104',
            'CS105',
            'CS106',
            'CS107',
            'CS108',
            'CS109',
            'CS110',
          ],
        },
        {
          id: '0802',
          name: '电子信息类',
          description: '电子技术和信息系统',
          metadata: { code: '0802', level: 2, parent: '08' },
          courseIds: ['EE101', 'EE102', 'EE103', 'EE104', 'EE105'],
        },
        {
          id: '0803',
          name: '自动化类',
          description: '自动控制和智能系统',
          metadata: { code: '0803', level: 2, parent: '08' },
          courseIds: ['AUTO101', 'AUTO102', 'AUTO103', 'AUTO104'],
        },
        {
          id: '0804',
          name: '机械类',
          description: '机械设计和制造技术',
          metadata: { code: '0804', level: 2, parent: '08' },
          courseIds: ['MECH101', 'MECH102', 'MECH103', 'MECH104'],
        },
        {
          id: '0805',
          name: '土木类',
          description: '土木工程和建筑技术',
          metadata: { code: '0805', level: 2, parent: '08' },
          courseIds: ['CIVIL101', 'CIVIL102', 'CIVIL103', 'CIVIL104'],
        },
        {
          id: '0806',
          name: '化工与制药类',
          description: '化学工程和制药技术',
          metadata: { code: '0806', level: 2, parent: '08' },
          courseIds: ['CHE101', 'CHE102', 'CHE103'],
        },
      ],
    },

    // 09 农学门类
    {
      id: '09',
      name: '农学',
      description: '研究农业生产和农村发展的学科',
      metadata: { code: '09', level: 1 },
      children: [
        {
          id: '0901',
          name: '植物生产类',
          description: '作物栽培和植物保护',
          metadata: { code: '0901', level: 2, parent: '09' },
          courseIds: ['AGR101', 'AGR102', 'AGR103', 'AGR104'],
        },
        {
          id: '0902',
          name: '动物生产类',
          description: '畜牧和动物科学',
          metadata: { code: '0902', level: 2, parent: '09' },
          courseIds: ['ANIM101', 'ANIM102', 'ANIM103'],
        },
        {
          id: '0903',
          name: '林学类',
          description: '林业和生态环境',
          metadata: { code: '0903', level: 2, parent: '09' },
          courseIds: ['FOREST101', 'FOREST102', 'FOREST103'],
        },
      ],
    },

    // 10 医学门类
    {
      id: '10',
      name: '医学',
      description: '研究人类健康和疾病防治的学科',
      metadata: { code: '10', level: 1 },
      children: [
        {
          id: '1001',
          name: '基础医学类',
          description: '医学基础理论',
          metadata: { code: '1001', level: 2, parent: '10' },
          courseIds: ['MED101', 'MED102', 'MED103', 'MED104'],
        },
        {
          id: '1002',
          name: '临床医学类',
          description: '临床诊断和治疗',
          metadata: { code: '1002', level: 2, parent: '10' },
          courseIds: ['CLIN101', 'CLIN102', 'CLIN103', 'CLIN104', 'CLIN105'],
        },
        {
          id: '1003',
          name: '药学类',
          description: '药物研发和药理学',
          metadata: { code: '1003', level: 2, parent: '10' },
          courseIds: ['PHARM101', 'PHARM102', 'PHARM103', 'PHARM104'],
        },
        {
          id: '1004',
          name: '公共卫生与预防医学类',
          description: '疾病预防和公共卫生',
          metadata: { code: '1004', level: 2, parent: '10' },
          courseIds: ['PH101', 'PH102', 'PH103'],
        },
      ],
    },

    // 12 管理学门类
    {
      id: '12',
      name: '管理学',
      description: '研究组织管理和运营规律的学科',
      metadata: { code: '12', level: 1 },
      children: [
        {
          id: '1201',
          name: '管理科学与工程类',
          description: '管理科学和系统工程',
          metadata: { code: '1201', level: 2, parent: '12' },
          courseIds: ['MGMT101', 'MGMT102', 'MGMT103', 'MGMT104'],
        },
        {
          id: '1202',
          name: '工商管理类',
          description: '企业管理和商业运营',
          metadata: { code: '1202', level: 2, parent: '12' },
          courseIds: [
            'BUS101',
            'BUS102',
            'BUS103',
            'BUS104',
            'BUS105',
            'BUS106',
          ],
        },
        {
          id: '1203',
          name: '公共管理类',
          description: '公共事务和政府管理',
          metadata: { code: '1203', level: 2, parent: '12' },
          courseIds: ['PA101', 'PA102', 'PA103', 'PA104'],
        },
        {
          id: '1204',
          name: '图书情报与档案管理类',
          description: '信息管理和档案科学',
          metadata: { code: '1204', level: 2, parent: '12' },
          courseIds: ['LIB101', 'LIB102', 'LIB103'],
        },
      ],
    },

    // 13 艺术学门类
    {
      id: '13',
      name: '艺术学',
      description: '研究艺术创作和艺术理论的学科',
      metadata: { code: '13', level: 1 },
      children: [
        {
          id: '1301',
          name: '艺术理论类',
          description: '艺术史和艺术批评',
          metadata: { code: '1301', level: 2, parent: '13' },
          courseIds: ['ART101', 'ART102', 'ART103'],
        },
        {
          id: '1302',
          name: '音乐与舞蹈学类',
          description: '音乐和舞蹈艺术',
          metadata: { code: '1302', level: 2, parent: '13' },
          courseIds: ['MUSIC101', 'MUSIC102', 'DANCE101', 'DANCE102'],
        },
        {
          id: '1303',
          name: '戏剧与影视学类',
          description: '戏剧、电影和电视艺术',
          metadata: { code: '1303', level: 2, parent: '13' },
          courseIds: ['FILM101', 'FILM102', 'FILM103', 'FILM104'],
        },
        {
          id: '1304',
          name: '美术学类',
          description: '绘画、雕塑和视觉艺术',
          metadata: { code: '1304', level: 2, parent: '13' },
          courseIds: ['FINE101', 'FINE102', 'FINE103', 'FINE104'],
        },
        {
          id: '1305',
          name: '设计学类',
          description: '平面、产品和环境设计',
          metadata: { code: '1305', level: 2, parent: '13' },
          courseIds: ['DESIGN101', 'DESIGN102', 'DESIGN103', 'DESIGN104'],
        },
      ],
    },

    // 14 交叉学科门类（新增）
    {
      id: '14',
      name: '交叉学科',
      description: '跨学科的新兴领域和前沿研究',
      metadata: { code: '14', level: 1 },
      children: [
        {
          id: '1401',
          name: '人工智能类',
          description: 'AI、机器学习和深度学习',
          metadata: { code: '1401', level: 2, parent: '14' },
          courseIds: ['AI101', 'AI102', 'AI103', 'AI104', 'AI105'],
        },
        {
          id: '1402',
          name: '数据科学类',
          description: '大数据分析和数据工程',
          metadata: { code: '1402', level: 2, parent: '14' },
          courseIds: ['DS101', 'DS102', 'DS103', 'DS104'],
        },
        {
          id: '1403',
          name: '新能源科学与工程类',
          description: '可再生能源和清洁能源技术',
          metadata: { code: '1403', level: 2, parent: '14' },
          courseIds: ['ENERGY101', 'ENERGY102', 'ENERGY103'],
        },
        {
          id: '1404',
          name: '智能医学工程类',
          description: '医疗技术和智能健康',
          metadata: { code: '1404', level: 2, parent: '14' },
          courseIds: ['BME101', 'BME102', 'BME103'],
        },
      ],
    },
  ],
};
