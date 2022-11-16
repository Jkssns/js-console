# JS-CONSOLE (English description translated from Baidu)
<p style="font-size: 13px;">
	功能为快速<span style="color: red;">console.log();</span>，节省频繁或打错log的时间。
	<br>
	The function is fast 'console. log', which saves the time of wrong or frequent logging.
</p>

<br>

## 功能 Features

### 快捷键(Ctrl+1)
<p style="font-size: 13px;">
	功能如gif所示，选中变量按Ctrl+1，快速打一个<span style="color: red;">console.log();</span>
	<br>
	The function is shown in gif. Select a variable and press Ctrl+1 to quickly input a <span style="color: red;">console.log();</span>
</p>
<img src="https://jkssns.oss-cn-hangzhou.aliyuncs.com/images/js-log/js-log.gif" alt="Github上也有图片，链接是https://raw.githubusercontent.com/Jkssns/picture-bed/main/js-log.gif">


### 快捷键(Ctrl+2)
<p style="font-size: 13px;">
	问题：我们在控制台查看一个对象时，常因为用了框架，对象的属性被代理。在控制台中输出时，输出的是一个引用，对象的属性值都是...，需要点开才能真正输出这个值。还有Vue3，用了Proxy做代理后，每次都需要点击对象，点击target才能查看对应的值。
	<br>
	<br>
	解决方法：可以在log这个对象的时候，对这个对象进行浅拷贝，切断引用和代理，这样控制台一眼就能看出对象的所有值。
	<br>
	<br>
	此快捷键功能和Ctrl+1相同，但输出的是<span style="color: red;">console.log(JSON.parse(JSON.string(variable)));</span>
	<br>
	<br>
	Problem: When we view an object on the console, its properties are often proxied because of the use of the framework. When outputting in the console, the output is a reference, and the object's attribute values are all... You need to click Open to actually output this value. There is also Vue3. After Proxy is used, you need to click the object each time and click target to view the corresponding value.
	<br>
	<br>
	Solution: You can make a shallow copy of the log object, cut off the reference and proxy, and the console can see all the values of the object at a glance.
	<br>
	<br>
	This shortcut function is the same as Ctrl+1, but the output is<span style="color: red;"> console.log(JSON.parse(JSON.string(variable)));</ span>
	<br>
	<img src="https://jkssns.oss-cn-hangzhou.aliyuncs.com/images/js-log/copylog.png" alt="Github上也有图片，链接是https://raw.githubusercontent.com/Jkssns/picture-bed/main/copylog.png">
</p>

### 快捷键(Ctrl+3)
<p style="font-size: 13px;">
	随机提示一条激励语，助力你一天的工作效率！
	<br>
	Randomly prompt a motivational message to help you work efficiently in the day!
</p>

<br>

## 扩展设置 Extension Settings

|  Zh   | En  | 默认 Default |
|  ----  | ----  | ----  | 
| 更改变量引导符  | Change the variable guidance | `:::` |
| 更改单引号双引号  | Change the single quotation number dual quotation | ' |
| 结尾要不要分号 | Semicolon at the end or not | 显示 <br> Show |
| 是否显示行数，行数显示在左边还是右边 | Whether to display the number of lines, whether to display the number of lines on the left or right | 显示在右边 <br> Show on the right |

<img src="https://jkssns.oss-cn-hangzhou.aliyuncs.com/images/js-log/js-log_setting.gif" alt="Github上也有图片，链接是https://raw.githubusercontent.com/Jkssns/picture-bed/main/js-log_setting.gif">

<br>

## 以后 Future

> 以后加实用性不大的颜色背景 
<br>
Add less practical color background in the future




