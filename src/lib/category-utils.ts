/**
 * 学科分类工具函数 - 模块化版本
 * 按单一职责原则拆分为独立模块
 */

import type { SubjectTree, SubjectCategory, SubjectSubcategory } from '@/types';

/**
 * 获取所有一级分类（学科门类）
 */
export function getAllCategories(tree: SubjectTree): SubjectCategory[] {
  return tree.categories;
}

/**
 * 根据 ID 获取分类
 */
export function getCategoryById(
  tree: SubjectTree,
  id: string
): SubjectCategory | SubjectSubcategory | undefined {
  return tree.index.byId[id];
}

/**
 * 获取指定门类的所有专业方向
 */
export function getSubcategoriesByCategory(
  tree: SubjectTree,
  categoryId: string
): SubjectSubcategory[] {
  const category = tree.index.byId[categoryId] as SubjectCategory;
  if (!category || !('children' in category)) {
    return [];
  }
  return category.children || [];
}

/**
 * 获取指定专业的所有课程 ID
 */
export function getCourseIdsBySubcategory(
  tree: SubjectTree,
  subcategoryId: string
): string[] {
  const subcategory = tree.index.byId[subcategoryId] as SubjectSubcategory;
  if (!subcategory || !('courseIds' in subcategory)) {
    return [];
  }
  return subcategory.courseIds || [];
}

/**
 * 统计门类下的专业数量
 */
export function countSubcategories(
  tree: SubjectTree,
  categoryId: string
): number {
  const category = tree.index.byId[categoryId] as SubjectCategory;
  return category?.children?.length || 0;
}

/**
 * 统计门类下的课程总数（去重）
 */
export function countCoursesByCategory(
  tree: SubjectTree,
  categoryId: string
): number {
  const subcategories = getSubcategoriesByCategory(tree, categoryId);
  const allCourseIds = new Set<string>();
  subcategories.forEach((sub) => {
    sub.courseIds.forEach((id) => allCourseIds.add(id));
  });
  return allCourseIds.size;
}
