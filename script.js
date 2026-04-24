// 抽卡内容定义
const drawData = {
    // 第一层：今日干饭运势
    luck: [
        { 
            name: '今日宜碳水充电', 
            icon: '🔋', 
            desc: '适合补充能量，迎接挑战',
            styleOptions: [0, 2, 4] // 对应风格索引：火辣暴躁、垃圾快乐、深夜报复
        },
        { 
            name: '今日宜重口味发泄', 
            icon: '🌶️', 
            desc: '适合用辣味释放压力',
            styleOptions: [0, 4] // 对应风格索引：火辣暴躁、深夜报复
        },
        { 
            name: '今日宜清淡养胃', 
            icon: '🥬', 
            desc: '适合调理肠胃，保持健康',
            styleOptions: [1, 5] // 对应风格索引：清淡佛系、虚无空气
        },
        { 
            name: '今日宜糊弄学进餐', 
            icon: '🤷', 
            desc: '适合简单应付，节省时间',
            styleOptions: [2, 3] // 对应风格索引：垃圾快乐、食堂糊弄
        },
        { 
            name: '今日宜精神辟谷', 
            icon: '🧘', 
            desc: '适合少吃，让身体休息',
            styleOptions: [1, 5] // 对应风格索引：清淡佛系、虚无空气
        },
        { 
            name: '今日宜奢侈一顿', 
            icon: '💰', 
            desc: '适合犒劳自己，享受美食',
            styleOptions: [0, 2, 4] // 对应风格索引：火辣暴躁、垃圾快乐、深夜报复
        }
    ],
    
    // 第二层：今日菜系风格
    style: [
        { 
            name: '火辣暴躁菜系', 
            icon: '🌶️', 
            desc: '适合：想创飞全世界的心情',
            foodOptions: [8, 9, 15, 16, 20, 21] // 对应菜品索引：麻辣香锅、螺蛳粉、炸鸡、寿司、火锅、满汉全席
        },
        { 
            name: '清淡佛系菜系', 
            icon: '🥬', 
            desc: '适合：内心已无波澜',
            foodOptions: [4, 5, 12, 14, 20] // 对应菜品索引：蛋炒饭、盖浇饭、咖啡配面包、轻食沙拉、火锅
        },
        { 
            name: '垃圾快乐菜系', 
            icon: '🍔', 
            desc: '适合：先快乐再说别的',
            foodOptions: [2, 3, 15, 16, 17, 20, 22] // 对应菜品索引：沙县小吃、基础外卖、炸鸡、寿司、烧烤夜宵、火锅、米其林大餐
        },
        { 
            name: '食堂糊弄菜系', 
            icon: '🍱', 
            desc: '适合：精神状态一般',
            foodOptions: [0, 1, 4, 5, 6, 7, 10, 11] // 对应菜品索引：黄焖鸡米饭、兰州拉面、蛋炒饭、盖浇饭、公司楼下快餐、加班便利店盒饭、饭团、三明治
        },
        { 
            name: '深夜报复菜系', 
            icon: '🌙', 
            desc: '适合：白天受委屈了',
            foodOptions: [8, 9, 15, 16, 17, 20, 22] // 对应菜品索引：麻辣香锅、螺蛳粉、炸鸡、寿司、烧烤夜宵、火锅、米其林大餐
        },
        { 
            name: '虚无空气菜系', 
            icon: '💨', 
            desc: '适合：已飞升，无需进食',
            foodOptions: [18, 19, 23, 24] // 对应菜品索引：空气、什么都不吃、老板画的饼、AI 生成的大饼
        }
    ],
    
    // 第三层：最终菜品（带稀有度）
    food: [
        // 普通
        { name: '黄焖鸡米饭', icon: '🍗', rarity: 'common', desc: '经典快餐，安全可靠' },
        { name: '兰州拉面', icon: '🍜', rarity: 'common', desc: '传统面食，百吃不厌' },
        { name: '沙县小吃', icon: '🥟', rarity: 'common', desc: '种类丰富，经济实惠' },
        { name: '基础外卖', icon: '📦', rarity: 'common', desc: '方便快捷，选择多样' },
        { name: '蛋炒饭', icon: '🍚', rarity: 'common', desc: '简单美味，管饱又实惠' },
        { name: '盖浇饭', icon: '🍛', rarity: 'common', desc: '荤素搭配，营养均衡' },
        
        // 稀有
        { name: '公司楼下快餐', icon: '🏢', rarity: 'rare', desc: '打工人的日常选择' },
        { name: '加班便利店盒饭', icon: '🏪', rarity: 'rare', desc: '加班必备，快速充饥' },
        { name: '咖啡配面包', icon: '☕', rarity: 'rare', desc: '提神醒脑，简单快捷' },
        { name: '随便点的外卖', icon: '🤷', rarity: 'rare', desc: '选择困难症的救星' },
        { name: '饭团', icon: '🍙', rarity: 'rare', desc: '便携方便，适合赶时间' },
        { name: '三明治', icon: '🥪', rarity: 'rare', desc: '西式简餐，营养均衡' },
        
        // 史诗
        { name: '麻辣香锅', icon: '🌶️', rarity: 'epic', desc: '匹配你混乱的精神秩序' },
        { name: '螺蛳粉', icon: '🍜', rarity: 'epic', desc: '攻击性极强，适合创人' },
        { name: '烧烤夜宵', icon: '🍢', rarity: 'epic', desc: '夜晚才是真正的人生' },
        { name: '泡面', icon: '🍜', rarity: 'epic', desc: '极简续命，不问意义' },
        { name: '轻食沙拉', icon: '🥗', rarity: 'epic', desc: '看起来健康，内心发疯' },
        { name: '炸鸡', icon: '🍗', rarity: 'epic', desc: '垃圾快乐，解压神器' },
        { name: '寿司', icon: '🍣', rarity: 'epic', desc: '精致美味，心情愉悦' },
        
        // 传说
        { name: '回家吃饭', icon: '🏠', rarity: 'legendary', desc: '天选之人，概率极低' },
        { name: '空气', icon: '💨', rarity: 'legendary', desc: '今日精神状态：无需进食' },
        { name: '什么都不吃', icon: '🍃', rarity: 'legendary', desc: '已悟道，勿扰' },
        { name: '火锅', icon: '🍲', rarity: 'legendary', desc: '奢侈治愈，烦恼清零' },
        { name: '老板画的饼', icon: '🫓', rarity: 'legendary', desc: '管饱但难消化' },
        { name: 'AI 生成的大饼', icon: '🤖', rarity: 'legendary', desc: '看得见吃不着' },
        { name: '满汉全席', icon: '🍲', rarity: 'legendary', desc: '终极奢侈，人生巅峰' },
        { name: '米其林大餐', icon: '⭐', rarity: 'legendary', desc: '逼格拉满，钱包空空' }
    ]
};

