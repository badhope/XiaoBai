/**
 * 课程工具函数 - 模块化版本
 */

import type { Course, CourseLibrary, CourseSubjectRelation } from '@/types';

/**
 * 获取所有课程
 */
export function getAllCourses(library: CourseLibrary): Course[] {
  return library.courses;
}

/**
 * 根据 ID 获取课程
 */
export function getCourseById(
  library: CourseLibrary,
  courseId: string
): Course | undefined {
  return library.index.byId[courseId];
}

/**
 * 根据代码获取课程
 */
export function getCourseByCode(
  library: CourseLibrary,
  code: string
): Course | undefined {
  return library.index.byCode[code];
}

/**
 * 根据标签获取课程
 */
export function getCoursesByTag(
  library: CourseLibrary,
  tag: string
): Course[] {
  const normalizedTag = tag.toLowerCase();
  return library.index.byTag[normalizedTag] || [];
}

/**
 * 获取所有标签
 */
export function getAllTags(library: CourseLibrary): string[] {
  return Object.keys(library.index.byTag).sort();
}

/**
 * 搜索课程（支持多字段）
 */
export function searchCourses(
  library: CourseLibrary,
  keyword: string
): Course[] {
  const normalizedKeyword = keyword.toLowerCase().trim();
  if (!normalizedKeyword) return [];

  return library.courses.filter((course) => {
    const searchableText = [
      course.name,
      course.description,
      course.summary || '',
      ...course.tags,
      ...course.categories,
    ]
      .join(' ')
      .toLowerCase();
    return searchableText.includes(normalizedKeyword);
  });
}

/**
 * 按难度筛选课程
 */
export function filterByDifficulty(
  library: CourseLibrary,
  difficulty: 'beginner' | 'intermediate' | 'advanced'
): Course[] {
  return library.courses.filter((c) => c.difficulty === difficulty);
}

/**
 * 按学分范围筛选课程
 */
export function filterByCredits(
  library: CourseLibrary,
  minCredits: number,
  maxCredits: number
): Course[] {
  return library.courses.filter(
    (c) => c.credits >= minCredits && c.credits <= maxCredits
  );
}
