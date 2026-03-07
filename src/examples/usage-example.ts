/**
 * 学科分类系统使用示例
 * 
 * 此文件展示如何使用科目分类系统的各项功能
 */

import {
  subjectTree,
  getAllCategories,
  getSubcategoriesByCategory,
  getItemsBySubcategory,
  getAllItems,
  search,
  getItemPath,
  getStatistics,
  filterByTag,
  getAllTags,
  getRecommendedOrder,
  validateTree,
} from './index';

// ============================================
// 示例 1: 获取所有学科大类
// ============================================
console.log('=== 示例 1: 获取所有学科大类 ===');
const categories = getAllCategories(subjectTree);
categories.forEach((cat) => {
  console.log(`[${cat.code}] ${cat.name} - ${cat.icon} ${cat.tags?.join(', ')}`);
});

// ============================================
// 示例 2: 获取指定大类的专业方向
// ============================================
console.log('\n=== 示例 2: 获取计算机大类的专业方向 ===');
const csSubcategories = getSubcategoriesByCategory(subjectTree, 'cs-0809');
csSubcategories.forEach((sub) => {
  console.log(`[${sub.code}] ${sub.name}`);
  console.log(`  ${sub.description}`);
});

// ============================================
// 示例 3: 获取具体科目
// ============================================
console.log('\n=== 示例 3: 获取计算机科学与技术专业的所有科目 ===');
const csItems = getItemsBySubcategory(subjectTree, 'cs-0809-01');
csItems.forEach((item) => {
  console.log(`[${item.code}] ${item.name}`);
  console.log(`  学分：${item.credits}, 学时：${item.estimatedHours}h`);
  console.log(`  推荐学期：第${item.recommendedSemester}学期`);
  if (item.prerequisites && item.prerequisites.length > 0) {
    console.log(`  先修科目：${item.prerequisites.join(', ')}`);
  }
  console.log(`  标签：${item.tags?.join(', ')}`);
});

// ============================================
// 示例 4: 搜索功能
// ============================================
console.log('\n=== 示例 4: 搜索功能 ===');
const searchResults = search(subjectTree, '机器学习');
searchResults.forEach((result) => {
  if (result.type === 'item') {
    console.log(`[科目] ${result.data.name} (${result.data.categoryId})`);
  } else if (result.type === 'subcategory') {
    console.log(`[专业方向] ${result.data.name} (${result.data.parentId})`);
  } else if (result.type === 'category') {
    console.log(`[大类] ${result.data.name}`);
  }
});

// ============================================
// 示例 5: 获取科目完整路径
// ============================================
console.log('\n=== 示例 5: 获取科目完整路径 ===');
const path = getItemPath(subjectTree, 'cs-0809-03-002');
if (path) {
  console.log(`路径：${path.category.name} > ${path.subcategory.name} > ${path.item.name}`);
}

// ============================================
// 示例 6: 统计信息
// ============================================
console.log('\n=== 示例 6: 统计信息 ===');
const stats = getStatistics(subjectTree);
console.log(`学科大类数量：${stats.totalCategories}`);
console.log(`专业方向数量：${stats.totalSubcategories}`);
console.log(`科目总数：${stats.totalItems}`);
console.log(`总学时：${stats.totalEstimatedHours} 小时`);
console.log(`总学分：${stats.totalCredits} 学分`);

// ============================================
// 示例 7: 标签筛选
// ============================================
console.log('\n=== 示例 7: 标签筛选 ===');
const allTags = getAllTags(subjectTree);
console.log('所有标签:', allTags.join(', '));

const requiredCourses = filterByTag(subjectTree, '必修');
console.log(`\n必修科目数量：${requiredCourses.length}`);
requiredCourses.forEach((item) => {
  console.log(`  - ${item.name}`);
});

// ============================================
// 示例 8: 推荐学习顺序
// ============================================
console.log('\n=== 示例 8: 推荐学习顺序 ===');
const csAllItems = getAllItemsByCategory(subjectTree, 'cs-0809');
const orderedItems = getRecommendedOrder(csAllItems);
console.log('计算机大类推荐学习顺序:');
orderedItems.forEach((item, index) => {
  console.log(`${index + 1}. ${item.name} (第${item.recommendedSemester}学期)`);
});

// ============================================
// 示例 9: 数据验证
// ============================================
console.log('\n=== 示例 9: 数据验证 ===');
const validation = validateTree(subjectTree);
if (validation.valid) {
  console.log('✓ 数据结构验证通过');
} else {
  console.log('✗ 数据结构存在问题:');
  validation.errors.forEach((error) => {
    console.log(`  - ${error}`);
  });
}

// ============================================
// 示例 10: 遍历所有数据
// ============================================
console.log('\n=== 示例 10: 完整遍历所有数据 ===');
categories.forEach((category) => {
  console.log(`\n【${category.name}】${category.description}`);
  
  category.children.forEach((subcategory) => {
    console.log(`  ├─ ${subcategory.name}`);
    
    subcategory.children.forEach((item, index) => {
      const isLast = index === subcategory.children.length - 1;
      const prefix = isLast ? '   └─' : '   ├─';
      console.log(`   ${prefix} ${item.name} (${item.credits}学分)`);
    });
  });
});

// ============================================
// 示例 11: 获取某大类下所有科目
// ============================================
console.log('\n=== 示例 11: 获取管理学大类所有科目 ===');
const mgmtAllItems = getAllItemsByCategory(subjectTree, 'mgmt-12');
console.log(`管理学大类共有 ${mgmtAllItems.length} 个科目:`);
mgmtAllItems.forEach((item) => {
  console.log(`  - ${item.name} (${item.credits}学分, ${item.estimatedHours}学时)`);
});

// ============================================
// 示例 12: 通过 ID 快速查找
// ============================================
console.log('\n=== 示例 12: 通过 ID 快速查找 ===');
// 注意：需要使用 getById 函数，这里简化演示
console.log('可以通过 getById(subjectTree, "cs-0809-01-002") 快速查找数据结构科目');

console.log('\n=== 所有示例执行完毕 ===');