// DOM 元素
const startPage = document.getElementById('start-page');
const drawPage = document.getElementById('draw-page');
const sharePage = document.getElementById('share-page');
const startBtn = document.getElementById('start-btn');
const drawBtn = document.getElementById('draw-btn');
const restartBtn = document.getElementById('restart-btn');
const cardTrack = document.getElementById('card-track');
const cards = [
    document.getElementById('card-1'),
    document.getElementById('card-2'),
    document.getElementById('card-3')
];
const stepTitle = document.getElementById('step-title');
const stepSubtitle = document.getElementById('step-subtitle');
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');

// 结果显示元素
const resultLuckIcon = document.getElementById('result-luck-icon');
const resultLuckName = document.getElementById('result-luck-name');
const resultStyleIcon = document.getElementById('result-style-icon');
const resultStyleName = document.getElementById('result-style-name');
const resultFoodIcon = document.getElementById('result-food-icon');
const resultFoodName = document.getElementById('result-food-name');
const resultRarity = document.getElementById('result-rarity');
const statusPercentage = document.getElementById('status-percentage');
const shareFood = document.getElementById('share-food');

// 当前步骤和结果
let currentStep = 0;
let results = {
    luck: null,
    style: null,
    food: null
};

// 动画相关参数
const flipDurationMs = 1200; // 翻转动画时长
const revealDelayMs = 600; // 内容显示延迟
const postFlipPauseMs = 1500; // 翻转后暂停时长

