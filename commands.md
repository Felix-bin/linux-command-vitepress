# 所有命令

这里是 Linux 命令大全的完整索引，包含所有 600+ 个命令的详细说明。

## 按字母分类

<div class="alphabet-nav">
  <a href="#a">A</a>
  <a href="#b">B</a>
  <a href="#c">C</a>
  <a href="#d">D</a>
  <a href="#e">E</a>
  <a href="#f">F</a>
  <a href="#g">G</a>
  <a href="#h">H</a>
  <a href="#i">I</a>
  <a href="#j">J</a>
  <a href="#k">K</a>
  <a href="#l">L</a>
  <a href="#m">M</a>
  <a href="#n">N</a>
  <a href="#o">O</a>
  <a href="#p">P</a>
  <a href="#q">Q</a>
  <a href="#r">R</a>
  <a href="#s">S</a>
  <a href="#t">T</a>
  <a href="#u">U</a>
  <a href="#v">V</a>
  <a href="#w">W</a>
  <a href="#x">X</a>
  <a href="#y">Y</a>
  <a href="#z">Z</a>
  <a href="#7">7</a>
</div>

<script setup>
import { ref, onMounted } from 'vue'
import fs from 'fs'
import path from 'path'

const commandGroups = ref({})

onMounted(async () => {
  try {
    // 动态加载命令列表
    const response = await fetch('/api/commands')
    if (response.ok) {
      const data = await response.json()
      commandGroups.value = data
    } else {
      // 备用方案：静态命令列表
      commandGroups.value = await generateCommandList()
    }
  } catch (error) {
    console.warn('Failed to load commands:', error)
    commandGroups.value = await generateCommandList()
  }
})

// 生成静态命令列表的备用方案
async function generateCommandList() {
  const commands = [
    '7z', 'ab', 'accept', 'ack', 'ag', 'alias', 'apachectl', 'apk', 'apropos', 'apt-get',
    'apt-key', 'apt-sortpkgs', 'aptitude', 'ar', 'arch', 'arj', 'arp', 'arpd', 'arping',
    'arptables', 'arpwatch', 'as', 'at', 'atop', 'atq', 'atrm', 'awk', 'axel', 'badblocks',
    // ... 这里可以包含所有命令
  ]
  
  const groups = {}
  commands.forEach(cmd => {
    const firstLetter = cmd[0].toUpperCase()
    if (!groups[firstLetter]) {
      groups[firstLetter] = []
    }
    groups[firstLetter].push(cmd)
  })
  
  return groups
}
</script>

<template>
  <div v-for="(commands, letter) in commandGroups" :key="letter" class="command-section">
    <h2 :id="letter.toLowerCase()">{{ letter }}</h2>
    <div class="commands-grid">
      <a 
        v-for="command in commands" 
        :key="command" 
        :href="`/command/${command}`"
        class="command-link"
      >
        {{ command }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.alphabet-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 24px 0;
  padding: 16px;
  background: var(--vp-c-bg-alt);
  border-radius: 8px;
  justify-content: center;
}

.alphabet-nav a {
  display: inline-block;
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  background: var(--vp-c-brand);
  color: white;
  text-decoration: none;
  border-radius: 50%;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.2s;
}

.alphabet-nav a:hover {
  background: var(--vp-c-brand-dark);
  transform: scale(1.1);
}

.command-section {
  margin: 32px 0;
}

.command-section h2 {
  padding-bottom: 8px;
  border-bottom: 2px solid var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.commands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 8px;
  margin: 16px 0;
}

.command-link {
  display: block;
  padding: 8px 12px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  text-align: center;
  transition: all 0.2s;
}

.command-link:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
  background: var(--vp-c-brand-light);
}

@media (max-width: 768px) {
  .alphabet-nav {
    gap: 4px;
  }
  
  .alphabet-nav a {
    width: 28px;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
  }
  
  .commands-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
}
</style>
