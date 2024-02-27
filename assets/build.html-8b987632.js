import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as n,f as e,e as r,d as s,a as l}from"./app-82be523a.js";const o={},d=e("p",null,"什么是配装(build)？",-1),h=e("p",null,"build指的是一整套装备，通常，对于某个特定武器(如神话武器)想要发挥其最大作用，需要特定的技能树和装备，这便是build。",-1),c=e("p",null,[e("s",null,"算了不回答这个问题")],-1),u=e("p",null,"一般来说，玩家在满级前不需要特别完备的build，能撑到满级后再使用强力build(大部分时候是抄前人留下的完备build)即可。",-1),b=e("p",null,"当然，如果你想从零开始自己创造一套完善的build供自己使用，那你就需要知道一些配装的思路，这便是这篇文档要讲述的内容。",-1),m={class:"hint-container tip"},_=e("p",{class:"hint-container-title"},"提示",-1),g=e("p",null,"在下面提及的配装思路中，会出现一些常用的装备",-1),f=e("p",null,"并且可以使用下面这个网址进行配装的尝试和装备信息的查询：",-1),w={href:"https://hppeng-wynn.github.io",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,"这个网址是国外大佬做的，看不懂就到群里多问",-1),v=e("p",null,"当然大部分时候抄作业足够满足你的日常需求",-1),C=l('<h2 id="开始之前" tabindex="-1"><a class="header-anchor" href="#开始之前" aria-hidden="true">#</a> 开始之前</h2><p>想要自己构建合适的build，首先需要注意几个基础信息：</p><p>1.确定自己想用什么武器<br> 2.大部分武器，装备都有属性点数的需求<br> 3.一个满级的class最多只能使用200点自由分配的属性点，且单个属性点只能主动分配最多100个<br> 4.护甲和饰品提供的属性点能帮助你穿上原本不足以穿上的装备，而武器上的属性点无法被有效利用</p><p>大招有一个思路后，就可以进行接下来的讲解。</p><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><p>一般来说，一个合格的build需要同时拥有足够的生存能力和输出能力，当然有多少血量算足够，有多少dps算足够，每个人的思路肯定都不一样。</p><p>对于新手配装，一般建议尽可能使用三种属性点需求的装备，并且包含水属性，以及至少包含火/气属性中的一个，这跟游戏的装备设计规律有关(后面会讲)。</p><p>或者你不想思考了就上全彩虹配装(后面也会讲)。</p><p><strong>当前版本环境下，大部分玩家使用施法作为主要输出手段，所以这里先讲技能流的配装，以普攻为主的流派会在后面补充。</strong></p><p>评判生存能力的重要标准是hp和ehp(在游戏内的指南针中可以查看到对应的数据)，大部分护甲可以为你提供血量，属性点中的火(防御)和气(闪避)则能提升有效血量。对于某些特殊装备，需要考虑生命回复。对于新玩家一般推荐使用hp&gt;10000，ehp&gt;40000的build</p><p>对于输出能力，主要评判的是装备上的增伤(如一般的技能流会看spell dmg, spell dmg%, element dmg等)和能量续航(mana regen/mana steal/技能减耗)，目前除去少部分流派不需要特别注重能量(奥术法师：manastorm，腐化战士：利用血量代替能量施法，ts/hm流)，都需要有一定的能量续航手段，具体需要多少mr取决于使用者的施法习惯和技能树。</p><p>这里给大家提供一个快速上手的配装思路：</p><p>1.不论用的是什么武器，裤子使用Vaward，手镯使用prowess，这将直接无条件为你提供所有属性点各10点</p><p>2.其中一个戒指使用moon pool circlet(来自于qira水层)，这大约能满足整套配装30%左右的回蓝需求(当然这并不意味着你要在int上花费55属性点，也许会有其他的装备提供额外int)</p><p>3.其余单件中，优先使用qira任务兑换的战利品，这些单件的质量都很高，但请注意根据你的武器类型(如：使用gale&#39;s force作为主武器的话，可以选择地水气或者电水气；但是水火气就是一个不太合适的搭配)。</p><p>4.完成上面三个步骤后，整套配装应该还剩下2-3个空位，根据让整套配装总血量尽可能&gt;12000，总回蓝(mr+ms)尽可能&gt;40，补充你所喜欢的其他单件，注意尽量使用高等级区间的装备，且如果使用神话武器的话，注意属性点需求。</p><p>5.上一步中如果你能让整套build的hpr&gt;200更好，这样能帮你省去大量的血药需求。</p><p>6.此时技能点如果有富余，考虑这两件事：将使用的qira装备替换为同位置同属性需求，等级需求&gt;=101的装备；把剩余属性点分配给火/气，尽量保证二者平均</p><p>按照上述步骤后，得到的一整套build应当能保证你的生存和续航需求，可以保证你在大部分环境下不会暴毙，当然这只是一个快速上手，并不一定能发挥你手上的武器的最大作用。</p><div class="hint-container tip"><p class="hint-container-title">万能公式</p><p>另外如果你实在不想思考，这里有一个当前版本的万能公式可以抄：<br> 头盔：Morph-stardust<br> 胸甲：Libra<br> 裤子：Aleph-Null/Vaward<br> 靴子：你有什么神话鞋就用什么神话鞋/Epilogue/Capricorn<br> 戒指：intensity+mool pool<br> 手镯：Prowess/Remika&#39;s/Succession<br> 项链：Contrust/Diamond fusion/Gigabyte<br> 所有武器都能套这个公式，得到的结果不会太弱，也不会很脆。</p></div><p>若你指向对配装的逻辑浅尝辄止，到这里的内容已经能满足你的需求，可以自己先去尝试或者抄别人的作业了，再接下来的内容会更主观，且以经验为主，或许你可以自己总结出更好的经验。</p><div class="hint-container danger"><p class="hint-container-title">关于hive装备</p><p>配装时务必时刻记住，hive同层的装备是无法同时装备的，否则会受到大量负面效果</p><p>例如，prowess与contrust，intensity这三件饰品只能同时装备一件在身上</p></div><h2 id="进阶" tabindex="-1"><a class="header-anchor" href="#进阶" aria-hidden="true">#</a> 进阶</h2><p>除去神话品质的靴子，每件装备能为你提供大约2000~4000的血量。能够用于满级构筑的装备大部分都是等级需求在Lvl 60以上的装备，这其中<strong>绝大部分护甲类装备</strong>的设计都遵循以下规律：</p><p>1.如果装备的属性点需求以雷/气属性为主，那么该装备能提供的血量偏低，如果提供能量回复手段多数为mana steal，一般不提供hpr而是提供hps</p><p>2.如果装备的属性点需求以地/火属性为主，那么该装备会提供高于平均水准的血量，一般副词条中增伤词条较少，生存类词条(额外hp/hpr等)较多，如果提供mana regen则数值会较低</p><p>3.如果装备的属性点需求包含水，那么该装备一般会提供mana regen或者spell damage词条，且提供的血量会偏低</p><p>4.如果装备的属性点需求是三或四种，那么该装备一般比较极端，难以运用到配装当中，如果你是第一次尝试配装，不建议死磕在某一件这样的单件上</p><p>5.如果这件装备看起来啥都有(彩虹)，那它大概率泛用性很高(如：vaward,libra,gigabyte)</p><p>6.如果一件装备提供了很强的输出能力，那它提供的血量和技能点会偏少(如Conduit of Spirit)，反之亦然(如Cancer)。</p><p>当然，凡事都有特例，上面列举的只是绝大部分装备的设计规律。</p><p>一般来说，在配装中如果你强烈要使用某件对你输出提升特别大的单件(如胸甲使用Conduit of Spirit)，那你必然需要一件提供更多血量的装备来平衡(如放弃提供伤害的Diamond Steam Necklace使用Contrust)，否则整个配装的整体生存能力就会偏弱(游戏技术上来了之后可以不考虑后者)。</p><p>对于饰品，一般用传说岛的钻石饰品补足空位即可拥有足够的强度，除此之外，你可以根据自己的需求，通过上面提及的网站进行筛选，几乎都能找到合适的备选方案，如：无条件提供点数的戒指Soldier，Reminder，提供伤害加成的Yin/Yang，提供回蓝的Photon/Summa都是常见的备选替换。</p><p>对于法师或者弓箭手这样的远程职业，在能力允许的范围内，可以尝试适当降低装备的ehp，选用输出更高的装备或者是自制装备来进一步提升输出，前提是你自己要有能力活下来(理论输出再高，一旦被秒，那输出都是0)。</p><p>另外对于每种元素类型，都有非常合适的优质单件可以优先考虑加入构筑：<br> 地：Chain rule(裤子)/Pisces(头盔)/Olive(戒指)<br> 雷：Cumulonimbus(头盔)/Capricorn(靴子)<br> 水：Anamnesis(头盔)/Aquarius(胸甲)<br> 火：Capsid Frame(头盔)/Ophiuchos(裤子)<br> 气：Conduit of Spirit(胸甲)/Gale&#39;s sight(头盔)/Unravel(头盔)</p><p>对于属性点不足的情况，可以优先考虑Vaward/Prowess/Gigabyte几个无条件提供大量属性点的装备，其次考虑Libra/Far cosmic/Diamond fusion Necklace这类彩虹点数装备，再考虑提供大量单种或两种属性点的装备(Pisces,Cancer等)</p><p>除此之外，仅对于提升伤害来说，游戏内存在两个优先级非常高的词条：Spell damage(额外中性技能伤害，后用Raw spell代表)和Element damage(额外元素伤害)</p><p>打个不太准确的比方：你的武器DPS是500，装备提供100的Raw spell，那最终DPS就会被提升为600，这种情况下100Raw spell的提升跟20%spell damage的提升差不多，换言之，武器面板越低，Raw spell的提升越明显，甚至超过%Spell dmg对输出的提升，而如果你对装备类型熟悉就会知道，单件装备很难有超过30%的伤害提升，而出现Raw spell的装备几乎都能提供超过100的数值。</p><p>这类装备诸如Wanderlust, Aleph null, Stardew对于整体dps的提升都很显著，缺点就是对于新玩家而言比较贵，且像Stardew这样的装备很难塞进常规的build当中。</p><p>通过上面的思路，外加利用网站筛选搜素的帮助，你可以快速组成一套满足需求的build。</p><h2 id="特殊" tabindex="-1"><a class="header-anchor" href="#特殊" aria-hidden="true">#</a> 特殊</h2><p>这里的特殊，指的是使用普攻作为主要输出方式的特殊bulid，比如tier stack(ts)/heavy melle(hm)</p><p>二者的思路都是提升普攻伤害，选择能提升普通攻击伤害和武器面板对应的元素伤害的装备(如Blide trust)，且不考虑属性点问题</p><p>ts的配装思路：使用高面板，攻速为Suerp slow的武器，通过提升6-7层攻速，达成高攻速高单次伤害的输出。</p><p>hm的配装思路，使用高面板，攻速为Super slow的武器，使用提升高额普攻伤害但降低攻速的装备(如Dawnbreak)，利用攻速保底(super slow是最慢了，再降低攻速也不会更慢了)提升巨额单次输出。</p><p>另：Panic Zealot这把非常特殊的武器有一套非常特殊的专属build，像这样类似的只有一个武器能用的build还有很多，大家真要玩的话可以多问问群里的老玩家，在此不多赘复。</p><p>除此之外还有一些非主流的hybrid(普攻+技能混合)打法，适配性很低，不在此介绍。</p>',47);function k(x,y){const p=t("ExternalLinkIcon");return i(),n("div",null,[d,h,c,u,b,e("div",m,[_,g,f,e("p",null,[e("a",w,[r("https://hppeng-wynn.github.io"),s(p)])]),S,v]),C])}const R=a(o,[["render",k],["__file","build.html.vue"]]);export{R as default};