// 启动抽卡
function startDraw() {
    startPage.classList.remove('active');
    drawPage.classList.add('active');
    currentStep = 1;
    updateStepUI();
}

// 更新步骤 UI
function updateStepUI() {
    // 镜头移动动画：动态获取 CSS 变量计算 offset
    const rootStyles = getComputedStyle(document.documentElement);
    const cardWidth = parseInt(rootStyles.getPropertyValue('--card-width')) || 280;
    const cardGap = parseInt(rootStyles.getPropertyValue('--card-gap')) || 40;
    
    const offset = (currentStep - 1) * (cardWidth + cardGap);
    cardTrack.style.transform = `translateX(-${offset}px)`;

    // 更新标题和按钮文本
    switch (currentStep) {
        case 1:
            stepTitle.textContent = '今日干饭运势';
            stepSubtitle.textContent = '点击按钮，开启今日干饭指引';
            drawBtn.textContent = '开启今日干饭指引';
            break;
        case 2:
            stepTitle.textContent = '今日菜系风格';
            stepSubtitle.textContent = '继续探寻命运';
            drawBtn.textContent = '继续探寻命运';
            break;
        case 3:
            stepTitle.textContent = '最终菜品';
            stepSubtitle.textContent = '命运的终极指引';
            drawBtn.textContent = '抽取最终菜品';
            break;
    }
    
    // 更新进度条
    step1.className = 'progress-step' + (currentStep > 1 ? ' active' : '');
    step2.className = 'progress-step' + (currentStep > 2 ? ' active' : '');
    step3.className = 'progress-step' + (currentStep > 3 ? ' active' : '');
}

