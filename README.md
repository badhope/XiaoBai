# 学科分类与课程共享系统

## 📚 项目简介

基于中国高等教育专业目录设计的学科分类与课程共享系统，专为现代大学生群体打造。系统采用**课程与专业分离**的设计，支持**课程共享机制**，同一门课程可以被多个专业引用，点击课程即可查看，避免重复维护。

## ✨ 核心特性

### 1. 课程共享机制 🎯
- **独立课程库**：所有课程存储在独立的课程库中
- **引用而非复制**：专业通过课程 ID 引用课程，而非复制课程数据
- **自动关联**：点击课程可查看被哪些专业共享
- **数据一致性**：课程更新后，所有引用的专业自动同步

### 2. 层级化分类体系 🏗️
```
学科大类 (Category)
  └── 专业方向 (Subcategory)
      └── 课程 ID 列表 (Course IDs) → 引用课程库
```

### 3. 完整的数据结构 📊
- **学科大类**：计算机、管理学、数学等
- **专业方向**：计算机科学与技术、软件工程、人工智能等
- **独立课程**：数据结构、算法、机器学习等

### 4. 丰富的工具函数 🛠️
- 学科分类查询
- 课程搜索与筛选
- 课程关联查询
- 学习路径规划
- 数据统计分析

## 📁 项目结构

```
src/
├── types/
│   └── subject.ts           # 类型定义
├── content/
│   ├── courses/
│   │   └── index.ts         # 课程库数据
│   └── subjects/
│       └── index.ts         # 学科分类数据
├── lib/
│   └── subject-utils.ts     # 工具函数
├── examples/
│   ├── usage-example.ts     # 使用示例
│   └── course-sharing-example.ts  # 课程共享示例
└── index.ts                 # 统一导出
```

## 🎓 数据结构设计

### 核心概念

#### Course（课程）
独立的课程实体，包含完整的课程信息：
```typescript
interface Course {
  id: string;              // 课程唯一标识
  name: string;            // 课程名称
  code?: string;           // 课程代码
  description: string;     // 详细描述
  summary?: string;        // 简介
  estimatedHours?: number; // 学时
  credits?: number;        // 学分
  recommendedSemester?: number; // 推荐学期
  tags?: string[];         // 标签
  prerequisites?: string[];// 先修课程 ID
  categories?: string[];   // 所属学科领域
  articles: ArticleInfo[]; // 文章列表
}
```

#### SubjectCategory（学科大类）
一级分类，对应学科门类：
```typescript
interface SubjectCategory {
  id: string;
  name: string;
  code?: string;           // 专业目录代码
  description: string;
  icon?: string;
  tags?: string[];
  children: SubjectSubcategory[];
}
```

#### SubjectSubcategory（专业方向）
二级分类，通过 `courseIds` 引用课程：
```typescript
interface SubjectSubcategory {
  id: string;
  name: string;
  code?: string;
  description: string;
  parentId: string;
  courseIds: string[];     // 引用的课程 ID 列表
}
```

## 📊 示例数据

### 三大学科大类

#### 1. 计算机大类（0809）
**专业方向：**
- 计算机科学与技术（8 门课程）
- 软件工程（8 门课程）
- 人工智能（8 门课程）

**共享课程示例：**
- `数据结构`：被 3 个专业共享
- `算法分析与设计`：被 3 个专业共享
- `程序设计基础`：被 3 个专业共享

#### 2. 管理学大类（12）
**专业方向：**
- 管理科学与工程（5 门课程）
- 工商管理（6 门课程）
- 公共管理（3 门课程）

**共享课程示例：**
- `管理学原理`：被 3 个专业共享
- `微观经济学`：被 3 个专业共享
- `宏观经济学`：被 3 个专业共享

#### 3. 数学大类（0701）
**专业方向：**
- 数学与应用数学（5 门课程）
- 信息与计算科学（6 门课程）
- 应用统计学（4 门课程）

**跨大类共享示例：**
- `数据结构`：被计算机和信计专业共享
- `算法分析与设计`：被计算机和信计专业共享

### 数据统计

```
学科大类：3 个
专业方向：9 个
总课程数：28 门
共享课程：15 门（被 2 个及以上专业共享）
独有课程：13 门
总学时：1,400+ 小时
总学分：90+ 学分
```

## 🛠️ 工具函数

### 学科分类查询

```typescript
// 获取所有大类
getAllCategories(subjectTree)

// 根据 ID 获取
getById(subjectTree, id)

// 获取大类的专业方向
getSubcategoriesByCategory(subjectTree, categoryId)

// 获取专业的课程 ID 列表
getCourseIdsBySubcategory(subjectTree, subcategoryId)
```

### 课程库查询

```typescript
// 获取所有课程
getAllCourses(courseLibrary)

// 根据 ID 获取课程
getCourseById(courseLibrary, courseId)

// 搜索课程
searchCourses(courseLibrary, keyword)

// 根据标签筛选
getCoursesByTag(courseLibrary, tag)
```

### 课程共享相关

```typescript
// 获取专业的所有课程详情
getCoursesBySubcategory(system, subcategoryId)

// 获取课程被哪些专业引用
getCourseRelations(system, courseId)

// 获取所有共享课程
getSharedCourses(system, minRefCount)

// 获取专业的独有课程
getExclusiveCourses(system, subcategoryId)

// 综合搜索（分类 + 专业 + 课程）
searchAll(system, keyword)
```

