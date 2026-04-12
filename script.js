// 抽卡内容定义
const drawData = {
    // 第一层：今日干饭运势
    luck: [
        { name: '今日宜碳水充电', icon: '�', desc: '适合补充能量，迎接挑战' },
        { name: '今日宜重口味发泄', icon: '�️', desc: '适合用辣味释放压力' },
        { name: '今日宜清淡养胃', icon: '🥬', desc: '适合调理肠胃，保持健康' },
        { name: '今日宜糊弄学进餐', icon: '🤷', desc: '适合简单应付，节省时间' },
        { name: '今日宜精神辟谷', icon: '🧘', desc: '适合少吃，让身体休息' },
        { name: '今日宜奢侈一顿', icon: '💰', desc: '适合犒劳自己，享受美食' }
    ],
    
    // 第二层：今日菜系风格
    style: [
        { name: '火辣暴躁菜系', icon: '�️', desc: '适合：想创飞全世界的心情' },
        { name: '清淡佛系菜系', icon: '🥬', desc: '适合：内心已无波澜' },
        { name: '垃圾快乐菜系', icon: '�', desc: '适合：先快乐再说别的' },
        { name: '食堂糊弄菜系', icon: '🍱', desc: '适合：精神状态一般' },
        { name: '深夜报复菜系', icon: '🌙', desc: '适合：白天受委屈了' },
        { name: '虚无空气菜系', icon: '💨', desc: '适合：已飞升，无需进食' }
    ],
    
    // 第三层：最终菜品（带稀有度）
    food: [
        // 普通
        { name: '黄焖鸡米饭', icon: '🍗', rarity: 'common', desc: '经典快餐，安全可靠' },
        { name: '兰州拉面', icon: '🍜', rarity: 'common', desc: '传统面食，百吃不厌' },
        { name: '沙县小吃', icon: '�', rarity: 'common', desc: '种类丰富，经济实惠' },
        { name: '基础外卖', icon: '📦', rarity: 'common', desc: '方便快捷，选择多样' },
        
        // 稀有
        { name: '公司楼下快餐', icon: '🏢', rarity: 'rare', desc: '打工人的日常选择' },
        { name: '加班便利店盒饭', icon: '🏪', rarity: 'rare', desc: '加班必备，快速充饥' },
        { name: '咖啡配面包', icon: '☕', rarity: 'rare', desc: '提神醒脑，简单快捷' },
        { name: '随便点的外卖', icon: '🤷', rarity: 'rare', desc: '选择困难症的救星' },
        
        // 史诗
        { name: '麻辣香锅', icon: '🌶️', rarity: 'epic', desc: '匹配你混乱的精神秩序' },
        { name: '螺蛳粉', icon: '🍜', rarity: 'epic', desc: '攻击性极强，适合创人' },
        { name: '烧烤夜宵', icon: '�', rarity: 'epic', desc: '夜晚才是真正的人生' },
        { name: '泡面', icon: '🍜', rarity: 'epic', desc: '极简续命，不问意义' },
        { name: '轻食沙拉', icon: '🥗', rarity: 'epic', desc: '看起来健康，内心发疯' },
        
        // 传说
        { name: '回家吃饭', icon: '�', rarity: 'legendary', desc: '天选之人，概率极低' },
        { name: '火锅', icon: '🍲', rarity: 'legendary', desc: '奢侈治愈，烦恼清零' },
        { name: '老板画的饼', icon: '🫓', rarity: 'legendary', desc: '管饱但难消化' },
        { name: 'AI 生成的大饼', icon: '�', rarity: 'legendary', desc: '看得见吃不着' },
        { name: '空气', icon: '💨', rarity: 'legendary', desc: '今日精神状态：无需进食' },
        { name: '什么都不吃', icon: '🍃', rarity: 'legendary', desc: '已悟道，勿扰' }
    ]
};

// DOM 元素
const startPage = document.getElementById('start-page');
const drawPage = document.getElementById('draw-page');
const sharePage = document.getElementById('share-page');
const startBtn = document.getElementById('start-btn');
const drawBtn = document.getElementById('draw-btn');
const restartBtn = document.getElementById('restart-btn');
const card = document.getElementById('card');
const cardFrontText = document.getElementById('card-front-text');
const cardBackIcon = document.getElementById('card-back-icon');
const cardBackName = document.getElementById('card-back-name');
const cardBackDesc = document.getElementById('card-back-desc');
const cardBackRarity = document.getElementById('card-back-rarity');
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

// 启动抽卡
function startDraw() {
    startPage.classList.remove('active');
    drawPage.classList.add('active');
    currentStep = 1;
    updateStepUI();
}

