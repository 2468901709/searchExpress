## 全国快递物流查询
### 使用

github：https://github.com/2468901709/searchExpress.git

PC-web：https://2468901709.github.io/searchExpress/#/

浏览器右击 => 检查 => 切换手机端，即可预览

![image](https://github.com/2468901709/searchExpress/blob/main/img/1.png)

![image](https://github.com/2468901709/searchExpress/blob/main/img/2.png)

手机扫二维码，即可在手机上预览

![image](https://github.com/2468901709/searchExpress/blob/main/img/3.png)

### 实现

接口来源：

[https://market.aliyun.com/products/57126001/cmapi021863.html?spm=5176.730005.productlist.d_cmapi021863.1f5c3524LKlCzZ&innerSource=search_%E5%BF%AB%E9%80%92#sku=yuncode1586300000](https://market.aliyun.com/products/57126001/cmapi021863.html?spm=5176.730005.productlist.d_cmapi021863.1f5c3524LKlCzZ&innerSource=search_快递#sku=yuncode1586300000) （ 自己购买，0元100次）

调用地址：http(s)://wuliu.market.alicloudapi.com/kdi

请求方式：GET

返回类型：JSON

API 调用：API 简单身份认证调用方法（APPCODE） 

​					如："Authorization":"APPCODE  你自己的AppCode（在管理控制台可查看）"

请求参数：

| 名称	      类型	       是否必须	      描述          |      |
| ------------------------------------------------------------ | ---- |
| no	          STRING	必选	              快递单号 【顺丰请输入单号 : 收件人或寄件人手机号后四位。如123456789:1234】 |      |
| type	       STRING	可选	              快递公司字母简写：不知道可不填 95%能自动识别，填写查询速度会更快 |      |

请求示例：

```apl
curl -i -k --get --include 'https://wuliu.market.alicloudapi.com/kdi?no=780098068058&type=zto'  -H 'Authorization:APPCODE 你自己的AppCode'	
```

返回示例：	

```js
{
	"status": "0",/* status 0:正常查询 201:快递单号错误 203:快递公司不存在 204:快递公司识别失败 205:没有信息 207:该单号被限制，错误单号 */
	"msg": "ok",
	"result": {
		"number": "780098068058",
		"type": "zto",
		"list": [{
			"time": "2018-03-09 11:59:26",
			"status": "【石家庄市】快件已在【长安三部】 签收,签收人: 本人,感谢使用中通快递,期待再次为您服务!"
		}, {
			"time": "2018-03-09 09:03:10",
			"status": "【石家庄市】 快件已到达 【长安三部】（0311-85344265）,业务员 容晓光（13081105270） 正在第1次派件, 请保持电话畅通,并耐心等待"
		}, {
			"time": "2018-03-08 23:43:44",
			"status": "【石家庄市】 快件离开 【石家庄】 发往 【长安三部】"
		}, {
			"time": "2018-03-08 21:00:44",
			"status": "【石家庄市】 快件到达 【石家庄】"
		}, {
			"time": "2018-03-07 01:38:45",
			"status": "【广州市】 快件离开 【广州中心】 发往 【石家庄】"
		}, {
			"time": "2018-03-07 01:36:53",
			"status": "【广州市】 快件到达 【广州中心】"
		}, {
			"time": "2018-03-07 00:40:57",
			"status": "【广州市】 快件离开 【广州花都】 发往 【石家庄中转】"
		}, {
			"time": "2018-03-07 00:01:55",
			"status": "【广州市】 【广州花都】（020-37738523） 的 马溪 （18998345739） 已揽收"
		}],
		"deliverystatus": "3", /* 0：快递收件(揽件)1.在途中 2.正在派件 3.已签收 4.派送失败 5.疑难件 6.退件签收  */
		"issign": "1",                      /*  1.是否签收                  */
		"expName": "中通快递",              /*  快递公司名称                */       
		"expSite": "www.zto.com",           /*  快递公司官网                */
		"expPhone": "95311",                /*  快递公司电话                */
		"courier": "容晓光",                /*  快递员 或 快递站(没有则为空)*/
                "courierPhone":"13081105270",       /*  快递员电话 (没有则为空)     */
                "updateTime":"2019-08-27 13:56:19", /*  快递轨迹信息最新时间        */
                "takeTime":"2天20小时14分",         /*  发货到收货消耗时长 (截止最新轨迹)  */
                "logo":"https://img3.fegine.com/express/zto.jpg" /* 快递公司LOGO */
	}
}
```

