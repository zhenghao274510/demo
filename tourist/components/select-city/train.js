const citys = [{
		"tag": "热门城",
		"cities": [{
				"id": "110100",
				"name": "北京",
				"lon":"116.413387",
				"lat":"39.910924"
			},
			{
				"id": "310100",
				"name": "上海",
				"lon":"121.48054",
				"lat":"31.235929"
			},
			{
				"id": "440100",
				"name": "广州",
				"lon":"113.271142",
				"lat":"23.138526"
			},
			{
				"id": "440300",
				"name": "深圳",
				"lon":"114.067139",
				"lat":"22.551126"
			},
			{
				"id": "420100",
				"name": "武汉",
				"lon":"114.310724",
				"lat":"30.598467"
			}
		]
	},
	{
		"tag": "A",
		"cities": [{
				"id": "210300",
				"name": "鞍山",
				"lon":"123.001227",
				"lat":"41.115052",
				"dis": [{
						"disid": "210302",
						"disname": "铁东区"
					},
					{
						"disid": "210303",
						"disname": "铁西区"
					},
					{
						"disid": "210304",
						"disname": "立山区"
					},
					{
						"disid": "210311",
						"disname": "千山区"
					},
					{
						"disid": "210321",
						"disname": "台安县"
					},
					{
						"disid": "210323",
						"disname": "岫岩满族自治县"
					},
					{
						"disid": "210381",
						"disname": "海城"
					}
				]
			},
			{
				"id": "340800",
				"name": "安庆",
				"lon":"117.064614",
				"lat":"30.531455",
				"dis": [{
						"disid": "340802",
						"disname": "迎江区"
					},
					{
						"disid": "340803",
						"disname": "大观区"
					},
					{
						"disid": "340811",
						"disname": "宜秀区"
					},
					{
						"disid": "340822",
						"disname": "怀宁县"
					},
					{
						"disid": "340823",
						"disname": "枞阳县"
					},
					{
						"disid": "340824",
						"disname": "潜山县"
					},
					{
						"disid": "340825",
						"disname": "太湖县"
					},
					{
						"disid": "340826",
						"disname": "宿松县"
					},
					{
						"disid": "340827",
						"disname": "望江县"
					},
					{
						"disid": "340828",
						"disname": "岳西县"
					},
					{
						"disid": "340881",
						"disname": "桐城"
					}
				]
			},
			{
				"id": "410500",
				"name": "安阳",
				"lon":"114.398209",
				"lat":"36.106873",
				"dis": [{
						"disid": "410502",
						"disname": "文峰区"
					},
					{
						"disid": "410503",
						"disname": "北关区"
					},
					{
						"disid": "410505",
						"disname": "殷都区"
					},
					{
						"disid": "410506",
						"disname": "龙安区"
					},
					{
						"disid": "410522",
						"disname": "安阳县"
					},
					{
						"disid": "410523",
						"disname": "汤阴县"
					},
					{
						"disid": "410526",
						"disname": "滑县"
					},
					{
						"disid": "410527",
						"disname": "内黄县"
					},
					{
						"disid": "410581",
						"disname": "林州"
					}
				]
			},
			{
				"id": "152900",
				"name": "阿拉善盟",
				"lon":"105.735229",
				"lat":"38.858277",
				"dis": [{
						"disid": "152921",
						"disname": "阿拉善左旗"
					},
					{
						"disid": "152922",
						"disname": "阿拉善右旗"
					},
					{
						"disid": "152923",
						"disname": "额济纳旗"
					}
				]
			},
			{
				"id": "520400",
				"name": "安顺",
				"lon":"105.952404",
				"lat":"26.263919",
				"dis": [{
						"disid": "520402",
						"disname": "西秀区"
					},
					{
						"disid": "520421",
						"disname": "平坝县"
					},
					{
						"disid": "520422",
						"disname": "普定县"
					},
					{
						"disid": "520423",
						"disname": "镇宁布依族苗族自治县"
					},
					{
						"disid": "520424",
						"disname": "关岭布依族苗族自治县"
					},
					{
						"disid": "520425",
						"disname": "紫云苗族布依族自治县"
					}
				]
			},
			{
				"id": "542500",
				"name": "阿里地区",
				"lon":"80.113068",
				"lat":"32.506866",
				"dis": [{
						"disid": "542521",
						"disname": "普兰县"
					},
					{
						"disid": "542522",
						"disname": "札达县"
					},
					{
						"disid": "542523",
						"disname": "噶尔县"
					},
					{
						"disid": "542524",
						"disname": "日土县"
					},
					{
						"disid": "542525",
						"disname": "革吉县"
					},
					{
						"disid": "542526",
						"disname": "改则县"
					},
					{
						"disid": "542527",
						"disname": "措勤县"
					}
				]
			},
			{
				"id": "610900",
				"name": "安康",
				"lon":"109.028992",
				"lat":"32.689541",
				"dis": [{
						"disid": "610902",
						"disname": "汉滨区"
					},
					{
						"disid": "610921",
						"disname": "汉阴县"
					},
					{
						"disid": "610922",
						"disname": "石泉县"
					},
					{
						"disid": "610923",
						"disname": "宁陕县"
					},
					{
						"disid": "610924",
						"disname": "紫阳县"
					},
					{
						"disid": "610925",
						"disname": "岚皋县"
					},
					{
						"disid": "610926",
						"disname": "平利县"
					},
					{
						"disid": "610927",
						"disname": "镇坪县"
					},
					{
						"disid": "610928",
						"disname": "旬阳县"
					},
					{
						"disid": "610929",
						"disname": "白河县"
					}
				]
			},
			{
				"id": "652900",
				"name": "阿克苏地区",
				"lon":"80.266077",
				"lat":"41.173291",
				"dis": [{
						"disid": "652901",
						"disname": "阿克苏"
					},
					{
						"disid": "652922",
						"disname": "温宿县"
					},
					{
						"disid": "652923",
						"disname": "库车县"
					},
					{
						"disid": "652924",
						"disname": "沙雅县"
					},
					{
						"disid": "652925",
						"disname": "新和县"
					},
					{
						"disid": "652926",
						"disname": "拜城县"
					},
					{
						"disid": "652927",
						"disname": "乌什县"
					},
					{
						"disid": "652928",
						"disname": "阿瓦提县"
					},
					{
						"disid": "652929",
						"disname": "柯坪县"
					}
				]
			},
			{
				"id": "513200",
				"name": "阿坝藏族羌族自治州",
				"lon":"102.231129",
				"lat":"31.910416",
				"dis": [{
						"disid": "513221",
						"disname": "汶川县"
					},
					{
						"disid": "513222",
						"disname": "理县"
					},
					{
						"disid": "513223",
						"disname": "茂县"
					},
					{
						"disid": "513224",
						"disname": "松潘县"
					},
					{
						"disid": "513225",
						"disname": "九寨沟县"
					},
					{
						"disid": "513226",
						"disname": "金川县"
					},
					{
						"disid": "513227",
						"disname": "小金县"
					},
					{
						"disid": "513228",
						"disname": "黑水县"
					},
					{
						"disid": "513229",
						"disname": "马尔康县"
					},
					{
						"disid": "513230",
						"disname": "壤塘县"
					},
					{
						"disid": "513231",
						"disname": "阿坝县"
					},
					{
						"disid": "513232",
						"disname": "若尔盖县"
					},
					{
						"disid": "513233",
						"disname": "红原县"
					}
				]
			},
			{
				"id": "654300",
				"name": "阿勒泰地区",
				"lon":"88.146489",
				"lat":"47.851891",
				"dis": [{
						"disid": "654301",
						"disname": "阿勒泰"
					},
					{
						"disid": "654321",
						"disname": "布尔津县"
					},
					{
						"disid": "654322",
						"disname": "富蕴县"
					},
					{
						"disid": "654323",
						"disname": "福海县"
					},
					{
						"disid": "654324",
						"disname": "哈巴河县"
					},
					{
						"disid": "654325",
						"disname": "青河县"
					},
					{
						"disid": "654326",
						"disname": "吉木乃县"
					}
				]
			}
		]
	},
	{
		"tag": "B",
		"cities": [{
				"id": "110100",
				"name": "北京",
				"lon":"116.413387",
				"lat":"39.910924",
				"dis": [{
						"disid": "110101",
						"disname": "东城区"
					},
					{
						"disid": "110102",
						"disname": "西城区"
					},
					{
						"disid": "110103",
						"disname": "崇文区"
					},
					{
						"disid": "110104",
						"disname": "宣武区"
					},
					{
						"disid": "110105",
						"disname": "朝阳区"
					},
					{
						"disid": "110106",
						"disname": "丰台区"
					},
					{
						"disid": "110107",
						"disname": "石景山区"
					},
					{
						"disid": "110108",
						"disname": "海淀区"
					},
					{
						"disid": "110109",
						"disname": "门头沟区"
					},
					{
						"disid": "110111",
						"disname": "房山区"
					},
					{
						"disid": "110112",
						"disname": "通州区"
					},
					{
						"disid": "110113",
						"disname": "顺义区"
					},
					{
						"disid": "110114",
						"disname": "昌平区"
					},
					{
						"disid": "110115",
						"disname": "大兴区"
					},
					{
						"disid": "110116",
						"disname": "怀柔区"
					},
					{
						"disid": "110117",
						"disname": "平谷区"
					},
					{
						"disid": "110228",
						"disname": "密云县"
					},
					{
						"disid": "110229",
						"disname": "延庆县"
					}
				]
			},
			{
				"id": "130600",
				"name": "保定",
				"lon":"115.472322",
				"lat":"38.87909",
				"dis": [{
						"disid": "130602",
						"disname": "新区"
					},
					{
						"disid": "130603",
						"disname": "北区"
					},
					{
						"disid": "130604",
						"disname": "南区"
					},
					{
						"disid": "130621",
						"disname": "满城县"
					},
					{
						"disid": "130622",
						"disname": "清苑县"
					},
					{
						"disid": "130623",
						"disname": "涞水县"
					},
					{
						"disid": "130624",
						"disname": "阜平县"
					},
					{
						"disid": "130625",
						"disname": "徐水县"
					},
					{
						"disid": "130626",
						"disname": "定兴县"
					},
					{
						"disid": "130627",
						"disname": "唐县"
					},
					{
						"disid": "130628",
						"disname": "高阳县"
					},
					{
						"disid": "130629",
						"disname": "容城县"
					},
					{
						"disid": "130630",
						"disname": "涞源县"
					},
					{
						"disid": "130631",
						"disname": "望都县"
					},
					{
						"disid": "130632",
						"disname": "安新县"
					},
					{
						"disid": "130633",
						"disname": "易县"
					},
					{
						"disid": "130634",
						"disname": "曲阳县"
					},
					{
						"disid": "130635",
						"disname": "蠡县"
					},
					{
						"disid": "130636",
						"disname": "顺平县"
					},
					{
						"disid": "130637",
						"disname": "博野县"
					},
					{
						"disid": "130638",
						"disname": "雄县"
					},
					{
						"disid": "130681",
						"disname": "涿州"
					},
					{
						"disid": "130682",
						"disname": "定州"
					},
					{
						"disid": "130683",
						"disname": "安国"
					},
					{
						"disid": "130684",
						"disname": "高碑店"
					}

				]
			},
			{
				"id": "150200",
				"name": "包头",
				"lon":"109.846827",
				"lat":"40.662929",
				"dis": [{
						"disid": "150202",
						"disname": "东河区"
					},
					{
						"disid": "150203",
						"disname": "昆都仑区"
					},
					{
						"disid": "150204",
						"disname": "青山区"
					},
					{
						"disid": "150205",
						"disname": "石拐区"
					},
					{
						"disid": "150206",
						"disname": "白云鄂博矿区"
					},
					{
						"disid": "150207",
						"disname": "九原区"
					},
					{
						"disid": "150221",
						"disname": "土默特右旗"
					},
					{
						"disid": "150222",
						"disname": "固阳县"
					},
					{
						"disid": "150223",
						"disname": "达尔罕茂明安联合旗"
					}
				]
			},
			{
				"id": "210500",
				"name": "本溪",
				"lon":"123.693947",
				"lat":"41.492483",
				"dis": [{
						"disid": "210502",
						"disname": "平山区"
					},
					{
						"disid": "210503",
						"disname": "溪湖区"
					},
					{
						"disid": "210504",
						"disname": "明山区"
					},
					{
						"disid": "210505",
						"disname": "南芬区"
					},
					{
						"disid": "210521",
						"disname": "本溪满族自治县"
					},
					{
						"disid": "210522",
						"disname": "桓仁满族自治县"
					}
				]
			},
			{
				"id": "340300",
				"name": "蚌埠",
				"lon":"117.395226",
				"lat":"32.920553",
				"dis": [{
						"disid": "340302",
						"disname": "龙子湖区"
					},
					{
						"disid": "340303",
						"disname": "蚌山区"
					},
					{
						"disid": "340304",
						"disname": "禹会区"
					},
					{
						"disid": "340311",
						"disname": "淮上区"
					},
					{
						"disid": "340321",
						"disname": "怀远县"
					},
					{
						"disid": "340322",
						"disname": "五河县"
					},
					{
						"disid": "340323",
						"disname": "固镇县"
					}
				]
			},
			{
				"id": "450500",
				"name": "北海",
				"lon":"109.143204",
				"lat":"21.460735",
				"dis": [{
						"disid": "450502",
						"disname": "海城区"
					},
					{
						"disid": "450503",
						"disname": "银海区"
					},
					{
						"disid": "450512",
						"disname": "铁山港区"
					},
					{
						"disid": "450521",
						"disname": "合浦县"
					}
				]
			},
			{
				"id": "371600",
				"name": "滨州",
				"lon":"117.98473",
				"lat":"37.387165",
				"dis": [{
						"disid": "371602",
						"disname": "滨城区"
					},
					{
						"disid": "371621",
						"disname": "惠民县"
					},
					{
						"disid": "371622",
						"disname": "阳信县"
					},
					{
						"disid": "371623",
						"disname": "无棣县"
					},
					{
						"disid": "371624",
						"disname": "沾化县"
					},
					{
						"disid": "371625",
						"disname": "博兴县"
					},
					{
						"disid": "371626",
						"disname": "邹平县"
					}
				]
			},
			{
				"id": "610300",
				"name": "宝鸡",
				"lon":"107.24371",
				"lat":"34.368438",
				"dis": [{
						"disid": "610302",
						"disname": "渭滨区"
					},
					{
						"disid": "610303",
						"disname": "金台区"
					},
					{
						"disid": "610304",
						"disname": "陈仓区"
					},
					{
						"disid": "610322",
						"disname": "凤翔县"
					},
					{
						"disid": "610323",
						"disname": "岐山县"
					},
					{
						"disid": "610324",
						"disname": "扶风县"
					},
					{
						"disid": "610326",
						"disname": "眉县"
					},
					{
						"disid": "610327",
						"disname": "陇县"
					},
					{
						"disid": "610328",
						"disname": "千阳县"
					},
					{
						"disid": "610329",
						"disname": "麟游县"
					},
					{
						"disid": "610330",
						"disname": "凤县"
					},
					{
						"disid": "610331",
						"disname": "太白县"
					}
				]
			},
			{
				"id": "341600",
				"name": "亳州",
				"lon":"115.785903",
				"lat":"33.851122",
				"dis": [{
						"disid": "341602",
						"disname": "谯城区"
					},
					{
						"disid": "341621",
						"disname": "涡阳县"
					},
					{
						"disid": "341622",
						"disname": "蒙城县"
					},
					{
						"disid": "341623",
						"disname": "利辛县"
					}
				]
			},
			{
				"id": "150800",
				"name": "巴彦淖尔",
				"lon":"107.394687",
				"lat":"40.750232",
				"dis": [{
						"disid": "150802",
						"disname": "临河区"
					},
					{
						"disid": "150821",
						"disname": "五原县"
					},
					{
						"disid": "150822",
						"disname": "磴口县"
					},
					{
						"disid": "150823",
						"disname": "乌拉特前旗"
					},
					{
						"disid": "150824",
						"disname": "乌拉特中旗"
					},
					{
						"disid": "150825",
						"disname": "乌拉特后旗"
					},
					{
						"disid": "150826",
						"disname": "杭锦后旗"
					}
				]
			},
			{
				"id": "220600",
				"name": "白山",
				"lon":"126.428766",
				"lat":"41.940917",
				"dis": [{
						"disid": "220602",
						"disname": "八道江区"
					},
					{
						"disid": "220605",
						"disname": "江源区"
					},
					{
						"disid": "220621",
						"disname": "抚松县"
					},
					{
						"disid": "220622",
						"disname": "靖宇县"
					},
					{
						"disid": "220623",
						"disname": "长白朝鲜族自治县"
					},
					{
						"disid": "220681",
						"disname": "临江"
					}
				]
			},
			{
				"id": "220800",
				"name": "白城",
				"lon":"122.846449",
				"lat":"45.625102",
				"dis": [{
						"disid": "220802",
						"disname": "洮北区"
					},
					{
						"disid": "220821",
						"disname": "镇赉县"
					},
					{
						"disid": "220822",
						"disname": "通榆县"
					},
					{
						"disid": "220881",
						"disname": "洮南"
					},
					{
						"disid": "220882",
						"disname": "大安"
					}
				]
			},
			{
				"id": "451000",
				"name": "百色",
				"lon":"106.6266",
				"lat":"23.90713",
				"dis": [{
						"disid": "451002",
						"disname": "右江区"
					},
					{
						"disid": "451021",
						"disname": "田阳县"
					},
					{
						"disid": "451022",
						"disname": "田东县"
					},
					{
						"disid": "451023",
						"disname": "平果县"
					},
					{
						"disid": "451024",
						"disname": "德保县"
					},
					{
						"disid": "451025",
						"disname": "靖西县"
					},
					{
						"disid": "451026",
						"disname": "那坡县"
					},
					{
						"disid": "451027",
						"disname": "凌云县"
					},
					{
						"disid": "451028",
						"disname": "乐业县"
					},
					{
						"disid": "451029",
						"disname": "田林县"
					},
					{
						"disid": "451030",
						"disname": "西林县"
					},
					{
						"disid": "451031",
						"disname": "隆林各族自治县"
					}
				]
			},
			{
				"id": "511900",
				"name": "巴中",
				"lon":"106.75072",
				"lat":"31.872889",
				"dis": [{
						"disid": "511902",
						"disname": "巴州区"
					},
					{
						"disid": "511921",
						"disname": "通江县"
					},
					{
						"disid": "511922",
						"disname": "南江县"
					},
					{
						"disid": "511923",
						"disname": "平昌县"
					}
				]
			},
			{
				"id": "530500",
				"name": "保山",
				"lon":"99.175264",
				"lat":"25.138516",
				"dis": [{
						"disid": "530502",
						"disname": "隆阳区"
					},
					{
						"disid": "530521",
						"disname": "施甸县"
					},
					{
						"disid": "530522",
						"disname": "腾冲县"
					},
					{
						"disid": "530523",
						"disname": "龙陵县"
					},
					{
						"disid": "530524",
						"disname": "昌宁县"
					}
				]
			},
			{
				"id": "520500",
				"name": "毕节",
				"lon":"105.297728",
				"lat":"27.288673",
				"dis": [{
						"disid": "520502",
						"disname": "七星关区"
					},
					{
						"disid": "520521",
						"disname": "大方县"
					},
					{
						"disid": "520522",
						"disname": "黔西县"
					},
					{
						"disid": "520523",
						"disname": "金沙县"
					},
					{
						"disid": "520524",
						"disname": "织金县"
					},
					{
						"disid": "520525",
						"disname": "纳雍县"
					},
					{
						"disid": "520526",
						"disname": "威宁彝族回族苗族自治县"
					},
					{
						"disid": "520527",
						"disname": "赫章县"
					}
				]
			},
			{
				"id": "652700",
				"name": "博尔塔拉蒙古自治州",
				"lon":"82.071473",
				"lat":"44.919141",
				"dis": [{
						"disid": "652701",
						"disname": "博乐"
					},
					{
						"disid": "652722",
						"disname": "精河县"
					},
					{
						"disid": "652723",
						"disname": "温泉县"
					}
				]
			},
			{
				"id": "652800",
				"name": "巴音郭楞蒙古自治州",
				"lon":"86.150849",
				"lat":"41.77459",
				"dis": [{
						"disid": "652801",
						"disname": "库尔勒"
					},
					{
						"disid": "652822",
						"disname": "轮台县"
					},
					{
						"disid": "652823",
						"disname": "尉犁县"
					},
					{
						"disid": "652824",
						"disname": "若羌县"
					},
					{
						"disid": "652825",
						"disname": "且末县"
					},
					{
						"disid": "652826",
						"disname": "焉耆回族自治县"
					},
					{
						"disid": "652827",
						"disname": "和静县"
					},
					{
						"disid": "652828",
						"disname": "和硕县"
					},
					{
						"disid": "652829",
						"disname": "博湖县"
					}
				]
			},
			{
				"id": "620400",
				"name": "白银",
				"lon":"104.145309",
				"lat":"36.549899",
				"dis": [

					{
						"disid": "620402",
						"disname": "白银区"
					},
					{
						"disid": "620403",
						"disname": "平川区"
					},
					{
						"disid": "620421",
						"disname": "靖远县"
					},
					{
						"disid": "620422",
						"disname": "会宁县"
					},
					{
						"disid": "620423",
						"disname": "景泰县"
					}
				]
			}
		]
	},
	{
		"tag": "C",
		"cities": [{
				"id": "510100",
				"name": "成都",
				"lon":"104.083542",
				"lat":"30.654332",
				"dis": [{
						"disid": "510104",
						"disname": "锦江区"
					},
					{
						"disid": "510105",
						"disname": "青羊区"
					},
					{
						"disid": "510106",
						"disname": "金牛区"
					},
					{
						"disid": "510107",
						"disname": "武侯区"
					},
					{
						"disid": "510108",
						"disname": "成华区"
					},
					{
						"disid": "510112",
						"disname": "龙泉驿区"
					},
					{
						"disid": "510113",
						"disname": "青白江区"
					},
					{
						"disid": "510114",
						"disname": "新都区"
					},
					{
						"disid": "510115",
						"disname": "温江区"
					},
					{
						"disid": "510121",
						"disname": "金堂县"
					},
					{
						"disid": "510122",
						"disname": "双流县"
					},
					{
						"disid": "510124",
						"disname": "郫县"
					},
					{
						"disid": "510129",
						"disname": "大邑县"
					},
					{
						"disid": "510131",
						"disname": "蒲江县"
					},
					{
						"disid": "510132",
						"disname": "新津县"
					},
					{
						"disid": "510181",
						"disname": "都江堰"
					},
					{
						"disid": "510182",
						"disname": "彭州"
					},
					{
						"disid": "510183",
						"disname": "邛崃"
					},
					{
						"disid": "510184",
						"disname": "崇州"
					}
				]
			},
			{
				"id": "500100",
				"name": "重庆",
				"lat":"29.56598",
				"lon":"106.559874",
				"dis": [{
						"disid": "500101",
						"disname": "万州区"
					},
					{
						"disid": "500102",
						"disname": "涪陵区"
					},
					{
						"disid": "500103",
						"disname": "渝中区"
					},
					{
						"disid": "500104",
						"disname": "大渡口区"
					},
					{
						"disid": "500105",
						"disname": "江北区"
					},
					{
						"disid": "500106",
						"disname": "沙坪坝区"
					},
					{
						"disid": "500107",
						"disname": "九龙坡区"
					},
					{
						"disid": "500108",
						"disname": "南岸区"
					},
					{
						"disid": "500109",
						"disname": "北碚区"
					},
					{
						"disid": "500110",
						"disname": "綦江区"
					},
					{
						"disid": "500111",
						"disname": "大足区"
					},
					{
						"disid": "500112",
						"disname": "渝北区"
					},
					{
						"disid": "500113",
						"disname": "巴南区"
					},
					{
						"disid": "500114",
						"disname": "黔江区"
					},
					{
						"disid": "500115",
						"disname": "长寿区"
					},
					{
						"disid": "500116",
						"disname": "江津区"
					},
					{
						"disid": "500117",
						"disname": "合川区"
					},
					{
						"disid": "500118",
						"disname": "永川区"
					},
					{
						"disid": "500119",
						"disname": "南川区"
					},
					{
						"disid": "500223",
						"disname": "潼南县"
					},
					{
						"disid": "500224",
						"disname": "铜梁县"
					},
					{
						"disid": "500226",
						"disname": "荣昌县"
					},
					{
						"disid": "500227",
						"disname": "璧山县"
					},
					{
						"disid": "500228",
						"disname": "梁平县"
					},
					{
						"disid": "500229",
						"disname": "城口县"
					},
					{
						"disid": "500230",
						"disname": "丰都县"
					},
					{
						"disid": "500231",
						"disname": "垫江县"
					},
					{
						"disid": "500232",
						"disname": "武隆县"
					},
					{
						"disid": "500233",
						"disname": "忠县"
					},
					{
						"disid": "500234",
						"disname": "开县"
					},
					{
						"disid": "500235",
						"disname": "云阳县"
					},
					{
						"disid": "500236",
						"disname": "奉节县"
					},
					{
						"disid": "500237",
						"disname": "巫山县"
					},
					{
						"disid": "500238",
						"disname": "巫溪县"
					},
					{
						"disid": "500240",
						"disname": "石柱土家族自治县"
					},
					{
						"disid": "500241",
						"disname": "秀山土家族苗族自治县"
					},
					{
						"disid": "500242",
						"disname": "酉阳土家族苗族自治县"
					},
					{
						"disid": "500243",
						"disname": "彭水苗族土家族自治县"
					}
				]
			},
			{
				"id": "430100",
				"name": "长沙",
				"lat":"28.235399",
				"lon":"112.946332",
				"dis": [{
						"disid": "430102",
						"disname": "芙蓉区"
					},
					{
						"disid": "430103",
						"disname": "天心区"
					},
					{
						"disid": "430104",
						"disname": "岳麓区"
					},
					{
						"disid": "430105",
						"disname": "开福区"
					},
					{
						"disid": "430111",
						"disname": "雨花区"
					},
					{
						"disid": "430112",
						"disname": "望城区"
					},
					{
						"disid": "430121",
						"disname": "长沙县"
					},
					{
						"disid": "430124",
						"disname": "宁乡县"
					},
					{
						"disid": "430181",
						"disname": "浏阳"
					}
				]
			},
			{
				"id": "220100",
				"name": "长春",
				"lon":"125.329744",
				"lat":"43.819873",
				"dis": [{
						"disid": "220102",
						"disname": "南关区"
					},
					{
						"disid": "220103",
						"disname": "宽城区"
					},
					{
						"disid": "220104",
						"disname": "朝阳区"
					},
					{
						"disid": "220105",
						"disname": "二道区"
					},
					{
						"disid": "220106",
						"disname": "绿园区"
					},
					{
						"disid": "220112",
						"disname": "双阳区"
					},
					{
						"disid": "220122",
						"disname": "农安县"
					},
					{
						"disid": "220181",
						"disname": "九台"
					},
					{
						"disid": "220182",
						"disname": "榆树"
					},
					{
						"disid": "220183",
						"disname": "德惠"
					}
				]
			},
			{
				"id": "320400",
				"name": "常州",
				"lon":"119.982921",
				"lat":"31.814323",
				"dis": [{
						"disid": "320402",
						"disname": "天宁区"
					},
					{
						"disid": "320404",
						"disname": "钟楼区"
					},
					{
						"disid": "320405",
						"disname": "戚墅堰区"
					},
					{
						"disid": "320411",
						"disname": "新北区"
					},
					{
						"disid": "320412",
						"disname": "武进区"
					},
					{
						"disid": "320481",
						"disname": "溧阳"
					},
					{
						"disid": "320482",
						"disname": "金坛"
					}
				]
			},
			{
				"id": "130900",
				"name": "沧州",
				"lon":"116.845293",
				"lat":"38.310668",
				"dis": [{
						"disid": "130902",
						"disname": "新华区"
					},
					{
						"disid": "130903",
						"disname": "运河区"
					},
					{
						"disid": "130921",
						"disname": "沧县"
					},
					{
						"disid": "130922",
						"disname": "青县"
					},
					{
						"disid": "130923",
						"disname": "东光县"
					},
					{
						"disid": "130924",
						"disname": "海兴县"
					},
					{
						"disid": "130925",
						"disname": "盐山县"
					},
					{
						"disid": "130926",
						"disname": "肃宁县"
					},
					{
						"disid": "130927",
						"disname": "南皮县"
					},
					{
						"disid": "130928",
						"disname": "吴桥县"
					},
					{
						"disid": "130929",
						"disname": "献县"
					},
					{
						"disid": "130930",
						"disname": "孟村回族自治县"
					},
					{
						"disid": "130981",
						"disname": "泊头"
					},
					{
						"disid": "130982",
						"disname": "任丘"
					},
					{
						"disid": "130983",
						"disname": "黄骅"
					},
					{
						"disid": "130984",
						"disname": "河间"
					}
				]
			},
			{
				"id": "130800",
				"name": "承德",
				"lon":"117.970258",
				"lat":"40.958728",
				"dis": [{
						"disid": "130802",
						"disname": "双桥区"
					},
					{
						"disid": "130803",
						"disname": "双滦区"
					},
					{
						"disid": "130804",
						"disname": "鹰手营子矿区"
					},
					{
						"disid": "130821",
						"disname": "承德县"
					},
					{
						"disid": "130822",
						"disname": "兴隆县"
					},
					{
						"disid": "130823",
						"disname": "平泉县"
					},
					{
						"disid": "130824",
						"disname": "滦平县"
					},
					{
						"disid": "130825",
						"disname": "隆化县"
					},
					{
						"disid": "130826",
						"disname": "丰宁满族自治县"
					},
					{
						"disid": "130827",
						"disname": "宽城满族自治县"
					},
					{
						"disid": "130828",
						"disname": "围场满族蒙古族自治县"
					}

				]
			},
			{
				"id": "430700",
				"name": "常德",
				"lon":"111.706311",
				"lat":"29.038761",
				"dis": [{
						"disid": "430702",
						"disname": "武陵区"
					},
					{
						"disid": "430703",
						"disname": "鼎城区"
					},
					{
						"disid": "430721",
						"disname": "安乡县"
					},
					{
						"disid": "430722",
						"disname": "汉寿县"
					},
					{
						"disid": "430723",
						"disname": "澧县"
					},
					{
						"disid": "430724",
						"disname": "临澧县"
					},
					{
						"disid": "430725",
						"disname": "桃源县"
					},
					{
						"disid": "430726",
						"disname": "石门县"
					},
					{
						"disid": "430781",
						"disname": "津"
					}
				]
			},
			{
				"id": "431000",
				"name": "郴州",
				"lon":"113.020021",
				"lat":"25.776162",
				"dis": [{
						"disid": "431002",
						"disname": "北湖区"
					},
					{
						"disid": "431003",
						"disname": "苏仙区"
					},
					{
						"disid": "431021",
						"disname": "桂阳县"
					},
					{
						"disid": "431022",
						"disname": "宜章县"
					},
					{
						"disid": "431023",
						"disname": "永兴县"
					},
					{
						"disid": "431024",
						"disname": "嘉禾县"
					},
					{
						"disid": "431025",
						"disname": "临武县"
					},
					{
						"disid": "431026",
						"disname": "汝城县"
					},
					{
						"disid": "431027",
						"disname": "桂东县"
					},
					{
						"disid": "431028",
						"disname": "安仁县"
					}
				]
			},
			{
				"id": "140400",
				"name": "长治",
				"lon":"113.123999",
				"lat":"36.200801",
				"dis": [{
						"disid": "140402",
						"disname": "城区"
					},
					{
						"disid": "140411",
						"disname": "郊区"
					},
					{
						"disid": "140421",
						"disname": "长治县"
					},
					{
						"disid": "140423",
						"disname": "襄垣县"
					},
					{
						"disid": "140424",
						"disname": "屯留县"
					},
					{
						"disid": "140425",
						"disname": "平顺县"
					},
					{
						"disid": "140426",
						"disname": "黎城县"
					},
					{
						"disid": "140427",
						"disname": "壶关县"
					},
					{
						"disid": "140428",
						"disname": "长子县"
					},
					{
						"disid": "140429",
						"disname": "武乡县"
					},
					{
						"disid": "140430",
						"disname": "沁县"
					},
					{
						"disid": "140431",
						"disname": "沁源县"
					},
					{
						"disid": "140481",
						"disname": "潞城"
					}
				]
			},
			{
				"id": "341100",
				"name": "滁州",
				"lon":"118.34027",
				"lat":"32.261271",
				"dis": [{
						"disid": "341102",
						"disname": "琅琊区"
					},
					{
						"disid": "341103",
						"disname": "南谯区"
					},
					{
						"disid": "341122",
						"disname": "来安县"
					},
					{
						"disid": "341124",
						"disname": "全椒县"
					},
					{
						"disid": "341125",
						"disname": "定远县"
					},
					{
						"disid": "341126",
						"disname": "凤阳县"
					},
					{
						"disid": "341181",
						"disname": "天长"
					},
					{
						"disid": "341182",
						"disname": "明光"
					}
				]
			},
			{
				"id": "341700",
				"name": "池州",
				"lon":"117.498137",
				"lat":"30.671879",
				"dis": [{
						"disid": "341702",
						"disname": "贵池区"
					},
					{
						"disid": "341721",
						"disname": "东至县"
					},
					{
						"disid": "341722",
						"disname": "石台县"
					},
					{
						"disid": "341723",
						"disname": "青阳县"
					}
				]
			},
			{
				"id": "150400",
				"name": "赤峰",
				"lon":"118.896959",
				"lat":"42.262969",
				"dis": [{
						"disid": "150402",
						"disname": "红山区"
					},
					{
						"disid": "150403",
						"disname": "元宝山区"
					},
					{
						"disid": "150404",
						"disname": "松山区"
					},
					{
						"disid": "150421",
						"disname": "阿鲁科尔沁旗"
					},
					{
						"disid": "150422",
						"disname": "巴林左旗"
					},
					{
						"disid": "150423",
						"disname": "巴林右旗"
					},
					{
						"disid": "150424",
						"disname": "林西县"
					},
					{
						"disid": "150425",
						"disname": "克什克腾旗"
					},
					{
						"disid": "150426",
						"disname": "翁牛特旗"
					},
					{
						"disid": "150428",
						"disname": "喀喇沁旗"
					},
					{
						"disid": "150429",
						"disname": "宁城县"
					},
					{
						"disid": "150430",
						"disname": "敖汉旗"
					}
				]
			},
			{
				"id": "211300",
				"name": "朝阳",
				"lon":"120.457783",
				"lat":"41.578958",
				"dis": [{
						"disid": "211302",
						"disname": "双塔区"
					},
					{
						"disid": "211303",
						"disname": "龙城区"
					},
					{
						"disid": "211321",
						"disname": "朝阳县"
					},
					{
						"disid": "211322",
						"disname": "建平县"
					},
					{
						"disid": "211324",
						"disname": "喀喇沁左翼蒙古族自治县"
					},
					{
						"disid": "211381",
						"disname": "北票"
					},
					{
						"disid": "211382",
						"disname": "凌源"
					}
				]
			},
			{
				"id": "445100",
				"name": "潮州",
				"lon":"116.631478",
				"lat":"23.661564",
				"dis": [{
						"disid": "445102",
						"disname": "湘桥区"
					},
					{
						"disid": "445121",
						"disname": "潮安县"
					},
					{
						"disid": "445122",
						"disname": "饶平县"
					}
				]
			},
			{
				"id": "451400",
				"name": "崇左",
				"lon":"116.631478",
				"lat":"23.661564",
				"dis": [{
						"disid": "451402",
						"disname": "江洲区"
					},
					{
						"disid": "451421",
						"disname": "扶绥县"
					},
					{
						"disid": "451422",
						"disname": "宁明县"
					},
					{
						"disid": "451423",
						"disname": "龙州县"
					},
					{
						"disid": "451424",
						"disname": "大新县"
					},
					{
						"disid": "451425",
						"disname": "天等县"
					},
					{
						"disid": "451481",
						"disname": "凭祥"
					}
				]
			},
			{
				"id": "532300",
				"name": "楚雄彝族自治州",
				"lon":"101.534125",
				"lat":"25.05282",
				"dis": [{
						"disid": "532301",
						"disname": "楚雄"
					},
					{
						"disid": "532322",
						"disname": "双柏县"
					},
					{
						"disid": "532323",
						"disname": "牟定县"
					},
					{
						"disid": "532324",
						"disname": "南华县"
					},
					{
						"disid": "532325",
						"disname": "姚安县"
					},
					{
						"disid": "532326",
						"disname": "大姚县"
					},
					{
						"disid": "532327",
						"disname": "永仁县"
					},
					{
						"disid": "532328",
						"disname": "元谋县"
					},
					{
						"disid": "532329",
						"disname": "武定县"
					},
					{
						"disid": "532331",
						"disname": "禄丰县"
					}
				]
			},
			{
				"id": "542100",
				"name": "昌都地区",
				"lon":"97.174117",
				"lat":"31.148954",
				"dis": [{
						"disid": "542121",
						"disname": "昌都县"
					},
					{
						"disid": "542122",
						"disname": "江达县"
					},
					{
						"disid": "542123",
						"disname": "贡觉县"
					},
					{
						"disid": "542124",
						"disname": "类乌齐县"
					},
					{
						"disid": "542125",
						"disname": "丁青县"
					},
					{
						"disid": "542126",
						"disname": "察雅县"
					},
					{
						"disid": "542127",
						"disname": "八宿县"
					},
					{
						"disid": "542128",
						"disname": "左贡县"
					},
					{
						"disid": "542129",
						"disname": "芒康县"
					},
					{
						"disid": "542132",
						"disname": "洛隆县"
					},
					{
						"disid": "542133",
						"disname": "边坝县"
					}
				]
			},
			{
				"id": "652300",
				"name": "昌吉回族自治州",
				"lon":"87.315861",
				"lat":"44.016023",
				"dis": [{
						"disid": "652301",
						"disname": "昌吉"
					},
					{
						"disid": "652302",
						"disname": "阜康"
					},
					{
						"disid": "652323",
						"disname": "呼图壁县"
					},
					{
						"disid": "652324",
						"disname": "玛纳斯县"
					},
					{
						"disid": "652325",
						"disname": "奇台县"
					},
					{
						"disid": "652327",
						"disname": "吉木萨尔县"
					},
					{
						"disid": "652328",
						"disname": "木垒哈萨克自治县"
					}
				]
			}
		]
	},
	{
		"tag": "D",
		"cities": [{
				"id": "210200",
				"name": "大连",
				"lon":"121.623065",
				"lat":"38.918953",
				"dis": [{
						"disid": "210202",
						"disname": "中山区"
					},
					{
						"disid": "210203",
						"disname": "西岗区"
					},
					{
						"disid": "210204",
						"disname": "沙河口区"
					},
					{
						"disid": "210211",
						"disname": "甘井子区"
					},
					{
						"disid": "210212",
						"disname": "旅顺口区"
					},
					{
						"disid": "210213",
						"disname": "金州区"
					},
					{
						"disid": "210224",
						"disname": "长海县"
					},
					{
						"disid": "210281",
						"disname": "瓦房店"
					},
					{
						"disid": "210282",
						"disname": "普兰店"
					},
					{
						"disid": "210283",
						"disname": "庄河"
					}
				]
			},
			{
				"id": "441900",
				"name": "东莞",
				"lon":"113.757556",
				"lat":"23.02784",
				"dis": [{
						"disid": "441901",
						"disname": "莞城区"
					},
					{
						"disid": "441902",
						"disname": "常平区"
					},
					{
						"disid": "441903",
						"disname": "塘厦区"
					},
					{
						"disid": "441904",
						"disname": "其他"
					}
				]
			},
			{
				"id": "230600",
				"name": "大庆",
				"lon":"125.109523",
				"lat":"46.591653",
				"dis": [{
						"disid": "230602",
						"disname": "萨尔图区"
					},
					{
						"disid": "230603",
						"disname": "龙凤区"
					},
					{
						"disid": "230604",
						"disname": "让胡路区"
					},
					{
						"disid": "230605",
						"disname": "红岗区"
					},
					{
						"disid": "230606",
						"disname": "大同区"
					},
					{
						"disid": "230621",
						"disname": "肇州县"
					},
					{
						"disid": "230622",
						"disname": "肇源县"
					},
					{
						"disid": "230623",
						"disname": "林甸县"
					},
					{
						"disid": "230624",
						"disname": "杜尔伯特蒙古族自治县"
					}
				]
			},
			{
				"id": "370500",
				"name": "东营",
				"lon":"118.680522",
				"lat":"37.4401",
				"dis": [{
						"disid": "370502",
						"disname": "东营区"
					},
					{
						"disid": "370503",
						"disname": "河口区"
					},
					{
						"disid": "370521",
						"disname": "垦利县"
					},
					{
						"disid": "370522",
						"disname": "利津县"
					},
					{
						"disid": "370523",
						"disname": "广饶县"
					}
				]
			},
			{
				"id": "371400",
				"name": "德州",
				"lon":"116.364691",
				"lat":"37.442225",
				"dis": [{
						"disid": "371402",
						"disname": "德城区"
					},
					{
						"disid": "371421",
						"disname": "陵县"
					},
					{
						"disid": "371422",
						"disname": "宁津县"
					},
					{
						"disid": "371423",
						"disname": "庆云县"
					},
					{
						"disid": "371424",
						"disname": "临邑县"
					},
					{
						"disid": "371425",
						"disname": "齐河县"
					},
					{
						"disid": "371426",
						"disname": "平原县"
					},
					{
						"disid": "371427",
						"disname": "夏津县"
					},
					{
						"disid": "371428",
						"disname": "武城县"
					},
					{
						"disid": "371481",
						"disname": "乐陵"
					},
					{
						"disid": "371482",
						"disname": "禹城"
					}
				]
			},
			{
				"id": "140200",
				"name": "大同",
				"lon":"113.302124",
				"lat":"40.084678",
				"dis": [{
						"disid": "140202",
						"disname": "城区"
					},
					{
						"disid": "140203",
						"disname": "矿区"
					},
					{
						"disid": "140211",
						"disname": "南郊区"
					},
					{
						"disid": "140212",
						"disname": "新荣区"
					},
					{
						"disid": "140221",
						"disname": "阳高县"
					},
					{
						"disid": "140222",
						"disname": "天镇县"
					},
					{
						"disid": "140223",
						"disname": "广灵县"
					},
					{
						"disid": "140224",
						"disname": "灵丘县"
					},
					{
						"disid": "140225",
						"disname": "浑源县"
					},
					{
						"disid": "140226",
						"disname": "左云县"
					},
					{
						"disid": "140227",
						"disname": "大同县"
					}
				]
			},
			{
				"id": "532900",
				"name": "大理白族自治州",
				"lon":"100.27487",
				"lat":"25.596489",
				"dis": [{
						"disid": "532901",
						"disname": "大理"
					},
					{
						"disid": "532922",
						"disname": "漾濞彝族自治县"
					},
					{
						"disid": "532923",
						"disname": "祥云县"
					},
					{
						"disid": "532924",
						"disname": "宾川县"
					},
					{
						"disid": "532925",
						"disname": "弥渡县"
					},
					{
						"disid": "532926",
						"disname": "南涧彝族自治县"
					},
					{
						"disid": "532927",
						"disname": "巍山彝族回族自治县"
					},
					{
						"disid": "532928",
						"disname": "永平县"
					},
					{
						"disid": "532929",
						"disname": "云龙县"
					},
					{
						"disid": "532930",
						"disname": "洱源县"
					},
					{
						"disid": "532931",
						"disname": "剑川县"
					},
					{
						"disid": "532932",
						"disname": "鹤庆县"
					}
				]
			},
			{
				"id": "210600",
				"name": "丹东",
				"lon":"124.360688",
				"lat":"40.005966",
				"dis": [{
						"disid": "210602",
						"disname": "元宝区"
					},
					{
						"disid": "210603",
						"disname": "振兴区"
					},
					{
						"disid": "210604",
						"disname": "振安区"
					},
					{
						"disid": "210624",
						"disname": "宽甸满族自治县"
					},
					{
						"disid": "210681",
						"disname": "东港"
					},
					{
						"disid": "210682",
						"disname": "凤城"
					}
				]
			},
			{
				"id": "510600",
				"name": "德阳",
				"lon":"104.406429",
				"lat":"31.1346",
				"dis": [{
						"disid": "510603",
						"disname": "旌阳区"
					},
					{
						"disid": "510623",
						"disname": "中江县"
					},
					{
						"disid": "510626",
						"disname": "罗江县"
					},
					{
						"disid": "510681",
						"disname": "广汉"
					},
					{
						"disid": "510682",
						"disname": "什邡"
					},
					{
						"disid": "510683",
						"disname": "绵竹"
					}
				]
			},
			{
				"id": "232700",
				"name": "大兴安岭地区",
				"lon":"124.154939",
				"lat":"50.417822",
				"dis": [{
						"disid": "232721",
						"disname": "呼玛县"
					},
					{
						"disid": "232722",
						"disname": "塔河县"
					},
					{
						"disid": "232723",
						"disname": "漠河县"
					}
				]
			},
			{
				"id": "511700",
				"name": "达州",
				"lon":"107.474879",
				"lat":"31.215789",
				"dis": [{
						"disid": "511702",
						"disname": "通川区"
					},
					{
						"disid": "511721",
						"disname": "达县"
					},
					{
						"disid": "511722",
						"disname": "宣汉县"
					},
					{
						"disid": "511723",
						"disname": "开江县"
					},
					{
						"disid": "511724",
						"disname": "大竹县"
					},
					{
						"disid": "511725",
						"disname": "渠县"
					},
					{
						"disid": "511781",
						"disname": "万源"
					}
				]
			},
			{
				"id": "533100",
				"name": "德宏傣族景颇族自治州",
				"lon":"98.591069",
				"lat":"24.443275",
				"dis": [{
						"disid": "533102",
						"disname": "瑞丽"
					},
					{
						"disid": "533103",
						"disname": "芒"
					},
					{
						"disid": "533122",
						"disname": "梁河县"
					},
					{
						"disid": "533123",
						"disname": "盈江县"
					},
					{
						"disid": "533124",
						"disname": "陇川县"
					}
				]
			},
			{
				"id": "533400",
				"name": "迪庆藏族自治州",
				"lon":"99.709818",
				"lat":"27.825696",
				"dis": [{
						"disid": "533421",
						"disname": "香格里拉县"
					},
					{
						"disid": "533422",
						"disname": "德钦县"
					},
					{
						"disid": "533423",
						"disname": "维西傈僳族自治县"
					}
				]
			},
			{
				"id": "621100",
				"name": "定西",
				"lon":"104.632703",
				"lat":"35.584486",
				"dis": [{
						"disid": "621102",
						"disname": "安定区"
					},
					{
						"disid": "621121",
						"disname": "通渭县"
					},
					{
						"disid": "621122",
						"disname": "陇西县"
					},
					{
						"disid": "621123",
						"disname": "渭源县"
					},
					{
						"disid": "621124",
						"disname": "临洮县"
					},
					{
						"disid": "621125",
						"disname": "漳县"
					},
					{
						"disid": "621126",
						"disname": "岷县"
					}
				]
			}
		]
	},
	{
		"tag": "E",
		"cities": [{
				"id": "150600",
				"name": "鄂尔多斯",
				"lon":"109.78816",
				"lat":"39.614483",
				"dis": [{
						"disid": "150602",
						"disname": "东胜区"
					},
					{
						"disid": "150621",
						"disname": "达拉特旗"
					},
					{
						"disid": "150622",
						"disname": "准格尔旗"
					},
					{
						"disid": "150623",
						"disname": "鄂托克前旗"
					},
					{
						"disid": "150624",
						"disname": "鄂托克旗"
					},
					{
						"disid": "150625",
						"disname": "杭锦旗"
					},
					{
						"disid": "150626",
						"disname": "乌审旗"
					},
					{
						"disid": "150627",
						"disname": "伊金霍洛旗"
					}
				]
			},
			{
				"id": "420700",
				"name": "鄂州",
				"lon":"114.901324",
				"lat":"30.397568",
				"dis": [{
						"disid": "420702",
						"disname": "梁子湖区"
					},
					{
						"disid": "420703",
						"disname": "华容区"
					},
					{
						"disid": "420704",
						"disname": "鄂城区"
					}
				]
			},
			{
				"id": "422800",
				"name": "恩施土家族苗族自治州",
				"lon":"109.49488",
				"lat":"30.281931",
				"dis": [{
						"disid": "422801",
						"disname": "恩施"
					},
					{
						"disid": "422802",
						"disname": "利川"
					},
					{
						"disid": "422822",
						"disname": "建始县"
					},
					{
						"disid": "422823",
						"disname": "巴东县"
					},
					{
						"disid": "422825",
						"disname": "宣恩县"
					},
					{
						"disid": "422826",
						"disname": "咸丰县"
					},
					{
						"disid": "422827",
						"disname": "来凤县"
					},
					{
						"disid": "422828",
						"disname": "鹤峰县"
					}
				]
			}
		]
	},
	{
		"tag": "F",
		"cities": [{
				"id": "350100",
				"name": "福州",
				"lon":"119.304907",
				"lat":"26.080429",
				"dis": [{
						"disid": "350102",
						"disname": "鼓楼区"
					},
					{
						"disid": "350103",
						"disname": "台江区"
					},
					{
						"disid": "350104",
						"disname": "仓山区"
					},
					{
						"disid": "350105",
						"disname": "马尾区"
					},
					{
						"disid": "350111",
						"disname": "晋安区"
					},
					{
						"disid": "350121",
						"disname": "闽侯县"
					},
					{
						"disid": "350122",
						"disname": "连江县"
					},
					{
						"disid": "350123",
						"disname": "罗源县"
					},
					{
						"disid": "350124",
						"disname": "闽清县"
					},
					{
						"disid": "350125",
						"disname": "永泰县"
					},
					{
						"disid": "350128",
						"disname": "平潭县"
					},
					{
						"disid": "350181",
						"disname": "福清"
					},
					{
						"disid": "350182",
						"disname": "长乐"
					}
				]
			},
			{
				"id": "440600",
				"name": "佛山",
				"lon":"113.133539",
				"lat":"23.041594",
				"dis": [{
						"disid": "440604",
						"disname": "禅城区"
					},
					{
						"disid": "440605",
						"disname": "南海区"
					},
					{
						"disid": "440606",
						"disname": "顺德区"
					},
					{
						"disid": "440607",
						"disname": "三水区"
					},
					{
						"disid": "440608",
						"disname": "高明区"
					}
				]
			},
			{
				"id": "210400",
				"name": "抚顺",
				"lon":"123.96466",
				"lat":"41.886827",
				"dis": [{
						"disid": "210402",
						"disname": "新抚区"
					},
					{
						"disid": "210403",
						"disname": "东洲区"
					},
					{
						"disid": "210404",
						"disname": "望花区"
					},
					{
						"disid": "210411",
						"disname": "顺城区"
					},
					{
						"disid": "210421",
						"disname": "抚顺县"
					},
					{
						"disid": "210422",
						"disname": "新宾满族自治县"
					},
					{
						"disid": "210423",
						"disname": "清原满族自治县"
					}
				]
			},
			{
				"id": "210900",
				"name": "阜新",
				"lon":"121.677844",
				"lat":"42.027593",
				"dis": [{
						"disid": "210902",
						"disname": "海州区"
					},
					{
						"disid": "210903",
						"disname": "新邱区"
					},
					{
						"disid": "210904",
						"disname": "太平区"
					},
					{
						"disid": "210905",
						"disname": "清河门区"
					},
					{
						"disid": "210911",
						"disname": "细河区"
					},
					{
						"disid": "210921",
						"disname": "阜新蒙古族自治县"
					},
					{
						"disid": "210922",
						"disname": "彰武县"
					}
				]
			},
			{
				"id": "341200",
				"name": "阜阳",
				"lon":"115.821871",
				"lat":"32.896062",
				"dis": [{
						"disid": "341202",
						"disname": "颍州区"
					},
					{
						"disid": "341203",
						"disname": "颍东区"
					},
					{
						"disid": "341204",
						"disname": "颍泉区"
					},
					{
						"disid": "341221",
						"disname": "临泉县"
					},
					{
						"disid": "341222",
						"disname": "太和县"
					},
					{
						"disid": "341225",
						"disname": "阜南县"
					},
					{
						"disid": "341226",
						"disname": "颍上县"
					},
					{
						"disid": "341282",
						"disname": "界首"
					}
				]
			},
			{
				"id": "361000",
				"name": "抚州",
				"lon":"116.364824",
				"lat":"27.955404",
				"dis": [{
						"disid": "361002",
						"disname": "临川区"
					},
					{
						"disid": "361021",
						"disname": "南城县"
					},
					{
						"disid": "361022",
						"disname": "黎川县"
					},
					{
						"disid": "361023",
						"disname": "南丰县"
					},
					{
						"disid": "361024",
						"disname": "崇仁县"
					},
					{
						"disid": "361025",
						"disname": "乐安县"
					},
					{
						"disid": "361026",
						"disname": "宜黄县"
					},
					{
						"disid": "361027",
						"disname": "金溪县"
					},
					{
						"disid": "361028",
						"disname": "资溪县"
					},
					{
						"disid": "361029",
						"disname": "东乡县"
					},
					{
						"disid": "361030",
						"disname": "广昌县"
					}
				]
			},
			{
				"id": "450600",
				"name": "防城港",
				"lon":"108.369906",
				"lat":"21.69999",
				"dis": [{
						"disid": "450602",
						"disname": "港口区"
					},
					{
						"disid": "450603",
						"disname": "防城区"
					},
					{
						"disid": "450621",
						"disname": "上思县"
					},
					{
						"disid": "450681",
						"disname": "东兴"
					}
				]
			}
		]
	},
	{
		"tag": "G",
		"cities": [{
				"id": "640400",
				"name": "固原",
				"lon":"106.248288",
				"lat":"36.021619",
				"dis": [{
						"disid": "640402",
						"disname": "原州区"
					},
					{
						"disid": "640422",
						"disname": "西吉县"
					},
					{
						"disid": "640423",
						"disname": "隆德县"
					},
					{
						"disid": "640424",
						"disname": "泾源县"
					},
					{
						"disid": "640425",
						"disname": "彭阳县"
					}
				]
			},
			{
				"id": "440100",
				"name": "广州",
				"lon":"113.271716",
				"lat":"23.137463",
				"dis": [{
						"disid": "440103",
						"disname": "荔湾区"
					},
					{
						"disid": "440104",
						"disname": "越秀区"
					},
					{
						"disid": "440105",
						"disname": "海珠区"
					},
					{
						"disid": "440106",
						"disname": "天河区"
					},
					{
						"disid": "440111",
						"disname": "白云区"
					},
					{
						"disid": "440112",
						"disname": "黄埔区"
					},
					{
						"disid": "440113",
						"disname": "番禺区"
					},
					{
						"disid": "440114",
						"disname": "花都区"
					},
					{
						"disid": "440115",
						"disname": "南沙区"
					},
					{
						"disid": "440116",
						"disname": "萝岗区"
					}
				]
			},
			{
				"id": "520100",
				"name": "贵阳",
				"lon":"106.636867",
				"lat":"26.651258",
				"dis": [{
						"disid": "520102",
						"disname": "南明区"
					},
					{
						"disid": "520103",
						"disname": "云岩区"
					},
					{
						"disid": "520111",
						"disname": "花溪区"
					},
					{
						"disid": "520112",
						"disname": "乌当区"
					},
					{
						"disid": "520113",
						"disname": "白云区"
					},
					{
						"disid": "520114",
						"disname": "小河区"
					},
					{
						"disid": "520121",
						"disname": "开阳县"
					},
					{
						"disid": "520122",
						"disname": "息烽县"
					},
					{
						"disid": "520123",
						"disname": "修文县"
					},
					{
						"disid": "520181",
						"disname": "清镇"
					}
				]
			},
			{
				"id": "450300",
				"name": "桂林",
				"lon":"110.206132",
				"lat":"25.242364",
				"dis": [{
						"disid": "450302",
						"disname": "秀峰区"
					},
					{
						"disid": "450303",
						"disname": "叠彩区"
					},
					{
						"disid": "450304",
						"disname": "象山区"
					},
					{
						"disid": "450305",
						"disname": "七星区"
					},
					{
						"disid": "450311",
						"disname": "雁山区"
					},
					{
						"disid": "450321",
						"disname": "阳朔县"
					},
					{
						"disid": "450322",
						"disname": "临桂县"
					},
					{
						"disid": "450323",
						"disname": "灵川县"
					},
					{
						"disid": "450324",
						"disname": "全州县"
					},
					{
						"disid": "450325",
						"disname": "兴安县"
					},
					{
						"disid": "450326",
						"disname": "永福县"
					},
					{
						"disid": "450327",
						"disname": "灌阳县"
					},
					{
						"disid": "450328",
						"disname": "龙胜各族自治县"
					},
					{
						"disid": "450329",
						"disname": "资源县"
					},
					{
						"disid": "450330",
						"disname": "平乐县"
					},
					{
						"disid": "450331",
						"disname": "荔蒲县"
					},
					{
						"disid": "450332",
						"disname": "恭城瑶族自治县"
					}
				]
			},
			{
				"id": "450800",
				"name": "贵港",
				"lon":"109.606378",
				"lat":"23.11798",
				"dis": [{
						"disid": "450802",
						"disname": "港北区"
					},
					{
						"disid": "450803",
						"disname": "港南区"
					},
					{
						"disid": "450804",
						"disname": "覃塘区"
					},
					{
						"disid": "450821",
						"disname": "平南县"
					},
					{
						"disid": "450881",
						"disname": "桂平"
					}
				]
			},
			{
				"id": "510800",
				"name": "广元",
				"lon":"105.849557",
				"lat":"32.442592",
				"dis": [{
						"disid": "510802",
						"disname": "利州区"
					},
					{
						"disid": "510811",
						"disname": "元坝区"
					},
					{
						"disid": "510812",
						"disname": "朝天区"
					},
					{
						"disid": "510821",
						"disname": "旺苍县"
					},
					{
						"disid": "510822",
						"disname": "青川县"
					},
					{
						"disid": "510823",
						"disname": "剑阁县"
					},
					{
						"disid": "510824",
						"disname": "苍溪县"
					}
				]
			},
			{
				"id": "511600",
				"name": "广安",
				"lon":"106.638117",
				"lat":"30.460751",
				"dis": [{
						"disid": "511602",
						"disname": "广安区"
					},
					{
						"disid": "511621",
						"disname": "岳池县"
					},
					{
						"disid": "511622",
						"disname": "武胜县"
					},
					{
						"disid": "511623",
						"disname": "邻水县"
					},
					{
						"disid": "511681",
						"disname": "华蓥"
					}
				]
			},
			{
				"id": "360700",
				"name": "赣州",
				"lon":"114.940221",
				"lat":"25.836217",
				"dis": [{
						"disid": "360702",
						"disname": "章贡区"
					},
					{
						"disid": "360721",
						"disname": "赣县"
					},
					{
						"disid": "360722",
						"disname": "信丰县"
					},
					{
						"disid": "360723",
						"disname": "大余县"
					},
					{
						"disid": "360724",
						"disname": "上犹县"
					},
					{
						"disid": "360725",
						"disname": "崇义县"
					},
					{
						"disid": "360726",
						"disname": "安远县"
					},
					{
						"disid": "360727",
						"disname": "龙南县"
					},
					{
						"disid": "360728",
						"disname": "定南县"
					},
					{
						"disid": "360729",
						"disname": "全南县"
					},
					{
						"disid": "360730",
						"disname": "宁都县"
					},
					{
						"disid": "360731",
						"disname": "于都县"
					},
					{
						"disid": "360732",
						"disname": "兴国县"
					},
					{
						"disid": "360733",
						"disname": "会昌县"
					},
					{
						"disid": "360734",
						"disname": "寻乌县"
					},
					{
						"disid": "360735",
						"disname": "石城县"
					},
					{
						"disid": "360781",
						"disname": "瑞金"
					},
					{
						"disid": "360782",
						"disname": "南康"
					}
				]
			},
			{
				"id": "513300",
				"name": "甘孜藏族自治州",
				"lon":"101.968258",
				"lat":"30.055278",
				"dis": [{
						"disid": "513321",
						"disname": "康定县"
					},
					{
						"disid": "513322",
						"disname": "泸定县"
					},
					{
						"disid": "513323",
						"disname": "丹巴县"
					},
					{
						"disid": "513324",
						"disname": "九龙县"
					},
					{
						"disid": "513325",
						"disname": "雅江县"
					},
					{
						"disid": "513326",
						"disname": "道孚县"
					},
					{
						"disid": "513327",
						"disname": "炉霍县"
					},
					{
						"disid": "513328",
						"disname": "甘孜县"
					},
					{
						"disid": "513329",
						"disname": "新龙县"
					},
					{
						"disid": "513330",
						"disname": "德格县"
					},
					{
						"disid": "513331",
						"disname": "白玉县"
					},
					{
						"disid": "513332",
						"disname": "石渠县"
					},
					{
						"disid": "513333",
						"disname": "色达县"
					},
					{
						"disid": "513334",
						"disname": "理塘县"
					},
					{
						"disid": "513335",
						"disname": "巴塘县"
					},
					{
						"disid": "513336",
						"disname": "乡城县"
					},
					{
						"disid": "513337",
						"disname": "稻城县"
					},
					{
						"disid": "513338",
						"disname": "得荣县"
					}
				]
			},
			{
				"id": "623000",
				"name": "甘南藏族自治州",
				"lon":"102.918162",
				"lat":"34.987719",
				"dis": [{
						"disid": "623001",
						"disname": "合作"
					},
					{
						"disid": "623021",
						"disname": "临潭县"
					},
					{
						"disid": "623022",
						"disname": "卓尼县"
					},
					{
						"disid": "623023",
						"disname": "舟曲县"
					},
					{
						"disid": "623024",
						"disname": "迭部县"
					},
					{
						"disid": "623025",
						"disname": "玛曲县"
					},
					{
						"disid": "623026",
						"disname": "碌曲县"
					},
					{
						"disid": "623027",
						"disname": "夏河县"
					}
				]
			},
			{
				"id": "632600",
				"name": "果洛藏族自治州",
				"lon":"100.253033",
				"lat":"34.475288",
				"dis": [{
						"disid": "632621",
						"disname": "玛沁县"
					},
					{
						"disid": "632622",
						"disname": "班玛县"
					},
					{
						"disid": "632623",
						"disname": "甘德县"
					},
					{
						"disid": "632624",
						"disname": "达日县"
					},
					{
						"disid": "632625",
						"disname": "久治县"
					},
					{
						"disid": "632626",
						"disname": "玛多县"
					}
				]
			}
		]
	},
	{
		"tag": "H",
		"cities": [{
				"id": "330100",
				"name": "杭州",
				"lon":"120.214648",
				"lat":"30.25408",
				"dis": [{
						"disid": "330102",
						"disname": "上城区"
					},
					{
						"disid": "330103",
						"disname": "下城区"
					},
					{
						"disid": "330104",
						"disname": "江干区"
					},
					{
						"disid": "330105",
						"disname": "拱墅区"
					},
					{
						"disid": "330106",
						"disname": "西湖区"
					},
					{
						"disid": "330108",
						"disname": "滨江区"
					},
					{
						"disid": "330109",
						"disname": "萧山区"
					},
					{
						"disid": "330110",
						"disname": "余杭区"
					},
					{
						"disid": "330122",
						"disname": "桐庐县"
					},
					{
						"disid": "330127",
						"disname": "淳安县"
					},
					{
						"disid": "330182",
						"disname": "建德"
					},
					{
						"disid": "330183",
						"disname": "富阳"
					},
					{
						"disid": "330185",
						"disname": "临安"
					}
				]
			},
			{
				"id": "340100",
				"name": "合肥",
				"lon":"117.236603",
				"lat":"31.823633",
				"dis": [{
						"disid": "340102",
						"disname": "瑶海区"
					},
					{
						"disid": "340103",
						"disname": "庐阳区"
					},
					{
						"disid": "340104",
						"disname": "蜀山区"
					},
					{
						"disid": "340111",
						"disname": "包河区"
					},
					{
						"disid": "340121",
						"disname": "长丰县"
					},
					{
						"disid": "340122",
						"disname": "肥东县"
					},
					{
						"disid": "340123",
						"disname": "肥西县"
					},
					{
						"disid": "340124",
						"disname": "庐江县"
					}
				]
			},
			{
				"id": "230100",
				"name": "哈尔滨",
				"lon":"126.543048",
				"lon":",45.808421",
				"dis": [{
						"disid": "230102",
						"disname": "道里区"
					},
					{
						"disid": "230103",
						"disname": "南岗区"
					},
					{
						"disid": "230104",
						"disname": "道外区"
					},
					{
						"disid": "230108",
						"disname": "平房区"
					},
					{
						"disid": "230109",
						"disname": "松北区"
					},
					{
						"disid": "230110",
						"disname": "香坊区"
					},
					{
						"disid": "230111",
						"disname": "呼兰区"
					},
					{
						"disid": "230112",
						"disname": "阿城区"
					},
					{
						"disid": "230123",
						"disname": "依兰县"
					},
					{
						"disid": "230124",
						"disname": "方正县"
					},
					{
						"disid": "230125",
						"disname": "宾县"
					},
					{
						"disid": "230126",
						"disname": "巴彦县"
					},
					{
						"disid": "230127",
						"disname": "木兰县"
					},
					{
						"disid": "230128",
						"disname": "通河县"
					},
					{
						"disid": "230129",
						"disname": "延寿县"
					},
					{
						"disid": "230182",
						"disname": "双城"
					},
					{
						"disid": "230183",
						"disname": "尚志"
					},
					{
						"disid": "230184",
						"disname": "五常"
					}
				]
			},
			{
				"id": "150100",
				"name": "呼和浩特",
				"lon":"111.754075",
				"lat":"40.850605",
				"dis": [{
						"disid": "150102",
						"disname": "新城区"
					},
					{
						"disid": "150103",
						"disname": "回民区"
					},
					{
						"disid": "150104",
						"disname": "玉泉区"
					},
					{
						"disid": "150105",
						"disname": "赛罕区"
					},
					{
						"disid": "150121",
						"disname": "土默特左旗"
					},
					{
						"disid": "150122",
						"disname": "托克托县"
					},
					{
						"disid": "150123",
						"disname": "和林格尔县"
					},
					{
						"disid": "150124",
						"disname": "清水河县"
					},
					{
						"disid": "150125",
						"disname": "武川县"
					}
				]
			},
			{
				"id": "130400",
				"name": "邯郸",
				"lon":"114.545343",
				"lat":"36.629873",
				"dis": [{
						"disid": "130402",
						"disname": "邯山区"
					},
					{
						"disid": "130403",
						"disname": "丛台区"
					},
					{
						"disid": "130404",
						"disname": "复兴区"
					},
					{
						"disid": "130406",
						"disname": "峰峰矿区"
					},
					{
						"disid": "130421",
						"disname": "邯郸县"
					},
					{
						"disid": "130423",
						"disname": "临漳县"
					},
					{
						"disid": "130424",
						"disname": "成安县"
					},
					{
						"disid": "130425",
						"disname": "大名县"
					},
					{
						"disid": "130426",
						"disname": "涉县"
					},
					{
						"disid": "130427",
						"disname": "磁县"
					},
					{
						"disid": "130428",
						"disname": "肥乡县"
					},
					{
						"disid": "130429",
						"disname": "永年县"
					},
					{
						"disid": "130430",
						"disname": "邱县"
					},
					{
						"disid": "130431",
						"disname": "鸡泽县"
					},
					{
						"disid": "130432",
						"disname": "广平县"
					},
					{
						"disid": "130433",
						"disname": "馆陶县"
					},
					{
						"disid": "130434",
						"disname": "魏县"
					},
					{
						"disid": "130435",
						"disname": "曲周县"
					},
					{
						"disid": "130481",
						"disname": "武安"
					}

				]
			},
			{
				"id": "211400",
				"name": "葫芦岛",
				"lon":"120.844836",
				"lat":"40.717363",
				"dis": [{
						"disid": "211402",
						"disname": "连山区"
					},
					{
						"disid": "211403",
						"disname": "龙港区"
					},
					{
						"disid": "211404",
						"disname": "南票区"
					},
					{
						"disid": "211421",
						"disname": "绥中县"
					},
					{
						"disid": "211422",
						"disname": "建昌县"
					},
					{
						"disid": "211481",
						"disname": "兴城"
					}
				]
			},
			{
				"id": "131100",
				"name": "衡水",
				"lon":"115.676839",
				"lat":"37.744734",
				"dis": [{
						"disid": "131102",
						"disname": "桃城区"
					},
					{
						"disid": "131121",
						"disname": "枣强县"
					},
					{
						"disid": "131122",
						"disname": "武邑县"
					},
					{
						"disid": "131123",
						"disname": "武强县"
					},
					{
						"disid": "131124",
						"disname": "饶阳县"
					},
					{
						"disid": "131125",
						"disname": "安平县"
					},
					{
						"disid": "131126",
						"disname": "故城县"
					},
					{
						"disid": "131127",
						"disname": "景县"
					},
					{
						"disid": "131128",
						"disname": "阜城县"
					},
					{
						"disid": "131181",
						"disname": "冀州"
					},
					{
						"disid": "131182",
						"disname": "深州"
					}
				]
			},
			{
				"id": "460100",
				"name": "海口",
				"lon":"110.328113",
				"lat":"20.006011",
				"dis": [{
						"disid": "460105",
						"disname": "秀英区"
					},
					{
						"disid": "460106",
						"disname": "龙华区"
					},
					{
						"disid": "460107",
						"disname": "琼山区"
					},
					{
						"disid": "460108",
						"disname": "美兰区"
					}
				]
			},
			{
				"id": "330500",
				"name": "湖州",
				"lon":"120.09423",
				"lat":"30.890535",
				"dis": [{
						"disid": "330502",
						"disname": "吴兴区"
					},
					{
						"disid": "330503",
						"disname": "南浔区"
					},
					{
						"disid": "330521",
						"disname": "德清县"
					},
					{
						"disid": "330522",
						"disname": "长兴县"
					},
					{
						"disid": "330523",
						"disname": "安吉县"
					}
				]
			},
			{
				"id": "320800",
				"name": "淮安",
				"lon":"119.02292",
				"lat":"33.615814",
				"dis": [{
						"disid": "320802",
						"disname": "清河区"
					},
					{
						"disid": "320803",
						"disname": "楚州区"
					},
					{
						"disid": "320804",
						"disname": "淮阴区"
					},
					{
						"disid": "320811",
						"disname": "清浦区"
					},
					{
						"disid": "320826",
						"disname": "涟水县"
					},
					{
						"disid": "320829",
						"disname": "洪泽县"
					},
					{
						"disid": "320830",
						"disname": "盱眙县"
					},
					{
						"disid": "320831",
						"disname": "金湖县"
					}
				]
			},
			{
				"id": "430400",
				"name": "衡阳",
				"lon":"112.578162",
				"lat":"26.898544",
				"dis": [{
						"disid": "430405",
						"disname": "珠晖区"
					},
					{
						"disid": "430406",
						"disname": "雁峰区"
					},
					{
						"disid": "430407",
						"disname": "石鼓区"
					},
					{
						"disid": "430408",
						"disname": "蒸湘区"
					},
					{
						"disid": "430412",
						"disname": "南岳区"
					},
					{
						"disid": "430421",
						"disname": "衡阳县"
					},
					{
						"disid": "430422",
						"disname": "衡南县"
					},
					{
						"disid": "430423",
						"disname": "衡山县"
					},
					{
						"disid": "430424",
						"disname": "衡东县"
					},
					{
						"disid": "430426",
						"disname": "祁东县"
					}
				]
			},
			{
				"id": "610700",
				"name": "汉中",
				"lon":"107.030864",
				"lat":"33.072832",
				"dis": [{
						"disid": "610702",
						"disname": "汉台区"
					},
					{
						"disid": "610721",
						"disname": "南郑县"
					},
					{
						"disid": "610722",
						"disname": "城固县"
					},
					{
						"disid": "610723",
						"disname": "洋县"
					},
					{
						"disid": "610724",
						"disname": "西乡县"
					},
					{
						"disid": "610725",
						"disname": "勉县"
					},
					{
						"disid": "610726",
						"disname": "宁强县"
					},
					{
						"disid": "610727",
						"disname": "略阳县"
					},
					{
						"disid": "610728",
						"disname": "镇巴县"
					},
					{
						"disid": "610729",
						"disname": "留坝县"
					},
					{
						"disid": "610730",
						"disname": "佛坪县"
					}
				]
			},
			{
				"id": "371700",
				"name": "菏泽",
				"lon":"115.488411",
				"lat":"35.238936",
				"dis": [{
						"disid": "371702",
						"disname": "牡丹区"
					},
					{
						"disid": "371721",
						"disname": "曹县"
					},
					{
						"disid": "371722",
						"disname": "单县"
					},
					{
						"disid": "371723",
						"disname": "成武县"
					},
					{
						"disid": "371724",
						"disname": "巨野县"
					},
					{
						"disid": "371725",
						"disname": "郓城县"
					},
					{
						"disid": "371726",
						"disname": "鄄城县"
					},
					{
						"disid": "371727",
						"disname": "定陶县"
					},
					{
						"disid": "371728",
						"disname": "东明县"
					}
				]
			},
			{
				"id": "441300",
				"name": "惠州",
				"lon":"114.424997",
				"lat":"23.115827",
				"dis": [{
						"disid": "441302",
						"disname": "惠城区"
					},
					{
						"disid": "441303",
						"disname": "惠阳区"
					},
					{
						"disid": "441322",
						"disname": "博罗县"
					},
					{
						"disid": "441323",
						"disname": "惠东县"
					},
					{
						"disid": "441324",
						"disname": "龙门县"
					}
				]
			},
			{
				"id": "341000",
				"name": "黄山",
				"lon":"118.345436",
				"lat":"29.721889",
				"dis": [{
						"disid": "341002",
						"disname": "屯溪区"
					},
					{
						"disid": "341003",
						"disname": "黄山区"
					},
					{
						"disid": "341004",
						"disname": "徽州区"
					},
					{
						"disid": "341021",
						"disname": "歙县"
					},
					{
						"disid": "341022",
						"disname": "休宁县"
					},
					{
						"disid": "341023",
						"disname": "黟县"
					},
					{
						"disid": "341024",
						"disname": "祁门县"
					}
				]
			},
			{
				"id": "340400",
				"name": "淮南",
				"lon":"117.007823",
				"lat":"32.632334",
				"dis": [{
						"disid": "340402",
						"disname": "大通区"
					},
					{
						"disid": "340403",
						"disname": "田家庵区"
					},
					{
						"disid": "340404",
						"disname": "谢家集区"
					},
					{
						"disid": "340405",
						"disname": "八公山区"
					},
					{
						"disid": "340406",
						"disname": "潘集区"
					},
					{
						"disid": "340421",
						"disname": "凤台县"
					}
				]
			},
			{
				"id": "340600",
				"name": "淮北",
				"lon":"116.803674",
				"lat":"33.959262",
				"dis": [{
						"disid": "340602",
						"disname": "杜集区"
					},
					{
						"disid": "340603",
						"disname": "相山区"
					},
					{
						"disid": "340604",
						"disname": "烈山区"
					},
					{
						"disid": "340621",
						"disname": "濉溪县"
					}
				]
			},
			{
				"id": "150700",
				"name": "呼伦贝尔",
				"lon":"119.77093",
				"lat":"49.217693",
				"dis": [{
						"disid": "150702",
						"disname": "海拉尔区"
					},
					{
						"disid": "150721",
						"disname": "阿荣旗"
					},
					{
						"disid": "150722",
						"disname": "莫力达瓦达斡尔族自治旗"
					},
					{
						"disid": "150723",
						"disname": "鄂伦春自治旗"
					},
					{
						"disid": "150724",
						"disname": "鄂温克族自治旗"
					},
					{
						"disid": "150725",
						"disname": "陈巴尔虎旗"
					},
					{
						"disid": "150726",
						"disname": "新巴尔虎左旗"
					},
					{
						"disid": "150727",
						"disname": "新巴尔虎右旗"
					},
					{
						"disid": "150781",
						"disname": "满洲里"
					},
					{
						"disid": "150782",
						"disname": "牙克石"
					},
					{
						"disid": "150783",
						"disname": "扎兰屯"
					},
					{
						"disid": "150784",
						"disname": "额尔古纳"
					},
					{
						"disid": "150785",
						"disname": "根河"
					}
				]
			},
			{
				"id": "230400",
				"name": "鹤岗",
				"lon":"130.307595",
				"lat":"47.355666",
				"dis": [{
						"disid": "230402",
						"disname": "向阳区"
					},
					{
						"disid": "230403",
						"disname": "工农区"
					},
					{
						"disid": "230404",
						"disname": "南山区"
					},
					{
						"disid": "230405",
						"disname": "兴安区"
					},
					{
						"disid": "230406",
						"disname": "东山区"
					},
					{
						"disid": "230407",
						"disname": "兴山区"
					},
					{
						"disid": "230421",
						"disname": "萝北县"
					},
					{
						"disid": "230422",
						"disname": "绥滨县"
					}
				]
			},
			{
				"id": "231100",
				"name": "黑河",
				"lon":"127.521976",
				"lat":"50.239475",
				"dis": [{
						"disid": "231102",
						"disname": "爱辉区"
					},
					{
						"disid": "231121",
						"disname": "嫩江县"
					},
					{
						"disid": "231123",
						"disname": "逊克县"
					},
					{
						"disid": "231124",
						"disname": "孙吴县"
					},
					{
						"disid": "231181",
						"disname": "北安"
					},
					{
						"disid": "231182",
						"disname": "五大连池"
					}
				]
			},
			{
				"id": "420200",
				"name": "黄石",
				"lon":"115.009022",
				"lat":"30.160253",
				"dis": [{
						"disid": "420202",
						"disname": "黄石港区"
					},
					{
						"disid": "420203",
						"disname": "西塞山区"
					},
					{
						"disid": "420204",
						"disname": "下陆区"
					},
					{
						"disid": "420205",
						"disname": "铁山区"
					},
					{
						"disid": "420222",
						"disname": "阳新县"
					},
					{
						"disid": "420281",
						"disname": "大冶"
					}
				]
			},
			{
				"id": "421100",
				"name": "黄冈",
				"lon":"114.891425",
				"lat":"30.466332",
				"dis": [{
						"disid": "421102",
						"disname": "黄州区"
					},
					{
						"disid": "421121",
						"disname": "团风县"
					},
					{
						"disid": "421122",
						"disname": "红安县"
					},
					{
						"disid": "421123",
						"disname": "罗田县"
					},
					{
						"disid": "421124",
						"disname": "英山县"
					},
					{
						"disid": "421125",
						"disname": "浠水县"
					},
					{
						"disid": "421126",
						"disname": "蕲春县"
					},
					{
						"disid": "421127",
						"disname": "黄梅县"
					},
					{
						"disid": "421181",
						"disname": "麻城"
					},
					{
						"disid": "421182",
						"disname": "武穴"
					}
				]
			},
			{
				"id": "431200",
				"name": "怀化",
				"lon":"110.005352",
				"lat":"27.574136",
				"dis": [{
						"disid": "431202",
						"disname": "鹤城区"
					},
					{
						"disid": "431221",
						"disname": "中方县"
					},
					{
						"disid": "431222",
						"disname": "沅陵县"
					},
					{
						"disid": "431223",
						"disname": "辰溪县"
					},
					{
						"disid": "431224",
						"disname": "溆浦县"
					},
					{
						"disid": "431225",
						"disname": "会同县"
					},
					{
						"disid": "431226",
						"disname": "麻阳苗族自治县"
					},
					{
						"disid": "431227",
						"disname": "新晃侗族自治县"
					},
					{
						"disid": "431228",
						"disname": "芷江侗族自治县"
					},
					{
						"disid": "431229",
						"disname": "靖州苗族侗族自治县"
					},
					{
						"disid": "431230",
						"disname": "通道侗族自治县"
					},
					{
						"disid": "431281",
						"disname": "洪江"
					}
				]
			},
			{
				"id": "410600",
				"name": "鹤壁",
				"lon":"114.305028",
				"lat":"35.75189",
				"dis": [{
						"disid": "410602",
						"disname": "鹤山区"
					},
					{
						"disid": "410603",
						"disname": "山城区"
					},
					{
						"disid": "410611",
						"disname": "淇滨区"
					},
					{
						"disid": "410621",
						"disname": "浚县"
					},
					{
						"disid": "410622",
						"disname": "淇县"
					}
				]
			},
			{
				"id": "441600",
				"name": "河源",
				"lon":"114.708879",
				"lat":"23.748627",
				"dis": [{
						"disid": "441602",
						"disname": "源城区"
					},
					{
						"disid": "441621",
						"disname": "紫金县"
					},
					{
						"disid": "441622",
						"disname": "龙川县"
					},
					{
						"disid": "441623",
						"disname": "连平县"
					},
					{
						"disid": "441624",
						"disname": "和平县"
					},
					{
						"disid": "441625",
						"disname": "东源县"
					}
				]
			},

			{
				"id": "451100",
				"name": "贺州",
				"lon":"111.572087",
				"lon":",24.407871",
				"dis": [{
						"disid": "451102",
						"disname": "八步区"
					},
					{
						"disid": "451121",
						"disname": "昭平县"
					},
					{
						"disid": "451122",
						"disname": "钟山县"
					},
					{
						"disid": "451123",
						"disname": "富川瑶族自治县"
					}
				]
			},
			{
				"id": "451200",
				"name": "河池",
				"lon":"108.091216",
				"lat":"24.698912",
				"dis": [{
						"disid": "451202",
						"disname": "金城江区"
					},
					{
						"disid": "451221",
						"disname": "南丹县"
					},
					{
						"disid": "451222",
						"disname": "天峨县"
					},
					{
						"disid": "451223",
						"disname": "凤山县"
					},
					{
						"disid": "451224",
						"disname": "东兰县"
					},
					{
						"disid": "451225",
						"disname": "罗城仫佬族自治县"
					},
					{
						"disid": "451226",
						"disname": "环江毛南族自治县"
					},
					{
						"disid": "451227",
						"disname": "巴马瑶族自治县"
					},
					{
						"disid": "451228",
						"disname": "都安瑶族自治县"
					},
					{
						"disid": "451229",
						"disname": "大化瑶族自治县"
					},
					{
						"disid": "451281",
						"disname": "宜州"
					}
				]
			},
			{
				"id": "532500",
				"name": "红河哈尼族彝族自治州",
				"lon":"103.381839",
				"lat":"23.375834",
				"dis": [{
						"disid": "532501",
						"disname": "个旧"
					},
					{
						"disid": "532502",
						"disname": "开远"
					},
					{
						"disid": "532503",
						"disname": "蒙自"
					},
					{
						"disid": "532523",
						"disname": "屏边苗族自治县"
					},
					{
						"disid": "532524",
						"disname": "建水县"
					},
					{
						"disid": "532525",
						"disname": "石屏县"
					},
					{
						"disid": "532526",
						"disname": "弥勒县"
					},
					{
						"disid": "532527",
						"disname": "泸西县"
					},
					{
						"disid": "532528",
						"disname": "元阳县"
					},
					{
						"disid": "532529",
						"disname": "红河县"
					},
					{
						"disid": "532530",
						"disname": "金平苗族瑶族傣族自治县"
					},
					{
						"disid": "532531",
						"disname": "绿春县"
					},
					{
						"disid": "532532",
						"disname": "河口瑶族自治县"
					}
				]
			},
			{
				"id": "632100",
				"name": "海东地区",
				"lon":"102.109004",
				"lat":"36.508512",
				"dis": [{
						"disid": "632121",
						"disname": "平安县"
					},
					{
						"disid": "632122",
						"disname": "民和回族土族自治县"
					},
					{
						"disid": "632123",
						"disname": "乐都县"
					},
					{
						"disid": "632126",
						"disname": "互助土族自治县"
					},
					{
						"disid": "632127",
						"disname": "化隆回族自治县"
					},
					{
						"disid": "632128",
						"disname": "循化撒拉族自治县"
					}
				]
			},
			{
				"id": "632200",
				"name": "海北藏族自治州",
				"lon":"100.908867",
				"lat":"36.960203",
				"dis": [{
						"disid": "632221",
						"disname": "门源回族自治县"
					},
					{
						"disid": "632222",
						"disname": "祁连县"
					},
					{
						"disid": "632223",
						"disname": "海晏县"
					},
					{
						"disid": "632224",
						"disname": "刚察县"
					}
				]
			},
			{
				"id": "632300",
				"name": "黄南藏族自治州",
				"lon":"102.020413",
				"lat":"35.523454",
				"dis": [{
						"disid": "632321",
						"disname": "同仁县"
					},
					{
						"disid": "632322",
						"disname": "尖扎县"
					},
					{
						"disid": "632323",
						"disname": "泽库县"
					},
					{
						"disid": "632324",
						"disname": "河南蒙古族自治县"
					}
				]
			},
			{
				"id": "632500",
				"name": "海南藏族自治州",
				"lon":"100.629782",
				"lat":"36.291637",
				"dis": [{
						"disid": "632521",
						"disname": "共和县"
					},
					{
						"disid": "632522",
						"disname": "同德县"
					},
					{
						"disid": "632523",
						"disname": "贵德县"
					},
					{
						"disid": "632524",
						"disname": "兴海县"
					},
					{
						"disid": "632525",
						"disname": "贵南县"
					}
				]
			},
			{
				"id": "632800",
				"name": "海西蒙古族藏族自治州",
				"lon":"97.378311",
				"lat":"37.382749",
				"dis": [{
						"disid": "632801",
						"disname": "格尔木"
					},
					{
						"disid": "632802",
						"disname": "德令哈"
					},
					{
						"disid": "632821",
						"disname": "乌兰县"
					},
					{
						"disid": "632822",
						"disname": "都兰县"
					},
					{
						"disid": "632823",
						"disname": "天峻县"
					}
				]
			},
			{
				"id": "652200",
				"name": "哈密地区",
				"lon":"93.522649",
				"lat":"42.825403",
				"dis": [{
						"disid": "652201",
						"disname": "哈密"
					},
					{
						"disid": "652222",
						"disname": "巴里坤哈萨克自治县"
					},
					{
						"disid": "652223",
						"disname": "伊吾县"
					}
				]
			},
			{
				"id": "653200",
				"name": "和田地区",
				"lon":"79.931098",
				"lat":"37.118605",
				"dis": [{
						"disid": "653201",
						"disname": "和田"
					},
					{
						"disid": "653221",
						"disname": "和田县"
					},
					{
						"disid": "653222",
						"disname": "墨玉县"
					},
					{
						"disid": "653223",
						"disname": "皮山县"
					},
					{
						"disid": "653224",
						"disname": "洛浦县"
					},
					{
						"disid": "653225",
						"disname": "策勒县"
					},
					{
						"disid": "653226",
						"disname": "于田县"
					},
					{
						"disid": "653227",
						"disname": "民丰县"
					}
				]
			}
		]
	},
	{
		"tag": "J",
		"cities": [{
				"id": "140500",
				"name": "晋城",
				"lon":"112.857715",
				"lat":"35.497224",
				"dis": [{
						"disid": "140502",
						"disname": "城区"
					},
					{
						"disid": "140521",
						"disname": "沁水县"
					},
					{
						"disid": "140522",
						"disname": "阳城县"
					},
					{
						"disid": "140524",
						"disname": "陵川县"
					},
					{
						"disid": "140525",
						"disname": "泽州县"
					},
					{
						"disid": "140581",
						"disname": "高平"
					}
				]
			},
			{
				"id": "421000",
				"name": "荆州",
				"lon":"112.244657",
				"lat":"30.34184",
				"dis": [{
						"disid": "421002",
						"disname": "沙区"
					},
					{
						"disid": "421003",
						"disname": "荆州区"
					},
					{
						"disid": "421022",
						"disname": "公安县"
					},
					{
						"disid": "421023",
						"disname": "监利县"
					},
					{
						"disid": "421024",
						"disname": "江陵县"
					},
					{
						"disid": "421081",
						"disname": "石首"
					},
					{
						"disid": "421083",
						"disname": "洪湖"
					},
					{
						"disid": "421087",
						"disname": "松滋"
					}
				]
			},
			{
				"id": "370100",
				"name": "济南",
				"lon":"117.126112",
				"lat":"36.657944",
				"dis": [{
						"disid": "370102",
						"disname": "历下区"
					},
					{
						"disid": "370103",
						"disname": "中区"
					},
					{
						"disid": "370104",
						"disname": "槐荫区"
					},
					{
						"disid": "370105",
						"disname": "天桥区"
					},
					{
						"disid": "370112",
						"disname": "历城区"
					},
					{
						"disid": "370113",
						"disname": "长清区"
					},
					{
						"disid": "370124",
						"disname": "平阴县"
					},
					{
						"disid": "370125",
						"disname": "济阳县"
					},
					{
						"disid": "370126",
						"disname": "商河县"
					},
					{
						"disid": "370181",
						"disname": "章丘"
					}
				]
			},
			{
				"id": "210700",
				"name": "锦州",
				"lon":"121.147834",
				"lat":"41.123544",
				"dis": [{
						"disid": "210702",
						"disname": "古塔区"
					},
					{
						"disid": "210703",
						"disname": "凌河区"
					},
					{
						"disid": "210711",
						"disname": "太和区"
					},
					{
						"disid": "210726",
						"disname": "黑山县"
					},
					{
						"disid": "210727",
						"disname": "义县"
					},
					{
						"disid": "210781",
						"disname": "凌海"
					},
					{
						"disid": "210782",
						"disname": "北镇"
					}
				]
			},
			{
				"id": "140700",
				"name": "晋中",
				"lon":"112.758731",
				"lat":"37.695582",
				"dis": [{
						"disid": "140702",
						"disname": "榆次区"
					},
					{
						"disid": "140721",
						"disname": "榆社县"
					},
					{
						"disid": "140722",
						"disname": "左权县"
					},
					{
						"disid": "140723",
						"disname": "和顺县"
					},
					{
						"disid": "140724",
						"disname": "昔阳县"
					},
					{
						"disid": "140725",
						"disname": "寿阳县"
					},
					{
						"disid": "140726",
						"disname": "太谷县"
					},
					{
						"disid": "140727",
						"disname": "祁县"
					},
					{
						"disid": "140728",
						"disname": "平遥县"
					},
					{
						"disid": "140729",
						"disname": "灵石县"
					},
					{
						"disid": "140781",
						"disname": "介休"
					}
				]
			},
			{
				"id": "220200",
				"name": "吉林",
				"lon":"126.555921",
				"lat":"43.84315",
				"dis": [{
						"disid": "220202",
						"disname": "昌邑区"
					},
					{
						"disid": "220203",
						"disname": "龙潭区"
					},
					{
						"disid": "220204",
						"disname": "船营区"
					},
					{
						"disid": "220211",
						"disname": "丰满区"
					},
					{
						"disid": "220221",
						"disname": "永吉县"
					},
					{
						"disid": "220281",
						"disname": "蛟河"
					},
					{
						"disid": "220282",
						"disname": "桦甸"
					},
					{
						"disid": "220283",
						"disname": "舒兰"
					},
					{
						"disid": "220284",
						"disname": "磐石"
					}
				]
			},
			{
				"id": "370800",
				"name": "济宁",
				"lon":"116.594476",
				"lat":"35.416882",
				"dis": [{
						"disid": "370802",
						"disname": "中区"
					},
					{
						"disid": "370811",
						"disname": "任城区"
					},
					{
						"disid": "370826",
						"disname": "微山县"
					},
					{
						"disid": "370827",
						"disname": "鱼台县"
					},
					{
						"disid": "370828",
						"disname": "金乡县"
					},
					{
						"disid": "370829",
						"disname": "嘉祥县"
					},
					{
						"disid": "370830",
						"disname": "汶上县"
					},
					{
						"disid": "370831",
						"disname": "泗水县"
					},
					{
						"disid": "370832",
						"disname": "梁山县"
					},
					{
						"disid": "370881",
						"disname": "曲阜"
					},
					{
						"disid": "370882",
						"disname": "兖州"
					},
					{
						"disid": "370883",
						"disname": "邹城"
					}
				]
			},
			{
				"id": "330700",
				"name": "金华",
				"lon":"119.653154",
				"lat":"29.08363",
				"dis": [{
						"disid": "330702",
						"disname": "婺城区"
					},
					{
						"disid": "330703",
						"disname": "金东区"
					},
					{
						"disid": "330723",
						"disname": "武义县"
					},
					{
						"disid": "330726",
						"disname": "浦江县"
					},
					{
						"disid": "330727",
						"disname": "磐安县"
					},
					{
						"disid": "330781",
						"disname": "兰溪"
					},
					{
						"disid": "330782",
						"disname": "义乌"
					},
					{
						"disid": "330783",
						"disname": "东阳"
					},
					{
						"disid": "330784",
						"disname": "永康"
					}
				]
			},
			{
				"id": "330400",
				"name": "嘉兴",
				"lon":"120.761537",
				"lat":"30.750974",
				"dis": [{
						"disid": "330402",
						"disname": "南湖区"
					},
					{
						"disid": "330411",
						"disname": "秀洲区"
					},
					{
						"disid": "330421",
						"disname": "嘉善县"
					},
					{
						"disid": "330424",
						"disname": "海盐县"
					},
					{
						"disid": "330481",
						"disname": "海宁"
					},
					{
						"disid": "330482",
						"disname": "平湖"
					},
					{
						"disid": "330483",
						"disname": "桐乡"
					}
				]
			},
			{
				"id": "360400",
				"name": "九江",
				"lon":"116.00782",
				"lat":"29.710838",
				"dis": [{
						"disid": "360402",
						"disname": "庐山区"
					},
					{
						"disid": "360403",
						"disname": "浔阳区"
					},
					{
						"disid": "360421",
						"disname": "九江县"
					},
					{
						"disid": "360423",
						"disname": "武宁县"
					},
					{
						"disid": "360424",
						"disname": "修水县"
					},
					{
						"disid": "360425",
						"disname": "永修县"
					},
					{
						"disid": "360426",
						"disname": "德安县"
					},
					{
						"disid": "360427",
						"disname": "星子县"
					},
					{
						"disid": "360428",
						"disname": "都昌县"
					},
					{
						"disid": "360429",
						"disname": "湖口县"
					},
					{
						"disid": "360430",
						"disname": "彭泽县"
					},
					{
						"disid": "360481",
						"disname": "瑞昌"
					},
					{
						"disid": "360482",
						"disname": "共青城"
					}
				]
			},
			{
				"id": "360200",
				"name": "景德镇",
				"lon":"117.183712",
				"lat":"29.271223",
				"dis": [{
						"disid": "360202",
						"disname": "昌江区"
					},
					{
						"disid": "360203",
						"disname": "珠山区"
					},
					{
						"disid": "360222",
						"disname": "浮梁县"
					},
					{
						"disid": "360281",
						"disname": "乐平"
					}
				]
			},
			{
				"id": "440700",
				"name": "江门",
				"lon":"113.08654",
				"lat":"22.582468",
				"dis": [{
						"disid": "440703",
						"disname": "蓬江区"
					},
					{
						"disid": "440704",
						"disname": "江海区"
					},
					{
						"disid": "440705",
						"disname": "新会区"
					}
				]
			},
			{
				"id": "445200",
				"name": "揭阳",
				"lon":"116.377653",
				"lat":"23.555211",
				"dis": [{
						"disid": "445202",
						"disname": "榕城区"
					},
					{
						"disid": "445221",
						"disname": "揭东县"
					},
					{
						"disid": "445222",
						"disname": "揭西县"
					},
					{
						"disid": "445224",
						"disname": "惠来县"
					},
					{
						"disid": "445281",
						"disname": "普宁"
					}
				]
			},
			{
				"id": "410800",
				"name": "焦作",
				"lon":"113.249986",
				"lat":"35.221908",
				"dis": [{
						"disid": "410802",
						"disname": "解放区"
					},
					{
						"disid": "410803",
						"disname": "中站区"
					},
					{
						"disid": "410804",
						"disname": "马村区"
					},
					{
						"disid": "410811",
						"disname": "山阳区"
					},
					{
						"disid": "410821",
						"disname": "修武县"
					},
					{
						"disid": "410822",
						"disname": "博爱县"
					},
					{
						"disid": "410823",
						"disname": "武陟县"
					},
					{
						"disid": "410825",
						"disname": "温县"
					},
					{
						"disid": "410882",
						"disname": "沁阳"
					},
					{
						"disid": "410883",
						"disname": "孟州"
					}
				]
			},
			{
				"id": "230300",
				"name": "鸡西",
				"lon":"130.975333",
				"lat":"45.302903",
				"dis": [{
						"disid": "230302",
						"disname": "鸡冠区"
					},
					{
						"disid": "230303",
						"disname": "恒山区"
					},
					{
						"disid": "230304",
						"disname": "滴道区"
					},
					{
						"disid": "230305",
						"disname": "梨树区"
					},
					{
						"disid": "230306",
						"disname": "城子河区"
					},
					{
						"disid": "230307",
						"disname": "麻山区"
					},
					{
						"disid": "230321",
						"disname": "鸡东县"
					},
					{
						"disid": "230381",
						"disname": "虎林"
					},
					{
						"disid": "230382",
						"disname": "密山"
					}
				]
			},
			{
				"id": "230800",
				"name": "佳木斯",
				"lon":"130.329945",
				"lat":"46.80648",
				"dis": [{
						"disid": "230803",
						"disname": "向阳区"
					},
					{
						"disid": "230804",
						"disname": "前进区"
					},
					{
						"disid": "230805",
						"disname": "东风区"
					},
					{
						"disid": "230811",
						"disname": "郊区"
					},
					{
						"disid": "230822",
						"disname": "桦南县"
					},
					{
						"disid": "230826",
						"disname": "桦川县"
					},
					{
						"disid": "230828",
						"disname": "汤原县"
					},
					{
						"disid": "230833",
						"disname": "抚远县"
					},
					{
						"disid": "230881",
						"disname": "同江"
					},
					{
						"disid": "230882",
						"disname": "富锦"
					}
				]
			},
			{
				"id": "360800",
				"name": "吉安",
				"lon":"115.001376",
				"lat":"27.118698",
				"dis": [{
						"disid": "360802",
						"disname": "吉州区"
					},
					{
						"disid": "360803",
						"disname": "青原区"
					},
					{
						"disid": "360821",
						"disname": "吉安县"
					},
					{
						"disid": "360822",
						"disname": "吉水县"
					},
					{
						"disid": "360823",
						"disname": "峡江县"
					},
					{
						"disid": "360824",
						"disname": "新干县"
					},
					{
						"disid": "360825",
						"disname": "永丰县"
					},
					{
						"disid": "360826",
						"disname": "泰和县"
					},
					{
						"disid": "360827",
						"disname": "遂川县"
					},
					{
						"disid": "360828",
						"disname": "万安县"
					},
					{
						"disid": "360829",
						"disname": "安福县"
					},
					{
						"disid": "360830",
						"disname": "永新县"
					},
					{
						"disid": "360881",
						"disname": "井冈山"
					}
				]
			},
			{
				"id": "420800",
				"name": "荆门",
				"lon":"112.204377",
				"lat":"31.042723",
				"dis": [{
						"disid": "420802",
						"disname": "东宝区"
					},
					{
						"disid": "420804",
						"disname": "掇刀区"
					},
					{
						"disid": "420821",
						"disname": "京山县"
					},
					{
						"disid": "420822",
						"disname": "沙洋县"
					},
					{
						"disid": "420881",
						"disname": "钟祥"
					}
				]
			},
			{
				"id": "620300",
				"name": "金昌",
				"lon":"102.192591",
				"lat":"38.525369",
				"dis": [{
						"disid": "620302",
						"disname": "金川区"
					},
					{
						"disid": "620321",
						"disname": "永昌县"
					}
				]
			},
			{
				"id": "620200",
				"name": "嘉峪关",
				"lon":"98.299362",
				"lat":"39.779736",
				"dis": [{
					"disid": "620201",
					"disname": "嘉峪关"
				}]
			},
			{
				"id": "620900",
				"name": "酒泉",
				"lon":"98.499819",
				"lat":"39.739356",
				"dis": [{
						"disid": "620902",
						"disname": "肃州区"
					},
					{
						"disid": "620921",
						"disname": "金塔县"
					},
					{
						"disid": "620922",
						"disname": "瓜州县"
					},
					{
						"disid": "620923",
						"disname": "肃北蒙古族自治县"
					},
					{
						"disid": "620924",
						"disname": "阿克塞哈萨克族自治县"
					},
					{
						"disid": "620981",
						"disname": "玉门"
					},
					{
						"disid": "620982",
						"disname": "敦煌"
					}
				]
			}
		]
	},
	{
		"tag": "K",
		"cities": [{
				"id": "530100",
				"name": "昆明",
				"lon":"102.854463",
				"lat":"24.873473",
				"dis": [{
						"disid": "530102",
						"disname": "五华区"
					},
					{
						"disid": "530103",
						"disname": "盘龙区"
					},
					{
						"disid": "530111",
						"disname": "官渡区"
					},
					{
						"disid": "530112",
						"disname": "西山区"
					},
					{
						"disid": "530113",
						"disname": "东川区"
					},
					{
						"disid": "530114",
						"disname": "呈贡区"
					},
					{
						"disid": "530122",
						"disname": "晋宁县"
					},
					{
						"disid": "530124",
						"disname": "富民县"
					},
					{
						"disid": "530125",
						"disname": "宜良县"
					},
					{
						"disid": "530126",
						"disname": "石林彝族自治县"
					},
					{
						"disid": "530127",
						"disname": "嵩明县"
					},
					{
						"disid": "530128",
						"disname": "禄劝彝族苗族自治县"
					},
					{
						"disid": "530129",
						"disname": "寻甸回族彝族自治县"
					},
					{
						"disid": "530181",
						"disname": "安宁"
					}
				]
			},
			{
				"id": "410200",
				"name": "开封",
				"lon":"114.313733",
				"lat":"34.803359",
				"dis": [{
						"disid": "410202",
						"disname": "龙亭区"
					},
					{
						"disid": "410203",
						"disname": "顺河回族区"
					},
					{
						"disid": "410204",
						"disname": "鼓楼区"
					},
					{
						"disid": "410205",
						"disname": "禹王台区"
					},
					{
						"disid": "410211",
						"disname": "金明区"
					},
					{
						"disid": "410221",
						"disname": "杞县"
					},
					{
						"disid": "410222",
						"disname": "通许县"
					},
					{
						"disid": "410223",
						"disname": "尉氏县"
					},
					{
						"disid": "410224",
						"disname": "开封县"
					},
					{
						"disid": "410225",
						"disname": "兰考县"
					}
				]
			},
			{
				"id": "653000",
				"name": "克孜勒苏柯尔克孜自治州",
				"lon":"76.172301",
				"lat":"39.725355",
				"dis": [{
						"disid": "653001",
						"disname": "阿图什"
					},
					{
						"disid": "653022",
						"disname": "阿克陶县"
					},
					{
						"disid": "653023",
						"disname": "阿合奇县"
					},
					{
						"disid": "653024",
						"disname": "乌恰县"
					}
				]
			},
			{
				"id": "653100",
				"name": "喀什地区",
				"lon":"75.995533",
				"lat":"39.475652",
				"dis": [{
						"disid": "653101",
						"disname": "喀什"
					},
					{
						"disid": "653121",
						"disname": "疏附县"
					},
					{
						"disid": "653122",
						"disname": "疏勒县"
					},
					{
						"disid": "653123",
						"disname": "英吉沙县"
					},
					{
						"disid": "653124",
						"disname": "泽普县"
					},
					{
						"disid": "653125",
						"disname": "莎车县"
					},
					{
						"disid": "653126",
						"disname": "叶城县"
					},
					{
						"disid": "653127",
						"disname": "麦盖提县"
					},
					{
						"disid": "653128",
						"disname": "岳普湖县"
					},
					{
						"disid": "653129",
						"disname": "伽师县"
					},
					{
						"disid": "653130",
						"disname": "巴楚县"
					},
					{
						"disid": "653131",
						"disname": "塔什库尔干塔吉克自治县"
					}
				]
			},
			{
				"id": "650200",
				"name": "克拉玛依",
				"lon":"84.89676",
				"lat":"45.586884",
				"dis": [{
						"disid": "650202",
						"disname": "独山子区"
					},
					{
						"disid": "650203",
						"disname": "克拉玛依区"
					},
					{
						"disid": "650204",
						"disname": "白碱滩区"
					},
					{
						"disid": "650205",
						"disname": "乌尔禾区"
					}
				]
			}

		]
	},
	{
		"tag": "L",
		"cities": [{
				"id": "431300",
				"name": "娄底",
				"lon":"112.001791",
				"lat":"27.702696",
				"dis": [{
						"disid": "431302",
						"disname": "娄星区"
					},
					{
						"disid": "431321",
						"disname": "双峰县"
					},
					{
						"disid": "431322",
						"disname": "新化县"
					}
				]
			},
			{
				"id": "451300",
				"name": "来宾",
				"lon":"109.226018",
				"lat":"23.755488",
				"dis": [{
						"disid": "451302",
						"disname": "兴宾区"
					},
					{
						"disid": "451321",
						"disname": "忻城县"
					},
					{
						"disid": "451322",
						"disname": "象州县"
					},
					{
						"disid": "451323",
						"disname": "武宣县"
					},
					{
						"disid": "451324",
						"disname": "金秀瑶族自治县"
					},
					{
						"disid": "451381",
						"disname": "合山"
					}
				]
			},
			{
				"id": "220400",
				"name": "辽源",
				"lon":"125.149561",
				"lat":"42.895323",
				"dis": [{
						"disid": "220402",
						"disname": "龙山区"
					},
					{
						"disid": "220403",
						"disname": "西安区"
					},
					{
						"disid": "220421",
						"disname": "东丰县"
					},
					{
						"disid": "220422",
						"disname": "东辽县"
					}
				]
			},
			{
				"id": "410300",
				"name": "洛阳",
				"lon":"112.460286",
				"lat":"34.623313",
				"dis": [{
						"disid": "410302",
						"disname": "老城区"
					},
					{
						"disid": "410303",
						"disname": "西工区"
					},
					{
						"disid": "410304",
						"disname": "?河回族区"
					},
					{
						"disid": "410305",
						"disname": "涧西区"
					},
					{
						"disid": "410306",
						"disname": "吉利区"
					},
					{
						"disid": "410311",
						"disname": "洛龙区"
					},
					{
						"disid": "410322",
						"disname": "孟津县"
					},
					{
						"disid": "410323",
						"disname": "新安县"
					},
					{
						"disid": "410324",
						"disname": "栾川县"
					},
					{
						"disid": "410325",
						"disname": "嵩县"
					},
					{
						"disid": "410326",
						"disname": "汝阳县"
					},
					{
						"disid": "410327",
						"disname": "宜阳县"
					},
					{
						"disid": "410328",
						"disname": "洛宁县"
					},
					{
						"disid": "410329",
						"disname": "伊川县"
					},
					{
						"disid": "410381",
						"disname": "偃师"
					}
				]
			},
			{
				"id": "620100",
				"name": "兰州",
				"lon":"103.837362",
				"lat":"36.068635",
				"dis": [{
						"disid": "620102",
						"disname": "城关区"
					},
					{
						"disid": "620103",
						"disname": "七里河区"
					},
					{
						"disid": "620104",
						"disname": "西固区"
					},
					{
						"disid": "620105",
						"disname": "安宁区"
					},
					{
						"disid": "620111",
						"disname": "红古区"
					},
					{
						"disid": "620121",
						"disname": "永登县"
					},
					{
						"disid": "620122",
						"disname": "皋兰县"
					},
					{
						"disid": "620123",
						"disname": "榆中县"
					}
				]
			},
			{
				"id": "131000",
				"name": "廊坊",
				"lon":"116.689715",
				"lat":"39.541141",
				"dis": [{
						"disid": "131002",
						"disname": "安次区"
					},
					{
						"disid": "131003",
						"disname": "广阳区"
					},
					{
						"disid": "131022",
						"disname": "固安县"
					},
					{
						"disid": "131023",
						"disname": "永清县"
					},
					{
						"disid": "131024",
						"disname": "香河县"
					},
					{
						"disid": "131025",
						"disname": "大城县"
					},
					{
						"disid": "131026",
						"disname": "文安县"
					},
					{
						"disid": "131028",
						"disname": "大厂回族自治县"
					},
					{
						"disid": "131081",
						"disname": "霸州"
					},
					{
						"disid": "131082",
						"disname": "三河"
					}
				]
			},
			{
				"id": "371300",
				"name": "临沂",
				"lon":"118.364974",
				"lon":",35.10831",
				"dis": [{
						"disid": "371302",
						"disname": "兰山区"
					},
					{
						"disid": "371311",
						"disname": "罗庄区"
					},
					{
						"disid": "371312",
						"disname": "河东区"
					},
					{
						"disid": "371321",
						"disname": "沂南县"
					},
					{
						"disid": "371322",
						"disname": "郯城县"
					},
					{
						"disid": "371323",
						"disname": "沂水县"
					},
					{
						"disid": "371324",
						"disname": "苍山县"
					},
					{
						"disid": "371325",
						"disname": "费县"
					},
					{
						"disid": "371326",
						"disname": "平邑县"
					},
					{
						"disid": "371327",
						"disname": "莒南县"
					},
					{
						"disid": "371328",
						"disname": "蒙阴县"
					},
					{
						"disid": "371329",
						"disname": "临沭县"
					}
				]
			},
			{
				"id": "211000",
				"name": "辽阳",
				"lon":"123.242504",
				"lat":"41.273728",
				"dis": [{
						"disid": "211002",
						"disname": "白塔区"
					},
					{
						"disid": "211003",
						"disname": "文圣区"
					},
					{
						"disid": "211004",
						"disname": "宏伟区"
					},
					{
						"disid": "211005",
						"disname": "弓长岭区"
					},
					{
						"disid": "211011",
						"disname": "太子河区"
					},
					{
						"disid": "211021",
						"disname": "辽阳县"
					},
					{
						"disid": "211081",
						"disname": "灯塔"
					}
				]
			},
			{
				"id": "320700",
				"name": "连云港",
				"lon":"119.228336",
				"lat":"34.600347",
				"dis": [{
						"disid": "320703",
						"disname": "连云区"
					},
					{
						"disid": "320705",
						"disname": "新浦区"
					},
					{
						"disid": "320706",
						"disname": "海州区"
					},
					{
						"disid": "320721",
						"disname": "赣榆县"
					},
					{
						"disid": "320722",
						"disname": "东海县"
					},
					{
						"disid": "320723",
						"disname": "灌云县"
					},
					{
						"disid": "320724",
						"disname": "灌南县"
					}
				]
			},
			{
				"id": "510500",
				"name": "泸州",
				"lon":"105.447664",
				"lat":"28.875644",
				"dis": [{
						"disid": "510502",
						"disname": "江阳区"
					},
					{
						"disid": "510503",
						"disname": "纳溪区"
					},
					{
						"disid": "510504",
						"disname": "龙马潭区"
					},
					{
						"disid": "510521",
						"disname": "泸县"
					},
					{
						"disid": "510522",
						"disname": "合江县"
					},
					{
						"disid": "510524",
						"disname": "叙永县"
					},
					{
						"disid": "510525",
						"disname": "古蔺县"
					}
				]
			},
			{
				"id": "371200",
				"name": "莱芜",
				"lon":"117.686426",
				"lat":"36.232134",
				"dis": [{
						"disid": "371202",
						"disname": "莱城区"
					},
					{
						"disid": "371203",
						"disname": "钢城区"
					}
				]
			},
			{
				"id": "371500",
				"name": "聊城",
				"lon":"115.994175",
				"lat":"36.463223",
				"dis": [{
						"disid": "371502",
						"disname": "东昌府区"
					},
					{
						"disid": "371521",
						"disname": "阳谷县"
					},
					{
						"disid": "371522",
						"disname": "莘县"
					},
					{
						"disid": "371523",
						"disname": "茌平县"
					},
					{
						"disid": "371524",
						"disname": "东阿县"
					},
					{
						"disid": "371525",
						"disname": "冠县"
					},
					{
						"disid": "371526",
						"disname": "高唐县"
					},
					{
						"disid": "371581",
						"disname": "临清"
					}
				]
			},
			{
				"id": "450200",
				"name": "柳州",
				"lon":"109.432988",
				"lat":"24.333541",
				"dis": [{
						"disid": "450202",
						"disname": "城中区"
					},
					{
						"disid": "450203",
						"disname": "鱼峰区"
					},
					{
						"disid": "450204",
						"disname": "柳南区"
					},
					{
						"disid": "450205",
						"disname": "柳北区"
					},
					{
						"disid": "450221",
						"disname": "柳江县"
					},
					{
						"disid": "450222",
						"disname": "柳城县"
					},
					{
						"disid": "450223",
						"disname": "鹿寨县"
					},
					{
						"disid": "450224",
						"disname": "融安县"
					},
					{
						"disid": "450225",
						"disname": "融水苗族自治县"
					},
					{
						"disid": "450226",
						"disname": "三江侗族自治县"
					}
				]
			},
			{
				"id": "530700",
				"name": "丽江",
				"lon":"100.23045",
				"lat":"26.859626",
				"dis": [{
						"disid": "530702",
						"disname": "古城区"
					},
					{
						"disid": "530721",
						"disname": "玉龙纳西族自治县"
					},
					{
						"disid": "530722",
						"disname": "永胜县"
					},
					{
						"disid": "530723",
						"disname": "华坪县"
					},
					{
						"disid": "530724",
						"disname": "宁蒗彝族自治县"
					}
				]
			},
			{
				"id": "331100",
				"name": "丽水",
				"lon":"119.928134",
				"lat":"28.47023",
				"dis": [{
						"disid": "331102",
						"disname": "莲都区"
					},
					{
						"disid": "331121",
						"disname": "青田县"
					},
					{
						"disid": "331122",
						"disname": "缙云县"
					},
					{
						"disid": "331123",
						"disname": "遂昌县"
					},
					{
						"disid": "331124",
						"disname": "松阳县"
					},
					{
						"disid": "331125",
						"disname": "云和县"
					},
					{
						"disid": "331126",
						"disname": "庆元县"
					},
					{
						"disid": "331127",
						"disname": "景宁畲族自治县"
					},
					{
						"disid": "331181",
						"disname": "龙泉"
					}
				]
			},
			{
				"id": "540100",
				"name": "拉萨",
				"lon":"91.12226",
				"lat":"29.651044",
				"dis": [{
						"disid": "540102",
						"disname": "城关区"
					},
					{
						"disid": "540121",
						"disname": "林周县"
					},
					{
						"disid": "540122",
						"disname": "当雄县"
					},
					{
						"disid": "540123",
						"disname": "尼木县"
					},
					{
						"disid": "540124",
						"disname": "曲水县"
					},
					{
						"disid": "540125",
						"disname": "堆龙德庆县"
					},
					{
						"disid": "540126",
						"disname": "达孜县"
					},
					{
						"disid": "540127",
						"disname": "墨竹工卡县"
					}
				]
			},
			{
				"id": "341500",
				"name": "六安",
				"lon":"116.527849",
				"lat":"31.741943",
				"dis": [{
						"disid": "341502",
						"disname": "金安区"
					},
					{
						"disid": "341503",
						"disname": "裕安区"
					},
					{
						"disid": "341521",
						"disname": "寿县"
					},
					{
						"disid": "341522",
						"disname": "霍邱县"
					},
					{
						"disid": "341523",
						"disname": "舒城县"
					},
					{
						"disid": "341524",
						"disname": "金寨县"
					},
					{
						"disid": "341525",
						"disname": "霍山县"
					}
				]
			},
			{
				"id": "141000",
				"name": "临汾",
				"lon":"111.52409",
				"lat":"36.091876",
				"dis": [{
						"disid": "141002",
						"disname": "尧都区"
					},
					{
						"disid": "141021",
						"disname": "曲沃县"
					},
					{
						"disid": "141022",
						"disname": "翼城县"
					},
					{
						"disid": "141023",
						"disname": "襄汾县"
					},
					{
						"disid": "141024",
						"disname": "洪洞县"
					},
					{
						"disid": "141025",
						"disname": "古县"
					},
					{
						"disid": "141026",
						"disname": "安泽县"
					},
					{
						"disid": "141027",
						"disname": "浮山县"
					},
					{
						"disid": "141028",
						"disname": "吉县"
					},
					{
						"disid": "141029",
						"disname": "乡宁县"
					},
					{
						"disid": "141030",
						"disname": "大宁县"
					},
					{
						"disid": "141031",
						"disname": "隰县"
					},
					{
						"disid": "141032",
						"disname": "永和县"
					},
					{
						"disid": "141033",
						"disname": "蒲县"
					},
					{
						"disid": "141034",
						"disname": "汾西县"
					},
					{
						"disid": "141081",
						"disname": "侯马"
					},
					{
						"disid": "141082",
						"disname": "霍州"
					}
				]
			},
			{
				"id": "141100",
				"name": "吕梁",
				"lon":"111.149012",
				"lat":"37.524499",
				"dis": [{
						"disid": "141102",
						"disname": "离石区"
					},
					{
						"disid": "141121",
						"disname": "文水县"
					},
					{
						"disid": "141122",
						"disname": "交城县"
					},
					{
						"disid": "141123",
						"disname": "兴县"
					},
					{
						"disid": "141124",
						"disname": "临县"
					},
					{
						"disid": "141125",
						"disname": "柳林县"
					},
					{
						"disid": "141126",
						"disname": "石楼县"
					},
					{
						"disid": "141127",
						"disname": "岚县"
					},
					{
						"disid": "141128",
						"disname": "方山县"
					},
					{
						"disid": "141129",
						"disname": "中阳县"
					},
					{
						"disid": "141130",
						"disname": "交口县"
					},
					{
						"disid": "141181",
						"disname": "孝义"
					},
					{
						"disid": "141182",
						"disname": "汾阳"
					}
				]
			},
			{
				"id": "350800",
				"name": "龙岩",
				"lon":"117.023158",
				"lat":"25.082267",
				"dis": [{
						"disid": "350802",
						"disname": "新罗区"
					},
					{
						"disid": "350821",
						"disname": "长汀县"
					},
					{
						"disid": "350822",
						"disname": "永定县"
					},
					{
						"disid": "350823",
						"disname": "上杭县"
					},
					{
						"disid": "350824",
						"disname": "武平县"
					},
					{
						"disid": "350825",
						"disname": "连城县"
					},
					{
						"disid": "350881",
						"disname": "漳平"
					}
				]
			},
			{
				"id": "411100",
				"name": "漯河",
				"lon":"114.023706",
				"lat":"33.588191",
				"dis": [{
						"disid": "411102",
						"disname": "源汇区"
					},
					{
						"disid": "411103",
						"disname": "郾城区"
					},
					{
						"disid": "411104",
						"disname": "召陵区"
					},
					{
						"disid": "411121",
						"disname": "舞阳县"
					},
					{
						"disid": "411122",
						"disname": "临颍县"
					}
				]
			},
			{
				"id": "511100",
				"name": "乐山",
				"lon":"103.772827",
				"lat":"29.558191",
				"dis": [{
						"disid": "511102",
						"disname": "中区"
					},
					{
						"disid": "511111",
						"disname": "沙湾区"
					},
					{
						"disid": "511112",
						"disname": "五通桥区"
					},
					{
						"disid": "511113",
						"disname": "金口河区"
					},
					{
						"disid": "511123",
						"disname": "犍为县"
					},
					{
						"disid": "511124",
						"disname": "井研县"
					},
					{
						"disid": "511126",
						"disname": "夹江县"
					},
					{
						"disid": "511129",
						"disname": "沐川县"
					},
					{
						"disid": "511132",
						"disname": "峨边彝族自治县"
					},
					{
						"disid": "511133",
						"disname": "马边彝族自治县"
					},
					{
						"disid": "511181",
						"disname": "峨眉山"
					}
				]
			},
			{
				"id": "513400",
				"name": "凉山彝族自治州",
				"lon":"102.277814",
				"lat":"27.888774",
				"dis": [{
						"disid": "513401",
						"disname": "西昌"
					},
					{
						"disid": "513422",
						"disname": "木里藏族自治县"
					},
					{
						"disid": "513423",
						"disname": "盐源县"
					},
					{
						"disid": "513424",
						"disname": "德昌县"
					},
					{
						"disid": "513425",
						"disname": "会理县"
					},
					{
						"disid": "513426",
						"disname": "会东县"
					},
					{
						"disid": "513427",
						"disname": "宁南县"
					},
					{
						"disid": "513428",
						"disname": "普格县"
					},
					{
						"disid": "513429",
						"disname": "布拖县"
					},
					{
						"disid": "513430",
						"disname": "金阳县"
					},
					{
						"disid": "513431",
						"disname": "昭觉县"
					},
					{
						"disid": "513432",
						"disname": "喜德县"
					},
					{
						"disid": "513433",
						"disname": "冕宁县"
					},
					{
						"disid": "513434",
						"disname": "越西县"
					},
					{
						"disid": "513435",
						"disname": "甘洛县"
					},
					{
						"disid": "513436",
						"disname": "美姑县"
					},
					{
						"disid": "513437",
						"disname": "雷波县"
					}
				]
			},
			{
				"id": "520200",
				"name": "六盘水",
				"lon":"104.83899",
				"lat":"26.5978",
				"dis": [{
						"disid": "520201",
						"disname": "钟山区"
					},
					{
						"disid": "520203",
						"disname": "六枝特区"
					},
					{
						"disid": "520221",
						"disname": "水城县"
					},
					{
						"disid": "520222",
						"disname": "盘县"
					}
				]
			},
			{
				"id": "530900",
				"name": "临沧",
				"lon":"100.094859",
				"lat":"23.893053",
				"dis": [{
						"disid": "530902",
						"disname": "临翔区"
					},
					{
						"disid": "530921",
						"disname": "凤庆县"
					},
					{
						"disid": "530922",
						"disname": "云县"
					},
					{
						"disid": "530923",
						"disname": "永德县"
					},
					{
						"disid": "530924",
						"disname": "镇康县"
					},
					{
						"disid": "530925",
						"disname": "双江拉祜族佤族布朗族傣族自治县"
					},
					{
						"disid": "530926",
						"disname": "耿马傣族佤族自治县"
					},
					{
						"disid": "530927",
						"disname": "沧源佤族自治县"
					}
				]
			},
			{
				"id": "542600",
				"name": "林芝地区",
				"lon":"94.368058",
				"lat":"29.654042",
				"dis": [{
						"disid": "542621",
						"disname": "林芝县"
					},
					{
						"disid": "542622",
						"disname": "工布江达县"
					},
					{
						"disid": "542623",
						"disname": "米林县"
					},
					{
						"disid": "542624",
						"disname": "墨脱县"
					},
					{
						"disid": "542625",
						"disname": "波密县"
					},
					{
						"disid": "542626",
						"disname": "察隅县"
					},
					{
						"disid": "542627",
						"disname": "朗县"
					}
				]
			},
			{
				"id": "621200",
				"name": "陇南",
				"lon":"104.967151",
				"lat":"33.376033",
				"dis": [{
						"disid": "621202",
						"disname": "武都区"
					},
					{
						"disid": "621221",
						"disname": "成县"
					},
					{
						"disid": "621222",
						"disname": "文县"
					},
					{
						"disid": "621223",
						"disname": "宕昌县"
					},
					{
						"disid": "621224",
						"disname": "康县"
					},
					{
						"disid": "621225",
						"disname": "西和县"
					},
					{
						"disid": "621226",
						"disname": "礼县"
					},
					{
						"disid": "621227",
						"disname": "徽县"
					},
					{
						"disid": "621228",
						"disname": "两当县"
					}
				]
			},
			{
				"id": "622900",
				"name": "临夏回族自治州",
				"lon":"103.213803",
				"lat":"35.606623",
				"dis": [{
						"disid": "622901",
						"disname": "临夏"
					},
					{
						"disid": "622921",
						"disname": "临夏县"
					},
					{
						"disid": "622922",
						"disname": "康乐县"
					},
					{
						"disid": "622923",
						"disname": "永靖县"
					},
					{
						"disid": "622924",
						"disname": "广河县"
					},
					{
						"disid": "622925",
						"disname": "和政县"
					},
					{
						"disid": "622926",
						"disname": "东乡族自治县"
					},
					{
						"disid": "622927",
						"disname": "积石山保安族东乡族撒拉族自治县"
					}
				]
			}
		]
	},
	{
		"tag": "M",
		"cities": [{
				"id": "510700",
				"name": "绵阳",
				"lon":"104.685273",
				"lat":"31.472677",
				"dis": [{
						"disid": "510703",
						"disname": "涪城区"
					},
					{
						"disid": "510704",
						"disname": "游仙区"
					},
					{
						"disid": "510722",
						"disname": "三台县"
					},
					{
						"disid": "510723",
						"disname": "盐亭县"
					},
					{
						"disid": "510724",
						"disname": "安县"
					},
					{
						"disid": "510725",
						"disname": "梓潼县"
					},
					{
						"disid": "510726",
						"disname": "北川羌族自治县"
					},
					{
						"disid": "510727",
						"disname": "平武县"
					},
					{
						"disid": "510781",
						"disname": "江油"
					}
				]
			},
			{
				"id": "340500",
				"name": "马鞍山",
				"lon":"118.516743",
				"lat":"31.678232",
				"dis": [{
						"disid": "340502",
						"disname": "金家庄区"
					},
					{
						"disid": "340503",
						"disname": "花山区"
					},
					{
						"disid": "340504",
						"disname": "雨山区"
					},
					{
						"disid": "340521",
						"disname": "当涂县"
					},
					{
						"disid": "340522",
						"disname": "含山县"
					},
					{
						"disid": "340523",
						"disname": "和县"
					}
				]
			},
			{
				"id": "231000",
				"name": "牡丹江",
				"lon":"129.641556",
				"lat":"44.559125",
				"dis": [{
						"disid": "231002",
						"disname": "东安区"
					},
					{
						"disid": "231003",
						"disname": "阳明区"
					},
					{
						"disid": "231004",
						"disname": "爱民区"
					},
					{
						"disid": "231005",
						"disname": "西安区"
					},
					{
						"disid": "231024",
						"disname": "东宁县"
					},
					{
						"disid": "231025",
						"disname": "林口县"
					},
					{
						"disid": "231081",
						"disname": "绥芬河"
					},
					{
						"disid": "231083",
						"disname": "海林"
					},
					{
						"disid": "231084",
						"disname": "宁安"
					},
					{
						"disid": "231085",
						"disname": "穆棱"
					}
				]
			},
			{
				"id": "440900",
				"name": "茂名",
				"lon":"110.932403",
				"lat":"21.669601",
				"dis": [{
						"disid": "440902",
						"disname": "茂南区"
					},
					{
						"disid": "440903",
						"disname": "茂港区"
					},
					{
						"disid": "440923",
						"disname": "电白县"
					}
				]
			},
			{
				"id": "441400",
				"name": "梅州",
				"lon":"116.129828",
				"lat":"24.295231",
				"dis": [{
						"disid": "441402",
						"disname": "梅江区"
					},
					{
						"disid": "441421",
						"disname": "梅县"
					},
					{
						"disid": "441422",
						"disname": "大埔县"
					},
					{
						"disid": "441423",
						"disname": "丰顺县"
					},
					{
						"disid": "441424",
						"disname": "五华县"
					},
					{
						"disid": "441426",
						"disname": "平远县"
					},
					{
						"disid": "441427",
						"disname": "蕉岭县"
					}
				]
			},
			{
				"id": "511400",
				"name": "眉山",
				"lon":"103.85398",
				"lat":"30.084027",
				"dis": [{
						"disid": "511402",
						"disname": "东坡区"
					},
					{
						"disid": "511421",
						"disname": "仁寿县"
					},
					{
						"disid": "511422",
						"disname": "彭山县"
					},
					{
						"disid": "511423",
						"disname": "洪雅县"
					},
					{
						"disid": "511424",
						"disname": "丹棱县"
					},
					{
						"disid": "511425",
						"disname": "青神县"
					}
				]
			}
		]
	},
	{
		"tag": "N",
		"cities": [{
				"id": "320100",
				"name": "南京",
				"lon":"118.802709",
				"lat":"32.061714",
				"dis": [{
						"disid": "320102",
						"disname": "玄武区"
					},
					{
						"disid": "320103",
						"disname": "白下区"
					},
					{
						"disid": "320104",
						"disname": "秦淮区"
					},
					{
						"disid": "320105",
						"disname": "建邺区"
					},
					{
						"disid": "320106",
						"disname": "鼓楼区"
					},
					{
						"disid": "320107",
						"disname": "下关区"
					},
					{
						"disid": "320111",
						"disname": "浦口区"
					},
					{
						"disid": "320113",
						"disname": "栖霞区"
					},
					{
						"disid": "320114",
						"disname": "雨花台区"
					},
					{
						"disid": "320115",
						"disname": "江宁区"
					},
					{
						"disid": "320116",
						"disname": "六合区"
					},
					{
						"disid": "320124",
						"disname": "溧水县"
					},
					{
						"disid": "320125",
						"disname": "高淳县"
					}
				]
			},
			{
				"id": "511000",
				"name": "内江",
				"lon":"105.066028",
				"lat":"29.584378",
				"dis": [{
						"disid": "511002",
						"disname": "中区"
					},
					{
						"disid": "511011",
						"disname": "东兴区"
					},
					{
						"disid": "511024",
						"disname": "威远县"
					},
					{
						"disid": "511025",
						"disname": "资中县"
					},
					{
						"disid": "511028",
						"disname": "隆昌县"
					}
				]
			},
			{
				"id": "511300",
				"name": "南充",
				"lon":"106.116067",
				"lat":"30.843783",
				"dis": [{
						"disid": "511302",
						"disname": "顺庆区"
					},
					{
						"disid": "511303",
						"disname": "高坪区"
					},
					{
						"disid": "511304",
						"disname": "嘉陵区"
					},
					{
						"disid": "511321",
						"disname": "南部县"
					},
					{
						"disid": "511322",
						"disname": "营山县"
					},
					{
						"disid": "511323",
						"disname": "蓬安县"
					},
					{
						"disid": "511324",
						"disname": "仪陇县"
					},
					{
						"disid": "511325",
						"disname": "西充县"
					},
					{
						"disid": "511381",
						"disname": "阆中"
					}
				]
			},
			{
				"id": "542400",
				"name": "那曲地区",
				"lon":"92.060074",
				"lat":"31.477391",
				"dis": [{
						"disid": "542421",
						"disname": "那曲县"
					},
					{
						"disid": "542422",
						"disname": "嘉黎县"
					},
					{
						"disid": "542423",
						"disname": "比如县"
					},
					{
						"disid": "542424",
						"disname": "聂荣县"
					},
					{
						"disid": "542425",
						"disname": "安多县"
					},
					{
						"disid": "542426",
						"disname": "申扎县"
					},
					{
						"disid": "542427",
						"disname": "索县"
					},
					{
						"disid": "542428",
						"disname": "班戈县"
					},
					{
						"disid": "542429",
						"disname": "巴青县"
					},
					{
						"disid": "542430",
						"disname": "尼玛县"
					}
				]
			},
			{
				"id": "330200",
				"name": "宁波",
				"lon":"121.62771",
				"lat":"29.861023",
				"dis": [{
						"disid": "330203",
						"disname": "海曙区"
					},
					{
						"disid": "330204",
						"disname": "江东区"
					},
					{
						"disid": "330205",
						"disname": "江北区"
					},
					{
						"disid": "330206",
						"disname": "北仑区"
					},
					{
						"disid": "330211",
						"disname": "镇海区"
					},
					{
						"disid": "330212",
						"disname": "鄞州区"
					},
					{
						"disid": "330225",
						"disname": "象山县"
					},
					{
						"disid": "330226",
						"disname": "宁海县"
					},
					{
						"disid": "330281",
						"disname": "余姚"
					},
					{
						"disid": "330282",
						"disname": "慈溪"
					},
					{
						"disid": "330283",
						"disname": "奉化"
					}
				]
			},
			{
				"id": "450100",
				"name": "南宁",
				"lon":"108.379491",
				"lat":"22.820475",
				"dis": [{
						"disid": "450102",
						"disname": "兴宁区"
					},
					{
						"disid": "450103",
						"disname": "青秀区"
					},
					{
						"disid": "450105",
						"disname": "江南区"
					},
					{
						"disid": "450107",
						"disname": "西乡塘区"
					},
					{
						"disid": "450108",
						"disname": "良庆区"
					},
					{
						"disid": "450109",
						"disname": "邕宁区"
					},
					{
						"disid": "450122",
						"disname": "武鸣县"
					},
					{
						"disid": "450123",
						"disname": "隆安县"
					},
					{
						"disid": "450124",
						"disname": "马山县"
					},
					{
						"disid": "450125",
						"disname": "上林县"
					},
					{
						"disid": "450126",
						"disname": "宾阳县"
					},
					{
						"disid": "450127",
						"disname": "横县"
					}
				]
			},
			{
				"id": "350700",
				"name": "南平",
				"lon":"118.183508",
				"lat":"26.643639",
				"dis": [{
						"disid": "350702",
						"disname": "延平区"
					},
					{
						"disid": "350721",
						"disname": "顺昌县"
					},
					{
						"disid": "350722",
						"disname": "浦城县"
					},
					{
						"disid": "350723",
						"disname": "光泽县"
					},
					{
						"disid": "350724",
						"disname": "松溪县"
					},
					{
						"disid": "350725",
						"disname": "政和县"
					},
					{
						"disid": "350781",
						"disname": "邵武"
					},
					{
						"disid": "350782",
						"disname": "武夷山"
					},
					{
						"disid": "350783",
						"disname": "建瓯"
					},
					{
						"disid": "350784",
						"disname": "建阳"
					}
				]
			},
			{
				"id": "350900",
				"name": "宁德",
				"lon":"119.555372",
				"lat":"26.669659",
				"dis": [{
						"disid": "350902",
						"disname": "蕉城区"
					},
					{
						"disid": "350921",
						"disname": "霞浦县"
					},
					{
						"disid": "350922",
						"disname": "古田县"
					},
					{
						"disid": "350923",
						"disname": "屏南县"
					},
					{
						"disid": "350924",
						"disname": "寿宁县"
					},
					{
						"disid": "350925",
						"disname": "周宁县"
					},
					{
						"disid": "350926",
						"disname": "柘荣县"
					},
					{
						"disid": "350981",
						"disname": "福安"
					},
					{
						"disid": "350982",
						"disname": "福鼎"
					}
				]
			},
			{
				"id": "360100",
				"name": "南昌",
				"lon":"115.863148",
				"lat":"28.692497",
				"dis": [{
						"disid": "360102",
						"disname": "东湖区"
					},
					{
						"disid": "360103",
						"disname": "西湖区"
					},
					{
						"disid": "360104",
						"disname": "青云谱区"
					},
					{
						"disid": "360105",
						"disname": "湾里区"
					},
					{
						"disid": "360111",
						"disname": "青山湖区"
					},
					{
						"disid": "360121",
						"disname": "南昌县"
					},
					{
						"disid": "360122",
						"disname": "新建县"
					},
					{
						"disid": "360123",
						"disname": "安义县"
					},
					{
						"disid": "360124",
						"disname": "进贤县"
					}
				]
			},
			{
				"id": "320600",
				"name": "南通",
				"lon":"120.902453",
				"lat":"31.985079",
				"dis": [{
						"disid": "320602",
						"disname": "崇川区"
					},
					{
						"disid": "320611",
						"disname": "港闸区"
					},
					{
						"disid": "320612",
						"disname": "通州区"
					},
					{
						"disid": "320621",
						"disname": "海安县"
					},
					{
						"disid": "320623",
						"disname": "如东县"
					},
					{
						"disid": "320681",
						"disname": "启东"
					},
					{
						"disid": "320682",
						"disname": "如皋"
					},
					{
						"disid": "320684",
						"disname": "海门"
					}
				]
			},
			{
				"id": "411300",
				"name": "南阳",
				"lon":"112.535366",
				"lat":"32.992685",
				"dis": [{
						"disid": "411302",
						"disname": "宛城区"
					},
					{
						"disid": "411303",
						"disname": "卧龙区"
					},
					{
						"disid": "411321",
						"disname": "南召县"
					},
					{
						"disid": "411322",
						"disname": "方城县"
					},
					{
						"disid": "411323",
						"disname": "西峡县"
					},
					{
						"disid": "411324",
						"disname": "镇平县"
					},
					{
						"disid": "411325",
						"disname": "内乡县"
					},
					{
						"disid": "411326",
						"disname": "淅川县"
					},
					{
						"disid": "411327",
						"disname": "社旗县"
					},
					{
						"disid": "411328",
						"disname": "唐河县"
					},
					{
						"disid": "411329",
						"disname": "新野县"
					},
					{
						"disid": "411330",
						"disname": "桐柏县"
					},
					{
						"disid": "411381",
						"disname": "邓州"
					}
				]
			},
			{
				"id": "533300",
				"name": "怒江傈僳族自治州",
				"lon":"98.862429",
				"lat":"25.828911",
				"dis": [{
						"disid": "533321",
						"disname": "泸水县"
					},
					{
						"disid": "533323",
						"disname": "福贡县"
					},
					{
						"disid": "533324",
						"disname": "贡山独龙族怒族自治县"
					},
					{
						"disid": "533325",
						"disname": "兰坪白族普米族自治县"
					}
				]
			}
		]
	},
	{
		"tag": "P",
		"cities": [{
				"id": "510400",
				"name": "攀枝花",
				"lon":"101.726981",
				"lat":"26.590102",
				"dis": [{
						"disid": "510402",
						"disname": "东区"
					},
					{
						"disid": "510403",
						"disname": "西区"
					},
					{
						"disid": "510411",
						"disname": "仁和区"
					},
					{
						"disid": "510421",
						"disname": "米易县"
					},
					{
						"disid": "510422",
						"disname": "盐边县"
					}
				]
			},
			{
				"id": "530800",
				"name": "普洱",
				"lon":"100.974004",
				"lat":"22.832044",
				"dis": [{
						"disid": "530802",
						"disname": "思茅区"
					},
					{
						"disid": "530821",
						"disname": "宁洱哈尼族彝族自治县"
					},
					{
						"disid": "530822",
						"disname": "墨江哈尼族自治县"
					},
					{
						"disid": "530823",
						"disname": "景东彝族自治县"
					},
					{
						"disid": "530824",
						"disname": "景谷傣族彝族自治县"
					},
					{
						"disid": "530825",
						"disname": "镇沅彝族哈尼族拉祜族自治县"
					},
					{
						"disid": "530826",
						"disname": "江城哈尼族彝族自治县"
					},
					{
						"disid": "530827",
						"disname": "孟连傣族拉祜族佤族自治县"
					},
					{
						"disid": "530828",
						"disname": "澜沧拉祜族自治县"
					},
					{
						"disid": "530829",
						"disname": "西盟佤族自治县"
					}
				]
			},
			{
				"id": "620800",
				"name": "平凉",
				"lon":"106.673025",
				"lat":"35.548997",
				"dis": [{
						"disid": "620802",
						"disname": "崆峒区"
					},
					{
						"disid": "620821",
						"disname": "泾川县"
					},
					{
						"disid": "620822",
						"disname": "灵台县"
					},
					{
						"disid": "620823",
						"disname": "崇信县"
					},
					{
						"disid": "620824",
						"disname": "华亭县"
					},
					{
						"disid": "620825",
						"disname": "庄浪县"
					},
					{
						"disid": "620826",
						"disname": "静宁县"
					}
				]
			},
			{
				"id": "410400",
				"name": "平顶山",
				"lon":"113.200391",
				"lat":"33.77157",
				"dis": [{
						"disid": "410402",
						"disname": "新华区"
					},
					{
						"disid": "410403",
						"disname": "卫东区"
					},
					{
						"disid": "410404",
						"disname": "石龙区"
					},
					{
						"disid": "410411",
						"disname": "湛河区"
					},
					{
						"disid": "410421",
						"disname": "宝丰县"
					},
					{
						"disid": "410422",
						"disname": "叶县"
					},
					{
						"disid": "410423",
						"disname": "鲁山县"
					},
					{
						"disid": "410425",
						"disname": "郏县"
					},
					{
						"disid": "410481",
						"disname": "舞钢"
					},
					{
						"disid": "410482",
						"disname": "汝州"
					}
				]
			},
			{
				"id": "360300",
				"name": "萍乡",
				"lon":"113.861212",
				"lat":"27.625832",
				"dis": [{
						"disid": "360302",
						"disname": "安源区"
					},
					{
						"disid": "360313",
						"disname": "湘东区"
					},
					{
						"disid": "360321",
						"disname": "莲花县"
					},
					{
						"disid": "360322",
						"disname": "上栗县"
					},
					{
						"disid": "360323",
						"disname": "芦溪县"
					}
				]
			},
			{
				"id": "350300",
				"name": "莆田",
				"lon":"119.011934",
				"lat":"25.461953",
				"dis": [{
						"disid": "350302",
						"disname": "城厢区"
					},
					{
						"disid": "350303",
						"disname": "涵江区"
					},
					{
						"disid": "350304",
						"disname": "荔城区"
					},
					{
						"disid": "350305",
						"disname": "秀屿区"
					},
					{
						"disid": "350322",
						"disname": "仙游县"
					}
				]
			},
			{
				"id": "211100",
				"name": "盘锦",
				"lon":"122.077778",
				"lat":"41.126309",
				"dis": [{
						"disid": "211102",
						"disname": "双台子区"
					},
					{
						"disid": "211103",
						"disname": "兴隆台区"
					},
					{
						"disid": "211121",
						"disname": "大洼县"
					},
					{
						"disid": "211122",
						"disname": "盘山县"
					}
				]
			},
			{
				"id": "410900",
				"name": "濮阳",
				"lon":"115.03933",
				"lat":"35.76525",
				"dis": [{
						"disid": "410902",
						"disname": "华龙区"
					},
					{
						"disid": "410922",
						"disname": "清丰县"
					},
					{
						"disid": "410923",
						"disname": "南乐县"
					},
					{
						"disid": "410926",
						"disname": "范县"
					},
					{
						"disid": "410927",
						"disname": "台前县"
					},
					{
						"disid": "410928",
						"disname": "濮阳县"
					}
				]
			}
		]
	},
	{
		"tag": "Q",
		"cities": [{
				"id": "530300",
				"name": "曲靖",
				"lon":"103.800424",
				"lat":"25.493798",
				"dis": [{
						"disid": "530302",
						"disname": "麒麟区"
					},
					{
						"disid": "530321",
						"disname": "马龙县"
					},
					{
						"disid": "530322",
						"disname": "陆良县"
					},
					{
						"disid": "530323",
						"disname": "师宗县"
					},
					{
						"disid": "530324",
						"disname": "罗平县"
					},
					{
						"disid": "530325",
						"disname": "富源县"
					},
					{
						"disid": "530326",
						"disname": "会泽县"
					},
					{
						"disid": "530328",
						"disname": "沾益县"
					},
					{
						"disid": "530381",
						"disname": "宣威"
					}
				]
			},
			{
				"id": "230900",
				"name": "七台河",
				"lon":"131.011257",
				"lat":"45.775494",
				"dis": [{
						"disid": "230902",
						"disname": "新兴区"
					},
					{
						"disid": "230903",
						"disname": "桃山区"
					},
					{
						"disid": "230904",
						"disname": "茄子河区"
					},
					{
						"disid": "230921",
						"disname": "勃利县"
					}
				]
			},
			{
				"id": "130300",
				"name": "秦皇岛",
				"lon":"119.609971",
				"lat":"39.939534",
				"dis": [{
						"disid": "130302",
						"disname": "海港区"
					},
					{
						"disid": "130303",
						"disname": "山海关区"
					},
					{
						"disid": "130304",
						"disname": "北戴河区"
					},
					{
						"disid": "130321",
						"disname": "青龙满族自治县"
					},
					{
						"disid": "130322",
						"disname": "昌黎县"
					},
					{
						"disid": "130323",
						"disname": "抚宁县"
					},
					{
						"disid": "130324",
						"disname": "卢龙县"
					}

				]
			},
			{
				"id": "441800",
				"name": "清远",
				"lon":"113.057003",
				"lat":"23.690347",
				"dis": [{
						"disid": "441802",
						"disname": "清城区"
					},
					{
						"disid": "441821",
						"disname": "佛冈县"
					},
					{
						"disid": "441823",
						"disname": "阳山县"
					},
					{
						"disid": "441825",
						"disname": "连山壮族瑶族自治县"
					},
					{
						"disid": "441826",
						"disname": "连南瑶族自治县"
					},
					{
						"disid": "441827",
						"disname": "清新县"
					}
				]
			},
			{
				"id": "370200",
				"name": "青岛",
				"lon":"120.389745",
				"lat":"36.095095",
				"dis": [{
						"disid": "370202",
						"disname": "南区"
					},
					{
						"disid": "370203",
						"disname": "北区"
					},
					{
						"disid": "370205",
						"disname": "四方区"
					},
					{
						"disid": "370211",
						"disname": "黄岛区"
					},
					{
						"disid": "370212",
						"disname": "崂山区"
					},
					{
						"disid": "370213",
						"disname": "李沧区"
					},
					{
						"disid": "370214",
						"disname": "城阳区"
					},
					{
						"disid": "370281",
						"disname": "胶州"
					},
					{
						"disid": "370282",
						"disname": "即墨"
					},
					{
						"disid": "370283",
						"disname": "平度"
					},
					{
						"disid": "370284",
						"disname": "胶南"
					},
					{
						"disid": "370285",
						"disname": "莱西"
					}
				]
			},
			{
				"id": "350500",
				"name": "泉州",
				"lon":"118.670658",
				"lat":"24.883099",
				"dis": [{
						"disid": "350502",
						"disname": "鲤城区"
					},
					{
						"disid": "350503",
						"disname": "丰泽区"
					},
					{
						"disid": "350504",
						"disname": "洛江区"
					},
					{
						"disid": "350505",
						"disname": "泉港区"
					},
					{
						"disid": "350521",
						"disname": "惠安县"
					},
					{
						"disid": "350524",
						"disname": "安溪县"
					},
					{
						"disid": "350525",
						"disname": "永春县"
					},
					{
						"disid": "350526",
						"disname": "德化县"
					},
					{
						"disid": "350527",
						"disname": "金门县"
					},
					{
						"disid": "350581",
						"disname": "石狮"
					},
					{
						"disid": "350582",
						"disname": "晋江"
					},
					{
						"disid": "350583",
						"disname": "南安"
					}
				]
			},
			{
				"id": "230200",
				"name": "齐齐哈尔",
				"lon":"123.924856",
				"lat":"47.357635",
				"dis": [{
						"disid": "230202",
						"disname": "龙沙区"
					},
					{
						"disid": "230203",
						"disname": "建华区"
					},
					{
						"disid": "230204",
						"disname": "铁锋区"
					},
					{
						"disid": "230205",
						"disname": "昂昂溪区"
					},
					{
						"disid": "230206",
						"disname": "富拉尔基区"
					},
					{
						"disid": "230207",
						"disname": "碾子山区"
					},
					{
						"disid": "230208",
						"disname": "梅里斯达斡尔族区"
					},
					{
						"disid": "230221",
						"disname": "龙江县"
					},
					{
						"disid": "230223",
						"disname": "依安县"
					},
					{
						"disid": "230224",
						"disname": "泰来县"
					},
					{
						"disid": "230225",
						"disname": "甘南县"
					},
					{
						"disid": "230227",
						"disname": "富裕县"
					},
					{
						"disid": "230229",
						"disname": "克山县"
					},
					{
						"disid": "230230",
						"disname": "克东县"
					},
					{
						"disid": "230231",
						"disname": "拜泉县"
					},
					{
						"disid": "230281",
						"disname": "讷河"
					}
				]
			},
			{
				"id": "330800",
				"name": "衢州",
				"lon":"118.865735",
				"lat":"28.975546",
				"dis": [{
						"disid": "330802",
						"disname": "柯城区"
					},
					{
						"disid": "330803",
						"disname": "衢江区"
					},
					{
						"disid": "330822",
						"disname": "常山县"
					},
					{
						"disid": "330824",
						"disname": "开化县"
					},
					{
						"disid": "330825",
						"disname": "龙游县"
					},
					{
						"disid": "330881",
						"disname": "江山"
					}
				]
			},
			{
				"id": "450700",
				"name": "钦州",
				"lon":"108.660293",
				"lat":"21.984448",
				"dis": [{
						"disid": "450702",
						"disname": "钦南区"
					},
					{
						"disid": "450703",
						"disname": "钦北区"
					},
					{
						"disid": "450721",
						"disname": "灵山县"
					},
					{
						"disid": "450722",
						"disname": "浦北县"
					}
				]
			},
			{
				"id": "522300",
				"name": "黔西南布依族苗族自治州",
				"lon":"104.909328",
				"lat":"25.101298",
				"dis": [{
						"disid": "522301",
						"disname": "兴义"
					},
					{
						"disid": "522322",
						"disname": "兴仁县"
					},
					{
						"disid": "522323",
						"disname": "普安县"
					},
					{
						"disid": "522324",
						"disname": "晴隆县"
					},
					{
						"disid": "522325",
						"disname": "贞丰县"
					},
					{
						"disid": "522326",
						"disname": "望谟县"
					},
					{
						"disid": "522327",
						"disname": "册亨县"
					},
					{
						"disid": "522328",
						"disname": "安龙县"
					}
				]
			},
			{
				"id": "522600",
				"name": "黔东南苗族侗族自治州",
				"lon":"107.988585",
				"lat":"26.594873",
				"dis": [{
						"disid": "522601",
						"disname": "凯里"
					},
					{
						"disid": "522622",
						"disname": "黄平县"
					},
					{
						"disid": "522623",
						"disname": "施秉县"
					},
					{
						"disid": "522624",
						"disname": "三穗县"
					},
					{
						"disid": "522625",
						"disname": "镇远县"
					},
					{
						"disid": "522626",
						"disname": "岑巩县"
					},
					{
						"disid": "522627",
						"disname": "天柱县"
					},
					{
						"disid": "522628",
						"disname": "锦屏县"
					},
					{
						"disid": "522629",
						"disname": "剑河县"
					},
					{
						"disid": "522630",
						"disname": "台江县"
					},
					{
						"disid": "522631",
						"disname": "黎平县"
					},
					{
						"disid": "522632",
						"disname": "榕江县"
					},
					{
						"disid": "522633",
						"disname": "从江县"
					},
					{
						"disid": "522634",
						"disname": "雷山县"
					},
					{
						"disid": "522635",
						"disname": "麻江县"
					},
					{
						"disid": "522636",
						"disname": "丹寨县"
					}
				]
			},
			{
				"id": "522700",
				"name": "黔南布依族苗族自治州",
				"lon":"107.527538",
				"lat":"26.267355",
				"dis": [{
						"disid": "522701",
						"disname": "都匀"
					},
					{
						"disid": "522702",
						"disname": "福泉"
					},
					{
						"disid": "522722",
						"disname": "荔波县"
					},
					{
						"disid": "522723",
						"disname": "贵定县"
					},
					{
						"disid": "522725",
						"disname": "瓮安县"
					},
					{
						"disid": "522726",
						"disname": "独山县"
					},
					{
						"disid": "522727",
						"disname": "平塘县"
					},
					{
						"disid": "522728",
						"disname": "罗甸县"
					},
					{
						"disid": "522729",
						"disname": "长顺县"
					},
					{
						"disid": "522730",
						"disname": "龙里县"
					},
					{
						"disid": "522731",
						"disname": "惠水县"
					},
					{
						"disid": "522732",
						"disname": "三都水族自治县"
					}
				]
			},
			{
				"id": "621000",
				"name": "庆阳",
				"lon":"107.648522",
				"lat":"35.714747",
				"dis": [{
						"disid": "621002",
						"disname": "西峰区"
					},
					{
						"disid": "621021",
						"disname": "庆城县"
					},
					{
						"disid": "621022",
						"disname": "环县"
					},
					{
						"disid": "621023",
						"disname": "华池县"
					},
					{
						"disid": "621024",
						"disname": "合水县"
					},
					{
						"disid": "621025",
						"disname": "正宁县"
					},
					{
						"disid": "621026",
						"disname": "宁县"
					},
					{
						"disid": "621027",
						"disname": "镇原县"
					}
				]
			}
		]
	},
	{
		"tag": "R",
		"cities": [{
				"id": "371100",
				"name": "日照",
				"lon":"119.513009",
				"lat":"35.420956",
				"dis": [{
						"disid": "371102",
						"disname": "东港区"
					},
					{
						"disid": "371103",
						"disname": "岚山区"
					},
					{
						"disid": "371121",
						"disname": "五莲县"
					},
					{
						"disid": "371122",
						"disname": "莒县"
					}
				]
			},
			{
				"id": "542300",
				"name": "日喀则地区",
				"lon":"88.887087",
				"lat":"29.276666",
				"dis": [{
						"disid": "542301",
						"disname": "日喀则"
					},
					{
						"disid": "542322",
						"disname": "南木林县"
					},
					{
						"disid": "542323",
						"disname": "江孜县"
					},
					{
						"disid": "542324",
						"disname": "定日县"
					},
					{
						"disid": "542325",
						"disname": "萨迦县"
					},
					{
						"disid": "542326",
						"disname": "拉孜县"
					},
					{
						"disid": "542327",
						"disname": "昂仁县"
					},
					{
						"disid": "542328",
						"disname": "谢通门县"
					},
					{
						"disid": "542329",
						"disname": "白朗县"
					},
					{
						"disid": "542330",
						"disname": "仁布县"
					},
					{
						"disid": "542331",
						"disname": "康马县"
					},
					{
						"disid": "542332",
						"disname": "定结县"
					},
					{
						"disid": "542333",
						"disname": "仲巴县"
					},
					{
						"disid": "542334",
						"disname": "亚东县"
					},
					{
						"disid": "542335",
						"disname": "吉隆县"
					},
					{
						"disid": "542336",
						"disname": "聂拉木县"
					},
					{
						"disid": "542337",
						"disname": "萨嘎县"
					},
					{
						"disid": "542338",
						"disname": "岗巴县"
					}
				]
			}
		]
	},
	{
		"tag": "S",
		"cities": [{
				"id": "542200",
				"name": "山南地区",
				"lon":"91.776092",
				"lat":"29.242523",
				"dis": [{
						"disid": "542221",
						"disname": "乃东县"
					},
					{
						"disid": "542222",
						"disname": "扎囊县"
					},
					{
						"disid": "542223",
						"disname": "贡嘎县"
					},
					{
						"disid": "542224",
						"disname": "桑日县"
					},
					{
						"disid": "542225",
						"disname": "琼结县"
					},
					{
						"disid": "542226",
						"disname": "曲松县"
					},
					{
						"disid": "542227",
						"disname": "措美县"
					},
					{
						"disid": "542228",
						"disname": "洛扎县"
					},
					{
						"disid": "542229",
						"disname": "加查县"
					},
					{
						"disid": "542231",
						"disname": "隆子县"
					},
					{
						"disid": "542232",
						"disname": "错那县"
					},
					{
						"disid": "542233",
						"disname": "浪卡子县"
					}
				]
			},
			{
				"id": "460200",
				"name": "三亚",
				"lon":"109.520572",
				"lat":"18.264229",
				"dis": [{
						"disid": "469001",
						"disname": "五指山"
					},
					{
						"disid": "469002",
						"disname": "琼海"
					},
					{
						"disid": "469003",
						"disname": "儋州"
					},
					{
						"disid": "469005",
						"disname": "文昌"
					},
					{
						"disid": "469006",
						"disname": "万宁"
					},
					{
						"disid": "469007",
						"disname": "东方"
					},
					{
						"disid": "469021",
						"disname": "定安县"
					},
					{
						"disid": "469022",
						"disname": "屯昌县"
					},
					{
						"disid": "469023",
						"disname": "澄迈县"
					},
					{
						"disid": "469024",
						"disname": "临高县"
					},
					{
						"disid": "469025",
						"disname": "白沙黎族自治县"
					},
					{
						"disid": "469026",
						"disname": "昌江黎族自治县"
					},
					{
						"disid": "469027",
						"disname": "乐东黎族自治县"
					},
					{
						"disid": "469028",
						"disname": "陵水黎族自治县"
					},
					{
						"disid": "469029",
						"disname": "保亭黎族苗族自治县"
					},
					{
						"disid": "469030",
						"disname": "琼中黎族苗族自治县"
					},
					{
						"disid": "469031",
						"disname": "西沙群岛"
					},
					{
						"disid": "469032",
						"disname": "南沙群岛"
					},
					{
						"disid": "469033",
						"disname": "中沙群岛的岛礁及其海域"
					}
				]
			},
			{
				"id": "220300",
				"name": "四平",
				"lon":"124.355621",
				"lat":"43.171153",
				"dis": [{
						"disid": "220302",
						"disname": "铁西区"
					},
					{
						"disid": "220303",
						"disname": "铁东区"
					},
					{
						"disid": "220322",
						"disname": "梨树县"
					},
					{
						"disid": "220323",
						"disname": "伊通满族自治县"
					},
					{
						"disid": "220381",
						"disname": "公主岭"
					},
					{
						"disid": "220382",
						"disname": "双辽"
					}
				]
			},
			{
				"id": "210100",
				"name": "沈阳",
				"lon":"123.468508",
				"lat":"41.682106",
				"dis": [{
						"disid": "210102",
						"disname": "和平区"
					},
					{
						"disid": "210103",
						"disname": "沈河区"
					},
					{
						"disid": "210104",
						"disname": "大东区"
					},
					{
						"disid": "210105",
						"disname": "皇姑区"
					},
					{
						"disid": "210106",
						"disname": "铁西区"
					},
					{
						"disid": "210111",
						"disname": "苏家屯区"
					},
					{
						"disid": "210112",
						"disname": "东陵区"
					},
					{
						"disid": "210113",
						"disname": "沈北新区"
					},
					{
						"disid": "210114",
						"disname": "于洪区"
					},
					{
						"disid": "210122",
						"disname": "辽中县"
					},
					{
						"disid": "210123",
						"disname": "康平县"
					},
					{
						"disid": "210124",
						"disname": "法库县"
					},
					{
						"disid": "210181",
						"disname": "新民"
					}
				]
			},
			{
				"id": "361100",
				"name": "上饶",
				"lon":"117.95205",
				"lat":"28.461642",
				"dis": [{
						"disid": "361102",
						"disname": "信州区"
					},
					{
						"disid": "361121",
						"disname": "上饶县"
					},
					{
						"disid": "361122",
						"disname": "广丰县"
					},
					{
						"disid": "361123",
						"disname": "玉山县"
					},
					{
						"disid": "361124",
						"disname": "铅山县"
					},
					{
						"disid": "361125",
						"disname": "横峰县"
					},
					{
						"disid": "361126",
						"disname": "弋阳县"
					},
					{
						"disid": "361127",
						"disname": "余干县"
					},
					{
						"disid": "361128",
						"disname": "鄱阳县"
					},
					{
						"disid": "361129",
						"disname": "万年县"
					},
					{
						"disid": "361130",
						"disname": "婺源县"
					},
					{
						"disid": "361181",
						"disname": "德兴"
					}
				]
			},
			{
				"id": "130100",
				"name": "石家庄",
				"lon":"114.519517",
				"lat":"38.045584",
				"dis": [{
						"disid": "130102",
						"disname": "长安区"
					},
					{
						"disid": "130103",
						"disname": "桥东区"
					},
					{
						"disid": "130104",
						"disname": "桥西区"
					},
					{
						"disid": "130105",
						"disname": "新华区"
					},
					{
						"disid": "130106",
						"disname": "郊  区"
					},
					{
						"disid": "130107",
						"disname": "井陉矿区"
					},
					{
						"disid": "130108",
						"disname": "裕华区"
					},
					{
						"disid": "130121",
						"disname": "井陉县"
					},
					{
						"disid": "130123",
						"disname": "正定县"
					},
					{
						"disid": "130124",
						"disname": "栾城县"
					},
					{
						"disid": "130125",
						"disname": "行唐县"
					},
					{
						"disid": "130126",
						"disname": "灵寿县"
					},
					{
						"disid": "130127",
						"disname": "高邑县"
					},
					{
						"disid": "130128",
						"disname": "深泽县"
					},
					{
						"disid": "130129",
						"disname": "赞皇县"
					},
					{
						"disid": "130130",
						"disname": "无极县"
					},
					{
						"disid": "130131",
						"disname": "平山县"
					},
					{
						"disid": "130132",
						"disname": "元氏县"
					},
					{
						"disid": "130133",
						"disname": "赵县"
					},
					{
						"disid": "130181",
						"disname": "辛集"
					},
					{
						"disid": "130182",
						"disname": "藁城"
					},
					{
						"disid": "130183",
						"disname": "晋州"
					},
					{
						"disid": "130184",
						"disname": "新乐"
					},
					{
						"disid": "130185",
						"disname": "鹿泉"
					}

				]
			},
			{
				"id": "231200",
				"name": "绥化",
				"lon":"126.974496",
				"lat":"46.659636",
				"dis": [{
						"disid": "231202",
						"disname": "北林区"
					},
					{
						"disid": "231221",
						"disname": "望奎县"
					},
					{
						"disid": "231222",
						"disname": "兰西县"
					},
					{
						"disid": "231223",
						"disname": "青冈县"
					},
					{
						"disid": "231224",
						"disname": "庆安县"
					},
					{
						"disid": "231225",
						"disname": "明水县"
					},
					{
						"disid": "231226",
						"disname": "绥棱县"
					},
					{
						"disid": "231281",
						"disname": "安达"
					},
					{
						"disid": "231282",
						"disname": "肇东"
					},
					{
						"disid": "231283",
						"disname": "海伦"
					}
				]
			},
			{
				"id": "310100",
				"name": "上海",
				"lon":"121.484277",
				"lat":"31.232965",
				"dis": [{
						"disid": "310101",
						"disname": "黄浦区"
					},
					{
						"disid": "310104",
						"disname": "徐汇区"
					},
					{
						"disid": "310105",
						"disname": "长宁区"
					},
					{
						"disid": "310106",
						"disname": "静安区"
					},
					{
						"disid": "310107",
						"disname": "普陀区"
					},
					{
						"disid": "310108",
						"disname": "闸北区"
					},
					{
						"disid": "310109",
						"disname": "虹口区"
					},
					{
						"disid": "310110",
						"disname": "杨浦区"
					},
					{
						"disid": "310112",
						"disname": "闵行区"
					},
					{
						"disid": "310113",
						"disname": "宝山区"
					},
					{
						"disid": "310114",
						"disname": "嘉定区"
					},
					{
						"disid": "310115",
						"disname": "浦东新区"
					},
					{
						"disid": "310116",
						"disname": "金山区"
					},
					{
						"disid": "310117",
						"disname": "松江区"
					},
					{
						"disid": "310118",
						"disname": "青浦区"
					},
					{
						"disid": "310120",
						"disname": "奉贤区"
					},
					{
						"disid": "310230",
						"disname": "崇明县"
					}
				]
			},
			{
				"id": "420300",
				"name": "十堰",
				"lon":"110.805966",
				"lat":"32.633604",
				"dis": [{
						"disid": "420302",
						"disname": "茅箭区"
					},
					{
						"disid": "420303",
						"disname": "张湾区"
					},
					{
						"disid": "420321",
						"disname": "郧县"
					},
					{
						"disid": "420322",
						"disname": "郧西县"
					},
					{
						"disid": "420323",
						"disname": "竹山县"
					},
					{
						"disid": "420324",
						"disname": "竹溪县"
					},
					{
						"disid": "420325",
						"disname": "房县"
					},
					{
						"disid": "420381",
						"disname": "丹江口"
					}
				]
			},
			{
				"id": "140600",
				"name": "朔州",
				"lon":"112.439661",
				"lat":"39.336217",
				"dis": [{
						"disid": "140602",
						"disname": "朔城区"
					},
					{
						"disid": "140603",
						"disname": "平鲁区"
					},
					{
						"disid": "140621",
						"disname": "山阴县"
					},
					{
						"disid": "140622",
						"disname": "应县"
					},
					{
						"disid": "140623",
						"disname": "右玉县"
					},
					{
						"disid": "140624",
						"disname": "怀仁县"
					}
				]
			},
			{
				"id": "440200",
				"name": "韶关",
				"lon":"113.606686",
				"lat":"24.813256",
				"dis": [{
						"disid": "440203",
						"disname": "武江区"
					},
					{
						"disid": "440204",
						"disname": "浈江区"
					},
					{
						"disid": "440205",
						"disname": "曲江区"
					},
					{
						"disid": "440222",
						"disname": "始兴县"
					},
					{
						"disid": "440224",
						"disname": "仁化县"
					},
					{
						"disid": "440229",
						"disname": "翁源县"
					},
					{
						"disid": "440232",
						"disname": "乳源瑶族自治县"
					},
					{
						"disid": "440233",
						"disname": "新丰县"
					},
					{
						"disid": "440281",
						"disname": "乐昌"
					},
					{
						"disid": "440282",
						"disname": "南雄"
					}
				]
			},
			{
				"id": "440300",
				"name": "深圳",
				"lon":"114.068289",
				"lat":"22.547922",
				"dis": [{
						"disid": "440303",
						"disname": "罗湖区"
					},
					{
						"disid": "440304",
						"disname": "福田区"
					},
					{
						"disid": "440305",
						"disname": "南山区"
					},
					{
						"disid": "440306",
						"disname": "宝安区"
					},
					{
						"disid": "440307",
						"disname": "龙岗区"
					},
					{
						"disid": "440308",
						"disname": "盐田区"
					}
				]
			},
			{
				"id": "440500",
				"name": "汕头",
				"lon":"116.691691",
				"lat":"23.362807",
				"dis": [{
						"disid": "440507",
						"disname": "龙湖区"
					},
					{
						"disid": "440511",
						"disname": "金平区"
					},
					{
						"disid": "440512",
						"disname": "濠江区"
					},
					{
						"disid": "440513",
						"disname": "潮阳区"
					},
					{
						"disid": "440514",
						"disname": "潮南区"
					},
					{
						"disid": "440515",
						"disname": "澄海区"
					},
					{
						"disid": "440523",
						"disname": "南澳县"
					}
				]
			},
			{
				"id": "320500",
				"name": "苏州",
				"lon":"120.592699",
				"lat":"31.302578",
				"dis": [{
						"disid": "320502",
						"disname": "沧浪区"
					},
					{
						"disid": "320503",
						"disname": "平江区"
					},
					{
						"disid": "320504",
						"disname": "金阊区"
					},
					{
						"disid": "320505",
						"disname": "虎丘区"
					},
					{
						"disid": "320506",
						"disname": "吴中区"
					},
					{
						"disid": "320507",
						"disname": "相城区"
					},
					{
						"disid": "320581",
						"disname": "常熟"
					},
					{
						"disid": "320582",
						"disname": "张家港"
					},
					{
						"disid": "320583",
						"disname": "昆山"
					},
					{
						"disid": "320584",
						"disname": "吴江"
					},
					{
						"disid": "320585",
						"disname": "太仓"
					}
				]
			},
			{
				"id": "330600",
				"name": "绍兴",
				"lon":"120.591514",
				"lat":"30.034869",
				"dis": [{
						"disid": "330602",
						"disname": "越城区"
					},
					{
						"disid": "330621",
						"disname": "绍兴县"
					},
					{
						"disid": "330624",
						"disname": "新昌县"
					},
					{
						"disid": "330681",
						"disname": "诸暨"
					},
					{
						"disid": "330682",
						"disname": "上虞"
					},
					{
						"disid": "330683",
						"disname": "嵊州"
					}
				]
			},
			{
				"id": "321300",
				"name": "宿迁",
				"lon":"118.283587",
				"lat":"33.961522",
				"dis": [{
						"disid": "321302",
						"disname": "宿城区"
					},
					{
						"disid": "321311",
						"disname": "宿豫区"
					},
					{
						"disid": "321322",
						"disname": "沭阳县"
					},
					{
						"disid": "321323",
						"disname": "泗阳县"
					},
					{
						"disid": "321324",
						"disname": "泗洪县"
					}
				]
			},
			{
				"id": "411200",
				"name": "三门峡",
				"lon":"111.206817",
				"lat":"34.775954",
				"dis": [{
						"disid": "411202",
						"disname": "湖滨区"
					},
					{
						"disid": "411221",
						"disname": "渑池县"
					},
					{
						"disid": "411222",
						"disname": "陕县"
					},
					{
						"disid": "411224",
						"disname": "卢氏县"
					},
					{
						"disid": "411281",
						"disname": "义马"
					},
					{
						"disid": "411282",
						"disname": "灵宝"
					}
				]
			},
			{
				"id": "411400",
				"name": "商丘",
				"lon":"115.663311",
				"lat":"34.415437",
				"dis": [{
						"disid": "411402",
						"disname": "梁园区"
					},
					{
						"disid": "411403",
						"disname": "睢阳区"
					},
					{
						"disid": "411421",
						"disname": "民权县"
					},
					{
						"disid": "411422",
						"disname": "睢县"
					},
					{
						"disid": "411423",
						"disname": "宁陵县"
					},
					{
						"disid": "411424",
						"disname": "柘城县"
					},
					{
						"disid": "411425",
						"disname": "虞城县"
					},
					{
						"disid": "411426",
						"disname": "夏邑县"
					},
					{
						"disid": "411481",
						"disname": "永城"
					}
				]
			},
			{
				"id": "341300",
				"name": "宿州",
				"lon":"116.969106",
				"lat":"33.649692",
				"dis": [{
						"disid": "341302",
						"disname": "?桥区"
					},
					{
						"disid": "341321",
						"disname": "砀山县"
					},
					{
						"disid": "341322",
						"disname": "萧县"
					},
					{
						"disid": "341323",
						"disname": "灵璧县"
					},
					{
						"disid": "341324",
						"disname": "泗县"
					}
				]
			},
			{
				"id": "220700",
				"name": "松原",
				"lon":"124.832917",
				"lat":"45.146997",
				"dis": [{
						"disid": "220702",
						"disname": "宁江区"
					},
					{
						"disid": "220721",
						"disname": "前郭尔罗斯蒙古族自治县"
					},
					{
						"disid": "220722",
						"disname": "长岭县"
					},
					{
						"disid": "220723",
						"disname": "乾安县"
					},
					{
						"disid": "220724",
						"disname": "扶余县"
					}
				]
			},
			{
				"id": "230500",
				"name": "双鸭山",
				"lon":"131.167929",
				"lat":"46.651997",
				"dis": [{
						"disid": "230502",
						"disname": "尖山区"
					},
					{
						"disid": "230503",
						"disname": "岭东区"
					},
					{
						"disid": "230505",
						"disname": "四方台区"
					},
					{
						"disid": "230506",
						"disname": "宝山区"
					},
					{
						"disid": "230521",
						"disname": "集贤县"
					},
					{
						"disid": "230522",
						"disname": "友谊县"
					},
					{
						"disid": "230523",
						"disname": "宝清县"
					},
					{
						"disid": "230524",
						"disname": "饶河县"
					}
				]
			},
			{
				"id": "350400",
				"name": "三明",
				"lon":"117.645234",
				"lat":"26.269736",
				"dis": [{
						"disid": "350402",
						"disname": "梅列区"
					},
					{
						"disid": "350403",
						"disname": "三元区"
					},
					{
						"disid": "350421",
						"disname": "明溪县"
					},
					{
						"disid": "350423",
						"disname": "清流县"
					},
					{
						"disid": "350424",
						"disname": "宁化县"
					},
					{
						"disid": "350425",
						"disname": "大田县"
					},
					{
						"disid": "350426",
						"disname": "尤溪县"
					},
					{
						"disid": "350427",
						"disname": "沙县"
					},
					{
						"disid": "350428",
						"disname": "将乐县"
					},
					{
						"disid": "350429",
						"disname": "泰宁县"
					},
					{
						"disid": "350430",
						"disname": "建宁县"
					},
					{
						"disid": "350481",
						"disname": "永安"
					}
				]
			},
			{
				"id": "421300",
				"name": "随州",
				"lon":"113.389161",
				"lat":"31.697499",
				"dis": [{
						"disid": "421303",
						"disname": "曾都区"
					},
					{
						"disid": "421321",
						"disname": "随县"
					},
					{
						"disid": "421381",
						"disname": "广水"
					}
				]
			},
			{
				"id": "430500",
				"name": "邵阳",
				"lon":"111.477019",
				"lat":"27.244243",
				"dis": [{
						"disid": "430502",
						"disname": "双清区"
					},
					{
						"disid": "430503",
						"disname": "大祥区"
					},
					{
						"disid": "430511",
						"disname": "北塔区"
					},
					{
						"disid": "430521",
						"disname": "邵东县"
					},
					{
						"disid": "430522",
						"disname": "新邵县"
					},
					{
						"disid": "430523",
						"disname": "邵阳县"
					},
					{
						"disid": "430524",
						"disname": "隆回县"
					},
					{
						"disid": "430525",
						"disname": "洞口县"
					},
					{
						"disid": "430527",
						"disname": "绥宁县"
					},
					{
						"disid": "430528",
						"disname": "新宁县"
					},
					{
						"disid": "430529",
						"disname": "城步苗族自治县"
					}
				]
			},
			{
				"id": "441500",
				"name": "汕尾",
				"lon":"115.383561",
				"lat":"22.790729",
				"dis": [{
						"disid": "441502",
						"disname": "城区"
					},
					{
						"disid": "441521",
						"disname": "海丰县"
					},
					{
						"disid": "441523",
						"disname": "陆河县"
					}
				]
			},
			{
				"id": "510900",
				"name": "遂宁",
				"lon":"105.602586",
				"lat":"30.538599",
				"dis": [{
						"disid": "510903",
						"disname": "船山区"
					},
					{
						"disid": "510904",
						"disname": "安居区"
					},
					{
						"disid": "510921",
						"disname": "蓬溪县"
					},
					{
						"disid": "510922",
						"disname": "射洪县"
					},
					{
						"disid": "510923",
						"disname": "大英县"
					}
				]
			},
			{
				"id": "611000",
				"name": "商洛",
				"lon":"109.924702",
				"lat":"33.879113",
				"dis": [{
						"disid": "611002",
						"disname": "商州区"
					},
					{
						"disid": "611021",
						"disname": "洛南县"
					},
					{
						"disid": "611022",
						"disname": "丹凤县"
					},
					{
						"disid": "611023",
						"disname": "商南县"
					},
					{
						"disid": "611024",
						"disname": "山阳县"
					},
					{
						"disid": "611025",
						"disname": "镇安县"
					},
					{
						"disid": "611026",
						"disname": "柞水县"
					}
				]
			},
			{
				"id": "640200",
				"name": "石嘴山",
				"lon":"106.393184",
				"lat":"38.988337",
				"dis": [{
						"disid": "640202",
						"disname": "大武口区"
					},
					{
						"disid": "640205",
						"disname": "惠农区"
					},
					{
						"disid": "640221",
						"disname": "平罗县"
					}
				]
			}
		]
	},
	{
		"tag": "T",
		"cities": [{
				"id": "520601",
				"name": "铜仁",
				"lon":"109.199024",
				"lat":"27.736251",
				"dis": [{
						"disid": "520602",
						"disname": "碧江区"
					},
					{
						"disid": "520603",
						"disname": "万山区"
					},
					{
						"disid": "520621",
						"disname": "江口县"
					},
					{
						"disid": "520622",
						"disname": "玉屏侗族自治县"
					},
					{
						"disid": "520623",
						"disname": "石阡县"
					},
					{
						"disid": "520624",
						"disname": "思南县"
					},
					{
						"disid": "520625",
						"disname": "印江土家族苗族自治县"
					},
					{
						"disid": "520626",
						"disname": "德江县"
					},
					{
						"disid": "520627",
						"disname": "沿河土家族自治县"
					},
					{
						"disid": "520628",
						"disname": "松桃苗族自治县"
					}
				]
			},
			{
				"id": "220500",
				"name": "通化",
				"lon":"125.947472",
				"lat":"41.730801",
				"dis": [{
						"disid": "220502",
						"disname": "东昌区"
					},
					{
						"disid": "220503",
						"disname": "二道江区"
					},
					{
						"disid": "220521",
						"disname": "通化县"
					},
					{
						"disid": "220523",
						"disname": "辉南县"
					},
					{
						"disid": "220524",
						"disname": "柳河县"
					},
					{
						"disid": "220581",
						"disname": "梅河口"
					},
					{
						"disid": "220582",
						"disname": "集安"
					}
				]
			},
			{
				"id": "340700",
				"name": "铜陵",
				"lon":"117.819343",
				"lat":"30.952224",
				"dis": [{
						"disid": "340702",
						"disname": "铜官山区"
					},
					{
						"disid": "340703",
						"disname": "狮子山区"
					},
					{
						"disid": "340711",
						"disname": "郊区"
					},
					{
						"disid": "340721",
						"disname": "铜陵县"
					}
				]
			},
			{
				"id": "652100",
				"name": "吐鲁番地区",
				"lon":"89.195862",
				"lat":"42.962051",
				"dis": [{
						"disid": "652101",
						"disname": "吐鲁番"
					},
					{
						"disid": "652122",
						"disname": "鄯善县"
					},
					{
						"disid": "652123",
						"disname": "托克逊县"
					}
				]
			},
			{
				"id": "211200",
				"name": "铁岭",
				"lon":"123.733804",
				"lat":"42.230804",
				"dis": [{
						"disid": "211202",
						"disname": "银州区"
					},
					{
						"disid": "211204",
						"disname": "清河区"
					},
					{
						"disid": "211221",
						"disname": "铁岭县"
					},
					{
						"disid": "211223",
						"disname": "西丰县"
					},
					{
						"disid": "211224",
						"disname": "昌图县"
					},
					{
						"disid": "211281",
						"disname": "调兵山"
					},
					{
						"disid": "211282",
						"disname": "开原"
					}
				]
			},
			{
				"id": "120100",
				"name": "天津",
				"lon":"117.209233",
				"lat":"39.094565",
				"dis": [{
						"disid": "120101",
						"disname": "和平区"
					},
					{
						"disid": "120102",
						"disname": "河东区"
					},
					{
						"disid": "120103",
						"disname": "河西区"
					},
					{
						"disid": "120104",
						"disname": "南开区"
					},
					{
						"disid": "120105",
						"disname": "河北区"
					},
					{
						"disid": "120106",
						"disname": "红桥区"
					},
					{
						"disid": "120107",
						"disname": "塘沽区"
					},
					{
						"disid": "120108",
						"disname": "汉沽区"
					},
					{
						"disid": "120109",
						"disname": "大港区"
					},
					{
						"disid": "120110",
						"disname": "东丽区"
					},
					{
						"disid": "120111",
						"disname": "西青区"
					},
					{
						"disid": "120112",
						"disname": "津南区"
					},
					{
						"disid": "120113",
						"disname": "北辰区"
					},
					{
						"disid": "120114",
						"disname": "武清区"
					},
					{
						"disid": "120115",
						"disname": "宝坻区"
					},
					{
						"disid": "120116",
						"disname": "滨海新区"
					},
					{
						"disid": "120221",
						"disname": "宁河县"
					},
					{
						"disid": "120223",
						"disname": "静海县"
					},
					{
						"disid": "120225",
						"disname": "蓟县"
					}
				]
			},
			{
				"id": "130200",
				"name": "唐山",
				"lon":"118.181001",
				"lat":"39.643697",
				"dis": [{
						"disid": "130202",
						"disname": "路南区"
					},
					{
						"disid": "130203",
						"disname": "路北区"
					},
					{
						"disid": "130204",
						"disname": "古冶区"
					},
					{
						"disid": "130205",
						"disname": "开平区"
					},
					{
						"disid": "130206",
						"disname": "新  区"
					},
					{
						"disid": "130207",
						"disname": "丰南区"
					},
					{
						"disid": "130208",
						"disname": "丰润区"
					},
					{
						"disid": "130223",
						"disname": "滦 县"
					},
					{
						"disid": "130224",
						"disname": "滦南县"
					},
					{
						"disid": "130225",
						"disname": "乐亭县"
					},
					{
						"disid": "130227",
						"disname": "迁西县"
					},
					{
						"disid": "130229",
						"disname": "玉田县"
					},
					{
						"disid": "130230",
						"disname": "唐海县"
					},
					{
						"disid": "130281",
						"disname": "遵化"
					},
					{
						"disid": "130283",
						"disname": "迁安"
					}

				]
			},
			{
				"id": "140100",
				"name": "太原",
				"lon":"112.561283",
				"lat":"37.874256",
				"dis": [{
						"disid": "140105",
						"disname": "小店区"
					},
					{
						"disid": "140106",
						"disname": "迎泽区"
					},
					{
						"disid": "140107",
						"disname": "杏花岭区"
					},
					{
						"disid": "140108",
						"disname": "尖草坪区"
					},
					{
						"disid": "140109",
						"disname": "万柏林区"
					},
					{
						"disid": "140110",
						"disname": "晋源区"
					},
					{
						"disid": "140121",
						"disname": "清徐县"
					},
					{
						"disid": "140122",
						"disname": "阳曲县"
					},
					{
						"disid": "140123",
						"disname": "娄烦县"
					},
					{
						"disid": "140181",
						"disname": "古交"
					}
				]
			},
			{
				"id": "331000",
				"name": "台州",
				"lon":"121.425995",
				"lat":"28.6627",
				"dis": [{
						"disid": "331002",
						"disname": "椒江区"
					},
					{
						"disid": "331003",
						"disname": "黄岩区"
					},
					{
						"disid": "331004",
						"disname": "路桥区"
					},
					{
						"disid": "331021",
						"disname": "玉环县"
					},
					{
						"disid": "331022",
						"disname": "三门县"
					},
					{
						"disid": "331023",
						"disname": "天台县"
					},
					{
						"disid": "331024",
						"disname": "仙居县"
					},
					{
						"disid": "331081",
						"disname": "温岭"
					},
					{
						"disid": "331082",
						"disname": "临海"
					}
				]
			},
			{
				"id": "321200",
				"name": "泰州",
				"lon":"119.932733",
				"lat":"32.46165",
				"dis": [{
						"disid": "321202",
						"disname": "海陵区"
					},
					{
						"disid": "321203",
						"disname": "高港区"
					},
					{
						"disid": "321281",
						"disname": "兴化"
					},
					{
						"disid": "321282",
						"disname": "靖江"
					},
					{
						"disid": "321283",
						"disname": "泰兴"
					},
					{
						"disid": "321284",
						"disname": "姜堰"
					}
				]
			},
			{
				"id": "370900",
				"name": "泰安",
				"lon":"117.096504",
				"lat":"36.203061",
				"dis": [{
						"disid": "370902",
						"disname": "泰山区"
					},
					{
						"disid": "370911",
						"disname": "岱岳区"
					},
					{
						"disid": "370921",
						"disname": "宁阳县"
					},
					{
						"disid": "370923",
						"disname": "东平县"
					},
					{
						"disid": "370982",
						"disname": "新泰"
					},
					{
						"disid": "370983",
						"disname": "肥城"
					}
				]
			},
			{
				"id": "620500",
				"name": "天水",
				"lon":"105.732858",
				"lat":"34.587412",
				"dis": [{
						"disid": "620502",
						"disname": "秦州区"
					},
					{
						"disid": "620503",
						"disname": "麦积区"
					},
					{
						"disid": "620521",
						"disname": "清水县"
					},
					{
						"disid": "620522",
						"disname": "秦安县"
					},
					{
						"disid": "620523",
						"disname": "甘谷县"
					},
					{
						"disid": "620524",
						"disname": "武山县"
					},
					{
						"disid": "620525",
						"disname": "张家川回族自治县"
					}
				]
			},
			{
				"id": "150500",
				"name": "通辽",
				"lon":"122.25196",
				"lat":"43.660067",
				"dis": [{
						"disid": "150502",
						"disname": "科尔沁区"
					},
					{
						"disid": "150521",
						"disname": "科尔沁左翼中旗"
					},
					{
						"disid": "150522",
						"disname": "科尔沁左翼后旗"
					},
					{
						"disid": "150523",
						"disname": "开鲁县"
					},
					{
						"disid": "150524",
						"disname": "库伦旗"
					},
					{
						"disid": "150525",
						"disname": "奈曼旗"
					},
					{
						"disid": "150526",
						"disname": "扎鲁特旗"
					},
					{
						"disid": "150581",
						"disname": "霍林郭勒"
					}
				]
			},
			{
				"id": "610200",
				"name": "铜川",
				"lon":"108.95499",
				"lat":"34.902638",
				"dis": [{
						"disid": "610202",
						"disname": "王益区"
					},
					{
						"disid": "610203",
						"disname": "印台区"
					},
					{
						"disid": "610204",
						"disname": "耀州区"
					},
					{
						"disid": "610222",
						"disname": "宜君县"
					}
				]
			},
			{
				"id": "654200",
				"name": "塔城地区",
				"lon":"82.99212",
				"lat":"46.7466",
				"dis": [{
						"disid": "654201",
						"disname": "塔城"
					},
					{
						"disid": "654202",
						"disname": "乌苏"
					},
					{
						"disid": "654221",
						"disname": "额敏县"
					},
					{
						"disid": "654223",
						"disname": "沙湾县"
					},
					{
						"disid": "654224",
						"disname": "托里县"
					},
					{
						"disid": "654225",
						"disname": "裕民县"
					},
					{
						"disid": "654226",
						"disname": "和布克赛尔蒙古自治县"
					}
				]
			}
		]
	},
	{
		"tag": "W",
		"cities": [{
				"id": "420100",
				"name": "武汉",
				"lon":"114.310149",
				"lat":"30.599462",
				"dis": [{
						"disid": "420102",
						"disname": "江岸区"
					},
					{
						"disid": "420103",
						"disname": "江汉区"
					},
					{
						"disid": "420104",
						"disname": "?口区"
					},
					{
						"disid": "420105",
						"disname": "汉阳区"
					},
					{
						"disid": "420106",
						"disname": "武昌区"
					},
					{
						"disid": "420107",
						"disname": "青山区"
					},
					{
						"disid": "420111",
						"disname": "洪山区"
					},
					{
						"disid": "420112",
						"disname": "东西湖区"
					},
					{
						"disid": "420113",
						"disname": "汉南区"
					},
					{
						"disid": "420114",
						"disname": "蔡甸区"
					},
					{
						"disid": "420115",
						"disname": "江夏区"
					},
					{
						"disid": "420116",
						"disname": "黄陂区"
					},
					{
						"disid": "420117",
						"disname": "新洲区"
					}
				]
			},
			{
				"id": "620600",
				"name": "武威",
				"lon":"102.644268",
				"lat":"37.928458",
				"dis": [{
						"disid": "620602",
						"disname": "凉州区"
					},
					{
						"disid": "620621",
						"disname": "民勤县"
					},
					{
						"disid": "620622",
						"disname": "古浪县"
					},
					{
						"disid": "620623",
						"disname": "天祝藏族自治县"
					}
				]
			},
			{
				"id": "150300",
				"name": "乌海",
				"lon":"106.825404",
				"lat":"39.682444",
				"dis": [{
						"disid": "150302",
						"disname": "海勃湾区"
					},
					{
						"disid": "150303",
						"disname": "海南区"
					},
					{
						"disid": "150304",
						"disname": "乌达区"
					}
				]
			},
			{
				"id": "150900",
				"name": "乌兰察布",
				"lon":"113.140905",
				"lat":"40.998572",
				"dis": [{
						"disid": "150902",
						"disname": "集宁区"
					},
					{
						"disid": "150921",
						"disname": "卓资县"
					},
					{
						"disid": "150922",
						"disname": "化德县"
					},
					{
						"disid": "150923",
						"disname": "商都县"
					},
					{
						"disid": "150924",
						"disname": "兴和县"
					},
					{
						"disid": "150925",
						"disname": "凉城县"
					},
					{
						"disid": "150926",
						"disname": "察哈尔右翼前旗"
					},
					{
						"disid": "150927",
						"disname": "察哈尔右翼中旗"
					},
					{
						"disid": "150928",
						"disname": "察哈尔右翼后旗"
					},
					{
						"disid": "150929",
						"disname": "四子王旗"
					},
					{
						"disid": "150981",
						"disname": "丰镇"
					}
				]
			},
			{
				"id": "610500",
				"name": "渭南",
				"lon":"109.51688",
				"lat":"34.500955",
				"dis": [{
						"disid": "610502",
						"disname": "临渭区"
					},
					{
						"disid": "610521",
						"disname": "华县"
					},
					{
						"disid": "610522",
						"disname": "潼关县"
					},
					{
						"disid": "610523",
						"disname": "大荔县"
					},
					{
						"disid": "610524",
						"disname": "合阳县"
					},
					{
						"disid": "610525",
						"disname": "澄城县"
					},
					{
						"disid": "610526",
						"disname": "蒲城县"
					},
					{
						"disid": "610527",
						"disname": "白水县"
					},
					{
						"disid": "610528",
						"disname": "富平县"
					},
					{
						"disid": "610581",
						"disname": "韩城"
					},
					{
						"disid": "610582",
						"disname": "华阴"
					}
				]
			},
			{
				"id": "370700",
				"name": "潍坊",
				"lon":"119.168087",
				"lat":"36.710335",
				"dis": [{
						"disid": "370702",
						"disname": "潍城区"
					},
					{
						"disid": "370703",
						"disname": "寒亭区"
					},
					{
						"disid": "370704",
						"disname": "坊子区"
					},
					{
						"disid": "370705",
						"disname": "奎文区"
					},
					{
						"disid": "370724",
						"disname": "临朐县"
					},
					{
						"disid": "370725",
						"disname": "昌乐县"
					},
					{
						"disid": "370781",
						"disname": "青州"
					},
					{
						"disid": "370782",
						"disname": "诸城"
					},
					{
						"disid": "370783",
						"disname": "寿光"
					},
					{
						"disid": "370784",
						"disname": "安丘"
					},
					{
						"disid": "370785",
						"disname": "高密"
					},
					{
						"disid": "370786",
						"disname": "昌邑"
					}
				]
			},
			{
				"id": "371000",
				"name": "威海",
				"lon":"122.103686",
				"lat":"37.527879",
				"dis": [{
						"disid": "371002",
						"disname": "环翠区"
					},
					{
						"disid": "371081",
						"disname": "文登"
					},
					{
						"disid": "371082",
						"disname": "荣成"
					},
					{
						"disid": "371083",
						"disname": "乳山"
					}
				]
			},
			{
				"id": "320200",
				"name": "无锡",
				"lon":"120.329218",
				"lat":"31.520483",
				"dis": [{
						"disid": "320202",
						"disname": "崇安区"
					},
					{
						"disid": "320203",
						"disname": "南长区"
					},
					{
						"disid": "320204",
						"disname": "北塘区"
					},
					{
						"disid": "320205",
						"disname": "锡山区"
					},
					{
						"disid": "320206",
						"disname": "惠山区"
					},
					{
						"disid": "320211",
						"disname": "滨湖区"
					},
					{
						"disid": "320281",
						"disname": "江阴"
					},
					{
						"disid": "320282",
						"disname": "宜兴"
					}
				]
			},
			{
				"id": "650100",
				"name": "乌鲁木齐",
				"lon":"87.623576",
				"lat":"43.829098",
				"dis": [{
						"disid": "650102",
						"disname": "天山区"
					},
					{
						"disid": "650103",
						"disname": "沙依巴克区"
					},
					{
						"disid": "650104",
						"disname": "新区"
					},
					{
						"disid": "650105",
						"disname": "水磨沟区"
					},
					{
						"disid": "650106",
						"disname": "头屯河区"
					},
					{
						"disid": "650107",
						"disname": "达坂城区"
					},
					{
						"disid": "650109",
						"disname": "米东区"
					},
					{
						"disid": "650121",
						"disname": "乌鲁木齐县"
					}
				]
			},
			{
				"id": "330300",
				"name": "温州",
				"lon":"120.707916",
				"lat":"28.001086",
				"dis": [{
						"disid": "330302",
						"disname": "鹿城区"
					},
					{
						"disid": "330303",
						"disname": "龙湾区"
					},
					{
						"disid": "330304",
						"disname": "瓯海区"
					},
					{
						"disid": "330322",
						"disname": "洞头县"
					},
					{
						"disid": "330324",
						"disname": "永嘉县"
					},
					{
						"disid": "330326",
						"disname": "平阳县"
					},
					{
						"disid": "330327",
						"disname": "苍南县"
					},
					{
						"disid": "330328",
						"disname": "文成县"
					},
					{
						"disid": "330329",
						"disname": "泰顺县"
					},
					{
						"disid": "330381",
						"disname": "瑞安"
					},
					{
						"disid": "330382",
						"disname": "乐清"
					}
				]
			},
			{
				"id": "340200",
				"name": "芜湖",
				"lon":"118.439722",
				"lat":"31.35755",
				"dis": [{
						"disid": "340202",
						"disname": "镜湖区"
					},
					{
						"disid": "340203",
						"disname": "弋江区"
					},
					{
						"disid": "340207",
						"disname": "鸠江区"
					},
					{
						"disid": "340208",
						"disname": "三山区"
					},
					{
						"disid": "340221",
						"disname": "芜湖县"
					},
					{
						"disid": "340222",
						"disname": "繁昌县"
					},
					{
						"disid": "340223",
						"disname": "南陵县"
					},
					{
						"disid": "340225",
						"disname": "无为县"
					}
				]
			},
			{
				"id": "450400",
				"name": "梧州",
				"lon":"111.28753",
				"lat":"23.482746",
				"dis": [{
						"disid": "450403",
						"disname": "万秀区"
					},
					{
						"disid": "450404",
						"disname": "蝶山区"
					},
					{
						"disid": "450405",
						"disname": "长洲区"
					},
					{
						"disid": "450421",
						"disname": "苍梧县"
					},
					{
						"disid": "450422",
						"disname": "藤县"
					},
					{
						"disid": "450423",
						"disname": "蒙山县"
					},
					{
						"disid": "450481",
						"disname": "岑溪"
					}
				]
			},
			{
				"id": "532600",
				"name": "文山壮族苗族自治州",
				"lon":"104.221711",
				"lat":"23.407056",
				"dis": [{
						"disid": "532601",
						"disname": "文山"
					},
					{
						"disid": "532622",
						"disname": "砚山县"
					},
					{
						"disid": "532623",
						"disname": "西畴县"
					},
					{
						"disid": "532624",
						"disname": "麻栗坡县"
					},
					{
						"disid": "532625",
						"disname": "马关县"
					},
					{
						"disid": "532626",
						"disname": "丘北县"
					},
					{
						"disid": "532627",
						"disname": "广南县"
					},
					{
						"disid": "532628",
						"disname": "富宁县"
					}
				]
			},
			{
				"id": "640300",
				"name": "吴忠",
				"lon":"106.205655",
				"lat":"38.002348",
				"dis": [{
						"disid": "640302",
						"disname": "利通区"
					},
					{
						"disid": "640303",
						"disname": "红寺堡区"
					},
					{
						"disid": "640323",
						"disname": "盐池县"
					},
					{
						"disid": "640324",
						"disname": "同心县"
					},
					{
						"disid": "640381",
						"disname": "青铜峡"
					}
				]
			}
		]
	},
	{
		"tag": "X",
		"cities": [{
				"id": "532800",
				"name": "西双版纳傣族自治州",
				"lon":"100.802581",
				"lat":"22.018962",
				"dis": [{
						"disid": "532801",
						"disname": "景洪"
					},
					{
						"disid": "532822",
						"disname": "勐海县"
					},
					{
						"disid": "532823",
						"disname": "勐腊县"
					}
				]
			},
			{
				"id": "320300",
				"name": "徐州",
				"lon":"117.291436",
				"lat":"34.212666",
				"dis": [{
						"disid": "320302",
						"disname": "鼓楼区"
					},
					{
						"disid": "320303",
						"disname": "云龙区"
					},
					{
						"disid": "320305",
						"disname": "贾汪区"
					},
					{
						"disid": "320311",
						"disname": "泉山区"
					},
					{
						"disid": "320312",
						"disname": "铜山区"
					},
					{
						"disid": "320321",
						"disname": "丰县"
					},
					{
						"disid": "320322",
						"disname": "沛县"
					},
					{
						"disid": "320324",
						"disname": "睢宁县"
					},
					{
						"disid": "320381",
						"disname": "新沂"
					},
					{
						"disid": "320382",
						"disname": "邳州"
					}
				]
			},
			{
				"id": "610100",
				"name": "西安",
				"lon":"108.945028",
				"lat":"34.346315",
				"dis": [{
						"disid": "610102",
						"disname": "新城区"
					},
					{
						"disid": "610103",
						"disname": "碑林区"
					},
					{
						"disid": "610104",
						"disname": "莲湖区"
					},
					{
						"disid": "610111",
						"disname": "灞桥区"
					},
					{
						"disid": "610112",
						"disname": "未央区"
					},
					{
						"disid": "610113",
						"disname": "雁塔区"
					},
					{
						"disid": "610114",
						"disname": "阎良区"
					},
					{
						"disid": "610115",
						"disname": "临潼区"
					},
					{
						"disid": "610116",
						"disname": "长安区"
					},
					{
						"disid": "610122",
						"disname": "蓝田县"
					},
					{
						"disid": "610124",
						"disname": "周至县"
					},
					{
						"disid": "610125",
						"disname": "户县"
					},
					{
						"disid": "610126",
						"disname": "高陵县"
					}
				]
			},
			{
				"id": "610400",
				"name": "咸阳",
				"lon":"108.715134",
				"lat":"34.335953",
				"dis": [{
						"disid": "610402",
						"disname": "秦都区"
					},
					{
						"disid": "610403",
						"disname": "杨陵区"
					},
					{
						"disid": "610404",
						"disname": "渭城区"
					},
					{
						"disid": "610422",
						"disname": "三原县"
					},
					{
						"disid": "610423",
						"disname": "泾阳县"
					},
					{
						"disid": "610424",
						"disname": "乾县"
					},
					{
						"disid": "610425",
						"disname": "礼泉县"
					},
					{
						"disid": "610426",
						"disname": "永寿县"
					},
					{
						"disid": "610427",
						"disname": "彬县"
					},
					{
						"disid": "610428",
						"disname": "长武县"
					},
					{
						"disid": "610429",
						"disname": "旬邑县"
					},
					{
						"disid": "610430",
						"disname": "淳化县"
					},
					{
						"disid": "610431",
						"disname": "武功县"
					},
					{
						"disid": "610481",
						"disname": "兴平"
					}
				]
			},
			{
				"id": "130500",
				"name": "邢台",
				"lon":"114.511746",
				"lat":"37.077606",
				"dis": [{
						"disid": "130502",
						"disname": "桥东区"
					},
					{
						"disid": "130503",
						"disname": "桥西区"
					},
					{
						"disid": "130521",
						"disname": "邢台县"
					},
					{
						"disid": "130522",
						"disname": "临城县"
					},
					{
						"disid": "130523",
						"disname": "内丘县"
					},
					{
						"disid": "130524",
						"disname": "柏乡县"
					},
					{
						"disid": "130525",
						"disname": "隆尧县"
					},
					{
						"disid": "130526",
						"disname": "任县"
					},
					{
						"disid": "130527",
						"disname": "南和县"
					},
					{
						"disid": "130528",
						"disname": "宁晋县"
					},
					{
						"disid": "130529",
						"disname": "巨鹿县"
					},
					{
						"disid": "130530",
						"disname": "新河县"
					},
					{
						"disid": "130531",
						"disname": "广宗县"
					},
					{
						"disid": "130532",
						"disname": "平乡县"
					},
					{
						"disid": "130533",
						"disname": "威县"
					},
					{
						"disid": "130534",
						"disname": "清河县"
					},
					{
						"disid": "130535",
						"disname": "临西县"
					},
					{
						"disid": "130581",
						"disname": "南宫"
					},
					{
						"disid": "130582",
						"disname": "沙河"
					},
					{
						"disid": "130502",
						"disname": "桥东区"
					},
					{
						"disid": "130503",
						"disname": "桥西区"
					},
					{
						"disid": "130521",
						"disname": "邢台县"
					},
					{
						"disid": "130522",
						"disname": "临城县"
					},
					{
						"disid": "130523",
						"disname": "内丘县"
					},
					{
						"disid": "130524",
						"disname": "柏乡县"
					},
					{
						"disid": "130525",
						"disname": "隆尧县"
					},
					{
						"disid": "130526",
						"disname": "任县"
					},
					{
						"disid": "130527",
						"disname": "南和县"
					},
					{
						"disid": "130528",
						"disname": "宁晋县"
					},
					{
						"disid": "130529",
						"disname": "巨鹿县"
					},
					{
						"disid": "130530",
						"disname": "新河县"
					},
					{
						"disid": "130531",
						"disname": "广宗县"
					},
					{
						"disid": "130532",
						"disname": "平乡县"
					},
					{
						"disid": "130533",
						"disname": "威县"
					},
					{
						"disid": "130534",
						"disname": "清河县"
					},
					{
						"disid": "130535",
						"disname": "临西县"
					},
					{
						"disid": "130581",
						"disname": "南宫"
					},
					{
						"disid": "130582",
						"disname": "沙河"
					}

				]
			},
			{
				"id": "630100",
				"name": "西宁",
				"lon":"101.783584",
				"lat":"36.622921",
				"dis": [{
						"disid": "630102",
						"disname": "城东区"
					},
					{
						"disid": "630103",
						"disname": "城中区"
					},
					{
						"disid": "630104",
						"disname": "城西区"
					},
					{
						"disid": "630105",
						"disname": "城北区"
					},
					{
						"disid": "630121",
						"disname": "大通回族土族自治县"
					},
					{
						"disid": "630122",
						"disname": "湟中县"
					},
					{
						"disid": "630123",
						"disname": "湟源县"
					}
				]
			},
			{
				"id": "350200",
				"name": "厦门",
				"lon":"118.098447",
				"lat":"24.484356",
				"dis": [{
						"disid": "350203",
						"disname": "思明区"
					},
					{
						"disid": "350205",
						"disname": "海沧区"
					},
					{
						"disid": "350206",
						"disname": "湖里区"
					},
					{
						"disid": "350211",
						"disname": "集美区"
					},
					{
						"disid": "350212",
						"disname": "同安区"
					},
					{
						"disid": "350213",
						"disname": "翔安区"
					}
				]
			},
			{
				"id": "430300",
				"name": "湘潭",
				"lon":"112.952476",
				"lat":"27.835703",
				"dis": [{
						"disid": "430302",
						"disname": "雨湖区"
					},
					{
						"disid": "430304",
						"disname": "岳塘区"
					},
					{
						"disid": "430321",
						"disname": "湘潭县"
					}
				]
			},
			{
				"id": "433100",
				"name": "湘西土家族苗族自治州",
				"lon":"109.745293",
				"lat":"28.322456",
				"dis": [{
						"disid": "433101",
						"disname": "吉首"
					},
					{
						"disid": "433122",
						"disname": "泸溪县"
					},
					{
						"disid": "433123",
						"disname": "凤凰县"
					},
					{
						"disid": "433124",
						"disname": "花垣县"
					},
					{
						"disid": "433125",
						"disname": "保靖县"
					},
					{
						"disid": "433126",
						"disname": "古丈县"
					},
					{
						"disid": "433127",
						"disname": "永顺县"
					},
					{
						"disid": "433130",
						"disname": "龙山县"
					}
				]
			},
			{
				"id": "410700",
				"name": "新乡",
				"lon":"113.93331",
				"lat":"35.308226",
				"dis": [{
						"disid": "410702",
						"disname": "红旗区"
					},
					{
						"disid": "410703",
						"disname": "卫滨区"
					},
					{
						"disid": "410704",
						"disname": "凤泉区"
					},
					{
						"disid": "410711",
						"disname": "牧野区"
					},
					{
						"disid": "410721",
						"disname": "新乡县"
					},
					{
						"disid": "410724",
						"disname": "获嘉县"
					},
					{
						"disid": "410725",
						"disname": "原阳县"
					},
					{
						"disid": "410726",
						"disname": "延津县"
					},
					{
						"disid": "410727",
						"disname": "封丘县"
					},
					{
						"disid": "410728",
						"disname": "长垣县"
					},
					{
						"disid": "410781",
						"disname": "卫辉"
					},
					{
						"disid": "410782",
						"disname": "辉县"
					}
				]
			},
			{
				"id": "411000",
				"name": "许昌",
				"lon":"113.859334",
				"lat":"34.039997",
				"dis": [{
						"disid": "411002",
						"disname": "魏都区"
					},
					{
						"disid": "411023",
						"disname": "许昌县"
					},
					{
						"disid": "411024",
						"disname": "鄢陵县"
					},
					{
						"disid": "411025",
						"disname": "襄城县"
					},
					{
						"disid": "411081",
						"disname": "禹州"
					},
					{
						"disid": "411082",
						"disname": "长葛"
					}
				]
			},
			{
				"id": "411500",
				"name": "信阳",
				"lon":"114.09849",
				"lat":"32.151547",
				"dis": [{
						"disid": "411502",
						"disname": "?河区"
					},
					{
						"disid": "411503",
						"disname": "平桥区"
					},
					{
						"disid": "411521",
						"disname": "罗山县"
					},
					{
						"disid": "411522",
						"disname": "光山县"
					},
					{
						"disid": "411523",
						"disname": "新县"
					},
					{
						"disid": "411524",
						"disname": "商城县"
					},
					{
						"disid": "411525",
						"disname": "固始县"
					},
					{
						"disid": "411526",
						"disname": "潢川县"
					},
					{
						"disid": "411527",
						"disname": "淮滨县"
					},
					{
						"disid": "411528",
						"disname": "息县"
					}
				]
			},
			{
				"id": "360500",
				"name": "新余",
				"lon":"114.923252",
				"lat":"27.823068",
				"dis": [{
						"disid": "360502",
						"disname": "渝水区"
					},
					{
						"disid": "360521",
						"disname": "分宜县"
					}
				]
			},
			{
				"id": "341800",
				"name": "宣城",
				"lon":"118.766399",
				"lat":"30.947096",
				"dis": [{
						"disid": "341802",
						"disname": "宣州区"
					},
					{
						"disid": "341821",
						"disname": "郎溪县"
					},
					{
						"disid": "341822",
						"disname": "广德县"
					},
					{
						"disid": "341823",
						"disname": "泾县"
					},
					{
						"disid": "341824",
						"disname": "绩溪县"
					},
					{
						"disid": "341825",
						"disname": "旌德县"
					},
					{
						"disid": "341881",
						"disname": "宁国"
					}
				]
			},
			{
				"id": "140900",
				"name": "忻州",
				"lon":"112.741482",
				"lat":"38.42193",
				"dis": [{
						"disid": "140902",
						"disname": "忻府区"
					},
					{
						"disid": "140921",
						"disname": "定襄县"
					},
					{
						"disid": "140922",
						"disname": "五台县"
					},
					{
						"disid": "140923",
						"disname": "代县"
					},
					{
						"disid": "140924",
						"disname": "繁峙县"
					},
					{
						"disid": "140925",
						"disname": "宁武县"
					},
					{
						"disid": "140926",
						"disname": "静乐县"
					},
					{
						"disid": "140927",
						"disname": "神池县"
					},
					{
						"disid": "140928",
						"disname": "五寨县"
					},
					{
						"disid": "140929",
						"disname": "岢岚县"
					},
					{
						"disid": "140930",
						"disname": "河曲县"
					},
					{
						"disid": "140931",
						"disname": "保德县"
					},
					{
						"disid": "140932",
						"disname": "偏关县"
					},
					{
						"disid": "140981",
						"disname": "原平"
					}
				]
			},
			{
				"id": "152200",
				"name": "兴安盟",
				"lon":"122.045798",
				"lat":"46.087663",
				"dis": [{
						"disid": "152201",
						"disname": "乌兰浩特"
					},
					{
						"disid": "152202",
						"disname": "阿尔山"
					},
					{
						"disid": "152221",
						"disname": "科尔沁右翼前旗"
					},
					{
						"disid": "152222",
						"disname": "科尔沁右翼中旗"
					},
					{
						"disid": "152223",
						"disname": "扎赉特旗"
					},
					{
						"disid": "152224",
						"disname": "突泉县"
					}
				]
			},
			{
				"id": "152500",
				"name": "锡林郭勒盟",
				"lon":"116.052376",
				"lat":"43.940255",
				"dis": [{
						"disid": "152501",
						"disname": "二连浩特"
					},
					{
						"disid": "152502",
						"disname": "锡林浩特"
					},
					{
						"disid": "152522",
						"disname": "阿巴嘎旗"
					},
					{
						"disid": "152523",
						"disname": "苏尼特左旗"
					},
					{
						"disid": "152524",
						"disname": "苏尼特右旗"
					},
					{
						"disid": "152525",
						"disname": "东乌珠穆沁旗"
					},
					{
						"disid": "152526",
						"disname": "西乌珠穆沁旗"
					},
					{
						"disid": "152527",
						"disname": "太仆寺旗"
					},
					{
						"disid": "152528",
						"disname": "镶黄旗"
					},
					{
						"disid": "152529",
						"disname": "正镶白旗"
					},
					{
						"disid": "152530",
						"disname": "正蓝旗"
					},
					{
						"disid": "152531",
						"disname": "多伦县"
					}
				]
			},
			{
				"id": "420900",
				"name": "孝感",
				"lon":"113.923374",
				"lat":"30.934159",
				"dis": [{
						"disid": "420902",
						"disname": "孝南区"
					},
					{
						"disid": "420921",
						"disname": "孝昌县"
					},
					{
						"disid": "420922",
						"disname": "大悟县"
					},
					{
						"disid": "420923",
						"disname": "云梦县"
					},
					{
						"disid": "420981",
						"disname": "应城"
					},
					{
						"disid": "420982",
						"disname": "安陆"
					},
					{
						"disid": "420984",
						"disname": "汉川"
					}
				]
			},
			{
				"id": "420600",
				"name": "襄樊",
				"lon":"112.127096",
				"lat":"32.011858",
				"dis": [{
						"disid": "420602",
						"disname": "襄城区"
					},
					{
						"disid": "420606",
						"disname": "樊城区"
					},
					{
						"disid": "420607",
						"disname": "襄州区"
					},
					{
						"disid": "420624",
						"disname": "南漳县"
					},
					{
						"disid": "420625",
						"disname": "谷城县"
					},
					{
						"disid": "420626",
						"disname": "保康县"
					},
					{
						"disid": "420682",
						"disname": "老河口"
					},
					{
						"disid": "420683",
						"disname": "枣阳"
					},
					{
						"disid": "420684",
						"disname": "宜城"
					}
				]
			},
			{
				"id": "421200",
				"name": "咸宁",
				"lon":"114.326507",
				"lat":"29.847056",
				"dis": [{
						"disid": "421202",
						"disname": "咸安区"
					},
					{
						"disid": "421221",
						"disname": "嘉鱼县"
					},
					{
						"disid": "421222",
						"disname": "通城县"
					},
					{
						"disid": "421223",
						"disname": "崇阳县"
					},
					{
						"disid": "421224",
						"disname": "通山县"
					},
					{
						"disid": "421281",
						"disname": "赤壁"
					}
				]
			}
		]
	}, {
		"tag": "Y",
		"cities": [{
				"id": "430600",
				"name": "岳阳",
				"lon":"113.136925",
				"lat":"29.36217",
				"dis": [{
						"disid": "430602",
						"disname": "岳阳楼区"
					},
					{
						"disid": "430603",
						"disname": "云溪区"
					},
					{
						"disid": "430611",
						"disname": "君山区"
					},
					{
						"disid": "430621",
						"disname": "岳阳县"
					},
					{
						"disid": "430623",
						"disname": "华容县"
					},
					{
						"disid": "430624",
						"disname": "湘阴县"
					},
					{
						"disid": "430626",
						"disname": "平江县"
					},
					{
						"disid": "430681",
						"disname": "汨罗"
					},
					{
						"disid": "430682",
						"disname": "临湘"
					}
				]
			},
			{
				"id": "430900",
				"name": "益阳",
				"lon":"112.362954",
				"lat":"28.560727",
				"dis": [{
						"disid": "430902",
						"disname": "资阳区"
					},
					{
						"disid": "430903",
						"disname": "赫山区"
					},
					{
						"disid": "430921",
						"disname": "南县"
					},
					{
						"disid": "430922",
						"disname": "桃江县"
					},
					{
						"disid": "430923",
						"disname": "安化县"
					},
					{
						"disid": "430981",
						"disname": "沅江"
					}
				]
			},

			{
				"id": "431100",
				"name": "永州",
				"lon":"111.618592",
				"lat":"26.424829",
				"dis": [{
						"disid": "431102",
						"disname": "零陵区"
					},
					{
						"disid": "431103",
						"disname": "冷水滩区"
					},
					{
						"disid": "431121",
						"disname": "祁阳县"
					},
					{
						"disid": "431122",
						"disname": "东安县"
					},
					{
						"disid": "431123",
						"disname": "双牌县"
					},
					{
						"disid": "431124",
						"disname": "道县"
					},
					{
						"disid": "431125",
						"disname": "江永县"
					},
					{
						"disid": "431126",
						"disname": "宁远县"
					},
					{
						"disid": "431127",
						"disname": "蓝山县"
					},
					{
						"disid": "431128",
						"disname": "新田县"
					},
					{
						"disid": "431129",
						"disname": "江华瑶族自治县"
					}
				]
			},

			{
				"id": "360600",
				"name": "鹰潭",
				"lon":"117.07586",
				"lat":"28.264769",
				"dis": [{
						"disid": "360602",
						"disname": "月湖区"
					},
					{
						"disid": "360622",
						"disname": "余江县"
					},
					{
						"disid": "360681",
						"disname": "贵溪"
					}
				]
			},
			{
				"id": "140300",
				"name": "阳泉",
				"lon":"113.587327",
				"lat":"37.860083",
				"dis": [{
						"disid": "140302",
						"disname": "城区"
					},
					{
						"disid": "140303",
						"disname": "矿区"
					},
					{
						"disid": "140311",
						"disname": "郊区"
					},
					{
						"disid": "140321",
						"disname": "平定县"
					},
					{
						"disid": "140322",
						"disname": "盂县"
					}
				]
			},
			{
				"id": "441700",
				"name": "阳江",
				"lon":"111.987625",
				"lat":"21.863802",
				"dis": [{
						"disid": "441702",
						"disname": "江城区"
					},
					{
						"disid": "441721",
						"disname": "阳西县"
					},
					{
						"disid": "441723",
						"disname": "阳东县"
					}
				]
			},
			{
				"id": "632700",
				"name": "玉树藏族自治州",
				"lon":"97.014039",
				"lat":"33.009042",
				"dis": [{
						"disid": "632721",
						"disname": "玉树县"
					},
					{
						"disid": "632722",
						"disname": "杂多县"
					},
					{
						"disid": "632723",
						"disname": "称多县"
					},
					{
						"disid": "632724",
						"disname": "治多县"
					},
					{
						"disid": "632725",
						"disname": "囊谦县"
					},
					{
						"disid": "632726",
						"disname": "曲麻莱县"
					}
				]
			},

			{
				"id": "640100",
				"name": "银川",
				"lon":"106.237059",
				"lat":"38.492914",
				"dis": [{
						"disid": "640104",
						"disname": "兴庆区"
					},
					{
						"disid": "640105",
						"disname": "西夏区"
					},
					{
						"disid": "640106",
						"disname": "金凤区"
					},
					{
						"disid": "640121",
						"disname": "永宁县"
					},
					{
						"disid": "640122",
						"disname": "贺兰县"
					},
					{
						"disid": "640181",
						"disname": "灵武"
					}
				]
			},
			{
				"id": "370600",
				"name": "烟台",
				"lon":"121.453555",
				"lat":"37.466374",
				"dis": [{
						"disid": "370602",
						"disname": "芝罘区"
					},
					{
						"disid": "370611",
						"disname": "福山区"
					},
					{
						"disid": "370612",
						"disname": "牟平区"
					},
					{
						"disid": "370613",
						"disname": "莱山区"
					},
					{
						"disid": "370634",
						"disname": "长岛县"
					},
					{
						"disid": "370681",
						"disname": "龙口"
					},
					{
						"disid": "370682",
						"disname": "莱阳"
					},
					{
						"disid": "370683",
						"disname": "莱州"
					},
					{
						"disid": "370684",
						"disname": "蓬莱"
					},
					{
						"disid": "370685",
						"disname": "招远"
					},
					{
						"disid": "370686",
						"disname": "栖霞"
					},
					{
						"disid": "370687",
						"disname": "海阳"
					}
				]
			},
			{
				"id": "420500",
				"name": "宜昌",
				"lon":"111.292265",
				"lat":"30.697943",
				"dis": [{
						"disid": "420502",
						"disname": "西陵区"
					},
					{
						"disid": "420503",
						"disname": "伍家岗区"
					},
					{
						"disid": "420504",
						"disname": "点军区"
					},
					{
						"disid": "420505",
						"disname": "?亭区"
					},
					{
						"disid": "420506",
						"disname": "夷陵区"
					},
					{
						"disid": "420525",
						"disname": "远安县"
					},
					{
						"disid": "420526",
						"disname": "兴山县"
					},
					{
						"disid": "420527",
						"disname": "秭归县"
					},
					{
						"disid": "420528",
						"disname": "长阳土家族自治县"
					},
					{
						"disid": "420529",
						"disname": "五峰土家族自治县"
					},
					{
						"disid": "420581",
						"disname": "宜都"
					},
					{
						"disid": "420582",
						"disname": "当阳"
					},
					{
						"disid": "420583",
						"disname": "枝江"
					}
				]
			},
			{
				"id": "140800",
				"name": "运城",
				"lon":"111.011373",
				"lat":"35.03176",
				"dis": [{
						"disid": "140802",
						"disname": "盐湖区"
					},
					{
						"disid": "140821",
						"disname": "临猗县"
					},
					{
						"disid": "140822",
						"disname": "万荣县"
					},
					{
						"disid": "140823",
						"disname": "闻喜县"
					},
					{
						"disid": "140824",
						"disname": "稷山县"
					},
					{
						"disid": "140825",
						"disname": "新绛县"
					},
					{
						"disid": "140826",
						"disname": "绛县"
					},
					{
						"disid": "140827",
						"disname": "垣曲县"
					},
					{
						"disid": "140828",
						"disname": "夏县"
					},
					{
						"disid": "140829",
						"disname": "平陆县"
					},
					{
						"disid": "140830",
						"disname": "芮城县"
					},
					{
						"disid": "140881",
						"disname": "永济"
					},
					{
						"disid": "140882",
						"disname": "河津"
					}
				]
			},
			{
				"id": "210800",
				"name": "营口",
				"lon":"122.241862",
				"lat":"40.66876",
				"dis": [{
						"disid": "210802",
						"disname": "站前区"
					},
					{
						"disid": "210803",
						"disname": "西区"
					},
					{
						"disid": "210804",
						"disname": "鲅鱼圈区"
					},
					{
						"disid": "210811",
						"disname": "老边区"
					},
					{
						"disid": "210881",
						"disname": "盖州"
					},
					{
						"disid": "210882",
						"disname": "大石桥"
					}
				]
			},
			{
				"id": "222400",
				"name": "延边朝鲜族自治州",
				"lon":"129.475935",
				"lat":"42.916166",
				"dis": [{
						"disid": "222401",
						"disname": "延吉"
					},
					{
						"disid": "222402",
						"disname": "图们"
					},
					{
						"disid": "222403",
						"disname": "敦化"
					},
					{
						"disid": "222404",
						"disname": "珲春"
					},
					{
						"disid": "222405",
						"disname": "龙井"
					},
					{
						"disid": "222406",
						"disname": "和龙"
					},
					{
						"disid": "222424",
						"disname": "汪清县"
					},
					{
						"disid": "222426",
						"disname": "安图县"
					}
				]
			},
			{
				"id": "230700",
				"name": "伊春",
				"lon":"128.844957",
				"lat":"47.733708",
				"dis": [{
						"disid": "230702",
						"disname": "伊春区"
					},
					{
						"disid": "230703",
						"disname": "南岔区"
					},
					{
						"disid": "230704",
						"disname": "友好区"
					},
					{
						"disid": "230705",
						"disname": "西林区"
					},
					{
						"disid": "230706",
						"disname": "翠峦区"
					},
					{
						"disid": "230707",
						"disname": "新青区"
					},
					{
						"disid": "230708",
						"disname": "美溪区"
					},
					{
						"disid": "230709",
						"disname": "金山屯区"
					},
					{
						"disid": "230710",
						"disname": "五营区"
					},
					{
						"disid": "230711",
						"disname": "乌马河区"
					},
					{
						"disid": "230712",
						"disname": "汤旺河区"
					},
					{
						"disid": "230713",
						"disname": "带岭区"
					},
					{
						"disid": "230714",
						"disname": "乌伊岭区"
					},
					{
						"disid": "230715",
						"disname": "红星区"
					},
					{
						"disid": "230716",
						"disname": "上甘岭区"
					},
					{
						"disid": "230722",
						"disname": "嘉荫县"
					},
					{
						"disid": "230781",
						"disname": "铁力"
					}
				]
			},
			{
				"id": "320900",
				"name": "盐城",
				"lon":"120.168978",
				"lat":"33.355584",
				"dis": [{
						"disid": "320902",
						"disname": "亭湖区"
					},
					{
						"disid": "320903",
						"disname": "盐都区"
					},
					{
						"disid": "320921",
						"disname": "响水县"
					},
					{
						"disid": "320922",
						"disname": "滨海县"
					},
					{
						"disid": "320923",
						"disname": "阜宁县"
					},
					{
						"disid": "320924",
						"disname": "射阳县"
					},
					{
						"disid": "320925",
						"disname": "建湖县"
					},
					{
						"disid": "320981",
						"disname": "东台"
					},
					{
						"disid": "320982",
						"disname": "大丰"
					}
				]
			},
			{
				"id": "321000",
				"name": "扬州",
				"lon":"119.42086",
				"lat":"32.400676",
				"dis": [{
						"disid": "321002",
						"disname": "广陵区"
					},
					{
						"disid": "321003",
						"disname": "邗江区"
					},
					{
						"disid": "321012",
						"disname": "江都区"
					},
					{
						"disid": "321023",
						"disname": "宝应县"
					},
					{
						"disid": "321081",
						"disname": "仪征"
					},
					{
						"disid": "321084",
						"disname": "高邮"
					}
				]
			},
			{
				"id": "511500",
				"name": "宜宾",
				"lon":"104.648541",
				"lat":"28.754967",
				"dis": [{
						"disid": "511502",
						"disname": "翠屏区"
					},
					{
						"disid": "511503",
						"disname": "南溪区"
					},
					{
						"disid": "511521",
						"disname": "宜宾县"
					},
					{
						"disid": "511523",
						"disname": "江安县"
					},
					{
						"disid": "511524",
						"disname": "长宁县"
					},
					{
						"disid": "511525",
						"disname": "高县"
					},
					{
						"disid": "511526",
						"disname": "珙县"
					},
					{
						"disid": "511527",
						"disname": "筠连县"
					},
					{
						"disid": "511528",
						"disname": "兴文县"
					},
					{
						"disid": "511529",
						"disname": "屏山县"
					}
				]
			},
			{
				"id": "511800",
				"name": "雅安",
				"lon":"103.049826",
				"lat":"30.01329",
				"dis": [{
						"disid": "511802",
						"disname": "雨城区"
					},
					{
						"disid": "511821",
						"disname": "名山县"
					},
					{
						"disid": "511822",
						"disname": "荥经县"
					},
					{
						"disid": "511823",
						"disname": "汉源县"
					},
					{
						"disid": "511824",
						"disname": "石棉县"
					},
					{
						"disid": "511825",
						"disname": "天全县"
					},
					{
						"disid": "511826",
						"disname": "芦山县"
					},
					{
						"disid": "511827",
						"disname": "宝兴县"
					}
				]
			},
			{
				"id": "445300",
				"name": "云浮",
				"lon":"112.050075",
				"lat":"22.919846",
				"dis": [{
						"disid": "445302",
						"disname": "云城区"
					},
					{
						"disid": "445321",
						"disname": "新兴县"
					},
					{
						"disid": "445322",
						"disname": "郁南县"
					},
					{
						"disid": "445323",
						"disname": "云安县"
					},
					{
						"disid": "445381",
						"disname": "罗定"
					}
				]
			},
			{
				"id": "450900",
				"name": "玉林",
				"lon":"110.187016",
				"lat":"22.659831",
				"dis": [{
						"disid": "450902",
						"disname": "玉州区"
					},
					{
						"disid": "450921",
						"disname": "容县"
					},
					{
						"disid": "450922",
						"disname": "陆川县"
					},
					{
						"disid": "450923",
						"disname": "博白县"
					},
					{
						"disid": "450924",
						"disname": "兴业县"
					},
					{
						"disid": "450981",
						"disname": "北流"
					}
				]
			},
			{
				"id": "654000",
				"name": "伊犁哈萨克自治州",
				"lon":"81.327955",
				"lat":"43.927709",
				"dis": [{
						"disid": "654002",
						"disname": "伊宁"
					},
					{
						"disid": "654003",
						"disname": "奎屯"
					},
					{
						"disid": "654021",
						"disname": "伊宁县"
					},
					{
						"disid": "654022",
						"disname": "察布查尔锡伯自治县"
					},
					{
						"disid": "654023",
						"disname": "霍城县"
					},
					{
						"disid": "654024",
						"disname": "巩留县"
					},
					{
						"disid": "654025",
						"disname": "新源县"
					},
					{
						"disid": "654026",
						"disname": "昭苏县"
					},
					{
						"disid": "654027",
						"disname": "特克斯县"
					},
					{
						"disid": "654028",
						"disname": "尼勒克县"
					}
				]
			},
			{
				"id": "530400",
				"name": "玉溪",
				"lon":"102.55327",
				"lat":"24.356657",
				"dis": [{
						"disid": "530402",
						"disname": "红塔区"
					},
					{
						"disid": "530421",
						"disname": "江川县"
					},
					{
						"disid": "530422",
						"disname": "澄江县"
					},
					{
						"disid": "530423",
						"disname": "通海县"
					},
					{
						"disid": "530424",
						"disname": "华宁县"
					},
					{
						"disid": "530425",
						"disname": "易门县"
					},
					{
						"disid": "530426",
						"disname": "峨山彝族自治县"
					},
					{
						"disid": "530427",
						"disname": "新平彝族傣族自治县"
					},
					{
						"disid": "530428",
						"disname": "元江哈尼族彝族傣族自治县"
					}
				]
			},
			{
				"id": "610600",
				"name": "延安",
				"lon":"109.495142",
				"lat":"36.590648",
				"dis": [{
						"disid": "610602",
						"disname": "宝塔区"
					},
					{
						"disid": "610621",
						"disname": "延长县"
					},
					{
						"disid": "610622",
						"disname": "延川县"
					},
					{
						"disid": "610623",
						"disname": "子长县"
					},
					{
						"disid": "610624",
						"disname": "安塞县"
					},
					{
						"disid": "610625",
						"disname": "志丹县"
					},
					{
						"disid": "610626",
						"disname": "吴起县"
					},
					{
						"disid": "610627",
						"disname": "甘泉县"
					},
					{
						"disid": "610628",
						"item_name": "富县"
					},
					{
						"disid": "610629",
						"item_name": "洛川县"
					},
					{
						"disid": "610630",
						"item_name": "宜川县"
					},
					{
						"disid": "610631",
						"item_name": "黄龙县"
					},
					{
						"disid": "610632",
						"disname": "黄陵县"
					}
				]
			},
			{
				"id": "360900",
				"name": "宜春",
				"lon":"114.423273",
				"lat":"27.820856",
				"dis": [{
						"disid": "360902",
						"disname": "袁州区"
					},
					{
						"disid": "360921",
						"disname": "奉新县"
					},
					{
						"disid": "360922",
						"disname": "万载县"
					},
					{
						"disid": "360923",
						"disname": "上高县"
					},
					{
						"disid": "360924",
						"disname": "宜丰县"
					},
					{
						"disid": "360925",
						"disname": "靖安县"
					},
					{
						"disid": "360926",
						"disname": "铜鼓县"
					},
					{
						"disid": "360981",
						"disname": "丰城"
					},
					{
						"disid": "360982",
						"disname": "樟树"
					},
					{
						"disid": "360983",
						"disname": "高安"
					}
				]
			},
			{
				"id": "610800",
				"name": "榆林",
				"lon":"109.740181",
				"lat":"38.288616",
				"dis": [{
						"disid": "610802",
						"disname": "榆阳区"
					},
					{
						"disid": "610821",
						"disname": "神木县"
					},
					{
						"disid": "610822",
						"disname": "府谷县"
					},
					{
						"disid": "610823",
						"disname": "横山县"
					},
					{
						"disid": "610824",
						"disname": "靖边县"
					},
					{
						"disid": "610825",
						"disname": "定边县"
					},
					{
						"disid": "610826",
						"disname": "绥德县"
					},
					{
						"disid": "610827",
						"disname": "米脂县"
					},
					{
						"disid": "610828",
						"disname": "佳县"
					},
					{
						"disid": "610829",
						"disname": "吴堡县"
					},
					{
						"disid": "610830",
						"disname": "清涧县"
					},
					{
						"disid": "610831",
						"disname": "子洲县"
					}
				]
			}
		]
	},
	{
		"tag": "Z",
		"cities": [{
				"id": "430800",
				"name": "张家界",
				"lon":"110.485819",
				"lat":"29.121807",
				"dis": [{
						"disid": "430802",
						"disname": "永定区"
					},
					{
						"disid": "430811",
						"disname": "武陵源区"
					},
					{
						"disid": "430821",
						"disname": "慈利县"
					},
					{
						"disid": "430822",
						"disname": "桑植县"
					}
				]
			},
			{
				"id": "350600",
				"name": "漳州",
				"lon":"117.652717",
				"lat":"24.520508",
				"dis": [{
						"disid": "350602",
						"disname": "芗城区"
					},
					{
						"disid": "350603",
						"disname": "龙文区"
					},
					{
						"disid": "350622",
						"disname": "云霄县"
					},
					{
						"disid": "350623",
						"disname": "漳浦县"
					},
					{
						"disid": "350624",
						"disname": "诏安县"
					},
					{
						"disid": "350625",
						"disname": "长泰县"
					},
					{
						"disid": "350626",
						"disname": "东山县"
					},
					{
						"disid": "350627",
						"disname": "南靖县"
					},
					{
						"disid": "350628",
						"disname": "平和县"
					},
					{
						"disid": "350629",
						"disname": "华安县"
					},
					{
						"disid": "350681",
						"disname": "龙海"
					}
				]
			},
			{
				"id": "130700",
				"name": "张家口",
				"lon":"114.895161",
				"lat":"40.772801",
				"dis": [{
						"disid": "130702",
						"disname": "桥东区"
					},
					{
						"disid": "130703",
						"disname": "桥西区"
					},
					{
						"disid": "130705",
						"disname": "宣化区"
					},
					{
						"disid": "130706",
						"disname": "下花园区"
					},
					{
						"disid": "130721",
						"disname": "宣化县"
					},
					{
						"disid": "130722",
						"disname": "张北县"
					},
					{
						"disid": "130723",
						"disname": "康保县"
					},
					{
						"disid": "130724",
						"disname": "沽源县"
					},
					{
						"disid": "130725",
						"disname": "尚义县"
					},
					{
						"disid": "130726",
						"disname": "蔚县"
					},
					{
						"disid": "130727",
						"disname": "阳原县"
					},
					{
						"disid": "130728",
						"disname": "怀安县"
					},
					{
						"disid": "130729",
						"disname": "万全县"
					},
					{
						"disid": "130730",
						"disname": "怀来县"
					},
					{
						"disid": "130731",
						"disname": "涿鹿县"
					},
					{
						"disid": "130732",
						"disname": "赤城县"
					},
					{
						"disid": "130733",
						"disname": "崇礼县"
					}

				]
			},
			{
				"id": "440400",
				"name": "珠海",
				"lon":"113.554099",
				"lat":"22.204841",
				"dis": [{
						"disid": "440402",
						"disname": "香洲区"
					},
					{
						"disid": "440403",
						"disname": "斗门区"
					},
					{
						"disid": "440404",
						"disname": "金湾区"
					}
				]
			},
			{
				"id": "440800",
				"name": "湛江",
				"lon":"110.364117",
				"lat":"21.276185",
				"dis": [{
						"disid": "440802",
						"disname": "赤坎区"
					},
					{
						"disid": "440803",
						"disname": "霞山区"
					},
					{
						"disid": "440804",
						"disname": "坡头区"
					},
					{
						"disid": "440811",
						"disname": "麻章区"
					},
					{
						"disid": "440823",
						"disname": "遂溪县"
					},
					{
						"disid": "440825",
						"disname": "徐闻县"
					}
				]
			},
			{
				"id": "321100",
				"name": "镇江",
				"lon":"119.982921",
				"lat":"31.814323",
				"dis": [{
						"disid": "321102",
						"disname": "京口区"
					},
					{
						"disid": "321111",
						"disname": "润州区"
					},
					{
						"disid": "321112",
						"disname": "丹徒区"
					},
					{
						"disid": "321181",
						"disname": "丹阳"
					},
					{
						"disid": "321182",
						"disname": "扬中"
					},
					{
						"disid": "321183",
						"disname": "句容"
					}
				]
			},
			{
				"id": "330900",
				"name": "舟山",
				"lon":"122.213844",
				"lat":"29.991411",
				"dis": [{
						"disid": "330902",
						"disname": "定海区"
					},
					{
						"disid": "330903",
						"disname": "普陀区"
					},
					{
						"disid": "330921",
						"disname": "岱山县"
					},
					{
						"disid": "330922",
						"disname": "嵊泗县"
					}
				]
			},
			{
				"id": "370300",
				"name": "淄博",
				"lon":"118.061168",
				"lat":"36.818623",
				"dis": [{
						"disid": "370302",
						"disname": "淄川区"
					},
					{
						"disid": "370303",
						"disname": "张店区"
					},
					{
						"disid": "370304",
						"disname": "博山区"
					},
					{
						"disid": "370305",
						"disname": "临淄区"
					},
					{
						"disid": "370306",
						"disname": "周村区"
					},
					{
						"disid": "370321",
						"disname": "桓台县"
					},
					{
						"disid": "370322",
						"disname": "高青县"
					},
					{
						"disid": "370323",
						"disname": "沂源县"
					}
				]
			},
			{
				"id": "370400",
				"name": "枣庄",
				"lon":"117.329677",
				"lat":"34.815046",
				"dis": [{
						"disid": "370402",
						"disname": "中区"
					},
					{
						"disid": "370403",
						"disname": "薛城区"
					},
					{
						"disid": "370404",
						"disname": "峄城区"
					},
					{
						"disid": "370405",
						"disname": "台儿庄区"
					},
					{
						"disid": "370406",
						"disname": "山亭区"
					},
					{
						"disid": "370481",
						"disname": "滕州"
					}
				]
			},
			{
				"id": "410100",
				"name": "郑州",
				"lon":"113.632853",
				"lat":"34.751542",
				"dis": [{
						"disid": "410102",
						"disname": "中原区"
					},
					{
						"disid": "410103",
						"disname": "二七区"
					},
					{
						"disid": "410104",
						"disname": "管城回族区"
					},
					{
						"disid": "410105",
						"disname": "金水区"
					},
					{
						"disid": "410106",
						"disname": "上街区"
					},
					{
						"disid": "410108",
						"disname": "惠济区"
					},
					{
						"disid": "410122",
						"disname": "中牟县"
					},
					{
						"disid": "410181",
						"disname": "巩义"
					},
					{
						"disid": "410182",
						"disname": "荥阳"
					},
					{
						"disid": "410183",
						"disname": "新密"
					},
					{
						"disid": "410184",
						"disname": "新郑"
					},
					{
						"disid": "410185",
						"disname": "登封"
					}
				]
			},
			{
				"id": "411600",
				"name": "周口",
				"lon":"114.704343",
				"lat":"33.630867",
				"dis": [{
						"disid": "411602",
						"disname": "川汇区"
					},
					{
						"disid": "411621",
						"disname": "扶沟县"
					},
					{
						"disid": "411622",
						"disname": "西华县"
					},
					{
						"disid": "411623",
						"disname": "商水县"
					},
					{
						"disid": "411624",
						"disname": "沈丘县"
					},
					{
						"disid": "411625",
						"disname": "郸城县"
					},
					{
						"disid": "411626",
						"disname": "淮阳县"
					},
					{
						"disid": "411627",
						"disname": "太康县"
					},
					{
						"disid": "411628",
						"disname": "鹿邑县"
					},
					{
						"disid": "411681",
						"disname": "项城"
					}
				]
			},
			{
				"id": "411700",
				"name": "驻马店",
				"lon":"114.039103",
				"lat":"33.009607",
				"dis": [{
						"disid": "411702",
						"disname": "驿城区"
					},
					{
						"disid": "411721",
						"disname": "西平县"
					},
					{
						"disid": "411722",
						"disname": "上蔡县"
					},
					{
						"disid": "411723",
						"disname": "平舆县"
					},
					{
						"disid": "411724",
						"disname": "正阳县"
					},
					{
						"disid": "411725",
						"disname": "确山县"
					},
					{
						"disid": "411726",
						"disname": "泌阳县"
					},
					{
						"disid": "411727",
						"disname": "汝南县"
					},
					{
						"disid": "411728",
						"disname": "遂平县"
					},
					{
						"disid": "411729",
						"disname": "新蔡县"
					}
				]
			},
			{
				"id": "430200",
				"name": "株洲",
				"lon":"113.137312",
				"lat":"27.831012",
				"dis": [{
						"disid": "430202",
						"disname": "荷塘区"
					},
					{
						"disid": "430203",
						"disname": "芦淞区"
					},
					{
						"disid": "430204",
						"disname": "石峰区"
					},
					{
						"disid": "430211",
						"disname": "天元区"
					},
					{
						"disid": "430221",
						"disname": "株洲县"
					},
					{
						"disid": "430223",
						"disname": "攸县"
					},
					{
						"disid": "430224",
						"disname": "茶陵县"
					},
					{
						"disid": "430225",
						"disname": "炎陵县"
					},
					{
						"disid": "430281",
						"disname": "醴陵"
					}
				]
			},
			{
				"id": "441200",
				"name": "肇庆",
				"lon":"112.470626",
				"lat":"23.055017",
				"dis": [{
						"disid": "441202",
						"disname": "端州区"
					},
					{
						"disid": "441203",
						"disname": "鼎湖区"
					},
					{
						"disid": "441223",
						"disname": "广宁县"
					},
					{
						"disid": "441224",
						"disname": "怀集县"
					},
					{
						"disid": "441225",
						"disname": "封开县"
					},
					{
						"disid": "441226",
						"disname": "德庆县"
					}
				]
			},
			{
				"id": "442000",
				"name": "中山",
				"lon":"113.400282",
				"lat":"22.52178",
				"dis": [{
					"disid": "442001",
					"disname": "中山"
				}]
			},
			{
				"id": "510300",
				"name": "自贡",
				"lon":"104.785882",
				"lat":"29.348104",
				"dis": [{
						"disid": "510302",
						"disname": "自流井区"
					},
					{
						"disid": "510303",
						"disname": "贡井区"
					},
					{
						"disid": "510304",
						"disname": "大安区"
					},
					{
						"disid": "510311",
						"disname": "沿滩区"
					},
					{
						"disid": "510321",
						"disname": "荣县"
					},
					{
						"disid": "510322",
						"disname": "富顺县"
					}
				]
			},
			{
				"id": "512000",
				"name": "资阳",
				"lon":"104.635874",
				"lat":"30.129959",
				"dis": [{
						"disid": "512002",
						"disname": "雁江区"
					},
					{
						"disid": "512021",
						"disname": "安岳县"
					},
					{
						"disid": "512022",
						"disname": "乐至县"
					},
					{
						"disid": "512081",
						"disname": "简阳"
					}
				]
			},
			{
				"id": "520300",
				"name": "遵义",
				"lon":"106.932564",
				"lat":"27.731701",
				"dis": [{
						"disid": "520302",
						"disname": "红花岗区"
					},
					{
						"disid": "520303",
						"disname": "汇川区"
					},
					{
						"disid": "520321",
						"disname": "遵义县"
					},
					{
						"disid": "520322",
						"disname": "桐梓县"
					},
					{
						"disid": "520323",
						"disname": "绥阳县"
					},
					{
						"disid": "520324",
						"disname": "正安县"
					},
					{
						"disid": "520325",
						"disname": "道真仡佬族苗族自治县"
					},
					{
						"disid": "520326",
						"disname": "务川仡佬族苗族自治县"
					},
					{
						"disid": "520327",
						"disname": "凤冈县"
					},
					{
						"disid": "520328",
						"disname": "湄潭县"
					},
					{
						"disid": "520329",
						"disname": "余庆县"
					},
					{
						"disid": "520330",
						"disname": "习水县"
					},
					{
						"disid": "520381",
						"disname": "赤水"
					},
					{
						"disid": "520382",
						"disname": "仁怀"
					}
				]
			},
			{
				"id": "530600",
				"name": "昭通",
				"lon":"103.723223",
				"lat":"27.343056",
				"dis": [{
						"disid": "530602",
						"disname": "昭阳区"
					},
					{
						"disid": "530621",
						"disname": "鲁甸县"
					},
					{
						"disid": "530622",
						"disname": "巧家县"
					},
					{
						"disid": "530623",
						"disname": "盐津县"
					},
					{
						"disid": "530624",
						"disname": "大关县"
					},
					{
						"disid": "530625",
						"disname": "永善县"
					},
					{
						"disid": "530626",
						"disname": "绥江县"
					},
					{
						"disid": "530627",
						"disname": "镇雄县"
					},
					{
						"disid": "530628",
						"disname": "彝良县"
					},
					{
						"disid": "530629",
						"disname": "威信县"
					},
					{
						"disid": "530630",
						"disname": "水富县"
					}
				]
			},
			{
				"id": "620700",
				"name": "张掖",
				"lon":"100.458421",
				"lat":"38.932514",
				"dis": [{
						"disid": "620702",
						"disname": "甘州区"
					},
					{
						"disid": "620721",
						"disname": "肃南裕固族自治县"
					},
					{
						"disid": "620722",
						"disname": "民乐县"
					},
					{
						"disid": "620723",
						"disname": "临泽县"
					},
					{
						"disid": "620724",
						"disname": "高台县"
					},
					{
						"disid": "620725",
						"disname": "山丹县"
					}
				]
			},
			{
				"id": "640500",
				"name": "中卫",
				"lon":"105.202706",
				"lat":"37.507532",
				"dis": [{
						"disid": "640502",
						"disname": "沙坡头区"
					},
					{
						"disid": "640521",
						"disname": "中宁县"
					},
					{
						"disid": "640522",
						"disname": "海原县"
					}
				]
			}
		]
	}
]

export default citys