// 抽卡函数
function drawCard() {
    const currentCard = cards[currentStep - 1];
    if (!currentCard || drawBtn.disabled) return;

    // 禁用按钮，防止重复点击
    drawBtn.disabled = true;
    drawBtn.textContent = '抽卡中...';
    console.log('开始抽卡，当前步骤:', currentStep);
    
    // 1. 获取背面元素
    const cardBack = currentCard.querySelector('.card-back');
    const cardContent = cardBack.querySelector('.card-content');
    const iconEl = cardContent.querySelector('.card-icon');
    const nameEl = cardContent.querySelector('h2');
    const descEl = cardContent.querySelector('p');
    // 前两张卡片没有 rarity-badge，需要安全获取
    const rarityEl = cardContent.querySelector('.rarity-badge');

    // 2. 随机选择结果
    let selectedItem;
    switch (currentStep) {
        case 1:
            selectedItem = drawData.luck[Math.floor(Math.random() * drawData.luck.length)];
            results.luck = selectedItem;
            console.log('选择的运势结果:', selectedItem);
            break;
        case 2:
            // 根据当前运势选择对应的风格
            if (results.luck && results.luck.styleOptions) {
                const styleIndex = results.luck.styleOptions[Math.floor(Math.random() * results.luck.styleOptions.length)];
                selectedItem = drawData.style[styleIndex];
            } else {
                selectedItem = drawData.style[Math.floor(Math.random() * drawData.style.length)];
            }
            results.style = selectedItem;
            console.log('选择的风格结果:', selectedItem);
            break;
        case 3:
            // 根据当前风格选择对应的菜品
            if (results.style && results.style.foodOptions) {
                const foodIndex = results.style.foodOptions[Math.floor(Math.random() * results.style.foodOptions.length)];
                selectedItem = drawData.food[foodIndex];
            } else {
                selectedItem = drawData.food[Math.floor(Math.random() * drawData.food.length)];
            }
            results.food = selectedItem;
            console.log('选择的菜品结果:', selectedItem);
            console.log('当前results对象:', results);
            break;
    }
    
    // 3. 先清空卡片背面内容，避免在翻转前显示结果
    console.log('清空卡片背面内容');
    if (iconEl) {
        iconEl.textContent = '';
    }
    if (nameEl) {
        nameEl.textContent = '';
    }
    if (descEl) {
        descEl.textContent = '';
    }
    
    if (rarityEl) {
        rarityEl.textContent = '';
        rarityEl.className = 'rarity-badge';
    }

    // 4. 卡片翻转动画
    requestAnimationFrame(() => {
        const flipDurationMs = 1200;
        const revealDelayMs = 100; // 提前更新内容，避免显示空白
        const postFlipPauseMs = 200;

        const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const rarityClassMap = {
            rare: 'rarefx-rare',
            epic: 'rarefx-epic',
            legendary: 'rarefx-legendary'
        };
        const rarityClass = (selectedItem && selectedItem.rarity && rarityClassMap[selectedItem.rarity]) || 'rarefx-rare';
        const shouldHoldReveal = currentStep === 3 && selectedItem && isRareRarity(selectedItem.rarity) && !reduceMotion;

        // 提前更新卡片内容，确保翻转后立即显示
        console.log('更新卡片背面内容:', selectedItem);
        if (iconEl) {
            console.log('更新icon元素:', selectedItem.icon);
            iconEl.textContent = selectedItem.icon;
        }
        if (nameEl) {
            console.log('更新name元素:', selectedItem.name);
            nameEl.textContent = selectedItem.name;
        }
        if (descEl) {
            console.log('更新desc元素:', selectedItem.desc || '');
            descEl.textContent = selectedItem.desc || '';
        }

        if (currentStep === 3 && selectedItem.rarity && rarityEl) {
            console.log('更新rarity元素:', getRarityText(selectedItem.rarity));
            rarityEl.textContent = getRarityText(selectedItem.rarity);
            rarityEl.className = `rarity-badge ${selectedItem.rarity}`;
        }

        const startFlip = () => {
            currentCard.classList.remove('rare-hold', 'rare-cover', 'rarefx-rare', 'rarefx-epic', 'rarefx-legendary');
            if (shouldHoldReveal) {
                currentCard.classList.add('rare-hold', rarityClass);
            }

            // 先移除可能存在的 flipped 类，确保可重复触发动画
            currentCard.classList.remove('flipped');
            // 触发重排
            void currentCard.offsetWidth;

            currentCard.classList.add('flipped');
            console.log('卡片开始翻转');

            // 翻转进行到一半时开始稀有卡片动画
            if (currentStep === 3 && shouldHoldReveal) {
                const coverMs = 2200; // 延长动画时长
                
                // 在翻转动画进行到一半时开始光芒动画
                setTimeout(() => {
                    // 创建全屏光芒动画元素
                    const fullScreenGlow = document.createElement('div');
                    fullScreenGlow.className = `full-screen-glow ${rarityClass}`;
                    document.body.appendChild(fullScreenGlow);

                    window.setTimeout(() => {
                        currentCard.classList.remove('rare-hold');
                    }, Math.max(0, coverMs - 300));

                    window.setTimeout(() => {
                        currentCard.classList.remove(rarityClass);
                        if (fullScreenGlow) {
                            document.body.removeChild(fullScreenGlow);
                        }
                    }, coverMs + 200);

                    window.setTimeout(() => {
                        showResult();
                    }, coverMs + 600); // 延长结果显示时间

                }, flipDurationMs / 2);
            }

            // 翻转完成后，进入下一步或显示结果
            setTimeout(() => {
                console.log('翻转完成，当前步骤:', currentStep);

                if (currentStep < 3) {
                    currentStep++;
                    console.log('进入下一步骤:', currentStep);
                    updateStepUI();
                    drawBtn.disabled = false;
                    drawBtn.textContent = getDrawBtnText(currentStep);
                } else if (!shouldHoldReveal) {
                    // 非稀有卡片直接显示结果
                    showResult();
                }
            }, flipDurationMs);
        };

        startFlip();
    });
}

