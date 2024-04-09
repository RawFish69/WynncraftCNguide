import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as p,c as i,d as r,b as e,a as o,w as s,e as l}from"./app-DT5keshj.js";const c={},b=r("p",null,"这个章节会介绍武器、装备的一些词条功能作用",-1),h=r("p",null,"由于词条总数实在过多，下面会根据功能性进行分类",-1),d=r("blockquote",null,[r("p",null,[r("s",null,"由于是纯文字所以超级无聊枯燥乏味繁冗复杂，写的好累好烦好困好饿好精神好饱好吃好玩好有意思，我好懒我不想动脑子但是我又要长脑子了脑子又要爆了，看得懂就看，看不懂可以多玩一会再回来看，再看不懂就不用看了直接脑补（真的）。")])],-1),g={class:"hint-container tip"},m=r("p",{class:"hint-container-title"},"提示",-1),u=l('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>先介绍一个概念：</p><p>raw指纯数值，例如<code>+260 Health regen</code>就是raw</p><p>%指百分比，例如<code>+50% Health regen</code>就是%</p></div><h2 id="战斗类词条" tabindex="-1"><a class="header-anchor" href="#战斗类词条"><span>战斗类词条</span></a></h2><p><strong>Attack speed</strong><br> 攻击速度，每点数值提升一级攻速，该数值可为负数（即反过来减攻速），攻速最快与攻速最慢的差距为6，多于6或少于-6的数值无额外效果。</p><details class="hint-container details"><summary>每级攻速的攻击间隔(单位: hit/sec)</summary><ul><li>Super Fast: 4.3</li><li>Very Fast: 3.1</li><li>Fast: 2.5</li><li>Normal: 2.05</li><li>Slow: 1.5</li><li>Very Slow: 0.83</li><li>Super Slow: 0.51</li></ul></details><p><strong>Mana Regen</strong><br> 魔力恢复，每有x点数值给予x/5s的魔力回复，该数值可为负数（即会反过来扣蓝）。基础回蓝量为25/5s。</p><p><strong>Mana steal</strong><br> 魔力窃取，每次进行普通攻击时，会根据自身的攻速（受鉴定词条影响，并非武器面板基础攻速）来决定单次吸取的魔力</p><p>该数值可为负数（即攻击时会反过来扣蓝）。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在攻速最慢时，每次攻击能够吸取的魔力值等于词条的显示数值。</p></div><p><strong>Poison</strong><br> 毒伤，每次攻击时会赋予敌人x/3s的毒伤，若为负数不会有任何效果</p><p>该毒伤不会因为再次攻击而延续时间或叠加伤害，同时不能被力量或暴击点数影响，且不享受任何额外伤害加成，只能够通过叠加装备的毒伤数值来增加伤害。</p><blockquote><p>纯飞舞</p></blockquote><p><strong>Exploding%</strong><br> 附加爆炸，每次<strong>击杀敌人</strong>时会有x%的概率使敌人发生爆炸，伤害与普通攻击伤害相同</p><p>概率最多为100%（若该数值为负数则无任何效果），超过100%的数值不生效。</p><p><strong>Main attack damage（raw/%）</strong><br> 普通攻击伤害加成，简称MD，分为伤害加成数值与伤害加成百分比两种。伤害加成百分比是根据每次普攻打出的伤害计算的，与平均伤害（Average DPS）无关。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Main attack damage计算顺序为先计算百分比加成，再加上数值加成（即数值不享受百分比加成）。</p></div><p><strong>Spell damage（raw/%）</strong><br> 技能伤害加成，与普通攻击伤害加成相似（数值不享受百分比加成）。伤害加成百分比是根据平均伤害（Average DPS）计算的。</p><p><strong>Water/Fire/Earth/Thunder/Air damage%</strong><br> 水/火/地/电/气属性伤害百分比加成，计算方式与相应伤害（普通攻击或者技能伤害）相同。</p><p><strong>1st/2nd/3rd/4th spell cost(raw/%)</strong><br> 1/2/3/4技能的费用减耗，分为数值与百分比两种</p><p>当数字为正数时，表示该技能会有对应的额外魔力消耗数值加成（或百分比加成）</p><p>当数字为负数时，表示该技能会有对应的额外魔力消耗数值减少（或百分比减少）</p><p>数值与百分比的计算顺序为先计算数值，再计算百分比（即数值享受百分比加成）</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>正数raw cost能抵消重复施法带来的蓝耗惩罚，为最终加算</p><p>而cost%作用于基础蓝耗(类似于技能树中的减蓝耗)</p><p>两者均有最低消耗蓝耗（1点）。</p><p>萨满面具的cost%在所有以上计算结束之后计算，所以当你正常蓝耗为1时换面具可以看到0点蓝耗的情况。</p></div><h2 id="生存类词条" tabindex="-1"><a class="header-anchor" href="#生存类词条"><span>生存类词条</span></a></h2><p><strong>Health</strong><br> 生命值，增加自身最大生命值。</p><p><strong>Health regen（raw/%）</strong><br> 生命恢复，简称<code>hpr</code>和<code>hpr%</code>，每有x点数值给予x/4s的生命恢复，该数值可为负数（即会反过来扣血），恢复的生命值计算方式为先计算数值再计算百分比（即数值可享受百分比加成）。基础hpr为3/4s，并且不受百分比影响。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>hpr的机制有点特殊</p><p>简单来说可以将hpr%视作拉高/拖累总hpr的指标</p><p>若从装备获得的hpr%很高(<code>&gt;100%</code>)，则raw hpr为负数也不会使总hpr为负数，最低为0</p><p>反之，若hpr%过低(<code>&lt;-100%</code>)，则就算raw hpr为正数也不会使总hpr为正数，相反，其相当于原正数hpr的值乘了负数，使总hpr变为负数</p></div><p><strong>Life steal</strong><br> 生命窃取，具体效果与魔力窃取类似</p><p>每次进行<em>普通攻击</em>时，会根据自身的攻速（受鉴定词条影响，并非武器面板基础攻速）来决定单次恢复的生命</p><p>该数值可为负数（即攻击时会反过来扣血）。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在攻速最慢时，每次攻击能够恢复的生命值等于词条的显示数值。</p></div><p><strong>Thorn%</strong><br> 荆棘，每次受到近战攻击时有x%的概率反弹该伤害</p><p>反弹成功并不会使自己免受伤害，概率最多为100%（若该数值为负数则无任何效果），超过100%的数值不生效。</p><p><strong>Reflection%</strong><br> 反射，与荆棘类似，但反弹的是远程伤害。</p><p><strong>Water/Fire/Earth/Thunder/Air defence%</strong><br> 水/火/地/电/气属性防御百分比加成（数值可享受百分比加成）。</p><p><strong>Healing Efficiency</strong><br> 治疗效率，提升或减少你的<strong>技能</strong>所造成的治疗量</p><h2 id="移动类加成词条" tabindex="-1"><a class="header-anchor" href="#移动类加成词条"><span>移动类加成词条</span></a></h2><p><strong>Walk speed%</strong><br> 移动速度加成，上限为400%</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>特别地，弓箭手的移速buff和speed surge为百分比提升，可以突破这个上限</p></div><p><strong>Jump height</strong><br> 跳跃高度加成，每1点数值会提升跳跃高度</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>每级数值介于0.5~1格之间</p></div><p><strong>Sprint%</strong><br> 体力上限，按百分比增加自身最大体力值。</p><p><strong>Sprint regen%</strong><br> 体力恢复，按百分比提高自身体力恢复速度。</p><h2 id="其他类词条" tabindex="-1"><a class="header-anchor" href="#其他类词条"><span>其他类词条</span></a></h2><p><strong>Xp bonus%</strong><br> 经验加成，按百分比提高自己击杀怪物所获得的经验量。</p><p><strong>Loot bonus%</strong><br> 掠夺数量加成，增加自己打开野外的箱子时可获得的物品数量（非线性，并且衰减严重）。</p><p><strong>Loot quality%</strong><br> 掠夺质量，增加自己打开野外箱子时获得高品质物品的概率（非线性，并且衰减严重）。</p><p><strong>Gathering xp bonus%</strong><br> 采集经验加成，与经验加成类似，只对采集副职经验起效</p><p><strong>Gathering speed%</strong><br> 采集速度加成，增加自己采集时的速度。</p><p><strong>Stealing%</strong><br> 偷取，增加自己对敌人造成伤害时使敌人掉落绿宝石的概率（掉的不多，被削弱过好几次）。</p><p><strong>Soul point regen%</strong><br> 灵魂点恢复加成，增加自己在游戏内每天黎明时获得额外灵魂点的概率，上限为100%</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>高于上限并不会使你获得更多灵魂点，单次获得灵魂点的上限为2</p><p>同时，若你的spr为负数，则相对的效果为概率不回复灵魂点</p></div><h2 id="major-id" tabindex="-1"><a class="header-anchor" href="#major-id"><span>Major ID</span></a></h2><p>在Wynncraft中，有一些物品鉴定后，会在所有波动的鉴定词条之后附带一条固定不变Major ID（大部分为虚幻品质的物品）</p><p>我们可以把Major ID理解为MOBA游戏中的唯一被动效果，详细来说，就是它是一个被动技能，一直生效且与同名的其他被动不可叠加。</p><p>游戏中有许多Major ID，而不同的Major ID有着不同的效果，下面会按照Major ID列出它的效果和有这条Major ID的所有物品。</p><blockquote><p>（本部分是在moe_block提供的1.20的Major id翻译文件的基础上整理，新增Major ID部分由tankofpacer进行翻译，由我进行整理及对部分过时内容进行更新，感谢他们的贡献）</p></blockquote><div class="hint-container tip"><p class="hint-container-title">提示</p><p>部分Major ID是随着2.0.3新版本的更新才加入的游戏，并且对应的装备武器只能通过新LR获取，所以你可能不会在游戏里经常看到这些Major ID</p></div><details class="hint-container details"><summary>Major ID 列表(非常非常长)</summary><p>（1） Heart of the Pack 狼群之心<br> 效果：你的每四秒的回血量的35%转化为范围治疗，附近的队友获得该治疗量。<br> 物品：Ignis（95级神话弓）</p><p>（2） Transcendance 超凡<br> 效果： 使用技能有50%的概率不消耗任何法力值。<br> 物品：Nirvana（97级神话匕首）</p><p>（3） Roving Assassin 游斗刺客<br> 效果：隐身（刺客二技能）过程中，不会再锁定自身魔力恢复与生命恢复。<br> 物品：Weathered（96级神话匕首）</p><p>（4） Cavalryman 骑术大师<br> 效果： 你现在可以骑马时使用普通攻击和技能，但是其造成的伤害会降低<br> 70%。<br> 物品：Galloping Spurs（40级虚幻靴子）</p><p>（5） Cherry Bombs 樱桃炸弹<br> 效果： 你的烟雾弹（刺客四技能）技能现在接触目标后立刻爆炸，不再造成<br> 持续伤害，而是每颗立刻造成110%的伤害。<br> 物品：Conspirator&#39;s Trickpockets（78级虚幻护腿）；<br> Blossom Haze（87级虚幻匕首）</p><p>（6） Entropy 熵能量<br> 效果：陨石（法师三技能）坠落速度翻三倍。<br> 物品：Lachesism（86级虚幻手镯）<br> Violent-shift（77级虚幻靴子）</p><p>（7） Freerunner 自由疾跑<br> 效果：疾跑条小于30%时，疾跑速度翻倍。<br> 物品：Panic Attack（78级虚幻手镯）；Ornithopter（86级虚幻头盔）</p><p>（8） Greed 贪婪<br> 效果：拾起自然掉落的（被窃取属性或者击杀怪物触发掉落）绿宝石时，为<br> 自己和附近的队友恢复其最大生命值的15%。<br> 物品：The Jingling Jester（69级虚幻胸甲）<br> Old Keeper’s Ring（82级传奇指环）<br> The Exploited（100级传奇匕首）</p><p>（9） Guardian 守护者<br> 效果：附近所有队友受到的伤害的20%转为由你来承受，由这个效果转移来<br> 的伤害可以被你自己的敏捷点所闪避。<br> 物品：Guardian（93级神话长矛）</p><p>（10） Saviour’s Sacrifice 救世牺牲<br> 效果：当前生命值低于最大生命值50%时，自己和附近的队友获得20%的增伤<br> 和20%的免伤。<br> 物品：Hero（91级神话长矛）<br> Eleventh hour（80级虚幻胸甲）</p><p>（11） Hawkeye 鹰眼<br> 效果： 将箭矢风暴收束为一道攻击，每支箭矢技能倍率为10%中性伤害，1%<br> 电属性伤害和1%气属性伤害。<br> 物品：Deadeye（45级虚幻弓）<br> Nighthawk（93级虚幻头盔）</p><p>（12） Lightweight 轻盈<br> 效果：免疫摔落伤害。<br> 物品：Seven-League Boots（44级传奇靴子）<br> Passus Lux（73级传奇靴子）<br> Double Vision（79级虚幻手镯）<br> Steamjet Walkers（86级传奇靴子）</p><p>（13） Madness 疯狂<br> 效果：每三秒随机释放一次普攻/本职业技能树中你已经学习的一个的技能（通过该方式释<br> 放的技能不消耗魔力，若释放的为位移技能，则一般来说不会触发，除非该位移技能有技<br> 能树加成），此效果触发的技能和普通攻击可以被Major ID: Sorcery（详见下方）<br> 所重复释放。<br> 物品：Pandemonium（99级传奇手镯）</p><p>（14） Magnet 磁力吸引<br> 效果：附近8格内的掉落物会被你吸引。<br> 物品：Vindicator（30级虚幻手镯）；Gravity（100级传奇胸甲）</p><p>（15） Plague 瘟疫蔓延<br> 效果：承受你的毒伤的怪物会将毒伤等额蔓延给附近的其他怪物。<br> 物品：Plague Staff（60级虚幻法杖）<br> Uranium Aegis（77级虚幻胸甲）<br> Cytotoxic Striders（99级虚幻靴子）</p><p>（16） Rally 集结<br> 效果：你的冲锋（战士二技能）技能不再造成任何伤害，但冲锋落地后，对<br> 你造成最大生命值10%的治疗，对附近队友造成其最大生命值15%的治疗。<br> 物品：Infernal Impulse（73级虚幻护腿）<br> Rhythm of the Seasons（100级虚幻长矛）</p><p>（17） Sorcery 巫术施法<br> 效果：使用任何技能或者普通攻击后，30%的概率会无消耗地再触发一次效果。<br> 物品：Rewind（80级传奇匕首）<br> Time Rift（95级虚幻胸甲）</p><p>（18）Taunt 嘲讽<br> 效果：使用战吼（战士四技能）后，附近12格内的怪物将会选择你作为攻击<br> 目标。<br> 物品：Strobelight（54级虚幻吊坠）<br> Signal Flare（85级传奇靴子）</p><p>（19）Peaceful Effigy 和平图腾<br> 效果：图腾持续时间翻倍<br> 物品：Philosopher（36级虚幻护腿）<br> Procrastination（86级传奇图腾）</p><p>（20） Furious Effigy 狂怒图腾<br> 效果：图腾持续时间减半，但是图腾的持续伤害和治疗频率翻倍<br> 物品：Tachypsychia（77级虚幻图腾）<br> Panic Zealot（101级虚幻图腾）</p><p>（21） Flashfreeze 寒冰速冻<br> 效果：冰蛇（法师四技能）变为瞬间触发，且减速时间从4秒变成5秒，但<br> 是射程距离降低一半。<br> 物品：Heat Death（57级虚幻法杖）<br> Impact Winter（66级虚幻护腿）<br> Cold Wave（75级虚幻指环）</p><p>（22）Explosive Impact 爆炸之触<br> 效果：你的“附加爆炸”（Exploding）鉴定词条现在不仅会在使用普通攻击击<br> 杀目标后概率触发，也会在普通攻击命中目标后概率触发，概率等同于<br> Exploding词条数值。<br> 物品：Scarlet Veil（54级虚幻头盔）</p><p>（23） Fission 崩裂瓦解<br> 效果：“附加爆炸”（Exploding）鉴定词条的效果触发后，其造成的伤害和范<br> 围变为两倍。<br> 物品：Hesperium（65级虚幻弓）<br> Collapse （97级神话长矛）</p><p>（24） Geocentrism 地心光环<br> 效果：光环（萨满三技能）将以玩家自身为中心释放，且可以无需图腾直接<br> 释放。<br> 物品：Narcissist（92级虚幻图腾）</p><p>（25） Gravity well 重力吸引<br> 效果：陨石的范围提升，并将附近敌人向陨石的落点处拉扯。<br> 物品：Pure（65级神话法杖）</p><p>（26）Alterego 不完全觉醒<br> 效果：觉醒面具激活条件少40%，但是持续时间缩短25%<br> 物品：Apex（97级虚幻头盔）</p><p>（27） Soul eater 噬魂者<br> 效果：收割将会获得双倍的魔力，但是mark上限降低1<br> 物品：Ysengrim（101级虚幻匕首）<br> Keeper of souls（91级虚幻胸甲）</p><p>（28） Juggle 狂野打击<br> 效果：Stronger Multihit 将会为multihit增加12次攻击而非3次，每次额外攻击的伤害降低10% 中性伤害<br> 物品：Roiling Ruckus（64级虚幻匕首）</p><p>（29） Divine honor 圣誉<br> 效果：Radiance的增幅效果提升至25%，但降低Bash 15% 的中性伤害<br> 物品：Veritas（98级虚幻长矛）<br> Empyreal Emberplate（103级虚幻胸甲）</p><p>（30） Strings of fate 命运之弦<br> 效果：你召唤的puppets只能存在三秒，但其造成的所有伤害翻倍<br> 物品：Marionette（100级虚幻图腾）</p><p>（31） Escape route 逃脱计划<br> 效果：Frenzy/Time Dilation 的叠加层数变为双倍，最大上限减半<br> 物品：Tachyon（88级虚幻靴子）</p><p>（32）Reckless abandon 无谋冲锋<br> 效果：Tempset造成额外15% fire的伤害，并获得一次额外充能，战吼不再给予防御增幅<br> 物品：Anti-Causality（90级虚幻裤子）</p><p>（33） Overwhelm 压制<br> 效果：Bash额外攻击两次<br> 物品：Overreach（30级虚幻长矛）</p><p>（34） Perfect recall 绝佳回响<br> 效果：Memory Recollection会消耗全部150点mana bank来触发，且能额外 释放一个已释放的技能<br> 物品：Third wish（102级虚幻法杖）</p><p>（35） Forest’s blessing 森之祝福<br> 效果：增加所有的弓箭手召唤物(乌鸦/蛇/狼)的移速，攻速，视野范围，爆炸箭伤害降低30% 中性伤害<br> 物品：Briars&#39; Embrace（99级虚幻弓）</p><p>（36） Gentle glow 柔光<br> 效果：治疗的回复量提升，对其他友方的恢复量额外提升，但恢复速度降低<br> 物品：Pyrrhic Respite（101级虚幻裤子）</p></details>',58);function y(f,v){const t=a("RouteLink");return p(),i("div",null,[b,h,d,r("div",g,[m,r("p",null,[e("如果你想查找装备品质、词条介绍等内容，可以查阅"),o(t,{to:"/guide/basesystem/itemlevel.html"},{default:s(()=>[e("这里")]),_:1})])]),u])}const S=n(c,[["render",y],["__file","identification.html.vue"]]),x=JSON.parse('{"path":"/guide/basesystem/identification.html","title":"词条功能介绍","lang":"zh-CN","frontmatter":{"title":"词条功能介绍","icon":"magnifying-glass","description":"这个章节会介绍武器、装备的一些词条功能作用 由于词条总数实在过多，下面会根据功能性进行分类 提示 如果你想查找装备品质、词条介绍等内容，可以查阅 提示 先介绍一个概念： raw指纯数值，例如+260 Health regen就是raw %指百分比，例如+50% Health regen就是% 战斗类词条 Attack speed 攻击速度，每点数值提升...","head":[["meta",{"property":"og:url","content":"https://github.com/EternityTQ/WynncraftCNguide/guide/basesystem/identification.html"}],["meta",{"property":"og:site_name","content":"Wynncraft中文攻略"}],["meta",{"property":"og:title","content":"词条功能介绍"}],["meta",{"property":"og:description","content":"这个章节会介绍武器、装备的一些词条功能作用 由于词条总数实在过多，下面会根据功能性进行分类 提示 如果你想查找装备品质、词条介绍等内容，可以查阅 提示 先介绍一个概念： raw指纯数值，例如+260 Health regen就是raw %指百分比，例如+50% Health regen就是% 战斗类词条 Attack speed 攻击速度，每点数值提升..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-09T09:21:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-09T09:21:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"词条功能介绍\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-09T09:21:53.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"战斗类词条","slug":"战斗类词条","link":"#战斗类词条","children":[]},{"level":2,"title":"生存类词条","slug":"生存类词条","link":"#生存类词条","children":[]},{"level":2,"title":"移动类加成词条","slug":"移动类加成词条","link":"#移动类加成词条","children":[]},{"level":2,"title":"其他类词条","slug":"其他类词条","link":"#其他类词条","children":[]},{"level":2,"title":"Major ID","slug":"major-id","link":"#major-id","children":[]}],"git":{"createdTime":1703499305000,"updatedTime":1712654513000,"contributors":[{"name":"EternityTQ","email":"1586049354@qq.com","commits":7},{"name":"angycathy","email":"157373097+angycathy@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":13.29,"words":3988},"filePathRelative":"guide/basesystem/identification.md","localizedDate":"2023年12月25日","autoDesc":true,"excerpt":"<p>这个章节会介绍武器、装备的一些词条功能作用</p>\\n<p>由于词条总数实在过多，下面会根据功能性进行分类</p>\\n<blockquote>\\n<p><s>由于是纯文字所以超级无聊枯燥乏味繁冗复杂，写的好累好烦好困好饿好精神好饱好吃好玩好有意思，我好懒我不想动脑子但是我又要长脑子了脑子又要爆了，看得懂就看，看不懂可以多玩一会再回来看，再看不懂就不用看了直接脑补（真的）。</s></p>\\n</blockquote>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>如果你想查找装备品质、词条介绍等内容，可以查阅<a href=\\"/guide/basesystem/itemlevel.html\\" target=\\"_blank\\">这里</a></p>\\n</div>"}');export{S as comp,x as data};
