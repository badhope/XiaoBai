# 学科分类系统

## 📚 项目简介

基于中国高等教育专业目录设计的学科分类系统，专为现代大学生群体打造。系统采用层级化分类结构，严格遵循国家高等教育专业目录规范，支持动态扩展与维护。

## 🎯 设计目标

1. **标准化** - 严格遵循《普通高等学校本科专业目录（2020 年版）》
2. **层级化** - 三级分类架构（学科大类 > 专业方向 > 具体科目）
3. **可扩展** - 支持动态添加新学科、新专业、新科目
4. **易维护** - 清晰的数据结构和完善的工具函数
5. **类型安全** - 完整的 TypeScript 类型定义

## 📁 项目结构

```
src/
├── types/
│   └── subject.ts           # 类型定义
├── content/
│   └── subjects/
│       └── index.ts         # 学科分类数据
├── lib/
│   └── subject-utils.ts     # 工具函数
├── examples/
│   └── usage-example.ts     # 使用示例
└── index.ts                 # 统一导出
```

## 🏗️ 数据结构

### 三级分类体系

```
学科大类 (SubjectCategory)
  └── 专业方向 (SubjectSubcategory)
      └── 具体科目 (SubjectItem)
```

### 核心类型

#### SubjectCategory - 学科大类（一级分类）
- `id`: 唯一标识
- `name`: 标准名称
- `code`: 专业目录代码（如 0809）
- `description`: 说明
- `icon`: 图标
- `tags`: 标签
- `difficulty`: 难度等级
- `children`: 二级分类列表

#### SubjectSubcategory - 专业方向（二级分类）
- `id`: 唯一标识
- `name`: 标准名称
- `code`: 专业目录代码（如 080901）
- `description`: 说明
- `parentId`: 所属大类 ID
- `children`: 具体科目列表

#### SubjectItem - 具体科目（三级分类）
- `id`: 唯一标识
- `name`: 科目名称
- `code`: 科目代码
- `description`: 科目描述
- `parentId`: 所属二级分类 ID
- `categoryId`: 所属大类 ID
- `estimatedHours`: 预估学时
- `credits`: 学分
- `recommendedSemester`: 推荐学期
- `prerequisites`: 先修科目
- `tags`: 标签
- `articles`: 文章列表

## 📊 示例数据

### 已实现的学科大类

1. **计算机大类（0809）**
   - 计算机科学与技术
   - 软件工程
   - 人工智能

2. **管理学大类（12）**
   - 管理科学与工程
   - 工商管理
   - 公共管理

3. **数学大类（0701）**
   - 数学与应用数学
   - 信息与计算科学
   - 应用统计学

### 数据规模

- **学科大类**: 3 个
- **专业方向**: 9 个
- **具体科目**: 42 个
- **覆盖领域**: 工科、理科、管理学

## 🔧 工具函数

### 基础查询

```typescript
// 获取所有大类
getAllCategories(tree)

// 根据 ID 获取
getById(tree, id)

// 根据代码获取
getByCode(tree, code)
```

### 层级查询

```typescript
// 获取大类的专业方向
getSubcategoriesByCategory(tree, categoryId)

// 获取专业方向的科目
getItemsBySubcategory(tree, subcategoryId)

// 获取大类的所有科目
getAllItemsByCategory(tree, categoryId)

// 获取所有科目
getAllItems(tree)
```

### 搜索与筛选

```typescript
// 搜索
search(tree, keyword)

// 标签筛选
filterByTag(tree, tag)

// 难度筛选
filterByDifficulty(tree, difficulty)

// 获取所有标签
getAllTags(tree)
```

### 路径与顺序

```typescript
// 获取科目完整路径
getItemPath(tree, itemId)

// 推荐学习顺序
getRecommendedOrder(items)
```

### 统计与验证

```typescript
// 统计信息
getStatistics(tree)

// 数据验证
validateTree(tree)
```

## 💡 使用示例

### 导入

```typescript
import {
  subjectTree,
  getAllCategories,
  search,
  getStatistics,
} from './index';
```

### 遍历所有大类

```typescript
const categories = getAllCategories(subjectTree);
categories.forEach(cat => {
  console.log(cat.name, cat.icon);
});
```

### 搜索科目

```typescript
const results = search(subjectTree, '机器学习');
results.forEach(result => {
  if (result.type === 'item') {
    console.log(result.data.name);
  }
});
```

### 获取统计信息

```typescript
const stats = getStatistics(subjectTree);
console.log(`科目总数：${stats.totalItems}`);
console.log(`总学时：${stats.totalEstimatedHours}h`);
```

## 📝 扩展指南

### 添加新学科大类

1. 在 `src/content/subjects/index.ts` 中创建新的 `SubjectCategory`
2. 按照专业目录规范设置 `code`
3. 添加二级分类和三级分类
4. 将新大类添加到 `subjectTree.categories`

### 添加新科目

1. 找到对应的专业方向（二级分类）
2. 在 `children` 数组中添加新的 `SubjectItem`
3. 设置必要的属性（id, name, code, description 等）
4. 可选：设置先修关系 `prerequisites`

### 代码示例

```typescript
const newCategory: SubjectCategory = {
  id: 'new-xxx',
  name: '新学科大类',
  code: 'xxx',
  description: '描述...',
  icon: '🎯',
  tags: ['标签 1', '标签 2'],
  difficulty: 'intermediate',
  metadata: {
    articleCount: 0,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
  children: [
    {
      id: 'new-xxx-01',
      name: '新专业方向',
      code: 'xxx01',
      description: '描述...',
      parentId: 'new-xxx',
      metadata: {
        articleCount: 0,
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
      },
      children: [
        {
          id: 'new-xxx-01-001',
          name: '新科目',
          code: 'xxx01-001',
          description: '描述...',
          parentId: 'new-xxx-01',
          categoryId: 'new-xxx',
          estimatedHours: 48,
          credits: 3,
          recommendedSemester: 3,
          tags: ['必修', '核心'],
          articles: [],
        },
      ],
    },
  ],
};
```

## 🔍 专业目录代码规范

### 代码格式

- **学科门类**: 2 位数字（如 12）
- **专业类**: 4 位数字（如 1202）
- **专业**: 6 位数字（如 120201K）
  - 末尾 K 表示国家控制布点专业
  - 末尾 T 表示特设专业

### 示例

```
08        - 工学门类
0809      - 计算机类
080901    - 计算机科学与技术
080902    - 软件工程
080910T   - 人工智能（特设专业）

12        - 管理学门类
1201      - 管理科学与工程类
1202      - 工商管理类
120201K   - 工商管理（国控专业）

07        - 理学门类
0701      - 数学类
070101    - 数学与应用数学
070102    - 信息与计算科学
```

## ✅ 数据验证

使用 `validateTree` 函数验证数据完整性：

```typescript
const validation = validateTree(subjectTree);
if (!validation.valid) {
  console.error('数据问题:', validation.errors);
}
```

验证内容包括：
- ID 完整性
- 父子关系一致性
- 必要字段检查

## 📖 参考依据

- 《普通高等学校本科专业目录（2020 年版）》
- 《学位授予和人才培养学科目录》
- 教育部相关专业备案和审批结果

## 🚀 后续开发

1. **更多学科** - 添加经济学、法学、教育学等大类
2. **内容填充** - 为每个科目添加详细教程文章
3. **学习路径** - 基于先修关系生成个性化学习路径
4. **进度追踪** - 记录学习进度和完成情况
5. **搜索优化** - 实现更智能的全文搜索
6. **可视化** - 学科关系图谱可视化

## 📄 License

MIT