// 获取按钮文本的辅助函数
function getDrawBtnText(step) {
    switch (step) {
        case 1: return '开启今日干饭指引';
        case 2: return '继续探寻命运';
        case 3: return '抽取最终菜品';
        default: return '开启抽卡';
    }
}

// 获取稀有度文本
function getRarityText(rarity) {
    const rarityMap = {
        common: '普通',
        rare: '稀有',
        epic: '史诗',
        legendary: '传说'
    };
    return rarityMap[rarity] || rarity;
}

function isRareRarity(rarity) {
    return !!rarity && rarity !== 'common';
}

// 显示结果页
function showResult() {
    console.log('调用showResult函数');
    console.log('results对象:', results);
    // 更新结果显示
    resultLuckIcon.textContent = results.luck.icon;
    resultLuckName.textContent = results.luck.name;
    resultStyleIcon.textContent = results.style.icon;
    resultStyleName.textContent = results.style.name;
    resultFoodIcon.textContent = results.food.icon;
    resultFoodName.textContent = results.food.name;
    resultRarity.textContent = getRarityText(results.food.rarity);
    resultRarity.className = `rarity-badge ${results.food.rarity}`;
    
    // 计算今日干饭运势
    let percentage = 70; // 基础运势
    
    // 特殊处理：空气或什么都不吃
    if (results.food.name.includes('空气') || results.food.name.includes('什么都不吃')) {
        percentage = 110; // 直接给到110%
    } else {
        // 稀有度加成
        const rarityBonus = {
            'common': 0,
            'rare': 5,
            'epic': 10,
            'legendary': 15
        };
        percentage += rarityBonus[results.food.rarity] || 0;
        
        // 运势与菜品匹配度
        let matchBonus = 0;
        if (results.luck && results.food) {
            // 碳水充电运势
            if (results.luck.name.includes('碳水充电') && 
                (results.food.name.includes('米饭') || results.food.name.includes('拉面') || results.food.name.includes('炒饭'))) {
                matchBonus += 10;
            }
            // 重口味发泄运势
            else if (results.luck.name.includes('重口味发泄') && 
                     (results.food.name.includes('麻辣') || results.food.name.includes('螺蛳粉') || results.food.name.includes('烧烤'))) {
                matchBonus += 10;
            }
            // 清淡养胃运势
            else if (results.luck.name.includes('清淡养胃') && 
                     (results.food.name.includes('沙拉') || results.food.name.includes('盖浇饭') || results.food.name.includes('回家吃饭'))) {
                matchBonus += 10;
            }
            // 糊弄学进餐运势
            else if (results.luck.name.includes('糊弄学进餐') && 
                     (results.food.name.includes('外卖') || results.food.name.includes('泡面') || results.food.name.includes('便利店'))) {
                matchBonus += 10;
            }
            // 精神辟谷运势
            else if (results.luck.name.includes('精神辟谷') && 
                     (results.food.name.includes('空气') || results.food.name.includes('什么都不吃'))) {
                matchBonus += 10;
            }
            // 奢侈一顿运势
            else if (results.luck.name.includes('奢侈一顿') && 
                     (results.food.name.includes('火锅') || results.food.name.includes('满汉全席') || results.food.name.includes('米其林'))) {
                matchBonus += 10;
            }
            // 其他匹配情况
            else {
                matchBonus += Math.floor(Math.random() * 5); // 随机0-4%的匹配度
            }
        }
        
        // 最终运势，限制在70-100%之间
        percentage = Math.min(100, percentage + matchBonus);
    }
    percentage = Math.floor(percentage);
    
    statusPercentage.textContent = percentage;
    console.log('更新干饭运势:', percentage);
    
    // 根据菜品生成不同的分享文案
    let shareText = '';
    const foodName = results.food.name;
    
    // 根据菜品名称生成不同的文案
    if (foodName.includes('回家吃饭')) {
        shareText = `今日伙食是${foodName}，天选之人的待遇，精神状态直接拉满！`;
    } else if (foodName.includes('火锅')) {
        shareText = `今日伙食是${foodName}，奢侈治愈，烦恼清零，精神状态完美！`;
    } else if (foodName.includes('空气') || foodName.includes('什么都不吃')) {
        shareText = `今日伙食是${foodName}，已悟道，精神状态超然物外。`;
    } else if (foodName.includes('加班')) {
        shareText = `今日伙食是${foodName}，加班必备，精神状态在崩溃边缘。`;
    } else if (foodName.includes('泡面')) {
        shareText = `今日伙食是${foodName}，极简续命，精神状态不问意义。`;
    } else if (foodName.includes('沙拉')) {
        shareText = `今日伙食是${foodName}，看起来健康，内心发疯，精神状态分裂。`;
    } else if (foodName.includes('烧烤') || foodName.includes('夜宵')) {
        shareText = `今日伙食是${foodName}，夜晚才是真正的人生，精神状态亢奋！`;
    } else if (foodName.includes('麻辣') || foodName.includes('螺蛳粉')) {
        shareText = `今日伙食是${foodName}，攻击性极强，精神状态需要发泄。`;
    } else if (foodName.includes('AI 生成的大饼') || foodName.includes('老板画的饼')) {
        shareText = `今日伙食是${foodName}，看得见吃不着，精神状态空虚。`;
    } else if (foodName.includes('黄焖鸡米饭')) {
        shareText = `今日伙食是${foodName}，经典快餐，安全可靠，精神状态稳定。`;
    } else if (foodName.includes('兰州拉面')) {
        shareText = `今日伙食是${foodName}，传统面食，百吃不厌，精神状态满足。`;
    } else if (foodName.includes('沙县小吃')) {
        shareText = `今日伙食是${foodName}，种类丰富，经济实惠，精神状态充实。`;
    } else if (foodName.includes('基础外卖')) {
        shareText = `今日伙食是${foodName}，方便快捷，选择多样，精神状态轻松。`;
    } else if (foodName.includes('蛋炒饭')) {
        shareText = `今日伙食是${foodName}，简单美味，管饱又实惠，精神状态满足。`;
    } else if (foodName.includes('盖浇饭')) {
        shareText = `今日伙食是${foodName}，荤素搭配，营养均衡，精神状态健康。`;
    } else if (foodName.includes('公司楼下快餐')) {
        shareText = `今日伙食是${foodName}，打工人的日常选择，精神状态一般。`;
    } else if (foodName.includes('咖啡配面包')) {
        shareText = `今日伙食是${foodName}，提神醒脑，简单快捷，精神状态清醒。`;
    } else if (foodName.includes('随便点的外卖')) {
        shareText = `今日伙食是${foodName}，选择困难症的救星，精神状态随性。`;
    } else if (foodName.includes('饭团')) {
        shareText = `今日伙食是${foodName}，便携方便，适合赶时间，精神状态忙碌。`;
    } else if (foodName.includes('三明治')) {
        shareText = `今日伙食是${foodName}，西式简餐，营养均衡，精神状态洋气。`;
    } else if (foodName.includes('炸鸡')) {
        shareText = `今日伙食是${foodName}，垃圾快乐，解压神器，精神状态愉悦。`;
    } else if (foodName.includes('寿司')) {
        shareText = `今日伙食是${foodName}，精致美味，心情愉悦，精神状态高雅。`;
    } else if (foodName.includes('满汉全席')) {
        shareText = `今日伙食是${foodName}，终极奢侈，人生巅峰，精神状态尊贵。`;
    } else if (foodName.includes('米其林大餐')) {
        shareText = `今日伙食是${foodName}，逼格拉满，钱包空空，精神状态复杂。`;
    } else {
        shareText = `我的今日伙食是${foodName}，精神状态已暴露。`;
    }
    
    // 更新分享文本
    const shareTextElement = document.querySelector('.share-text');
    if (shareTextElement) {
        shareTextElement.innerHTML = shareText;
    }
    console.log('更新分享文本:', shareText);
    
    // 切换到分享页
    console.log('切换到分享页');
    console.log('drawPage元素:', drawPage);
    console.log('sharePage元素:', sharePage);
    drawPage.classList.remove('active');
    sharePage.classList.add('active');
    console.log('分享页是否有active类:', sharePage.classList.contains('active'));
}

