# react-components

## Swiper  演示地址： <http://www.hekibun.com/swiper>
	
###  API

<table>
        <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
        </tr>
        <tr>
            <td>dots</td>
            <td>是否显示圆点</td>
            <td>boolean</td>
            <td>true</td>
        </tr>
        <tr>
            <td>autoplay</td>
            <td>是否自动播放</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>vertical</td>
            <td>横向|竖向滚动</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>effect</td>
            <td>切换方式 'scroll' | 'fade'</td>
            <td>string</td>
            <td>'scroll'</td>
        </tr>
        <tr>
            <td>dotsClass</td>
            <td>底部圆点类名</td>
            <td>string</td>
            <td>'swiper-dots'</td>
        </tr>
        <tr>
            <td>dotActiveClass</td>
            <td>圆点选中的类名</td>
            <td>string</td>
            <td>'slider-active'</td>
        </tr>
        <tr>
            <td>swiperClass</td>
            <td>组件的类名</td>
            <td>string</td>
            <td>'swiper-box'</td>
        </tr>
        <tr>
            <td>swiperContainClass</td>
            <td>组件container的类名</td>
            <td>string</td>
            <td>'swiper-container'</td>
        </tr>
        <tr>
            <td>sliderListClass</td>
            <td>slider列表的类名</td>
            <td>string</td>
            <td>'slider-list'</td>
        </tr>
        <tr>
            <td>sliderClass</td>
            <td>slider的类名</td>
            <td>string</td>
            <td>'slider-item'</td>
        </tr>
</table>


* 安装

```
	$ npm install react-components

	// link出去，建议用yarn link ,速度比较快

	$ npm link || yarn link

```

* 使用

```
	// 先进入项目文件根目录

	$ cd projectPath
	$ yarn link react-components

	// 在项目中引用
	
	import Swiper form 'react-components'

	render(){
		return (
			<div className="App">
        		<Swiper>
		           <div><h3>1</h3></div>
		           <div><h3>2</h3></div>
		           <div><h3>3</h3></div>
		           <div><h3>4</h3></div>
		        </Swiper>
      		</div>
      )
	}
```

