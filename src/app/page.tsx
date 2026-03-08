'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Layers, Share2, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            学科分类与课程共享系统
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            涵盖 14 个学科门类、92 个专业类、150+ 门核心课程的现代化学习平台
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/subjects" className="btn-primary inline-block text-center">
              开始探索
            </Link>
            <Link
              href="/search"
              className="px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200 inline-block text-center"
            >
              搜索课程
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Layers, label: '学科门类', value: '14' },
            { icon: BookOpen, label: '专业类', value: '92' },
            { icon: Share2, label: '核心课程', value: '150+' },
            { icon: TrendingUp, label: '学习时长', value: '8000+h' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card text-center p-4"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-primary-600" />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">核心特色</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: '全面学科覆盖',
              description: '基于中国高等教育专业目录，覆盖哲学、经济学、法学等 14 个学科门类',
              icon: Layers,
            },
            {
              title: '课程共享机制',
              description: '相同课程在不同专业间共享，避免重复建设，提高资源利用效率',
              icon: Share2,
            },
            {
              title: '科学学习路径',
              description: '基于先修关系和推荐学期，为学生提供科学的学习顺序建议',
              icon: TrendingUp,
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card p-6"
            >
              <feature.icon className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subject Categories Preview */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">学科门类预览</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { code: '01', name: '哲学', count: 2 },
            { code: '02', name: '经济学', count: 3 },
            { code: '07', name: '理学', count: 5 },
            { code: '08', name: '工学', count: 6 },
            { code: '12', name: '管理学', count: 4 },
            { code: '14', name: '交叉学科', count: 4 },
          ].map((category) => (
            <Link
              key={category.code}
              href={`/subjects`}
              className="card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold">{category.name}</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                  {category.count}个专业类
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                代码：{category.code}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">学科分类与课程共享系统 v2.0</p>
          <p className="text-gray-400 text-sm">
            基于 Next.js 14 + TypeScript + Tailwind CSS 构建
          </p>
        </div>
      </footer>
    </main>
  );
}
