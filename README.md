# react-components

组件包括： Swiper,Input,Button
持续更新中。。。

* 安装

```
$ git clone https://github.com/hekiheki/react-components.git
$ npm link || yarn link
```

* 引入

```
$ npm link heki
```

* css引入

```
@import '~heki/build/heki.css';
```


1.Swiper  演示地址： <http://www.hekibun.com/swiper>
	
API

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

* 使用

```
// 在项目中引用
import Swiper form 'heki'

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

