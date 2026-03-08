/**
 * 核心类型定义 - 优化版
 * 使用 TypeScript 高级特性，提高类型安全性和可维护性
 */

// ============================================
// 基础类型
// ============================================

export type ID = string;
export type Code = string;
export type Semester = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

// ============================================
// 课程相关类型
// ============================================

export interface Course {
  id: ID;
  code: Code;
  name: string;
  description: string;
  summary?: string;
  estimatedHours: number;
  credits: number;
  prerequisites?: ID[];
  corequisites?: ID[];
  recommendedSemester?: Semester;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  categories: string[];
  version?: string;
  lastUpdated?: string;
}

export type CourseReference = Pick<Course, 'id' | 'name' | 'credits'>;

// ============================================
// 学科分类相关类型
// ============================================

export interface CategoryMetadata {
  code?: Code;
  level: number;
  parent?: ID;
}

export interface SubjectCategory {
  id: ID;
  name: string;
  description: string;
  metadata: CategoryMetadata;
  children?: SubjectSubcategory[];
  courseIds?: ID[];
}

export interface SubjectSubcategory {
  id: ID;
  name: string;
  description: string;
  metadata: CategoryMetadata;
  courseIds: ID[];
}

// ============================================
// 数据结构类型
// ============================================

export type CourseMap = Record<ID, Course>;
export type CategoryMap = Record<ID, SubjectCategory | SubjectSubcategory>;

export interface CourseLibrary {
  courses: Course[];
  index: {
    byId: CourseMap;
    byCode: Record<Code, Course>;
    byTag: Record<string, Course[]>;
  };
}

export interface SubjectTree {
  categories: SubjectCategory[];
  index: {
    byId: CategoryMap;
    byCode: Record<Code, SubjectCategory | SubjectSubcategory>;
  };
}

// ============================================
// 组合系统类型
// ============================================

export interface CompleteSubjectSystem {
  subjectTree: SubjectTree;
  courseLibrary: CourseLibrary;
}

// ============================================
// 搜索结果类型
// ============================================

export type SearchResultType = 'course' | 'subcategory' | 'category';

export interface SearchResult<T = any> {
  type: SearchResultType;
  data: T;
  score?: number;
}

// ============================================
// 课程关系类型
// ============================================

export interface CourseSubjectRelation {
  courseId: ID;
  courseName: string;
  subjects: Array<{
    subcategoryId: ID;
    subcategoryName: string;
    categoryId: ID;
    categoryName: string;
  }>;
}

// ============================================
// 统计类型
// ============================================

export interface SystemStatistics {
  totalCategories: number;
  totalSubcategories: number;
  totalCourses: number;
  sharedCourses: number;
  exclusiveCourses: number;
  totalEstimatedHours: number;
  totalCredits: number;
  avgCreditsPerCourse: number;
}

// ============================================
// 用户相关类型（为未来功能预留）
// ============================================

export interface UserProgress {
  userId: ID;
  completedCourses: ID[];
  inProgressCourses: ID[];
  wishlist: ID[];
  lastAccessed?: string;
}

export interface UserReview {
  userId: ID;
  courseId: ID;
  rating: number;
  comment?: string;
  createdAt: string;
}

// ============================================
// 工具类型
// ============================================

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Ro<T> = Readonly<T>;
