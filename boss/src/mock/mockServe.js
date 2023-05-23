import Mock from "mockjs"

// 引入海归组件-热门城市
import hotcity from "./json/Turtles/hotcity.json"

// 引入海归组件-热门岗位
import popularjob from "./json/Turtles/popularjob.json"

// 引入海归组件-热门公司
import hotcompany from "./json/Turtles/hotcompany.json"

// 引入资讯组件数据
import information from "./json/Information/information.json"

// 海归组件-热门城市
Mock.mock("/mock/hotcity", "get", {
	code: 200,
	message: "OK",
	data: hotcity,
});

// 海归组件-热门岗位
Mock.mock("/mock/popularjob", "get", {
	code: 200,
	message: "OK",
	data: popularjob,
})

// 海归组件-热门公司
Mock.mock("/mock/hotcompany", "get", {
	code: 200,
	message: "OK",
	data: hotcompany,
})

// 资讯组件数据
Mock.mock("/mock/information", "get", {
	code: 200,
	message: "OK",
	data: information,
})