// 直接在当前页面显示结果
function displayResultOnCurrentPage() {
    // 计算精神状态适配度
    const percentage = Math.floor(Math.random() * 30) + 70; // 70-100%
    
    // 更新结果显示
    document.getElementById('result-luck-display').textContent = results.luck.icon + ' ' + results.luck.name;
    document.getElementById('result-style-display').textContent = results.style.icon + ' ' + results.style.name;
    document.getElementById('result-food-display').textContent = results.food.icon + ' ' + results.food.name;
    document.getElementById('result-percentage-display').textContent = percentage;
    
    // 显示结果容器
    document.getElementById('result-container').style.display = 'block';
    
    // 禁用抽卡按钮
    drawBtn.disabled = true;
    drawBtn.textContent = '抽卡完成';
}

// 更新结果容器，显示每次抽卡的结果
function updateResultContainer() {
    console.log('更新结果容器');
    
    // 显示结果容器
    const resultContainer = document.getElementById('result-container');
    resultContainer.style.display = 'block';
    
    // 更新运势结果
    if (results.luck) {
        document.getElementById('result-luck-display').textContent = results.luck.icon + ' ' + results.luck.name;
    }
    
    // 更新风格结果
    if (results.style) {
        document.getElementById('result-style-display').textContent = results.style.icon + ' ' + results.style.name;
    }
    
    // 更新菜品结果
    if (results.food) {
        document.getElementById('result-food-display').textContent = results.food.icon + ' ' + results.food.name;
    }
    
    // 计算并更新精神状态适配度
    const percentage = Math.floor(Math.random() * 30) + 70; // 70-100%
    document.getElementById('result-percentage-display').textContent = percentage;
}

