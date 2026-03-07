/**
 * 学科分类系统类型定义（优化版 - 支持课程共享）
 * 基于中国高等教育专业目录设计
 */

/**
 * 独立课程（Course）
 * 课程是独立的教学内容单元，可以被多个专业共享
 */
export interface Course {
  /** 课程唯一标识 */
  id: string;
  /** 课程标准名称 */
  name: string;
  /** 课程代码（如有） */
  code?: string;
  /** 课程详细描述 */
  description: string;
  /** 课程简介（用于列表展示） */
  summary?: string;
  /** 预估学时（小时） */
  estimatedHours?: number;
  /** 学分 */
  credits?: number;
  /** 推荐学期 */
  recommendedSemester?: number;
  /** 课程难度 */
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  /** 课程标签 */
  tags?: string[];
  /** 先修课程 ID 列表 */
  prerequisites?: string[];
  /** 所属学科领域（用于分类） */
  categories?: string[];
  /** 文章/教程列表 */
  articles: ArticleInfo[];
  /** 元数据 */
  metadata: CourseMetadata;
}

/**
 * 课程元数据
 */
export interface CourseMetadata {
  /** 被多少个专业引用 */
  referencedByCount: number;
  /** 学习人数 */
  learnerCount?: number;
  /** 创建时间 */
  createdAt: string;
  /** 更新时间 */
  updatedAt: string;
}

/**
 * 学科门类（一级分类）
 * 对应高等教育专业目录的学科门类
 */
export interface SubjectCategory {
  /** 分类唯一标识 */
  id: string;
  /** 标准名称 */
  name: string;
  /** 专业目录代码（如适用） */
  code?: string;
  /** 简要说明 */
  description: string;
  /** 图标或封面图片 URL */
  icon?: string;
  /** 封面图片 URL */
  cover?: string;
  /** 难度等级 */
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  /** 标签 */
  tags?: string[];
  /** 二级分类列表 */
  children: SubjectSubcategory[];
  /** 元数据 */
  metadata: CategoryMetadata;
}

/**
 * 专业方向（二级分类）
 * 注意：这里只存储课程 ID 引用，不存储课程详情
 */
export interface SubjectSubcategory {
  /** 分类唯一标识 */
  id: string;
  /** 标准名称 */
  name: string;
  /** 专业目录代码（如适用） */
  code?: string;
  /** 简要说明 */
  description: string;
  /** 所属大类 ID */
  parentId: string;
  /** 课程 ID 列表（引用 Course 库中的课程） */
  courseIds: string[];
  /** 元数据 */
  metadata: CategoryMetadata;
}

/**
 * 文章信息
 */
export interface ArticleInfo {
  /** 文章 ID */
  id: string;
  /** 文章标题 */
  title: string;
  /** 文章路径 */
  path: string;
  /** 创建时间 */
  createdAt: string;
  /** 更新时间 */
  updatedAt: string;
  /** 作者 */
  author?: string;
  /** 标签 */
  tags?: string[];
}

/**
 * 分类元数据
 */
export interface CategoryMetadata {
  /** 文章总数 */
  articleCount: number;
  /** 子分类总数 */
  subcategoryCount?: number;
  /** 课程总数 */
  courseCount?: number;
  /** 学习人数 */
  learnerCount?: number;
  /** 创建时间 */
  createdAt: string;
  /** 更新时间 */
  updatedAt: string;
}

/**
 * 完整的学科分类体系
 */
export interface SubjectTree {
  /** 所有一级分类 */
  categories: SubjectCategory[];
  /** 快速索引映射 */
  index: {
    byId: Record<string, SubjectCategory | SubjectSubcategory>;
    byCode: Record<string, SubjectCategory | SubjectSubcategory>;
  };
}

/**
 * 完整的课程库
 */
export interface CourseLibrary {
  /** 所有课程 */
  courses: Course[];
  /** 快速索引映射 */
  index: {
    byId: Record<string, Course>;
    byCode: Record<string, Course>;
    byTag: Record<string, Course[]>;
  };
}

/**
 * 组合后的完整数据结构
 */
export interface CompleteSubjectSystem {
  /** 学科分类树 */
  subjectTree: SubjectTree;
  /** 课程库 */
  courseLibrary: CourseLibrary;
}

/**
 * 搜索结果的类型
 */
export type SearchResult =
  | { type: 'category'; data: SubjectCategory }
  | { type: 'subcategory'; data: SubjectSubcategory }
  | { type: 'course'; data: Course };

/**
 * 课程与专业的关联信息
 */
export interface CourseSubjectRelation {
  /** 课程 ID */
  courseId: string;
  /** 课程名称 */
  courseName: string;
  /** 关联的专业列表 */
  subjects: {
    /** 专业方向 ID */
    subcategoryId: string;
    /** 专业方向名称 */
    subcategoryName: string;
    /** 所属大类 ID */
    categoryId: string;
    /** 所属大类名称 */
    categoryName: string;
  }[];
}