### 统计与分析

```typescript
// 系统统计
getSystemStatistics(system)

// 大类统计
getCategoryStatistics(system, categoryId)

// 专业统计
getSubcategoryStatistics(system, subcategoryId)
```

### 学习路径

```typescript
// 获取课程的学习路径（基于先修关系）
getLearningPath(library, courseId)

// 获取专业的推荐学习顺序
getRecommendedLearningOrder(system, subcategoryId)
```

### 数据验证

```typescript
// 验证课程引用是否有效
validateCourseReferences(system)
```

## 💡 使用示例

### 导入系统

```typescript
import {
  completeSystem,
  getCoursesBySubcategory,
  getCourseRelations,
  getSharedCourses,
} from './index';
```

### 示例 1：查看课程被哪些专业共享

```typescript
const relations = getCourseRelations(completeSystem, 'course-ds-001');
console.log(`数据结构被 ${relations.subjects.length} 个专业引用:`);
relations.subjects.forEach(subj => {
  console.log(`  - ${subj.categoryName} > ${subj.subcategoryName}`);
});
```

**输出：**
```
数据结构被 3 个专业引用:
  - 计算机大类 > 计算机科学与技术
  - 计算机大类 > 软件工程
  - 数学大类 > 信息与计算科学
```

### 示例 2：获取专业的所有课程

```typescript
const courses = getCoursesBySubcategory(completeSystem, 'cs-0809-01');
console.log('计算机科学与技术专业课程:');
courses.forEach(course => {
  console.log(`  ${course.name} (${course.credits}学分)`);
});
```

### 示例 3：搜索功能

```typescript
const results = searchAll(completeSystem, '机器学习');
results.forEach(result => {
  if (result.type === 'course') {
    console.log(`找到课程：${result.data.name}`);
  }
});
```

### 示例 4：查看共享课程统计

```typescript
const stats = getSystemStatistics(completeSystem);
console.log(`共享课程：${stats.sharedCourses}门`);
console.log(`独有课程：${stats.exclusiveCourses}门`);
```

## 🎯 课程共享的优势

### 1. 数据一致性
- 课程内容只在一处维护
- 修改后所有引用的专业自动更新
- 避免数据冗余和不一致

### 2. 灵活扩展
- 新增专业时直接引用现有课程
- 新增课程后添加到相关专业的 courseIds
- 无需复制课程数据

### 3. 高效查询
- 通过索引快速查找课程
- 查询课程被哪些专业引用
- 统计共享课程和独有课程

### 4. 清晰关联
- 明确展示课程与专业的关系
- 支持跨专业对比
- 便于学生选课和规划

## 📝 扩展指南

### 添加新课程

1. 在 `src/content/courses/index.ts` 中添加课程：

```typescript
{
  id: 'course-new-001',
  name: '新课程名称',
  code: 'NEW001',
  summary: '课程简介',
  description: '详细描述...',
  estimatedHours: 48,
  credits: 3,
  recommendedSemester: 4,
  tags: ['标签 1', '标签 2'],
  categories: ['领域 1', '领域 2'],
  prerequisites: ['course-prereq-001'],
  articles: [],
  metadata: {
    referencedByCount: 0,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
}
```

### 添加新专业

1. 在 `src/content/subjects/index.ts` 中添加专业：

```typescript
{
  id: 'cs-0809-04',
  name: '新专业名称',
  code: '080904',
  description: '专业描述...',
  parentId: 'cs-0809',
  courseIds: [
    'course-prog-001',  // 引用已有课程
    'course-new-001',   // 引用新增课程
  ],
  metadata: {
    articleCount: 0,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
}
```

## ✅ 专业目录代码规范

遵循《普通高等学校本科专业目录（2020 年版）》：

- **学科门类**：2 位数字（如 08、12、07）
- **专业类**：4 位数字（如 0809、1201）
- **专业**：6 位数字（如 080901、120201K）
  - 末尾 K：国家控制布点专业
  - 末尾 T：特设专业

## 🔍 使用场景

### 1. 学生选课指导
- 查看本专业的所有课程
- 了解课程的先修关系
- 规划学习路径

### 2. 跨专业对比
- 对比不同专业的课程设置
- 了解共同课程和差异课程
- 辅助双学位/辅修决策

### 3. 教学资源管理
- 统一管理课程资源
- 避免重复建设
- 提高资源利用率

### 4. 学习路径规划
- 基于先修关系生成学习顺序
- 推荐课程学习顺序
- 可视化知识图谱

## 🚀 后续开发

1. **更多学科** - 添加经济学、法学、教育学等
2. **课程内容** - 为每门课程添加详细教程
3. **可视化** - 课程关系图谱、知识地图
4. **个性化推荐** - 基于兴趣推荐课程
5. **学习追踪** - 记录学习进度和完成情况
6. **社区功能** - 课程评价、学习心得分享

## 📖 参考依据

- 《普通高等学校本科专业目录（2020 年版）》
- 《学位授予和人才培养学科目录》
- 各高校专业培养方案

## 📄 License

MIT

---

**开发时间**: 2024
**目标用户**: 现代大学生
**核心理念**: 课程共享、数据复用、高效学习
