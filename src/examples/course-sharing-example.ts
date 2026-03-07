/**
 * 课程共享系统使用示例
 * 展示如何使用课程共享机制
 */

import {
  completeSystem,
  getAllCategories,
  getCoursesBySubcategory,
  getCourseRelations,
  getSharedCourses,
  getSystemStatistics,
  searchAll,
  getLearningPath,
  validateCourseReferences,
} from './index';

console.log('=== 课程共享系统使用示例 ===\n');

// ============================================
// 示例 1: 查看系统统计信息
// ============================================
console.log('【示例 1】系统统计信息');
const stats = getSystemStatistics(completeSystem);
console.log(`学科大类：${stats.totalCategories}个`);
console.log(`专业方向：${stats.totalSubcategories}个`);
console.log(`总课程数：${stats.totalCourses}门`);
console.log(`共享课程：${stats.sharedCourses}门（被多个专业共享）`);
console.log(`独有课程：${stats.exclusiveCourses}门`);
console.log(`总学时：${stats.totalEstimatedHours}小时`);
console.log(`总学分：${stats.totalCredits}学分\n`);

// ============================================
// 示例 2: 查看"数据结构"课程被哪些专业共享
// ============================================
console.log('【示例 2】查看"数据结构"课程的共享情况');
const dsRelations = getCourseRelations(completeSystem, 'course-ds-001');
if (dsRelations) {
  console.log(`课程：${dsRelations.courseName}`);
  console.log(`被 ${dsRelations.subjects.length} 个专业引用:`);
  dsRelations.subjects.forEach((subj, idx) => {
    console.log(`  ${idx + 1}. ${subj.categoryName} - ${subj.subcategoryName}`);
  });
}
console.log('');

// ============================================
// 示例 3: 查看不同专业的课程
// ============================================
console.log('【示例 3】对比不同专业的课程');

// 计算机科学与技术专业
const csCourses = getCoursesBySubcategory(completeSystem, 'cs-0809-01');
console.log(`\n计算机科学与技术专业 (${csCourses.length} 门课程):`);
csCourses.forEach((course) => {
  console.log(`  - ${course.name} (${course.credits}学分)`);
});

// 软件工程专业
const seCourses = getCoursesBySubcategory(completeSystem, 'cs-0809-02');
console.log(`\n软件工程专业 (${seCourses.length} 门课程):`);
seCourses.forEach((course) => {
  console.log(`  - ${course.name} (${course.credits}学分)`);
});

// 查看两个专业的共同课程
const commonCourseIds = csCourses
  .filter((cs) => seCourses.some((se) => se.id === cs.id))
  .map((c) => c.name);
console.log(`\n两个专业的共同课程：${commonCourseIds.join(', ')}`);

// ============================================
// 示例 4: 获取所有共享课程
// ============================================
console.log('\n【示例 4】所有共享课程（被 2 个及以上专业共享）');
const sharedCourses = getSharedCourses(completeSystem, 2);
console.log(`共有 ${sharedCourses.length} 门共享课程:`);
sharedCourses.forEach((course) => {
  const relations = getCourseRelations(completeSystem, course.id);
  console.log(`  - ${course.name} (${relations?.subjects.length || 0}个专业共享)`);
});

// ============================================
// 示例 5: 搜索功能
// ============================================
console.log('\n【示例 5】搜索"算法"');
const searchResults = searchAll(completeSystem, '算法');
console.log(`找到 ${searchResults.length} 个结果:`);
searchResults.forEach((result) => {
  if (result.type === 'course') {
    console.log(`  [课程] ${result.data.name}`);
  } else if (result.type === 'subcategory') {
    console.log(`  [专业] ${result.data.name}`);
  } else if (result.type === 'category') {
    console.log(`  [大类] ${result.data.name}`);
  }
});

// ============================================
// 示例 6: 查看课程的学习路径（先修关系）
// ============================================
console.log('\n【示例 6】"机器学习"课程的学习路径');
const mlPath = getLearningPath(completeSystem.courseLibrary, 'course-ml-001');
console.log('推荐学习顺序:');
mlPath.forEach((course, idx) => {
  const indent = '  '.repeat(idx);
  console.log(`${indent}${idx + 1}. ${course.name} (${course.credits}学分)`);
});

// ============================================
// 示例 7: 数据验证
// ============================================
console.log('\n【示例 7】数据验证');
const validation = validateCourseReferences(completeSystem);
if (validation.valid) {
  console.log('✓ 数据验证通过');
} else {
  console.log('✗ 发现错误:');
  validation.errors.forEach((err) => console.log(`  - ${err}`));
}
if (validation.warnings.length > 0) {
  console.log('⚠ 警告:');
  validation.warnings.forEach((warn) => console.log(`  - ${warn}`));
}

// ============================================
// 示例 8: 遍历所有学科大类
// ============================================
console.log('\n【示例 8】所有学科大类');
const categories = getAllCategories(completeSystem.subjectTree);
categories.forEach((cat) => {
  console.log(`\n${cat.icon} ${cat.name} (${cat.code})`);
  console.log(`  ${cat.description}`);
  console.log(`  包含 ${cat.children.length} 个专业方向`);
  
  cat.children.forEach((sub) => {
    console.log(`    - ${sub.name}: ${sub.courseIds.length} 门课程`);
  });
});

console.log('\n=== 示例演示完毕 ===');
