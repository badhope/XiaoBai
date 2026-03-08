# Xiaobai - 学科分类与课程共享系统 v2.0

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

**基于 Next.js 14 重构的现代化教育平台**

[特性](#-核心特性) • [快速开始](#-快速开始) • [项目结构](#-项目结构) • [文档](#-文档)

</div>

---

## 📚 项目简介

学科分类与课程共享系统是一个**全面覆盖中国高等教育专业目录**的现代化教育平台。系统采用**课程与专业分离**的设计，支持**课程共享机制**，同一门课程可以被多个专业引用，避免重复维护，提高资源利用效率。

### 🎯 目标用户
- **在校大学生**：了解专业课程设置，规划学习路径
- **教师**：参考其他院校课程安排，优化教学设计
- **教育管理者**：分析专业间课程关联，优化资源配置
- **自学者**：系统学习某个专业的核心课程

## ✨ 核心特性

### 1. 全面学科覆盖 🌐
基于**2023 年版中国高等教育专业目录**，覆盖：
- **14** 个学科门类
- **92** 个专业类
- **150+** 门核心课程
- **8000+** 小时学习时长

**涵盖学科**:
哲学 • 经济学 • 法学 • 教育学 • 文学 • 历史学 • 理学 • 工学 • 农学 • 医学 • 管理学 • 艺术学 • **交叉学科**

### 2. 课程共享机制 🔄
- **独立课程库**：所有课程存储在独立的课程库中
- **引用而非复制**：专业通过课程 ID 引用课程
- **自动关联**：点击课程即可查看被哪些专业共享
- **版本管理**：支持课程版本更新和追踪
- **数据一致性**：课程更新后，所有引用的专业自动同步

### 3. 现代化技术栈 🚀
- **Next.js 14 App Router** - 服务端渲染 + 静态生成
- **TypeScript 5** - 完全类型安全
- **Tailwind CSS 3** - 原子化 CSS
- **Framer Motion 10** - 流畅动画
- **SEO 友好** - 内置优化

### 4. 科学学习路径 �
- **先修关系网络**：清晰的课程依赖关系
- **推荐学期**：基于难度和先修关系的学期安排
- **难度分级**：入门/中级/高级
- **学分认证**：统一学分标准

### 5. 沉浸式用户体验 🎨
- **卡片式设计**：清晰的信息层级
- **流畅动画**：自然的交互反馈
- **响应式布局**：完美适配各种设备
- **暗黑模式**：护眼阅读体验

## 📊 数据统计

```
┌─────────────────────────────────────┐
│  学科门类：14 个                    │
│  专业类：92 个                      │
│  核心课程：150+ 门                  │
│  总学时：8000+ 小时                 │
│  总学分：500+ 学分                  │
│  共享课程：80+ 门                   │
│  独有课程：70+ 门                   │
└─────────────────────────────────────┘
```

## 🚀 快速开始

### 环境要求
- Node.js 18+ 
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本
```bash
npm run build
npm run start
```

## 📁 项目结构

```
Xiaobai/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # 根布局
│   │   ├── page.tsx           # 主页
│   │   ├── globals.css        # 全局样式
│   │   └── [routes]/          # 页面路由
│   │
│   ├── data/                   # 数据层
│   │   ├── subjects.ts        # 学科分类数据
│   │   └── courses.ts         # 课程数据
│   │
│   ├── features/               # 功能模块（按功能域组织）
│   │   ├── subjects/          # 学科相关
│   │   ├── courses/           # 课程相关
│   │   └── search/            # 搜索相关
│   │
│   ├── lib/                    # 工具函数（模块化）
│   │   ├── category-utils.ts  # 分类工具
│   │   └── course-utils.ts    # 课程工具
│   │
│   └── types/                  # 类型定义
│       └── index.ts           # TypeScript 类型
│
├── public/                     # 静态资源
├── next.config.js             # Next.js 配置
├── tailwind.config.ts         # Tailwind 配置
├── tsconfig.json              # TypeScript 配置
└── package.json               # 项目依赖
```

## 🎓 数据结构设计

### 核心概念

#### Course（课程）
```typescript
interface Course {
  id: string;                  // 课程唯一标识
  code: string;                // 课程代码
  name: string;                // 课程名称
  description: string;         // 详细描述
  summary?: string;            // 简介
  estimatedHours: number;      // 学时
  credits: number;             // 学分
  prerequisites?: string[];    // 先修课程 ID
  corequisites?: string[];     // 同修课程
  recommendedSemester?: 1|2|3|4|5|6|7|8;
  difficulty?: 'beginner'|'intermediate'|'advanced';
  tags: string[];              // 标签
  categories: string[];        // 所属领域
  version?: string;            // 版本号
  lastUpdated?: string;        // 最后更新
}
```

#### SubjectCategory（学科门类）
```typescript
interface SubjectCategory {
  id: string;                  // 门类 ID（如 '08'）
  name: string;                // 门类名称（如 '工学'）
  description: string;         // 描述
  metadata: {
    code?: string;             // 专业目录代码
    level: number;             // 层级（1=门类）
    parent?: string;           // 父级 ID
  };
  children?: SubjectSubcategory[];
}
```

#### SubjectSubcategory（专业类）
```typescript
interface SubjectSubcategory {
  id: string;                  // 专业类 ID（如 '0809'）
  name: string;                // 专业类名称（如 '计算机类'）
  description: string;         // 描述
  metadata: {
    code?: string;             // 专业目录代码
    level: number;             // 层级（2=专业类）
    parent?: string;           // 父级 ID
  };
  courseIds: string[];         // 引用的课程 ID 列表
}
```

## 🛠️ 工具函数

### 学科分类查询
```typescript
import { getAllCategories, getCategoryById } from '@/lib/category-utils';

// 获取所有门类
const categories = getAllCategories(subjectTree);

// 根据 ID 获取
const category = getCategoryById(subjectTree, '08');
```

### 课程查询
```typescript
import { getCourseById, searchCourses } from '@/lib/course-utils';

// 获取课程
const course = getCourseById(courseLibrary, 'CS101');

// 搜索课程
const results = searchCourses(courseLibrary, '人工智能');
```

### 课程共享查询
```typescript
// 获取课程被哪些专业引用
const relations = getCourseRelations(system, 'CS103');
console.log(`数据结构被 ${relations.subjects.length} 个专业引用`);

// 获取所有共享课程
const shared = getSharedCourses(system, 2); // 至少被 2 个专业引用

// 获取专业的独有课程
const exclusive = getExclusiveCourses(system, '080901');
```

## � 使用示例

### 示例 1：查看课程共享情况
```typescript
import { getCourseRelations } from '@/lib/course-utils';

const relations = getCourseRelations(system, 'CS103');
console.log(`${relations.courseName} 被以下专业引用:`);
relations.subjects.forEach(subj => {
  console.log(`  - ${subj.categoryName} > ${subj.subcategoryName}`);
});
```

**输出:**
```
数据结构 被以下专业引用:
  - 工学 > 计算机类
  - 工学 > 电子信息类
  - 理学 > 数学类
```

### 示例 2：获取专业所有课程
```typescript
import { getCoursesBySubcategory } from '@/lib/course-utils';

const courses = getCoursesBySubcategory(system, '080901');
console.log('计算机科学与技术专业课程:');
courses.forEach(course => {
  console.log(`  ${course.name} (${course.credits}学分，${course.difficulty})`);
});
```

### 示例 3：搜索功能
```typescript
import { searchAll } from '@/lib/search-utils';

const results = searchAll(system, '机器学习');
results.forEach(result => {
  console.log(`[${result.type}] ${result.data.name}`);
});
```

## 🎯 课程共享的优势

### 1. 数据一致性 ✅
- 课程内容只在一处维护
- 修改后所有引用的专业自动更新
- 避免数据冗余和不一致

### 2. 灵活扩展 🔧
- 新增专业时直接引用现有课程
- 新增课程后添加到相关专业的 courseIds
- 无需复制课程数据

### 3. 高效查询 ⚡
- 通过索引快速查找课程
- 查询课程被哪些专业引用
- 统计共享课程和独有课程

### 4. 清晰关联 🔗
- 明确展示课程与专业的关系
- 支持跨专业对比
- 便于学生选课和规划

## 📝 扩展指南

### 添加新课程

1. 在 `src/data/courses.ts` 中添加课程数据:
```typescript
{
  id: 'CS111',
  code: 'CS111',
  name: '量子计算导论',
  description: '量子计算基础理论和算法',
  estimatedHours: 48,
  credits: 3,
  recommendedSemester: 6,
  difficulty: 'advanced',
  tags: ['量子计算', '前沿', '物理'],
  categories: ['计算机', '物理'],
  version: '2024.1',
}
```

2. 在相关专业的 `courseIds` 中添加课程 ID。

### 添加新专业类

1. 在 `src/data/subjects.ts` 中添加专业类:
```typescript
{
  id: '1405',
  name: '量子信息科学类',
  description: '量子信息和量子计算',
  metadata: { code: '1405', level: 2, parent: '14' },
  courseIds: ['CS111', 'PHYS111'],
}
```

## 📖 文档

- [重构报告](./REFACTOR_REPORT.md) - 详细重构过程和技术决策
- [重构总结](./REFACTOR_SUMMARY.md) - 快速了解重构成果
- [构建指南](./BUILD_GUIDE.md) - 构建和部署指南
- [测试计划](./TESTING_PLAN.md) - 功能测试计划

## � 开发命令

```bash
# 开发
npm run dev

# 构建
npm run build

# 生产启动
npm run start

# 代码检查
npm run lint
```

## 🌟 后续计划

### 近期 (本周)
- [ ] 学科列表页面
- [ ] 课程详情页面
- [ ] 搜索功能实现
- [ ] 错误处理优化

### 中期 (本月)
- [ ] 用户认证系统
- [ ] 学习进度跟踪
- [ ] 课程评价系统
- [ ] 移动端优化

### 长期 (下季度)
- [ ] PWA 支持
- [ ] 离线功能
- [ ] 国际化 (i18n)
- [ ] 数据分析平台

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

## 📄 License

MIT License

## 👥 致谢

感谢所有参与开发的贡献者！

---

<div align="center">

**版本**: 2.0.0  
**状态**: ✅ 核心完成，功能完善中  
**访问**: http://localhost:3000  
**最后更新**: 2026-03-08

</div>
