# JS-CONSOLE (English description translated from Baidu)
<p style="font-size: 13px;">
	功能为快速`console.log();`，节省频繁或打错log的时间。
	<br>
	The function is fast `console.log()`, which saves the time of wrong or frequent logging.
</p>
<br>

## 功能 Features
<br>

### 快捷键(Ctrl/Command+1)
<p style="font-size: 13px;">
	功能如gif所示，选中变量按Ctrl+1，快速打一个`console.log();`
	<br>
	The function is shown in gif. Select a variable and press Ctrl+1 to quickly input a `console.log();`
</p>
<img src="https://jkssns.oss-cn-hangzhou.aliyuncs.com/images/js-log/js-log.gif" alt="Github上图片地址：https://raw.githubusercontent.com/Jkssns/picture-bed/main/js-log.gif">
<br>
<br>

### 快捷键(Ctrl/Command+F1)
<p style="font-size: 13px;">
	问题：我们在控制台查看一个对象时，常因为用了框架，对象的属性被代理。在控制台中输出时，输出的是一个引用，对象的属性值都是...，需要点开才能真正输出这个值。还有Vue3，用了Proxy做代理后，每次都需要点击对象，点击target才能查看对应的值。
	<br>
	<br>
	解决方法：可以在log这个对象的时候，对这个对象进行拷贝，切断引用和代理，这样控制台一眼就能看出对象的所有值。
	<br>
	<br>
	此快捷键功能和Ctrl+1相同，但输出的是`console.log(JSON.parse(JSON.string(variable)));`
	<br>
	<br>
	Problem: When we view an object on the console, its properties are often proxied because of the use of the framework. When outputting in the console, the output is a reference, and the object's attribute values are all... You need to click Open to actually output this value. There is also Vue3. After Proxy is used, you need to click the object each time and click target to view the corresponding value.
	<br>
	<br>
	Solution: You can make a copy of the log object, cut off the reference and proxy, and the console can see all the values of the object at a glance.
	<br>
	<br>
	This shortcut function is the same as Ctrl+1, but the output is `console.log(JSON.parse(JSON.string(variable)));`</ span>
	<br>
	<img src="https://jkssns.oss-cn-hangzhou.aliyuncs.com/images/js-log/copylog.png" alt="Github上图片地址：https://raw.githubusercontent.com/Jkssns/picture-bed/main/copylog.png">
</p>
<br>

### 快捷键(Ctrl/Command+2) (Ctrl/Command+F2) (Ctrl/Command+F3)
<p style="font-size: 13px;">
	注释页面所有console
	<br>
	All consoles of note page
	<img src="https://jkssns.oss-cn-hangzhou.aliyuncs.com/images/js-log/2-f2-f3.gif" alt="Github上图片地址：https://raw.githubusercontent.com/Jkssns/picture-bed/main/2-f2-f3.gif">
</p>
<br>

### 快捷键(Ctrl+3)
<p style="font-size: 13px;">
	随机提示一条激励语，助力你一天的工作效率！
	<br>
	Randomly prompt a motivational message to help you work efficiently in the day!
</p>
<br>
<br>

### 快捷键(Alt/Option+1) (Alt/Option+2) (Alt/Option+3) (Alt/Option+4)
<p style="font-size: 13px;">
	Alt/Option+1 代表大写 / Representing uppercase
	<br>
	Alt/Option+2 代表下划线"_" / Representing "_"
	<br>
	Alt/Option+3 代表横线"-" / Representing "-" 
	<br>
	Alt/Option+4 固定一种组合，不用按两次 / Fix a combination without pressing twice
	<br>
	<br>
	选中变量，先按alt+1，再按alt+2，表示把大写转为下划线
	先按alt+2，再按alt+3，表示把大写转为下划线
	可以相互转换
	<br>
	Select the variable and press alt+1 first, then alt+2 to convert uppercase to underline
	Press alt+2 first, then alt+3 to convert uppercase to underline
	Can be converted to each other
	<br>
	<br>
	<img src="https://jkssns.oss-cn-hangzhou.aliyuncs.com/images/js-log/alt.gif" alt="Github上图片地址：https://raw.githubusercontent.com/Jkssns/picture-bed/main/alt.gif">
</p>
<br>
<br>


### 快捷键(Alt/Option+C) 

<p style="font-size: 13px;">
	随机一张梗图，丰富你的代码生活。
	<br>
	Randomly create an interesting image to enrich your code life.
	<br>
	Try Ctrl+Wheel to zoom. Click the img to switch.
	<br>
	<img src="https://jkssns.oss-cn-hangzhou.aliyuncs.com/images/js-log/alt%2Bc.gif" alt="Github上图片地址：https://raw.githubusercontent.com/Jkssns/picture-bed/main/alt%2Bc.gif">
</p>
<br>
<br>

## 插件/扩展设置 Extension Settings

|  Zh   | En  | 默认 Default |
|  ----  | ----  | ----  | 
| 更改变量引导符  | Change the variable guidance | `:::` |
| 更改单引号双引号  | Change the single quotation number dual quotation | `'` |
| 结尾要不要分号 | Semicolon at the end or not | `true` |
| 是否显示行数，行数显示在开始还是结束 | Whether to display the number of lines, whether to display the number of lines on the begin or end | `true/begin` |
| 启动时是否显示激励语 | Show encourage message or not on startup | `true` |
|更多请进入设置查看 |For more information, please enter Settings to view|
<br>

<img src="https://jkssns.oss-cn-hangzhou.aliyuncs.com/images/js-log/js-console-setting.png" alt="Github上图片地址：https://raw.githubusercontent.com/Jkssns/picture-bed/main/js-console-setting.png">
<br>
<br>

## 以后 Future

> 更多有趣的功能 
More interesting features