// 更新步骤 UI
function updateStepUI() {
    // 更新标题和按钮文本
    switch (currentStep) {
        case 1:
            stepTitle.textContent = '今日干饭运势';
            stepSubtitle.textContent = '点击按钮，开启今日干饭指引';
            drawBtn.textContent = '开启今日干饭指引';
            cardFrontText.textContent = '开启今日干饭指引';
            break;
        case 2:
            stepTitle.textContent = '今日菜系风格';
            stepSubtitle.textContent = '继续探寻命运';
            drawBtn.textContent = '继续探寻命运';
            cardFrontText.textContent = '继续探寻命运';
            break;
        case 3:
            stepTitle.textContent = '最终菜品';
            stepSubtitle.textContent = '命运的终极指引';
            drawBtn.textContent = '抽取最终菜品';
            cardFrontText.textContent = '抽取最终菜品';
            break;
    }
    
    // 更新进度条
    step1.className = 'progress-step' + (currentStep >= 1 ? ' active' : '');
    step2.className = 'progress-step' + (currentStep >= 2 ? ' active' : '');
    step3.className = 'progress-step' + (currentStep >= 3 ? ' active' : '');
    
    // 重置卡片
    card.classList.remove('flipped', 'spinning', 'slide-in-right', 'slide-out-left');
    card.querySelector('.card-back').className = 'card-back';
}

// 抽卡函数
function drawCard() {
    // 禁用按钮，防止重复点击
    drawBtn.disabled = true;
    drawBtn.textContent = '抽卡中...';
    
    // 卡片旋转动画
    card.classList.add('spinning');
    
    // 随机选择结果
    setTimeout(() => {
        let selectedItem;
        
        switch (currentStep) {
            case 1:
                selectedItem = drawData.luck[Math.floor(Math.random() * drawData.luck.length)];
                results.luck = selectedItem;
                break;
            case 2:
                selectedItem = drawData.style[Math.floor(Math.random() * drawData.style.length)];
                results.style = selectedItem;
                break;
            case 3:
                selectedItem = drawData.food[Math.floor(Math.random() * drawData.food.length)];
                results.food = selectedItem;
                break;
        }
        
        // 翻转卡片
        card.classList.remove('spinning');
        card.classList.add('flipped');
        
        // 延迟更新卡片内容，避免闪白
        setTimeout(() => {
            // 重置卡片样式
            const cardBack = card.querySelector('.card-back');
            cardBack.className = 'card-back';
            
            // 根据当前步骤更新卡片样式
            if (currentStep === 2) {
                cardBack.classList.add('step-2');
            } else if (currentStep === 3) {
                cardBack.classList.add('step-3');
            }
            
            // 确保卡片内容正确更新
            cardBackIcon.textContent = selectedItem.icon;
            cardBackName.textContent = selectedItem.name;
            cardBackDesc.textContent = selectedItem.desc || '';
            
            // 显示稀有度徽章（仅第三层）
            if (currentStep === 3 && selectedItem.rarity) {
                cardBackRarity.textContent = getRarityText(selectedItem.rarity);
                cardBackRarity.className = `rarity-badge ${selectedItem.rarity}`;
            } else {
                cardBackRarity.textContent = '';
                cardBackRarity.className = 'rarity-badge';
            }
            
            // 延迟后进入下一步或显示结果
            setTimeout(() => {
                if (currentStep < 3) {
                    // 进入下一步
                    currentStep++;
                    updateStepUI();
                    drawBtn.disabled = false;
                } else {
                    // 显示结果页
                    showResult();
                }
            }, 1000);
        }, 300);
    }, 1500);
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

// 显示结果页
function showResult() {
    // 更新结果显示
    resultLuckIcon.textContent = results.luck.icon;
    resultLuckName.textContent = results.luck.name;
    resultStyleIcon.textContent = results.style.icon;
    resultStyleName.textContent = results.style.name;
    resultFoodIcon.textContent = results.food.icon;
    resultFoodName.textContent = results.food.name;
    resultRarity.textContent = getRarityText(results.food.rarity);
    resultRarity.className = `rarity-badge ${results.food.rarity}`;
    
    // 计算精神状态适配度
    const percentage = Math.floor(Math.random() * 30) + 70; // 70-100%
    statusPercentage.textContent = percentage;
    
    // 更新分享文本
    shareFood.textContent = results.food.name;
    
    // 切换到分享页
    drawPage.classList.remove('active');
    sharePage.classList.add('active');
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
    
    // 切换到启动页
    sharePage.classList.remove('active');
    startPage.classList.add('active');
}

// 事件监听
startBtn.addEventListener('click', startDraw);
drawBtn.addEventListener('click', drawCard);
restartBtn.addEventListener('click', restart);

// 初始化页面
function init() {
    console.log('今天吃什么 - 精神状态阶梯抽卡已初始化');
}

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', init);