// 重新开始
function restart() {
    // 重置状态
    currentStep = 0;
    results = {
        luck: null,
        style: null,
        food: null
    };
    
    // 重置按钮状态
    drawBtn.disabled = false;
    drawBtn.textContent = '开启今日干饭指引';
    
    // 重置所有卡片状态
    cards.forEach(card => {
        card.classList.remove('flipped');
        card.classList.remove('rare-hold', 'rare-cover', 'rarefx-rare', 'rarefx-epic', 'rarefx-legendary');
        const back = card.querySelector('.card-back');
        back.querySelector('.card-icon').textContent = '';
        back.querySelector('h2').textContent = '';
        back.querySelector('p').textContent = '';
        const rarity = back.querySelector('.rarity-badge');
        if (rarity) {
            rarity.textContent = '';
            rarity.className = 'rarity-badge';
        }
    });
    
    // 重置轨道位置
    cardTrack.style.transform = 'translateX(0)';
    
    // 隐藏结果容器
    document.getElementById('result-container').style.display = 'none';
    
    // 切换到启动页
    sharePage.classList.remove('active');
    startPage.classList.add('active');
}

// 事件监听
startBtn.addEventListener('click', startDraw);
drawBtn.addEventListener('click', drawCard);
cards.forEach(card => {
    card.addEventListener('click', () => {
        if (!drawBtn.disabled && drawPage.classList.contains('active')) {
            drawCard();
        }
    });
});
restartBtn.addEventListener('click', restart);
// 新的再来一次按钮事件监听
document.getElementById('new-draw-btn').addEventListener('click', restart);

// 初始化页面
function init() {
    console.log('今天吃什么 - 精神状态阶梯抽卡已初始化');
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', init);
